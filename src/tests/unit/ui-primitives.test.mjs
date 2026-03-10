import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

function read(path) {
    return readFileSync(path, 'utf-8');
}

describe('ui primitives smoke checks', () => {
    it('container forwards native props', () => {
        const source = read('src/components/ui/Container.tsx');
        expect(source).toMatch(/\.\.\.props/);
        expect(source).toMatch(/ComponentPropsWithoutRef/);
    });

    it('section forwards native props', () => {
        const source = read('src/components/ui/Section.tsx');
        expect(source).toMatch(/\.\.\.props/);
        expect(source).toMatch(/ComponentPropsWithoutRef/);
    });

    it('heading keeps centered alignment support', () => {
        const source = read('src/components/ui/Heading.tsx');
        expect(source).toMatch(/centered/);
        expect(source).toMatch(/mx-auto/);
    });
});
