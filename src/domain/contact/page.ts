import type { Service } from '@/domain/services/types';

export type ContactProjectType = Service['slug'] | 'autre';

export type ContactBudgetRange =
  | 'less-than-1000'
  | '1000-2000'
  | '2000-4000'
  | '4000-plus'
  | 'undecided';

export type ContactTimeline =
  | 'asap'
  | 'less-than-1-month'
  | '1-to-2-months'
  | '2-to-3-months'
  | 'flexible';

export type ContactProcessStepId = 'message' | 'review' | 'call' | 'next-step';

export type ContactPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
  };
  guidelines: {
    eyebrow: string;
    title: string;
    description: string;
    cards: {
      id: 'projects' | 'budget' | 'readiness' | 'fit';
      title: string;
      description: string;
      points: string[];
    }[];
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    helper: string;
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
    fields: {
      firstNameLabel: string;
      lastNameLabel: string;
      emailLabel: string;
      projectTypeLabel: string;
      budgetLabel: string;
      timelineLabel: string;
      websiteLabel: string;
      messageLabel: string;
    };
    placeholders: {
      firstName: string;
      lastName: string;
      email: string;
      website: string;
      message: string;
    };
    options: {
      projectTypes: {
        value: ContactProjectType;
        label: string;
      }[];
      budgets: {
        value: ContactBudgetRange;
        label: string;
      }[];
      timelines: {
        value: ContactTimeline;
        label: string;
      }[];
    };
    emptyOptionLabel: string;
  };
  alternativeContact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    email: string;
    responseTimeLabel: string;
    responseTime: string;
    availabilityLabel: string;
    availability: string;
    note: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      id: ContactProcessStepId;
      title: string;
      description: string;
    }[];
  };
};
