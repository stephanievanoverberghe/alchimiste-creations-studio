'use client';

import { type ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Badge,
  Button,
  Container,
  FormGroup,
  Input,
  Label,
  Section,
  Textarea,
} from '@/components/ui';
import type { ContactPageContent } from '@/domain/contact/page';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Veuillez renseigner votre nom.'),
  email: z.string().email('Veuillez saisir une adresse email valide.'),
  company: z.string().min(2, 'Veuillez préciser votre activité.'),
  service: z.string().min(2, 'Veuillez préciser le type de projet.'),
  budget: z.string().min(2, 'Veuillez préciser une fourchette budgétaire.'),
  message: z.string().min(20, 'Votre message doit contenir au moins 20 caractères.'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

type ContactFormSectionProps = {
  form: ContactPageContent['form'];
  sidebar: ContactPageContent['sidebar'];
};

export function ContactFormSection({ form, sidebar }: ContactFormSectionProps) {
  const [submitState, setSubmitState] = useState<'idle' | 'success'>('idle');

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        setError(field, { message: issue.message });
      });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
    setSubmitState('success');
    reset();
  };

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

            <form className="mt-8 grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label={form.fields.nameLabel} error={errors.name?.message}>
                  <Input placeholder={form.placeholders.name} {...register('name')} />
                </FormField>
                <FormField label={form.fields.emailLabel} error={errors.email?.message}>
                  <Input
                    type="email"
                    placeholder={form.placeholders.email}
                    {...register('email')}
                  />
                </FormField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label={form.fields.companyLabel} error={errors.company?.message}>
                  <Input placeholder={form.placeholders.company} {...register('company')} />
                </FormField>
                <FormField label={form.fields.serviceLabel} error={errors.service?.message}>
                  <Input placeholder={form.placeholders.service} {...register('service')} />
                </FormField>
              </div>

              <FormField label={form.fields.budgetLabel} error={errors.budget?.message}>
                <Input placeholder={form.placeholders.budget} {...register('budget')} />
              </FormField>

              <FormField label={form.fields.messageLabel} error={errors.message?.message}>
                <Textarea
                  rows={7}
                  placeholder={form.placeholders.message}
                  {...register('message')}
                />
              </FormField>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-7 text-muted-foreground">{form.helper}</p>
                <Button size="md" className="min-w-50" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi...' : form.submitLabel}
                </Button>
              </div>
              {submitState === 'success' ? (
                <p className="text-sm font-medium text-primary">
                  Votre demande a bien été préparée. Je reviens vers vous rapidement.
                </p>
              ) : null}
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

type FormFieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

function FormField({ label, error, children }: FormFieldProps) {
  return (
    <FormGroup>
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-xs text-red-300">{error}</p> : null}
    </FormGroup>
  );
}
