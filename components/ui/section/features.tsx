// Features.jsx
'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, MessageCircle, Award } from 'lucide-react';

const featuresList = [
  {
    icon: <BookOpen size={24} />,
    title: 'Accès aux cours',
    description:
      'Consultez tous vos cours et ressources pédagogiques en un seul endroit, accessibles 24h/24.',
  },
  {
    icon: <Users size={24} />,
    title: 'Collaboration',
    description:
      'Travaillez en groupe sur des projets et partagez facilement vos ressources avec vos camarades.',
  },
  {
    icon: <MessageCircle size={24} />,
    title: 'Communication directe',
    description: 'Échangez avec vos professeurs et obtenez des réponses rapides à vos questions.',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Planning intégré',
    description:
      'Consultez votre emploi du temps et recevez des notifications pour vos cours et devoirs.',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Suivi de progression',
    description:
      'Visualisez votre progression et identifiez les domaines à améliorer grâce à des statistiques détaillées.',
  },
  {
    icon: <Award size={24} />,
    title: 'Système de récompenses',
    description:
      "Gagnez des badges et des points en complétant vos cours et en atteignant vos objectifs d'apprentissage.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-purple-700">Fonctionnalités principales</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Découvrez les outils que nous mettons à votre disposition pour optimiser votre parcours
            d&apos;apprentissage.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 text-purple-700">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="rounded-full bg-purple-600 px-8 py-3 font-bold text-white transition-colors hover:bg-purple-700">
            Explorer toutes les fonctionnalités
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
