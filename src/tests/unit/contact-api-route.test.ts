import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  verifyTurnstileToken: vi.fn(),
  sendContactEmail: vi.fn(),
}));

vi.mock('@/infrastructure/contact/verifyTurnstileToken', () => ({
  verifyTurnstileToken: mocks.verifyTurnstileToken,
}));

vi.mock('@/infrastructure/contact/sendContactEmail', () => ({
  sendContactEmail: mocks.sendContactEmail,
}));

import { __resetRateLimitStoreForTests, POST } from '@/app/api/contact/route';

const validPayload = {
  firstName: 'Alice',
  lastName: 'Martin',
  email: 'alice@example.com',
  projectType: 'site-vitrine',
  budget: '5k-10k',
  timeline: '2-mois',
  website: 'https://example.com',
  message: 'Bonjour, je souhaite une refonte complète de mon site internet.',
  turnstileToken: 'token-ok',
  company: '',
};

function createRequest(body: unknown, ip = '203.0.113.10') {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-forwarded-for': ip,
    },
    body: JSON.stringify(body),
  });
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    __resetRateLimitStoreForTests();
    mocks.verifyTurnstileToken.mockReset();
    mocks.sendContactEmail.mockReset();
  });

  it('returns 400 when request body is malformed JSON', async () => {
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': '203.0.113.10',
      },
      body: '{"firstName":',
    });

    const response = await POST(request);

    expect(response.status).toBe(400);
  });

  it('returns 400 when payload is invalid', async () => {
    const response = await POST(createRequest({ ...validPayload, email: 'not-an-email' }));

    expect(response.status).toBe(400);
    expect(mocks.verifyTurnstileToken).not.toHaveBeenCalled();
    expect(mocks.sendContactEmail).not.toHaveBeenCalled();
  });

  it('returns 200 for honeypot submissions and skips providers', async () => {
    const response = await POST(createRequest({ ...validPayload, company: 'spam corp' }));

    expect(response.status).toBe(200);
    expect(mocks.verifyTurnstileToken).not.toHaveBeenCalled();
    expect(mocks.sendContactEmail).not.toHaveBeenCalled();
  });

  it('returns 503 when turnstile secret is missing', async () => {
    mocks.verifyTurnstileToken.mockResolvedValue({ ok: false, reason: 'missing_secret' });

    const response = await POST(createRequest(validPayload));

    expect(response.status).toBe(503);
    expect(mocks.sendContactEmail).not.toHaveBeenCalled();
  });

  it('returns 502 when email provider fails', async () => {
    mocks.verifyTurnstileToken.mockResolvedValue({ ok: true });
    mocks.sendContactEmail.mockResolvedValue({ ok: false, reason: 'provider_error' });

    const response = await POST(createRequest(validPayload));

    expect(response.status).toBe(502);
  });

  it('returns 200 on valid request', async () => {
    mocks.verifyTurnstileToken.mockResolvedValue({ ok: true });
    mocks.sendContactEmail.mockResolvedValue({ ok: true });

    const response = await POST(createRequest(validPayload));

    expect(response.status).toBe(200);
    expect(mocks.verifyTurnstileToken).toHaveBeenCalledWith('token-ok', '203.0.113.10');
    expect(mocks.sendContactEmail).toHaveBeenCalledTimes(1);
  });

  it('returns 429 after too many requests from same ip', async () => {
    mocks.verifyTurnstileToken.mockResolvedValue({ ok: true });
    mocks.sendContactEmail.mockResolvedValue({ ok: true });

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const response = await POST(createRequest(validPayload));
      expect(response.status).toBe(200);
    }

    const blockedResponse = await POST(createRequest(validPayload));

    expect(blockedResponse.status).toBe(429);
    expect(blockedResponse.headers.get('Retry-After')).toMatch(/^\d+$/);
  });
});
