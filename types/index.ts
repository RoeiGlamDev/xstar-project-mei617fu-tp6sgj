import { Product } from './product';
import { User } from './user';

/
 * Represents a specific color scheme for GlamCS cosmetics.
 * This interface includes the primary colors used in the brand design.
 */
export interface ColorScheme {
    primary: string; // Orange color for GlamCS branding
    secondary: string; // White color for GlamCS branding
}

/
 * Represents a category of cosmetics available at GlamCS.
 */
export interface Category {
    id: string; // Unique identifier for the category
    name: string; // Name of the category (e.g., "Lipsticks", "Foundations")
    description: string; // Description of what the category includes
}

/
 * Represents a cosmetic product offered by GlamCS.
 */
export interface GlamCSProduct extends Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product (e.g., "Luxury Lipstick")
    description: string; // Detailed description of the product
    price: number; // Price of the product
    categoryId: string; // Identifier for the category the product belongs to
    colorOptions?: string[]; // Available color options for the product
    isFeatured: boolean; // Indicates if the product is featured on the website
}

/
 * Represents a user of the GlamCS website.
 */
export interface GlamCSUser extends User {
    id: string; // Unique identifier for the user
    username: string; // Username of the user
    email: string; // Email address of the user
    password: string; // Password for user authentication
    favoriteProducts: GlamCSProduct[]; // Array of favorite products for the user
}

/
 * Represents the overall state of the GlamCS application.
 */
export interface AppState {
    products: GlamCSProduct[]; // List of all products available at GlamCS
    categories: Category[]; // List of all product categories
    currentUser?: GlamCSUser; // Currently logged in user
    colorScheme: ColorScheme; // Color scheme used throughout the GlamCS website
}

/
 * GlamCS Color Scheme constant.
 * This constant defines the specific color scheme used for branding and design.
 */
export const glamCSColorScheme: ColorScheme = {
    primary: '#FFA500', // Orange
    secondary: '#FFFFFF', // White
};