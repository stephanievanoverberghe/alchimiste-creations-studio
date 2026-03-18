import { NextResponse } from 'next/server';

import { contactFormSchema } from '@/domain/contact/form';

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

    // TODO:
    // brancher Resend / Nodemailer / autre provider ici

    return NextResponse.json({ message: 'Message reçu.' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Impossible de traiter la demande.' }, { status: 500 });
  }
}
