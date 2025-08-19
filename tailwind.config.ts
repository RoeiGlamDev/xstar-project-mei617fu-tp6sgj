import type { Config } from 'tailwindcss';

/
 * Custom Tailwind CSS configuration for GlamCS.
 * This configuration defines a modern color scheme 
 * for a luxury cosmetics brand, with custom colors 
 * and animations to enhance the user experience.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6F20', // GlamCS brand orange color
        },
        white: {
          DEFAULT: '#FFFFFF', // GlamCS brand white color
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;

/
 * Interface representing a product in the GlamCS cosmetics line.
 */
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'lipstick' | 'foundation' | 'skincare' | 'eyeshadow';
}

/
 * Function to create a new product for GlamCS cosmetics.
 * 
 * @param id - Unique identifier for the product.
 * @param name - Name of the product.
 * @param description - Description of the product.
 * @param price - Price of the product.
 * @param category - Category of the product.
 * @returns A new product object.
 */
export function createProduct(id: number, name: string, description: string, price: number, category: 'lipstick' | 'foundation' | 'skincare' | 'eyeshadow'): Product {
  return {
    id,
    name,
    description,
    price,
    category,
  };
}

/
 * Example product data for GlamCS cosmetics.
 */
export const glamCSProducts: Product[] = [
  createProduct(1, 'Luxurious Lipstick', 'A rich and creamy lipstick that provides long-lasting color.', 25.00, 'lipstick'),
  createProduct(2, 'Silk Foundation', 'A lightweight foundation that gives a flawless finish.', 35.00, 'foundation'),
  createProduct(3, 'Radiant Skin Serum', 'A revitalizing serum that enhances skin radiance.', 50.00, 'skincare'),
  createProduct(4, 'Glamorous Eyeshadow Palette', 'A palette featuring vibrant colors for stunning eye looks.', 45.00, 'eyeshadow'),
];