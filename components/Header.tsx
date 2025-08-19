import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
  links: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ logo, links }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <motion.div
          className="text-2xl font-bold text-orange-500"
          whileHover={{ scale: 1.1 }}
        >
          <img src={logo} alt="GlamCS Logo" className="h-10" />
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          &#9776; {/ Hamburger Icon /}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white p-5"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-orange-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
                onClick={toggleMobileMenu}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;