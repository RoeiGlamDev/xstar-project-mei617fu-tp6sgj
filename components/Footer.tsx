import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, socialLinks }) => {
  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold">{companyName}</h2>
          <p className="mt-2">Elevate your beauty with GlamCS premium cosmetics.</p>
        </motion.div>
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="/about"
            className="hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="/products"
            className="hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Our Products
          </motion.a>
          <motion.a
            href="/contact"
            className="hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-4 mt-2">
            {socialLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                className="text-orange-600 hover:text-orange-500 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {link.platform}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;