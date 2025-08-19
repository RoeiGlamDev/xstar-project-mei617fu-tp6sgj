import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <section className="bg-white text-orange-600 p-10 md:p-20 rounded-lg shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-6">{subtitle}</p>
        <motion.button
          onClick={onButtonClick}
          className="bg-orange-600 text-white py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTASection;

// Usage Example in a parent component
// <CTASection 
//   title="Elevate Your Beauty Routine with GlamCS"
//   subtitle="Discover luxurious cosmetics designed to enhance your natural beauty."
//   buttonText="Shop Now"
//   onButtonClick={() => console.log('Button Clicked!')}
// />