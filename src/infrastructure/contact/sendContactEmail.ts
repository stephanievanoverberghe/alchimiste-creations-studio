import type { ContactFormValues } from '@/domain/contact/form';

type ContactEmailConfig = {
  apiKey: string;
  from: string;
  to: string;
};

const PROVIDER_URL = 'https://api.resend.com/emails';
const PROVIDER_TIMEOUT_MS = 8_000;
const PROVIDER_MAX_ATTEMPTS = 2;

function getConfig(): ContactEmailConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO;

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

function buildHtml(values: ContactFormValues) {
  const safeFirstName = escapeHtml(values.firstName);
  const safeLastName = escapeHtml(values.lastName);
  const safeEmail = escapeHtml(values.email);
  const safeProjectType = escapeHtml(values.projectType);
  const safeBudget = escapeHtml(values.budget);
  const safeTimeline = escapeHtml(values.timeline);
  const safeWebsite = values.website ? escapeHtml(values.website) : 'Non renseigné';
  const safeMessage = escapeHtml(values.message).replace(/\n/g, '<br />');

  return `
    <h2>Nouvelle demande — Alchimiste Créations</h2>
    <p><strong>Prénom :</strong> ${safeFirstName}</p>
    <p><strong>Nom :</strong> ${safeLastName}</p>
    <p><strong>Email :</strong> ${safeEmail}</p>
    <p><strong>Type de projet :</strong> ${safeProjectType}</p>
    <p><strong>Budget :</strong> ${safeBudget}</p>
    <p><strong>Délai :</strong> ${safeTimeline}</p>
    <p><strong>Site existant :</strong> ${safeWebsite}</p>
    <hr />
    <p><strong>Message :</strong></p>
    <p>${safeMessage}</p>
  `;
}

export async function sendContactEmail(values: ContactFormValues) {
  const config = getConfig();

  if (!config) {
    return { ok: false as const, reason: 'missing_config' as const };
  }

  let lastError: unknown = null;

  for (let attempt = 1; attempt <= PROVIDER_MAX_ATTEMPTS; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), PROVIDER_TIMEOUT_MS);

    try {
      const response = await fetch(PROVIDER_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: config.from,
          to: [config.to],
          reply_to: values.email,
          subject: `Nouveau projet (${values.projectType}) — ${values.firstName} ${values.lastName}`,
          html: buildHtml(values),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        console.info('[contact-email] sent', { attempt });
        return { ok: true as const };
      }

      const shouldRetry = response.status >= 500 && attempt < PROVIDER_MAX_ATTEMPTS;
      console.warn('[contact-email] provider-error', {
        attempt,
        status: response.status,
        willRetry: shouldRetry,
      });

      if (!shouldRetry) {
        return { ok: false as const, reason: 'provider_error' as const };
      }
    } catch (error) {
      clearTimeout(timeoutId);
      lastError = error;
      const shouldRetry = attempt < PROVIDER_MAX_ATTEMPTS;

      console.warn('[contact-email] request-failed', {
        attempt,
        timedOut: error instanceof DOMException && error.name === 'AbortError',
        willRetry: shouldRetry,
      });

      if (!shouldRetry) {
        return { ok: false as const, reason: 'provider_error' as const };
      }
    }
  }

  console.error('[contact-email] failed-after-retries', {
    attempts: PROVIDER_MAX_ATTEMPTS,
    hasError: Boolean(lastError),
  });

  return { ok: false as const, reason: 'provider_error' as const };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
