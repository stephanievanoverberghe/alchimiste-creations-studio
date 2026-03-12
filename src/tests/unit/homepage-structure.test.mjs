import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

function read(path) {
    return readFileSync(path, 'utf-8');
}

describe('homepage structure', () => {
    it('contains a dedicated problem section and social proof in the sequence', () => {
        const source = read('src/app/(marketing)/page.tsx');

        expect(source).toMatch(/<Problem\s*\/>/);
        expect(source).toMatch(/<SocialProof\s*\/>/);

        const heroIndex = source.indexOf('<Hero />');
        const problemIndex = source.indexOf('<Problem />');
        const valueIndex = source.indexOf('<ValueProposition />');

        expect(heroIndex).toBeGreaterThan(-1);
        expect(problemIndex).toBeGreaterThan(heroIndex);
        expect(valueIndex).toBeGreaterThan(problemIndex);
    });
});
