import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Sophia Carter', role: 'Founder & CEO', image: '/images/sophia.jpg' },
  { name: 'Liam Johnson', role: 'Chief Chemist', image: '/images/liam.jpg' },
  { name: 'Emma Williams', role: 'Marketing Director', image: '/images/emma.jpg' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-orange-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About GlamCS
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GlamCS, we believe that beauty is an art form. Founded by a passionate team of cosmetics experts, our mission is to empower individuals with high-quality, luxurious products that enhance their natural beauty. We take pride in our commitment to innovation, sustainability, and inclusivity, ensuring that every GlamCS product is crafted with care and precision.
        </motion.p>
        <motion.h3
          className="text-2xl font-semibold text-orange-500 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.p
          className="text-lg text-gray-700 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission at GlamCS is to redefine beauty standards by providing innovative and high-end cosmetic products. We aim to create a community where everyone can express themselves through beauty, celebrating diversity and individuality. With GlamCS, every application is a step towards feeling empowered and confident.
        </motion.p>
        <motion.h3
          className="text-2xl font-semibold text-orange-500 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h4 className="text-lg font-bold text-center text-orange-500 mt-4">{member.name}</h4>
              <p className="text-center text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;