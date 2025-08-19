import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  return (
    <motion.mesh
      position={position}
      animate={{ y: [0, 0.5, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#FFA500" />
    </motion.mesh>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <FloatingElement position={[-1, 0, 0]} />
      <FloatingElement position={[1, 0, 0]} />
      <FloatingElement position={[0, 1, 0]} />
      <FloatingElement position={[0, -1, 0]} />
    </Canvas>
  );
};

const FloatingElementsContainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold text-orange-500">Welcome to GlamCS</h1>
      <p className="mt-4 text-lg text-gray-700">
        Discover luxurious cosmetics designed for the modern individual.
      </p>
      <div className="relative w-full h-full">
        <FloatingElements />
      </div>
    </div>
  );
};

export default FloatingElementsContainer;