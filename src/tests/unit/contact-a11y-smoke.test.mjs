import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

function read(path) {
    return readFileSync(path, 'utf-8');
}

describe('contact accessibility smoke checks', () => {
    it('contact form section includes label and hint wiring', () => {
        const source = read('src/components/marketing/contact/ContactFormSection.tsx');

        expect(source).toMatch(/htmlFor={fieldId}/);
        expect(source).toMatch(/aria-describedby=/);
        expect(source).toMatch(/aria-invalid=/);
    });

    it('contact page keeps semantic sectioning', () => {
        const source = read('src/app/(marketing)/contact/page.tsx');

        expect(source).toMatch(/<ContactHero/);
        expect(source).toMatch(/<ContactFormSection/);
        expect(source).toMatch(/<ContactProcess/);
    });
});
