import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.reason) newErrors.reason = 'Reason for contact is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data to the server (mocked)
      console.log('Submitting form:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', reason: '' });
      setErrors({});
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Contact GlamCS</h2>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label className="block text-orange-600" htmlFor="name">Name</label>
          <input
            className="w-full p-2 border border-orange-600 rounded focus:outline-none focus:ring focus:ring-orange-400"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div>
          <label className="block text-orange-600" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border border-orange-600 rounded focus:outline-none focus:ring focus:ring-orange-400"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div>
          <label className="block text-orange-600" htmlFor="reason">Reason for Contact</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 border border-orange-600 rounded focus:outline-none focus:ring focus:ring-orange-400"
          >
            <option value="">Select a reason</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Order Support">Order Support</option>
            <option value="General Question">General Question</option>
          </select>
          {errors.reason && <span className="text-red-500">{errors.reason}</span>}
        </div>
        <div>
          <label className="block text-orange-600" htmlFor="message">Message</label>
          <textarea
            className="w-full p-2 border border-orange-600 rounded focus:outline-none focus:ring focus:ring-orange-400"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          {errors.message && <span className="text-red-500">{errors.message}</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-500 transition duration-200"
        >
          Send Message
        </button>
      </motion.form>
      {submitted && <p className="text-green-600 text-center mt-4">Thank you for contacting GlamCS!</p>}
      <div className="mt-6 text-center">
        <h3 className="text-orange-600 font-bold">Business Information</h3>
        <p>Address: 123 Glamour St, Beauty City, BC 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@glamcs.com</p>
        <p>Business Hours: Mon-Fri 9 AM - 5 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;