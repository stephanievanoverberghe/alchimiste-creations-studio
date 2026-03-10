import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

function read(path) {
    return readFileSync(path, 'utf-8');
}

test('header exposes a main navigation aria label', () => {
    const source = read('src/components/layout/Header.tsx');
    assert.match(source, /aria-label="Navigation principale"/);
});

test('mobile nav exposes an aria label', () => {
    const source = read('src/components/layout/MobileBottomNav.tsx');
    assert.match(source, /aria-label="Navigation mobile"/);
});

test('footer exposes legal and footer navigation labels', () => {
    const source = read('src/components/layout/Footer.tsx');
    assert.match(source, /aria-label="Navigation pied de page"/);
    assert.match(source, /aria-label="Pages légales"/);
});
