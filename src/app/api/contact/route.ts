import { NextResponse } from 'next/server';

import { contactFormSchema } from '@/domain/contact/form';
import { sendContactEmail } from '@/infrastructure/contact/sendContactEmail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: 'Données invalides.',
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    if (parsed.data.company) {
      return NextResponse.json({ message: 'OK' }, { status: 200 });
    }

    const sendResult = await sendContactEmail(parsed.data);

    if (!sendResult.ok && sendResult.reason === 'missing_config') {
      return NextResponse.json(
        {
          message:
            "Le service de contact n'est pas encore configuré. Veuillez réessayer plus tard ou écrire directement par email.",
        },
        { status: 503 },
      );
    }

    if (!sendResult.ok) {
      return NextResponse.json({ message: "L'envoi du message a échoué." }, { status: 502 });
    }

    return NextResponse.json({ message: 'Message reçu.' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Impossible de traiter la demande.' }, { status: 500 });
  }
}
