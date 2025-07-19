'use client';

import { Mail, Phone, Facebook, Twitter, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-apple py-16">
        <div className="grid-apple-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-display text-xl font-semibold text-foreground">E-BEYRAY</h3>
            <p className="text-text-subtle">
              Votre plateforme éducative pour un apprentissage collaboratif et interactif.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Liens rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'Formations', 'Enseignants', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="nav-link text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Ressources</h3>
            <ul className="space-y-2">
              {['Centre d\'aide', 'Tutoriels', 'Documentation', 'Blog'].map((resource) => (
                <li key={resource}>
                  <a href="#" className="nav-link text-sm">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-text-subtle">
                <Mail className="mr-2 h-4 w-4" />
                <span className="text-sm">contact@ebeyray.com</span>
              </li>
              <li className="flex items-center text-text-subtle">
                <Phone className="mr-2 h-4 w-4" />
                <span className="text-sm">+123 456 789</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-text-subtle transition-all hover:border-accent hover:text-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-text-subtle">
            &copy; 2025 E-BEYRAY. Tous droits réservés.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="#" className="nav-link text-sm">
              Conditions d'utilisation
            </a>
            <a href="#" className="nav-link text-sm">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
