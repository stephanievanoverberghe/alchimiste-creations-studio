import { spawn } from 'node:child_process';

const baseUrl = 'http://127.0.0.1:4010';

const checks = [
    {
        path: '/',
        expect: ['Accueil', 'Réserver un appel découverte'],
    },
    {
        path: '/services',
        expect: ['Services', 'Réserver un appel découverte'],
    },
    {
        path: '/portfolio',
        expect: ['Portfolio', 'Réserver un appel découverte'],
    },
    {
        path: '/a-propos',
        expect: ['À propos', 'Réserver un appel découverte'],
    },
    {
        path: '/contact',
        expect: ['Décrivez votre projet', 'Envoyer', 'Prénom', 'Nom', 'Email'],
    },
];

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(timeoutMs = 120000) {
    const start = Date.now();

    while (Date.now() - start < timeoutMs) {
        try {
            const response = await fetch(`${baseUrl}/`);
            if (response.ok) {
                return;
            }
        } catch {
            // server is not ready yet
        }

        await sleep(1000);
    }

    throw new Error('Server did not start in time');
}

async function assertPage(path, expectedStrings) {
    const response = await fetch(`${baseUrl}${path}`);
    if (!response.ok) {
        throw new Error(`Expected ${path} to return 200, got ${response.status}`);
    }

    const html = await response.text();

    for (const expected of expectedStrings) {
        if (!html.includes(expected)) {
            throw new Error(`Expected ${path} to contain "${expected}"`);
        }
    }
}

async function runContactApiChecks() {
    const invalidPayload = {
        firstName: 'A',
        lastName: 'B',
        email: 'invalid-email',
        projectType: '',
        budget: '',
        timeline: '',
        website: '',
        message: 'trop court',
        turnstileToken: '',
        company: '',
    };

    const invalidResponse = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(invalidPayload),
    });

    if (invalidResponse.status !== 400) {
        throw new Error(`Expected invalid contact payload to return 400, got ${invalidResponse.status}`);
    }

    const honeypotPayload = {
        firstName: 'Alice',
        lastName: 'Martin',
        email: 'alice@example.com',
        projectType: 'site-vitrine',
        budget: '1000-2000',
        timeline: '1-to-2-months',
        website: 'https://example.com',
        message: 'Bonjour, je souhaite une refonte complète de mon site internet rapidement.',
        turnstileToken: 'fake-token',
        company: 'spam-bot',
    };

    const honeypotResponse = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(honeypotPayload),
    });

    if (honeypotResponse.status !== 200) {
        throw new Error(`Expected honeypot contact payload to return 200, got ${honeypotResponse.status}`);
    }
}

async function main() {
    const server = spawn('node_modules/.bin/next', ['dev', '-p', '4010'], {
        stdio: ['ignore', 'pipe', 'pipe'],
        detached: true,
        env: {
            ...process.env,
            NEXT_PUBLIC_TURNSTILE_SITE_KEY: 'test-turnstile-site-key',
        },
    });

    server.stdout.on('data', () => { });
    server.stderr.on('data', () => { });

    try {
        await waitForServer();

        for (const check of checks) {
            await assertPage(check.path, check.expect);
            console.info(`✓ page check passed: ${check.path}`);
        }

        await runContactApiChecks();
        console.info('✓ contact api checks passed');

        console.info('All smoke E2E checks passed.');
    } finally {
        if (server.pid) {
            try {
                process.kill(-server.pid, 'SIGTERM');
            } catch {
                // process group already stopped
            }
        }
    }
}

main().catch((error) => {
    console.error('E2E smoke checks failed:', error);
    process.exitCode = 1;
});
