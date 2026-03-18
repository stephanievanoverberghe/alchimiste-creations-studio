import type { ContactFormValues } from '@/domain/contact/form';

type ContactEmailConfig = {
  apiKey: string;
  from: string;
  to: string;
};

function getConfig(): ContactEmailConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

function buildHtml(values: ContactFormValues) {
  return `
    <h2>Nouvelle demande — Alchimiste Créations</h2>
    <p><strong>Prénom :</strong> ${values.firstName}</p>
    <p><strong>Nom :</strong> ${values.lastName}</p>
    <p><strong>Email :</strong> ${values.email}</p>
    <p><strong>Type de projet :</strong> ${values.projectType}</p>
    <p><strong>Budget :</strong> ${values.budget}</p>
    <p><strong>Délai :</strong> ${values.timeline}</p>
    <p><strong>Site existant :</strong> ${values.website || 'Non renseigné'}</p>
    <hr />
    <p><strong>Message :</strong></p>
    <p>${values.message.replace(/\n/g, '<br />')}</p>
  `;
}

export async function sendContactEmail(values: ContactFormValues) {
  const config = getConfig();

  if (!config) {
    return { ok: false as const, reason: 'missing_config' as const };
  }

  const response = await fetch('https://api.resend.com/emails', {
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
  });

  if (!response.ok) {
    return { ok: false as const, reason: 'provider_error' as const };
  }

  return { ok: true as const };
}
