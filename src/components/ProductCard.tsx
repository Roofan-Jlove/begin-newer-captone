import React from "react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  discountedPrice: string;
  discount: string;
  rating: number;
  reviews: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  discountedPrice,
  discount,
  rating,
  reviews,
}) => {
  return (
    <main>
      {/* Left side Grid for the Items */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="relative h-48">
          <Image src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {name}
          </h2>
          <div className="mt-2">
            <span className="text-gray-500 line-through">{price}</span>
            <span className="text-green-500 ml-2 font-bold">
              {discountedPrice}
            </span>
          </div>
          <p className="text-red-500 text-sm">{discount}</p>
          <div className="flex items-center mt-3">
            {Array.from({ length: Math.round(rating) }, (_, index) => (
              <span key={index} className="text-yellow-400 text-sm mr-1">
                ★
              </span>
            ))}
            <span className="text-gray-400 ml-2">({reviews} reviews)</span>
          </div>
        </div>
      </div>
      {/* Right Side 1/4 width */}
    </main>
  );
};

export default ProductCard;
