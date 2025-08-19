import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Glam Starter',
    price: '$29',
    features: [
      'Basic Makeup Application',
      'Consultation Session',
      '1 Hour Session',
      'Exclusive GlamCS Products'
    ],
  },
  {
    name: 'Glam Luxe',
    price: '$59',
    features: [
      'Advanced Makeup Application',
      'Personalized Consultation',
      '2 Hour Session',
      'GlamCS Premium Products',
      'Follow-Up Care Package'
    ],
  },
  {
    name: 'Glam Elite',
    price: '$99',
    features: [
      'Complete Makeover',
      'Bespoke Consultation',
      '3 Hour Session',
      'Full GlamCS Product Line',
      'Exclusive Access to GlamCS Events'
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans for GlamCS Cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">{tier.name}</h3>
              <p className="text-xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;