import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title: string;
  description: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, description }) => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email submission logic
    setIsSuccess(true);
    setEmail('');
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {description}
        </motion.p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-lg p-3 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <motion.button
            type="submit"
            className="bg-orange-500 text-white font-semibold rounded-lg p-3 shadow-lg hover:bg-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
        {isSuccess && (
          <motion.p
            className="mt-4 text-green-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to GlamCS! Stay tuned for our latest updates.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;