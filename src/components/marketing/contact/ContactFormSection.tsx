'use client';

import { Badge, Container, Section } from '@/components/ui';
import type { ContactPageContent } from '@/domain/contact/page';

type ContactFormSectionProps = {
  form: ContactPageContent['form'];
  sidebar: ContactPageContent['sidebar'];
};

export function ContactFormSection({ form, sidebar }: ContactFormSectionProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-8">
          <div className="rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.90))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {form.title}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {form.description}
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label={form.fields.nameLabel}
                  type="text"
                  placeholder={form.placeholders.name}
                />
                <Field
                  label={form.fields.emailLabel}
                  type="email"
                  placeholder={form.placeholders.email}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label={form.fields.companyLabel}
                  type="text"
                  placeholder={form.placeholders.company}
                />
                <Field
                  label={form.fields.serviceLabel}
                  type="text"
                  placeholder={form.placeholders.service}
                />
              </div>

              <Field
                label={form.fields.budgetLabel}
                type="text"
                placeholder={form.placeholders.budget}
              />

              <TextareaField
                label={form.fields.messageLabel}
                placeholder={form.placeholders.message}
              />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-7 text-muted-foreground">{form.helper}</p>

                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_12px_28px_rgba(124,92,255,0.30)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110"
                >
                  {form.submitLabel}
                </button>
              </div>
            </form>
          </div>

          <aside className="rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.74),rgba(9,14,28,0.86))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-8">
            <Badge variant="default">{sidebar.eyebrow}</Badge>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {sidebar.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {sidebar.description}
            </p>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
              {sidebar.points.map((point) => (
                <li key={point} className="rounded-2xl border border-white/8 bg-white/3 px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

type FieldProps = {
  label: string;
  type: string;
  placeholder: string;
};

function Field({ label, type, placeholder }: FieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="min-h-12 rounded-xl border border-white/10 bg-white/4 px-4 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/30"
      />
    </label>
  );
}

type TextareaFieldProps = {
  label: string;
  placeholder: string;
};

function TextareaField({ label, placeholder }: TextareaFieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <textarea
        rows={7}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/30"
      />
    </label>
  );
}
