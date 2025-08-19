import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <div className="absolute inset-0 z-0 opacity-30">
        {/ Background 3D effect could be added here /}
      </div>
      <div className="relative z-10 p-8 text-center">
        <motion.h1 
          className="text-5xl font-bold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Welcome to GlamCS
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover luxury cosmetics that enhance your natural beauty with our premium products.
        </motion.p>
        <div className="flex justify-center">
          <motion.button 
            className="px-6 py-3 text-white bg-orange-600 rounded-lg hover:bg-orange-500 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            Shop Now
          </motion.button>
          <motion.button 
            className="ml-4 px-6 py-3 text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            Learn More
          </motion.button>
        </div>
        <motion.div 
          className="mt-10 text-sm text-gray-500"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Your trusted partner in beauty.</p>
          <p>Explore our collection and experience the GlamCS difference.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;