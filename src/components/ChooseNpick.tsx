"use client"

import { useState } from "react";

const categories = [
  { name: "Breakfast", key: "breakfast" },
  { name: "Lunch", key: "lunch" },
  { name: "Dinner", key: "dinner" },
  { name: "Dessert", key: "dessert" },
  { name: "Drink", key: "drink" },
  { name: "Snack", key: "snack" },
  { name: "Soups", key: "soups" },
];

const menuItems = [
  {
    category: "breakfast",
    name: "Lettuce Leaf",
    price: "12.5$",
    image: "/homeimg/lettuce.png",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    category: "breakfast",
    name: "Fresh Breakfast",
    price: "14.5$",
    image: "/homeimg/breakfast.png",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    category: "breakfast",
    name: "Glow Cheese",
    price: "12.5$",
    image: "/homeimg/cheese.png",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    category: "breakfast",
    name: "Italian Pizza",
    price: "14.5$",
    image: "/homeimg/pizza1.png",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    category: "breakfast",
    name: "Lettuce Leaf",
    price: "12.5$",
    image: "/homeimg/lettuce.png",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    category: "breakfast",
    name: "Fresh Breakfast",
    price: "14.5$",
    image: "/homeimg/breakfast.png",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    category: "breakfast",
    name: "Glow Cheese",
    price: "12.5$",
    image: "/homeimg/cheese.png",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
  {
    category: "breakfast",
    name: "Italian Pizza",
    price: "14.5$",
    image: "/homeimg/pizza1.png",
    description: "Lacus nisi, et ac dapibus velit in consequat.",
  },
];

export default function ChooseNpick() {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="bg-black text-white min-h-screen py-10">
      <div className="container mx-auto px-6 ">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[#FF9f0d] italic text-lg mb-2" style={{ fontFamily: "'Miniver', cursive" }}>Choose & pick</h2>
          <h1 className="text-4xl font-bold">
            <span className="text-[#FF9f0d]">From</span> Our Menu
          </h1>
        </div>

        {/* Navigation Bar */}
        <div className="flex justify-start space-x-6 mb-6">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`text-lg ${
                activeCategory === category.key
                  ? "text-[#FF9f0d] font-bold"
                  : "text-gray-400 hover:text-[#FF9f0d]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="w-[1169px] grid grid-cols-1 md:grid-cols-3 gap-8 justify-center ">
          <div className="md:col-span-1">
            <img
              src="/homeimg/bg-chosepic1.png"
              alt="Menu Highlight"
              className="w-[366px] rounded-lg shadow-lg "
            />
          </div>
          <div className="w-[800px] md:col-span-1 grid grid-cols-2 gap-4">
            {filteredItems.map((item, index) => (
              <div key={index} className="flex space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="">
                  <h3 className="w-auto text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <p className="text-[#FF9f0d] font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
