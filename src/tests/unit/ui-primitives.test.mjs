import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

function read(path) {
    return readFileSync(path, 'utf-8');
}

test('container forwards native props', () => {
    const source = read('src/components/ui/Container.tsx');
    assert.match(source, /\.\.\.props/);
    assert.match(source, /ComponentPropsWithoutRef/);
});

test('section forwards native props', () => {
    const source = read('src/components/ui/Section.tsx');
    assert.match(source, /\.\.\.props/);
    assert.match(source, /ComponentPropsWithoutRef/);
});

test('heading keeps centered alignment support', () => {
    const source = read('src/components/ui/Heading.tsx');
    assert.match(source, /centered/);
    assert.match(source, /mx-auto/);
});
