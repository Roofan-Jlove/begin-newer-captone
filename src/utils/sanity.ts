import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "91sfu25l", // Replace with your project ID
  dataset: "production", // Replace with your dataset
  apiVersion: "2023-01-01", // Use the latest Sanity API version
  useCdn: true, // Use CDN for faster response
});

export interface Product {
  _id: string; // Unique identifier for the product
  name: string; // Name of the product
  description: string; // Short description of the product
  category: string; // Category of the product (e.g., Burger, Sandwich, Drink, etc.)
  price: number; // Current price of the product
  originalPrice?: number; // Optional: Original price before discount
  tags: string[]; // Array of tags for categorization (e.g., Best Seller, New)
  image: { asset: { url: string } }; // Image object with asset URL
  available: boolean; // Availability status
}


// Define Chef interface
export interface Chef {
  _id: string;
  name: string;
  experiance: number;
  available: boolean;
  position: string;
  description: string;
  bio: string;
  image: { asset: { _ref: string } };
  specialty: string;                          // Change from array to single string
}



// Configure image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
