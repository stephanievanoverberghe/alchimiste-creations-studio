import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';

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

test('architecture folders exist', () => {
    for (const path of REQUIRED_PATHS) {
        assert.equal(existsSync(path), true, `Missing required path: ${path}`);
    }
});

test('source-of-truth product spec exists', () => {
    assert.equal(existsSync('docs/alchimiste-creations-product-spec.md'), true);
});
