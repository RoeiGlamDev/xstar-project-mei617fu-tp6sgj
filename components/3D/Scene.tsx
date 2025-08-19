import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  width: number;
  height: number;
}

const GlamCSScene: React.FC<SceneProps> = ({ width, height }) => {
  const sceneRef = useRef<THREE.Scene>(null);

  useEffect(() => {
    if (sceneRef.current) {
      // Customized 3D scene setup
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshStandardMaterial({ color: '#FFA500' }); // Orange color
      const sphere = new THREE.Mesh(geometry, material);
      sceneRef.current.add(sphere);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(5, 5, 5);
      sceneRef.current.add(ambientLight);
      sceneRef.current.add(directionalLight);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.01;
        sphere.rotation.x += 0.01;
      };
      animate();
    }
  }, []);

  return (
    <Canvas style={{ height: ${height}px, width: ${width}px }} ref={sceneRef}>
      <OrbitControls />
    </Canvas>
  );
};

const GlamCS: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.h1
        className="text-4xl font-bold text-orange-600 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to GlamCS
      </motion.h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Discover luxury cosmetics with GlamCS. Our exclusive range of products is designed to elevate your beauty routine with elegance and sophistication.
      </p>
      <GlamCSScene width={800} height={400} />
      <motion.button
        className="mt-4 px-6 py-2 bg-orange-600 text-white rounded transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default GlamCS;