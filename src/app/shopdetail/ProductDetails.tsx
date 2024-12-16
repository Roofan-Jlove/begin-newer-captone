import React from "react";
import Image from "next/image";

interface ProductDetailsProps {
  product: {
    title: string;
    description: string;
    price: number;
    images: string[];
    rating: number;
    reviews: number;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <Image
            src={product.images[0]}
            alt={product.title}
            className="w-full rounded-lg shadow-md mb-4"
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(1).map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="rounded-lg shadow-sm cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="text-2xl font-semibold text-orange-500 mb-4">
            ${product.price.toFixed(2)}
          </div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 mr-2">
              {"★".repeat(Math.floor(product.rating))}{" "}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="text-gray-600">({product.reviews} Reviews)</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border rounded-lg p-2"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
          <p className="text-gray-500 mb-2">
            <strong>Category:</strong> Pizza
          </p>
          <p className="text-gray-500">
            <strong>Tags:</strong> Shop, Food
          </p>
        </div>
      </div>

      {/* Description and Key Benefits */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
          volutpat ligula, quis efficitur felis.
        </p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>High-quality ingredients and flavors</li>
          <li>Prepared fresh daily</li>
          <li>Healthy and nutritious options</li>
          <li>Perfect for all occasions</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductDetails;
