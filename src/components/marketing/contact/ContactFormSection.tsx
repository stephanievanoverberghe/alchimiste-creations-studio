'use client';

import { useState, type ReactNode } from 'react';
import { CheckCircle2, Clock3, SendHorizonal, ShieldCheck } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import {
  Button,
  Container,
  FormGroup,
  Heading,
  Input,
  Label,
  Section,
  Select,
  Textarea,
} from '@/components/ui';
import { contactFormSchema, type ContactFormValues } from '@/domain/contact/form';
import type { ContactPageContent } from '@/domain/contact/page';
import { cn } from '@/lib/utils/cn';

type ContactFormSectionProps = {
  content: ContactPageContent['form'];
};

type SubmitState = 'idle' | 'success' | 'error';

export function ContactFormSection({ content }: ContactFormSectionProps) {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      projectType: '',
      budget: '',
      timeline: '',
      website: '',
      message: '',
      company: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState('idle');

    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormValues;
        setError(field, { message: issue.message });
      });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitState('success');
      reset();
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <Section id="contact-form" className="relative overflow-hidden py-20 sm:py-24 lg:py-30">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            align="center"
          />
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <aside className="relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.78),rgba(9,14,28,0.92))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-8 top-0 h-28 w-28 rounded-full bg-white/4 blur-3xl"
            />

            <span className="inline-flex rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/55">
              Premier échange
            </span>

            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Un cadre simple, clair et sérieux.
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              Quelques informations bien choisies suffisent pour préparer un échange utile. Le but
              n’est pas de vous faire remplir un long dossier, mais de comprendre le projet avec
              justesse.
            </p>

            <div className="mt-8 space-y-3">
              <InfoPill
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Demande qualifiée"
                text="Le formulaire aide à cadrer le besoin, le budget et le niveau de maturité du projet."
              />
              <InfoPill
                icon={<Clock3 className="h-4 w-4" />}
                title="Réponse rapide"
                text="Je reviens généralement vers vous sous 24 à 48h ouvrées avec une première lecture claire."
              />
              <InfoPill
                icon={<SendHorizonal className="h-4 w-4" />}
                title="Échange sans friction"
                text="Vous pouvez rester simple. L’important est surtout d’expliquer votre contexte et votre objectif."
              />
            </div>

            <div className="mt-8 rounded-[1.4rem] border border-white/10 bg-white/[0.035] p-4">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground/45">
                Bon à savoir
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Plus votre message est précis sur votre activité, votre besoin actuel et ce que vous
                cherchez à améliorer, plus ma réponse pourra être utile dès le premier retour.
              </p>
            </div>
          </aside>

          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.82),rgba(9,14,28,0.96))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]"
            />

            <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)} noValidate>
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
                {...register('company')}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label={content.fields.firstNameLabel} error={errors.firstName?.message}>
                  <Input
                    placeholder={content.placeholders.firstName}
                    className="border-white/10 bg-white/4 text-foreground placeholder:text-foreground/35 focus-visible:border-primary/40"
                    {...register('firstName')}
                  />
                </FormField>

                <FormField label={content.fields.lastNameLabel} error={errors.lastName?.message}>
                  <Input
                    placeholder={content.placeholders.lastName}
                    className="border-white/10 bg-white/4 text-foreground placeholder:text-foreground/35 focus-visible:border-primary/40"
                    {...register('lastName')}
                  />
                </FormField>
              </div>

              <FormField label={content.fields.emailLabel} error={errors.email?.message}>
                <Input
                  type="email"
                  placeholder={content.placeholders.email}
                  className="border-white/10 bg-white/4 text-foreground placeholder:text-foreground/35 focus-visible:border-primary/40"
                  {...register('email')}
                />
              </FormField>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label={content.fields.projectTypeLabel}
                  error={errors.projectType?.message}
                >
                  <Controller
                    control={control}
                    name="projectType"
                    render={({ field }) => (
                      <Select
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={content.options.projectTypes}
                        placeholder={content.emptyOptionLabel}
                      />
                    )}
                  />
                </FormField>

                <FormField label={content.fields.budgetLabel} error={errors.budget?.message}>
                  <Controller
                    control={control}
                    name="budget"
                    render={({ field }) => (
                      <Select
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={content.options.budgets}
                        placeholder={content.emptyOptionLabel}
                      />
                    )}
                  />
                </FormField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label={content.fields.timelineLabel} error={errors.timeline?.message}>
                  <Controller
                    control={control}
                    name="timeline"
                    render={({ field }) => (
                      <Select
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={content.options.timelines}
                        placeholder={content.emptyOptionLabel}
                      />
                    )}
                  />
                </FormField>

                <FormField label={content.fields.websiteLabel} error={errors.website?.message}>
                  <Input
                    placeholder={content.placeholders.website}
                    className="border-white/10 bg-white/4 text-foreground placeholder:text-foreground/35 focus-visible:border-primary/40"
                    {...register('website')}
                  />
                </FormField>
              </div>

              <FormField label={content.fields.messageLabel} error={errors.message?.message}>
                <Textarea
                  rows={8}
                  placeholder={content.placeholders.message}
                  className="min-h-44 border-white/10 bg-white/4 text-foreground placeholder:text-foreground/35 focus-visible:border-primary/40"
                  {...register('message')}
                />
              </FormField>

              <div className="flex flex-col gap-4 border-t border-white/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                  {content.helper}
                </p>

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  className="min-w-56 rounded-2xl px-6 text-[0.95rem] font-semibold tracking-wide shadow-[0_18px_40px_rgba(124,92,255,0.22)]"
                >
                  {isSubmitting ? 'Envoi en cours...' : content.submitLabel}
                </Button>
              </div>

              {submitState === 'success' ? (
                <StatusMessage variant="success" message={content.successMessage} />
              ) : null}

              {submitState === 'error' ? (
                <StatusMessage variant="error" message={content.errorMessage} />
              ) : null}
            </form>
          </div>
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
    <FormGroup className="space-y-2.5">
      <Label className="text-[0.8rem] font-medium uppercase tracking-[0.14em] text-foreground/60">
        {label}
      </Label>
      {children}
      {error ? <p className="text-sm text-red-300">{error}</p> : null}
    </FormGroup>
  );
}

type InfoPillProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

function InfoPill({ icon, title, text }: InfoPillProps) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-foreground/80">
          {icon}
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-1.5 text-sm leading-7 text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}

type StatusMessageProps = {
  variant: 'success' | 'error';
  message: string;
};

function StatusMessage({ variant, message }: StatusMessageProps) {
  const isSuccess = variant === 'success';

  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-[1.2rem] border px-4 py-3.5 text-sm',
        isSuccess
          ? 'border-primary/20 bg-primary/10 text-foreground'
          : 'border-red-400/20 bg-red-400/10 text-red-100',
      )}
    >
      {isSuccess ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : null}
      <p className="leading-7">{message}</p>
    </div>
  );
}
