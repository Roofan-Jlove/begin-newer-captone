import React from "react";
import Image from "next/image";

const MenuSection = () => {
  const starterMenu = [
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

  const mainCourse = [
    { name: "Cylab Big Breakfast Combo Menu", desc: "Toasted French bread topped with romano, cheddar" ,price: 295 },
    { name: "Cashew Chicken With Stir-Fry", desc: "Gorgonzola, ricotta, mozzarella, taleggio", price: 195 },
    { name: "Vegetables & Cheese Salad", desc: "Ground cumin, avocados, peeled and cubed", price: 145 },
    { name: "Spicy Vegan Potato Curry", desc: "Spreadable cream cheese, crumbled blue cheese" ,price: 365 },
  ];

  return (
    <main>
      <div className="container w-[1169px] flex justify-center items-start mx-auto px-4 py-8 space-x-12">
           <Image
          src="/Rectangle1.png"
          alt="Dessert"
          width={448}
          height={400}
           ></Image>
          {/* Starter Menu Section */}
            <section className="py-8">
            <img src="/CoffeeOnge.png" alt="" width={24} height={24} />
             <h2 className="text-2xl font-bold mb-6">Starter Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-center items-end">
            {starterMenu.map((item, index) => (
              <div
                key={index}
                className="p-2 border rounded-lg shadow-ms flex justify-between items-start space-x-3"
              >
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
                <div>
                  <p className="text-[#FF9F0D] font-medium">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center space-x-12 mb-4">
        {/* Main Course Section */}
        
        <section className="py-8">
          <img src="/CoffeeOnge.png" alt="" width={24} height={24} />
          <h2 className="text-2xl font-bold mb-6">Main Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {mainCourse.map((item, index) => (
              <div key={index} className="flex justify-between items-start p-4 border rounded-lg shadow-md">
                <div  >
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
                <div>
                <p className="text-[#FF8F0d] font-medium">${item.price}</p>                </div>
              </div>
            ))}
          </div>
          
        </section>
        <div>
          <Image
            src="/Rectangle1.png"
            alt="Dessert"
            width={448}
            height={400}
          ></Image>
          </div>
      </div>
    </main>
  );
};

export default MenuSection;
