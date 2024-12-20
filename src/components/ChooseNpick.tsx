"use client";
import Image from "next/image";
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
];

export default function ChooseNpick() {
  const [activeCategory, setActiveCategory] = useState("breakfast");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="bg-black text-white min-h-screen py-10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-[#FF9f0d] italic text-lg mb-2"
            style={{ fontFamily: "'Miniver', cursive" }}
          >
            Choose & pick
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
            <span className="text-[#FF9f0d]">From</span> Our Menu
          </h1>
        </div>

        {/* Navigation Bar */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`text-sm sm:text-lg ${
                activeCategory === category.key
                  ? "text-[#FF9f0d] font-bold"
                  : "text-gray-400 hover:text-[#FF9f0d] transition duration-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Highlight Image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/homeimg/bg-chosepic1.png"
              alt="Menu Highlight"
              width={366}
              height={366}
              className="w-full max-w-[320px] sm:max-w-[366px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section - Menu Items */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 items-start"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-1">{item.description}</p>
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
