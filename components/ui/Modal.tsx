import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
      <div className="absolute inset-0 bg-orange-500 opacity-75" onClick={onClose}></div>
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto transform transition-all"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <h2 className="text-2xl font-bold text-orange-500 mb-4">{title}</h2>
        <div className="text-gray-700">{content}</div>
        <button
          className="mt-6 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;