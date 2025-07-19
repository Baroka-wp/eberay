import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-BEYRAY - Apprentissage Interactif et Collaboratif',
  description: 'Un environnement d\'apprentissage interactif et collaboratif pour votre parcours éducatif. Accédez à vos formations et rencontrez nos enseignants qualifiés.',
  keywords: 'éducation, apprentissage, formations, enseignants, collaboration, étudiants',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
