'use client';

import { ArrowRight, BookOpen, Users, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent opacity-5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent opacity-5 blur-3xl" />
      </div>

      <div className="container-apple relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="mb-6 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl lg:text-7xl">
            Apprenez.
            <br />
            <span className="text-accent">Collaborez.</span>
            <br />
            Réussissez.
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mb-12 max-w-2xl text-lg text-text-subtle md:text-xl">
          Un environnement d'apprentissage interactif et collaboratif pour votre parcours éducatif.
          Accédez à vos cours, échangez avec vos professeurs et camarades.
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <button className="btn btn-primary group">
            Commencer maintenant
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="btn btn-secondary">
            En savoir plus
          </button>
        </div>

        {/* Hero Image Section */}
        <div className="mb-16 max-w-4xl">
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/assets/img_1.jpeg"
              alt="Apprentissage collaboratif et interactif"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid-apple-3 max-w-4xl">
          <div className="card-glass p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-accent p-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-foreground">Cours Interactifs</h3>
            <p className="text-sm text-text-subtle">
              Accédez à tous vos cours avec des filtres intelligents et des notes personnelles
            </p>
          </div>

          <div className="card-glass p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-accent p-3">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-foreground">Communauté</h3>
            <p className="text-sm text-text-subtle">
              Créez des groupes privés et échangez avec vos camarades et professeurs
            </p>
          </div>

          <div className="card-glass p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-accent p-3">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-foreground">Chat Intégré</h3>
            <p className="text-sm text-text-subtle">
              Discutez directement avec vos professeurs ou l'IA pour vos questions
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center text-text-subtle">
            <span className="mb-2 text-xs font-medium">Découvrir</span>
            <div className="h-6 w-1 rounded-full bg-text-subtle animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
