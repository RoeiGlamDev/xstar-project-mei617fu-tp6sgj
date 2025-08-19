import React from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.h1
        className="text-4xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        We’d love to hear from you! Reach out to us for any inquiries regarding our luxurious cosmetics.
      </p>
      
      <form className="w-full max-w-lg bg-orange-100 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-orange-500 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-orange-500"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-orange-500 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-orange-500"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-orange-500 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-orange-500"
            id="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>

      <motion.div
        className="mt-8 p-6 bg-white shadow-lg rounded-lg w-full max-w-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Visit Us</h2>
        <p className="text-gray-700 mb-2">GlamCS Headquarters</p>
        <p className="text-gray-700 mb-2">123 Glamour Ave</p>
        <p className="text-gray-700 mb-2">Beauty City, BC 12345</p>
        <h3 className="text-lg font-semibold text-orange-500">Business Hours</h3>
        <p className="text-gray-700">Mon - Fri: 9am - 6pm</p>
        <p className="text-gray-700">Sat: 10am - 4pm</p>
        <p className="text-gray-700">Sun: Closed</p>
      </motion.div>
    </div>
  );
};

export default ContactPage;