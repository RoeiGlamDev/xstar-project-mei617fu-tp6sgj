import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpAnimation}
      className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      role="region"
      aria-label="GlamCS Cosmetic Product"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;