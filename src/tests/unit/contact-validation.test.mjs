import { describe, expect, it } from 'vitest';

import { contactFormSchema } from '@/domain/contact/form';

const validPayload = {
    firstName: 'Alice',
    lastName: 'Martin',
    email: 'alice@example.com',
    projectType: 'site-vitrine',
    budget: '5k-10k',
    timeline: '2-mois',
    website: 'https://example.com',
    message: 'Bonjour, je souhaite une refonte complète de mon site internet.',
    turnstileToken: 'token-ok',
    company: '',
};

describe('contactFormSchema strict validation', () => {
    it('accepts a fully valid payload', () => {
        const result = contactFormSchema.safeParse(validPayload);

        expect(result.success).toBe(true);
    });

    it('rejects unknown fields to enforce a strict contract', () => {
        const result = contactFormSchema.safeParse({
            ...validPayload,
            role: 'admin',
        });

        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.issues.some((issue) => issue.code === 'unrecognized_keys')).toBe(true);
        }
    });

    it('rejects an invalid website URL when provided', () => {
        const result = contactFormSchema.safeParse({
            ...validPayload,
            website: 'not a url',
        });

        expect(result.success).toBe(false);
    });
});
