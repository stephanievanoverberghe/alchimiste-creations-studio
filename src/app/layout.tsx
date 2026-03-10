import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Alchimiste Créations',
    description: 'Studio web indépendant spécialisé dans la création de sites web modernes et performants.',
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="fr">
            <body>{children}</body>
        </html>
    );
}
