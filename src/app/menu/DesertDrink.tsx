import React from "react";
import Image from "next/image";

const DessertSection = () => {
  const dessertMenu = [
    {
      name: "Aloe Grilled Chicken Salad",
      desc: "Toasted French bread topped with romano, cheddar",
      price: 325,
    },
    {
      name: "Berries and Mint Salad",
      desc: "Gorgonzola, ricotta, mozzarella, taleggio",
      price: 455,
    },
    {
      name: "Tomato-Mozz Basil Pine Pineapple",
      desc: "Ground cumin, avocados, peeled and cubed",
      price: 145,
    },
    {
      name: "Spicy Vegan Potato Curry",
      desc: "Spreadable cream cheese, crumbled blue cheese",
      price: 365,
    },
  ];

  const Drinks = [
    {
      name: "Cylab Big Breakfast Combo Menu",
      desc: "Toasted French bread topped with romano, cheddar",
      price: 295,
    },
    {
      name: "Cashew Chicken With Stir-Fry",
      desc: "Gorgonzola, ricotta, mozzarella, taleggio",
      price: 195,
    },
    {
      name: "Vegetables & Cheese Salad",
      desc: "Ground cumin, avocados, peeled and cubed",
      price: 145,
    },
    {
      name: "Spicy Vegan Potato Curry",
      desc: "Spreadable cream cheese, crumbled blue cheese",
      price: 365,
    },
  ];

  return (
    <main className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Dessert Section */}
        <section className="flex flex-col lg:flex-row items-start gap-8">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/Rectangle1.png"
              alt="Dessert"
              width={448}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/CoffeeOnge.png" alt="Icon" width={24} height={24} />
              <h2 className="text-2xl font-bold">Dessert</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dessertMenu.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg shadow-md flex justify-between items-start"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                  <div>
                    <p className="text-[#FF9F0D] font-medium">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Drinks Section */}
        <section className="mt-12 flex flex-col-reverse lg:flex-row items-start gap-8">
          <div className="w-full">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/CoffeeOnge.png" alt="Icon" width={24} height={24} />
              <h2 className="text-2xl font-bold">Drinks</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Drinks.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg shadow-md flex justify-between items-start"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                  <div>
                    <p className="text-[#FF8F0D] font-medium">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/Rectangle1.png"
              alt="Drinks"
              width={448}
              height={400}
              className="rounded-lg"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default DessertSection;
