import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <motion.h1
      className="text-6xl font-bold text-orange-500"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Welcome to GlamCS
    </motion.h1>
  </div>
);

const FeaturesSection = () => (
  <div className="py-20 bg-orange-500">
    <motion.h2
      className="text-4xl font-bold text-white text-center mb-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Our Luxurious Features
    </motion.h2>
    <div className="flex justify-center space-x-10">
      <motion.div
        className="bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-orange-500">Premium Quality</h3>
        <p className="text-gray-700">
          Our cosmetics are crafted with the finest ingredients for a flawless finish.
        </p>
      </motion.div>
      <motion.div
        className="bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-orange-500">Innovative Designs</h3>
        <p className="text-gray-700">
          Experience luxury with our unique 3D designs that enhance your beauty.
        </p>
      </motion.div>
      <motion.div
        className="bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-orange-500">Elegance Redefined</h3>
        <p className="text-gray-700">
          GlamCS brings elegance to your beauty routine with our stylish packaging.
        </p>
      </motion.div>
    </div>
  </div>
);

const LuxuryDesignSection = () => (
  <div className="py-20 bg-white">
    <motion.h2
      className="text-4xl font-bold text-orange-500 text-center mb-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Experience the GlamCS Difference
    </motion.h2>
    <p className="text-gray-700 text-center text-lg max-w-2xl mx-auto">
      At GlamCS, we believe in creating products that not only look good but feel good.
      Our luxurious formulations and stunning packaging are designed to make you feel
      like royalty every day. Indulge in the elegance of our cosmetics, crafted to
      elevate your beauty experience.
    </p>
  </div>
);

const HomePage: React.FC = () => (
  <div>
    <HeroSection />
    <FeaturesSection />
    <LuxuryDesignSection />
  </div>
);

export default HomePage;