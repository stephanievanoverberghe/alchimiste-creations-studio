import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const REQUIRED_PATHS = [
    'src/app',
    'src/components/ui',
    'src/components/layout',
    'src/components/marketing',
    'src/content',
    'src/domain',
    'src/application',
    'src/infrastructure',
    'src/lib',
    'src/styles',
    'src/tests',
    'src/types',
];

describe('architecture', () => {
    it('keeps required folders', () => {
        for (const path of REQUIRED_PATHS) {
            expect(existsSync(path), `Missing required path: ${path}`).toBe(true);
        }
    });

    it('keeps the product spec source-of-truth document', () => {
        expect(existsSync('docs/alchimiste-creations-product-spec.md')).toBe(true);
    });
});
