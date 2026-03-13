import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

function read(path) {
    return readFileSync(path, 'utf-8');
}

describe('app boundaries', () => {
    it('marketing pages do not import content directly', () => {
        const servicesPage = read('src/app/(marketing)/services/page.tsx');
        const portfolioPage = read('src/app/(marketing)/portfolio/page.tsx');

        expect(servicesPage).not.toMatch(/@\/content\//);
        expect(portfolioPage).not.toMatch(/@\/content\//);
    });

    it('about barrel exports contain clean paths', () => {
        const source = read('src/components/marketing/about/index.tsx');
        expect(source).not.toMatch(/\.\/\//);
    });
});
