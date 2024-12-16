"use client";

import Image from "next/image";
import { useState } from "react";

const OurShop = () => {
  const [sortBy, setSortBy] = useState("Newest");
  const [show, setShow] = useState("Default");

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Fresh Lime",
      price: "$30.00",
      oldPrice: "$40.00",
      image: "/MaskGroup5.png",
    },
    {
      id: 2,
      name: "Chocolate Muffin",
      price: "$20.00",
      oldPrice: "$25.00",
      image: "/MaskGroup1.png",
    },
    {
      id: 3,
      name: "Chocolate Muffin",
      price: "$20.00",
      oldPrice: "$25.00",
      image: "/MaskGroup2.png",
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      price: "$20.00",
      oldPrice: "$25.00",
      image: "/MaskGroup3.png",
    },
    {
      id: 5,
      name: "Chocolate Muffin",
      price: "$20.00",
      oldPrice: "$25.00",
      image: "/MaskGroup4.png",
    },
    {
      id: 6,
      name: "Chocolate Muffin",
      price: "$20.00",
      oldPrice: "$25.00",
      image: "/MaskGroup5.png",
    },
    // Add more products as needed...
  ];

  const categories = [
    "Sandwiches",
    "Burger",
    "Chicken Chap",
    "Drink",
    "Pizza",
    "Non Veg",
    "Uncategorized",
  ];

  return (
    <main className="flex ">
      <div className="flex flex-col lg:flex-row p-4 gap-6">
        {/* <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Filter By Price</h2>
          <input type="range" min="10" max="100" className="w-full mt-2" />
        </div> */}

        {/* <div className="mt-8"> */}
          {/* <h2 className="text-xl font-bold mb-4">Latest Products</h2> */}
          {/* Example Latest Product */}
          {/* <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/burger.jpg"
                width={50}
                height={50}
                alt="Burger"
                className="rounded-md"
              />
              <div>
                <h3 className="text-gray-800">Burger</h3>
                <p className="text-orange-500 text-sm">$21.00</p>
              </div>
            </div> */}
          {/* Add more latest products as needed */}
        </div>
      {/* </div> */}

      {/* Product Grid */}
      <div className="w-full lg:w-3/4 space-x-6">
        {/* Sorting and View Controls */}
        <div className="flex justify-evenly items-center mb-4 mt-1">
          <div>
            <label className="text-gray-700">Sort By: </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="ml-2 border p-2 rounded-md"
            >
              <option value="Newest">Newest</option>
              <option value="Price">Price</option>
              <option value="Popularity">Popularity</option>
            </select>
          </div>
          <div>
            <label className="text-gray-700">Show: </label>
            <select
              value={show}
              onChange={(e) => setShow(e.target.value)}
              className="ml-2 border p-2 rounded-md"
            >
              <option value="Default">Default</option>
              <option value="Grid">Grid</option>
              <option value="List">List</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-bold mt-4">{product.name}</h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-orange-500 font-bold">
                  {product.price}
                </span>
                <span className="text-gray-500 line-through">
                  {product.oldPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-50 p-4 border rounded-lg mt-14">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "'Miniver', cursive" }}>Category</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="text-gray-700">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="text-orange-500" />
                <span>{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default OurShop;
