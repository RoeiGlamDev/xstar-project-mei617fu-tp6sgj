import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: JSX.Element;
}

const features: Feature[] = [
    {
        id: 1,
        title: 'Luxurious Formulations',
        description: 'Experience the ultimate in skincare with our luxurious formulations designed for every skin type.',
        icon: <i className="fas fa-gem text-orange-500"></i>,
    },
    {
        id: 2,
        title: 'Cruelty-Free Promise',
        description: 'We are committed to beauty without cruelty. All our products are cruelty-free and ethically sourced.',
        icon: <i className="fas fa-leaf text-orange-500"></i>,
    },
    {
        id: 3,
        title: 'Customizable Shades',
        description: 'Find your perfect match with our customizable shades tailored to enhance your natural beauty.',
        icon: <i className="fas fa-paint-brush text-orange-500"></i>,
    },
    {
        id: 4,
        title: 'Sustainable Packaging',
        description: 'Join us in making a difference with our eco-friendly, sustainable packaging solutions.',
        icon: <i className="fas fa-recycle text-orange-500"></i>,
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto text-center">
                <motion.h2 
                    className="text-4xl font-bold text-orange-600 mb-8"
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                >
                    Discover GlamCS Features
                </motion.h2>
                <motion.p 
                    className="text-lg text-gray-700 mb-12"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Elevate your beauty routine with GlamCS's premium cosmetics tailored to your needs.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map(feature => (
                        <motion.div 
                            key={feature.id} 
                            className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-orange-600 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;