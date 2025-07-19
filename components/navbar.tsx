'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { BookOpen, Menu, X } from 'lucide-react';

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    // Surveillez les changements d'état d'authentification
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  // Éviter les erreurs de hydratation
  if (!mounted) {
    return (
      <nav className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-lg transition-all duration-300">
        <div className="container-apple flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-xl font-semibold text-foreground">E-BEYRAY</span>
          </Link>
          <div className="hidden items-center space-x-8 md:flex">
            <Link href="/cours-a-domicile" className="nav-link">Cours à domicile</Link>
            <Link href="/enseignants" className="nav-link">Enseignants</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth">
              <button className="btn btn-primary">Connexion</button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-lg transition-all duration-300">
      <div className="container-apple flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground">E-BEYRAY</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link href="/cours-a-domicile" className="nav-link">
            Cours à domicile
          </Link>
          <Link href="/enseignants" className="nav-link">
            Enseignants
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="hidden text-sm text-text-subtle md:block">{user.email}</div>
              <button
                onClick={handleSignOut}
                className="btn btn-secondary"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <Link href="/auth">
              <button className="btn btn-primary">
                Connexion
              </button>
            </Link>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-hover-bg md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-apple py-4 space-y-4">
            <Link
              href="/cours-a-domicile"
              className="block py-2 text-foreground hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cours à domicile
            </Link>
            <Link
              href="/enseignants"
              className="block py-2 text-foreground hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enseignants
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-foreground hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
