import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  content: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Sophia Martinez',
    photo: '/images/sophia.jpg',
    content: 'GlamCS has transformed my makeup routine! The quality of the products is unmatched, and I love the luxurious feel.',
    rating: 5,
  },
  {
    name: 'Olivia Johnson',
    photo: '/images/olivia.jpg',
    content: 'I adore my new GlamCS lipsticks! They glide on smoothly and last all day. I receive compliments everywhere I go!',
    rating: 4.5,
  },
  {
    name: 'Isabella Brown',
    photo: '/images/isabella.jpg',
    content: 'The skincare line from GlamCS has made my skin glow! I’ve never felt so confident in my own skin.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex justify-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={h-5 w-5 ${i < Math.round(testimonial.rating) ? 'text-orange-500' : 'text-gray-300'}}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.12 12.61 0 7.545l6.16-.896L10 0l3.84 6.649L20 7.545l-5.12 5.995L15.878 18z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;