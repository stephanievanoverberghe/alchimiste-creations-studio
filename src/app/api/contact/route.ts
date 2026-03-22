import { NextResponse } from 'next/server';

import { contactFormSchema } from '@/domain/contact/form';
import { sendContactEmail } from '@/infrastructure/contact/sendContactEmail';
import { verifyTurnstileToken } from '@/infrastructure/contact/verifyTurnstileToken';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitState = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitState>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() ?? 'unknown';
  }

  return (
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-real-ip') ??
    request.headers.get('x-client-ip') ??
    'unknown'
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt < now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { limited: false as const, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      limited: true as const,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  rateLimitStore.set(ip, current);

  return { limited: false as const, retryAfter: 0 };
}

function errorResponse(status: number) {
  return NextResponse.json({ message: 'Impossible de traiter la demande.' }, { status });
}

export function __resetRateLimitStoreForTests() {
  rateLimitStore.clear();
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const rateLimit = isRateLimited(clientIp);

  if (rateLimit.limited) {
    return NextResponse.json(
      { message: 'Impossible de traiter la demande.' },
      {
        status: 429,
        headers: { 'Retry-After': String(rateLimit.retryAfter) },
      },
    );
  }

  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse(400);
    }

    if (parsed.data.company) {
      return NextResponse.json({ message: 'OK' }, { status: 200 });
    }

    const challenge = await verifyTurnstileToken(parsed.data.turnstileToken, clientIp);

    if (!challenge.ok && challenge.reason === 'missing_secret') {
      return errorResponse(503);
    }

    if (!challenge.ok) {
      return errorResponse(400);
    }

    const sendResult = await sendContactEmail(parsed.data);

    if (!sendResult.ok && sendResult.reason === 'missing_config') {
      return errorResponse(503);
    }

    if (!sendResult.ok) {
      return errorResponse(502);
    }

    return NextResponse.json({ message: 'Message reçu.' }, { status: 200 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return errorResponse(400);
    }

    return errorResponse(500);
  }
}
