import React from "react";
import Image from "next/image";

interface Product {
  title: string;
  price: number;
  image: string;
  discountPrice?: number;
}

const similarProducts: Product[] = [
  {
    title: "Fresh Lime",
    price: 18.00,
    discountPrice: 15.00,
    image: "/about3.png",
  },
  {
    title: "Chocolate Muffin",
    price: 12.00,
    image: "/MaskGroup2.png",
  },
  {
    title: "Burger",
    price: 10.00,
    image: "/product-img3.png",
  },
];

const SimilarProducts: React.FC = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarProducts.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={48}
                height={48}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-orange-500 font-bold">
                ${product.discountPrice?.toFixed(2) || product.price.toFixed(2)}{" "}
                {product.discountPrice && (
                  <span className="text-gray-500 line-through ml-2">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
