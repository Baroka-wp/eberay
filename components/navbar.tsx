'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        </div>

        {/* Contact Section */}
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <button className="btn btn-primary">
              Contact
            </button>
          </Link>

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
          </div>
        </div>
      )}
    </nav>
  );
}
