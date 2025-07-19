import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-BEYRAY - Apprentissage Interactif et Collaboratif',
  description: 'Un environnement d\'apprentissage interactif et collaboratif pour votre parcours éducatif. Accédez à vos formations et rencontrez nos enseignants qualifiés.',
  keywords: 'éducation, apprentissage, formations, enseignants, collaboration, étudiants',
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
        <link rel="shortcut icon" href="/assets/logo.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
