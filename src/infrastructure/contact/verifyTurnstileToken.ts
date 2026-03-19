type TurnstileVerificationResult = {
  ok: boolean;
  reason?: 'missing_secret' | 'provider_error' | 'invalid_token';
};

export async function verifyTurnstileToken(
  token: string,
  ip?: string,
): Promise<TurnstileVerificationResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return { ok: false, reason: 'missing_secret' };
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: ip ?? '',
      }),
    });

    if (!response.ok) {
      return { ok: false, reason: 'provider_error' };
    }

    const data = (await response.json()) as { success?: boolean };

    if (!data.success) {
      return { ok: false, reason: 'invalid_token' };
    }

    return { ok: true };
  } catch {
    return { ok: false, reason: 'provider_error' };
  }
}
