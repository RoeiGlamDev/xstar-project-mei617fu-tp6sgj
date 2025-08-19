import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 20 }}
      animate={inView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="p-5 my-5 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;