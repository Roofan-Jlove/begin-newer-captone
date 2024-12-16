import React from "react";
import ProductDetails from "./ProductDetails";
import SimilarProducts from "./SimilarProducts";
import Header2 from "@/components/Header2";


const product = {
  title: "Yummy Chicken Chup",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
  price: 54.0,
  images: [
    "/Rectangle11.png",
    "/Rectangle12.png",
    "/Rectangle13.png",
    "/Rectangle14.png",
    "/Rectangle15.png",    
  ],
  rating: 4.5,
  reviews: 32,
};

const ProductPage: React.FC = () => {
  return (
    <div>
        <Header2 />
        <div
        className=" bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/homeimg/heropic.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Shop Detail</h1>
        <p className="text-white mt-2">
          <a href="/" className="text-gray-300 hover:underline">
            Home
          </a>{" "}
          <span className="text-orange-500"> › </span>{" "}
          <span className="text-orange-500">Pages-Shop Detail</span>
        </p>
      </div>

      <ProductDetails product={product} />
      <SimilarProducts />
    </div>
  );
};

export default ProductPage;
