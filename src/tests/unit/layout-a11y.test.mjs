import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

function read(path) {
    return readFileSync(path, 'utf-8');
}

describe('layout accessibility smoke checks', () => {
    it('marketing layout exposes a skip link and main landmark', () => {
        const source = read('src/app/(marketing)/layout.tsx');
        expect(source).toMatch(/href="#main-content"/);
        expect(source).toMatch(/<main id="main-content"/);
    });

    it('header exposes a main navigation aria label', () => {
        const source = read('src/components/layout/Header.tsx');
        expect(source).toMatch(/aria-label="Navigation principale"/);
    });

    it('mobile nav exposes an aria label', () => {
        const source = read('src/components/layout/MobileBottomNav.tsx');
        expect(source).toMatch(/aria-label="Navigation mobile"/);
    });

    it('footer exposes legal and footer navigation labels', () => {
        const source = read('src/components/layout/Footer.tsx');
        expect(source).toMatch(/aria-label="Navigation pied de page"/);
        expect(source).toMatch(/aria-label="Pages légales"/);
    });
});
