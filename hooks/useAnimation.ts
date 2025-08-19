import { useEffect, useState } from 'react';

/
 * Custom hook for handling animations in the GlamCS cosmetics website.
 * This hook provides smooth animations to enhance the user experience,
 * reflecting the high-end and luxurious feel of the GlamCS brand.
 * 
 * @returns {Object} - Contains animation properties and methods.
 */
export interface AnimationProps {
  isVisible: boolean;
  fadeIn: () => void;
  fadeOut: () => void;
}

export const useAnimation = (): AnimationProps => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  /
   * Function to trigger fade-in effect.
   * Sets the visibility to true and applies the fade-in animation.
   */
  const fadeIn = () => {
    setIsVisible(true);
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
  };

  /
   * Function to trigger fade-out effect.
   * Sets the visibility to false and applies the fade-out animation.
   */
  const fadeOut = () => {
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';
    setTimeout(() => setIsVisible(false), 500); // Match timeout with CSS transition duration
  };

  useEffect(() => {
    // Initial state setup for glamorous entry of the GlamCS website
    document.body.style.backgroundColor = 'white';
    document.body.style.opacity = '0';
    fadeIn(); // Start with fade-in effect on component mount

    return () => {
      fadeOut(); // Cleanup with fade-out effect on unmount
    };
  }, []);

  return { isVisible, fadeIn, fadeOut };
};