'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative mt-16 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-purple-800 to-purple-600 p-8 pb-8 pt-16 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-300 opacity-10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <motion.div
        className="mb-6 mt-8 text-center text-6xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Apprenez. Collaborez. <br />
        <span className="text-purple-200">Réussissez.</span>
      </motion.div>

      <motion.div
        className="mb-8 max-w-2xl text-center text-2xl font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Un environnement d&apos;apprentissage interactif et collaboratif pour votre parcours
        éducatif
      </motion.div>

      <motion.p
        className="mb-10 max-w-2xl text-center text-lg text-purple-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Accédez à vos cours, échangez avec vos professeurs et camarades, et suivez votre progression
        scolaire en temps réel.
      </motion.p>

      <motion.div
        className="mt-4 flex flex-col gap-4 pb-[150px] sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.button
          className="rounded-md bg-white px-8 py-3 font-bold text-purple-800 transition-colors hover:bg-purple-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Commencer maintenant
        </motion.button>
        <motion.button
          className="rounded-md border-2 border-white bg-transparent px-8 py-3 font-bold text-white transition-colors hover:bg-white hover:bg-opacity-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          En savoir plus
        </motion.button>
      </motion.div>

      {/* Floating icons representing features */}
      <div className="absolute bottom-40 left-10 hidden lg:block">
        <motion.div
          className="rounded-full bg-purple-700 p-4 pb-10 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-60 right-10 hidden lg:block">
        <motion.div
          className="rounded-full bg-purple-700 p-4 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </motion.div>
      </div>

      {/* Wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,224L60,218.7C120,213,240,203,360,197.3C480,192,600,192,720,202.7C840,213,960,235,1080,229.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <motion.div
        className="absolute bottom-20 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="animate-bounce">
          <path
            d="M7 10L12 15L17 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
