import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const buttonVariants = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600',
  secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', label, onClick, disabled }) => {
  return (
    <motion.button
      className={rounded-lg py-2 px-4 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 ${buttonVariants[variant]}}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      {label}
    </motion.button>
  );
};

export default Button;