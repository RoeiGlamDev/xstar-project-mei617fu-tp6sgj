import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for handling 3D interactions on GlamCS cosmetic elements.
 *
 * @returns {object} An object containing the 3D scene, camera, and renderer.
 */
const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        // Initialize the 3D scene
        sceneRef.current = new THREE.Scene();
        cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(rendererRef.current.domElement);

        // Set camera position
        if (cameraRef.current) {
            cameraRef.current.position.z = 5;
        }

        // Adding ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        sceneRef.current.add(ambientLight);

        // Adding a directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        sceneRef.current.add(directionalLight);

        // Create a luxurious 3D cosmetic product representation
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 'orange', metalness: 0.5, roughness: 0.1 });
        const cube = new THREE.Mesh(geometry, material);
        sceneRef.current.add(cube);

        // Animation loop
        const animate = () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            if (rendererRef.current && sceneRef.current && cameraRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup on component unmount
        return () => {
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return {
        scene: sceneRef.current,
        camera: cameraRef.current,
        renderer: rendererRef.current,
    };
};

export default use3D;