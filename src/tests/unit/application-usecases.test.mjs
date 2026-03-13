import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

function read(path) {
    return readFileSync(path, 'utf-8');
}

describe('application use-cases contracts', () => {
    it('services use-cases expose list + typed slug lookup', () => {
        const source = read('src/application/services/getServices.ts');

        expect(source).toMatch(/export function getServices\(/);
        expect(source).toMatch(/export function getServiceBySlug\(slug: ServiceSlug\)/);
    });

    it('portfolio use-cases are centralized in getPortfolioData', () => {
        const source = read('src/application/portfolio/getPortfolioData.ts');

        expect(source).toMatch(/export function getPortfolioProjects\(/);
        expect(source).toMatch(/export function getPortfolioProjectBySlug\(slug: PortfolioProjectSlug\)/);
        expect(source).toMatch(/export function getNextPortfolioProject\(slug: PortfolioProjectSlug\)/);
    });
});
