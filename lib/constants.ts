export const BRAND_NAME = "GlamCS";
export const PRIMARY_COLOR = "#FFA500"; // Orange
export const SECONDARY_COLOR = "#FFFFFF"; // White

export const CONFIG = {
    siteTitle: ${BRAND_NAME} - Luxury Cosmetics,
    siteDescription: "Discover the elegance of beauty with GlamCS, where cosmetics meet luxury.",
    footerText: "© 2023 GlamCS. All rights reserved.",
    socialMediaLinks: {
        instagram: "https://instagram.com/glamcs",
        facebook: "https://facebook.com/glamcs",
        twitter: "https://twitter.com/glamcs"
    },
    contactInformation: {
        email: "support@glamcs.com",
        phone: "+1 (800) 555-0199",
        address: "123 Glam St, Beauty City, CA 90210"
    }
};

/
 * Represents a product in the GlamCS cosmetics line.
 * @interface Product
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    isFeatured: boolean;
}

/
 * Function to create a new GlamCS product.
 * @param {Product} product - The product to be created.
 * @returns {Product} The newly created product.
 */
export function createProduct(product: Product): Product {
    // Logic to add product to the inventory would go here
    return product;
}

/
 * Represents the GlamCS brand configuration.
 * @interface BrandConfig
 */
export interface BrandConfig {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    description: string;
}

/
 * Get the brand configuration for GlamCS.
 * @returns {BrandConfig} The brand configuration.
 */
export function getBrandConfig(): BrandConfig {
    return {
        name: BRAND_NAME,
        primaryColor: PRIMARY_COLOR,
        secondaryColor: SECONDARY_COLOR,
        description: CONFIG.siteDescription
    };
}