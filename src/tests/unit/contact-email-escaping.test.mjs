import { afterEach, describe, expect, it, vi } from 'vitest';

import { sendContactEmail } from '@/infrastructure/contact/sendContactEmail';

const originalEnv = { ...process.env };

afterEach(() => {
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
});

describe('sendContactEmail html escaping', () => {
    it('escapes user-supplied HTML in the generated email body', async () => {
        process.env.RESEND_API_KEY = 'test-key';
        process.env.CONTACT_FROM = 'from@example.com';
        process.env.CONTACT_TO = 'to@example.com';

        const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
        vi.stubGlobal('fetch', fetchMock);
        vi.spyOn(console, 'info').mockImplementation(() => undefined);

        const result = await sendContactEmail({
            firstName: '<script>alert(1)</script>',
            lastName: 'Martin & Co',
            email: 'alice+<x>@example.com',
            projectType: '<b>site</b>',
            budget: '5k "safe"',
            timeline: "2 mois 'soon'",
            website: 'https://example.com?a=1&b=2',
            message: 'Bonjour\n<script>alert("xss")</script>',
            turnstileToken: 'token',
            company: '',
        });

        expect(result).toEqual({ ok: true });
        expect(fetchMock).toHaveBeenCalledTimes(1);

        const [, init] = fetchMock.mock.calls[0];
        const payload = JSON.parse(init.body);

        expect(payload.html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
        expect(payload.html).toContain('Martin &amp; Co');
        expect(payload.html).toContain('alice+&lt;x&gt;@example.com');
        expect(payload.html).toContain('&lt;b&gt;site&lt;/b&gt;');
        expect(payload.html).toContain('5k &quot;safe&quot;');
        expect(payload.html).toContain('2 mois &#39;soon&#39;');
        expect(payload.html).toContain('https://example.com?a=1&amp;b=2');
        expect(payload.html).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
        expect(payload.html).toContain('Bonjour<br />');
        expect(payload.html).not.toContain('<script>alert("xss")</script>');
    });
});
