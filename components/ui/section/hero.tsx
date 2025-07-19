'use client';

import { ArrowRight, BookOpen, Users, MessageSquare } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary opacity-5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary opacity-5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-60 w-60 rounded-full bg-accent opacity-3 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-apple relative z-10 flex min-h-screen items-center">
        {/* Hero Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Main heading */}
            <div className="mb-8">
              <h1 className="mb-6 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Apprenez.
                <br />
                <span className="text-primary">Collaborez.</span>
                <br />
                <span className="text-accent">Réussissez.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="mb-12 max-w-xl text-lg text-text-subtle md:text-xl lg:mx-0 mx-auto">
              Un environnement d'apprentissage interactif et collaboratif pour votre parcours éducatif.
              Accédez à vos cours, échangez avec vos professeurs et camarades.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 lg:justify-start justify-center">
              <button className="btn btn-primary group">
                Commencer maintenant
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn btn-secondary">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Right Column - Logo Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="aspect-square w-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 p-8 lg:p-12">
                <Image
                  src="/assets/logo.png"
                  alt="E-BEYRAY - Apprentissage Interactif"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              {/* Decorative elements avec les nouvelles couleurs */}
              <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-secondary opacity-20 blur-sm" />
              <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-accent opacity-15 blur-md" />
              <div className="absolute top-1/4 -left-2 h-6 w-6 rounded-full bg-primary opacity-10 blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature highlights - Full width section below hero */}
      <div className="container-apple relative z-10 pb-20">
        <div className="grid-apple-3 max-w-4xl mx-auto">
          <div className="card-glass p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-primary p-3">
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
              <div className="rounded-full bg-secondary p-3">
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
        <div className="flex flex-col items-center text-text-subtle mt-16">
          <span className="mb-2 text-xs font-medium">Découvrir</span>
          <div className="h-6 w-1 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
