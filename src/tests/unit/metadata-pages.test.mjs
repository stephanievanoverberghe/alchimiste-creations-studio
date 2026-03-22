import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

function read(path) {
    return readFileSync(path, 'utf-8');
}

const MARKETING_PAGE_FILES = [
    'src/app/(marketing)/page.tsx',
    'src/app/(marketing)/services/page.tsx',
    'src/app/(marketing)/contact/page.tsx',
    'src/app/(marketing)/portfolio/page.tsx',
    'src/app/(marketing)/a-propos/page.tsx',
    'src/app/(marketing)/mentions-legales/page.tsx',
    'src/app/(marketing)/politique-confidentialite/page.tsx',
    'src/app/(marketing)/portfolio/[slug]/page.tsx',
];

describe('marketing pages metadata contract', () => {
    it('ensures each page exports metadata or generateMetadata', () => {
        for (const file of MARKETING_PAGE_FILES) {
            const source = read(file);

            expect(source, `missing metadata export in ${file}`).toMatch(
                /export\s+(const\s+metadata|async\s+function\s+generateMetadata)/,
            );
        }
    });
});
