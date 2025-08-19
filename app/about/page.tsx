import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Lee',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Carter',
    role: 'Creative Director',
    image: '/images/james.jpg',
  },
  {
    name: 'Olivia Chen',
    role: 'Head of Marketing',
    image: '/images/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen p-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-6">About GlamCS</h1>
        <p className="text-lg mb-6">
          At GlamCS, we believe that beauty is a powerful expression of individuality. Founded in 2023, our journey began with a mission to provide high-quality cosmetics that empower everyone to express their unique beauty. Our commitment to innovation and luxury has made us a trusted name in the cosmetics industry.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Our History</h2>
        <p className="mb-6">
          GlamCS was born from a passion for beauty and a desire to create luxurious products that cater to all skin types. With years of research and development, we have crafted a range of cosmetics that not only enhance beauty but also nourish the skin. Our brand stands for authenticity and inclusivity, ensuring everyone finds their perfect match in our product line.
        </p>
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Quality: We prioritize high-quality ingredients and formulations.</li>
          <li>Innovation: We continue to innovate and launch new products that set trends.</li>
          <li>Inclusivity: We celebrate diversity and strive to cater to all beauty needs.</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-orange-100 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-center text-orange-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;