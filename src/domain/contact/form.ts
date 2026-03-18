import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(2, 'Veuillez renseigner votre prénom.'),
  lastName: z.string().trim().min(2, 'Veuillez renseigner votre nom.'),
  email: z.string().trim().email('Veuillez saisir une adresse email valide.'),
  projectType: z.string().trim().min(1, 'Veuillez sélectionner un type de projet.'),
  budget: z.string().trim().min(1, 'Veuillez sélectionner un budget.'),
  timeline: z.string().trim().min(1, 'Veuillez sélectionner un délai.'),
  website: z
    .string()
    .trim()
    .optional()
    .or(z.literal(''))
    .refine((value) => {
      if (!value) return true;

      try {
        new URL(value.startsWith('http') ? value : `https://${value}`);
        return true;
      } catch {
        return false;
      }
    }, 'Veuillez saisir une URL valide.'),
  message: z.string().trim().min(30, 'Votre message doit contenir au moins 30 caractères.'),
  company: z.string().max(0).optional(), // honeypot
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
