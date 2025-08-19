import { CSSProperties } from 'react';

/
 * Utility functions for GlamCS application.
 * This file contains various utility functions including
 * the cn-function for conditional class names and formatters
 * for displaying cosmetic product information elegantly.
 * 
 * @module utils
 */

interface GlamCSProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

/
 * Conditional class names utility.
 * 
 * @param classes - A list of classes where some may be conditionally applied.
 * @returns A string of class names.
 */
export function cn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

/
 * Formatter for currency based on GlamCS's branding.
 * 
 * @param amount - The amount to format.
 * @returns A formatted string representing the currency.
 */
export function formatCurrency(amount: number): string {
    return $${amount.toFixed(2)};
}

/
 * Formatter for product descriptions, ensuring they fit the luxury theme of GlamCS.
 * 
 * @param product - The GlamCS product to format the description for.
 * @returns A formatted description string for the product.
 */
export function formatProductDescription(product: GlamCSProduct): string {
    return ${product.name} - ${product.description};
}

/
 * Generates style for GlamCS buttons to match the modern, elegant aesthetic.
 * 
 * @returns A CSSProperties object for button styling.
 */
export function glamCSButtonStyle(): CSSProperties {
    return {
        backgroundColor: 'orange',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };
}

/
 * GlamCS-specific types and interfaces for product data management.
 */
export type { GlamCSProduct };