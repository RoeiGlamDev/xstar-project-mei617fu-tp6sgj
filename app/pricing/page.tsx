import React from 'react';
import { motion } from 'framer-motion';

interface PricingItem {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const pricingData: PricingItem[] = [
  {
    title: 'GlamCS Basic Package',
    description: 'Perfect for everyday glamour with essential products.',
    price: '$29.99',
    features: [
      'High-quality foundation',
      'Luxury lip gloss',
      'Blush and bronzer duo',
      'Makeup bag included',
    ],
  },
  {
    title: 'GlamCS Premium Package',
    description: 'Elevate your beauty routine with premium selections.',
    price: '$59.99',
    features: [
      'All Basic Package features',
      'Luxury eyeshadow palette',
      'Professional makeup brushes',
      'Free shipping on first order',
    ],
  },
  {
    title: 'GlamCS Ultimate Package',
    description: 'The ultimate experience for the beauty connoisseur.',
    price: '$99.99',
    features: [
      'All Premium Package features',
      'Exclusive skincare products',
      'Personalized beauty consultation',
      'VIP access to new launches',
    ],
  },
];

const FAQData = [
  {
    question: 'What are the shipping options?',
    answer: 'We offer standard and express shipping options for all orders.',
  },
  {
    question: 'Can I return my purchase?',
    answer: 'Yes, we have a 30-day return policy for unused products.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide. Additional fees may apply.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        GlamCS Pricing Plans
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="mb-4">{item.description}</p>
            <h3 className="text-xl font-bold mb-4">{item.price}</h3>
            <ul className="list-disc list-inside mb-4">
              {item.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-300">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="bg-orange-100 rounded-lg p-6">
          {FAQData.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;