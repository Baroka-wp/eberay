// Features.jsx
'use client';

import { BookOpen, Users, Calendar, MessageCircle, Award, TrendingUp } from 'lucide-react';

const featuresList = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Accès aux cours',
    description:
      'Consultez tous vos cours et ressources pédagogiques en un seul endroit, accessibles 24h/24.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Collaboration',
    description:
      'Travaillez en groupe sur des projets et partagez facilement vos ressources avec vos camarades.',
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: 'Communication directe',
    description: 'Échangez avec vos professeurs et obtenez des réponses rapides à vos questions.',
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Planning intégré',
    description:
      'Consultez votre emploi du temps et recevez des notifications pour vos cours et devoirs.',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Suivi de progression',
    description:
      'Visualisez votre progression et identifiez les domaines à améliorer grâce à des statistiques détaillées.',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Système de récompenses',
    description:
      "Gagnez des badges et des points en complétant vos cours et en atteignant vos objectifs d'apprentissage.",
  },
];

const Features = () => {
  return (
    <section className="section bg-background">
      <div className="container-apple">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Fonctionnalités principales
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-subtle">
            Découvrez les outils que nous mettons à votre disposition pour optimiser votre parcours
            d'apprentissage.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid-apple-3">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="card-glass interactive-card p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="mb-4 font-semibold text-foreground">{feature.title}</h3>
              <p className="text-text-subtle">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="btn btn-primary">
            Explorer toutes les fonctionnalités
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
