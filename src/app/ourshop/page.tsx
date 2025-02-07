"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../../utils/sanity"; // Update the path based on your utils folder location
import Header2 from "../../components/Header2";

// Define Food interface
interface Food {
  _id: string;
  name: string;
  description: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  price: number;
}

const FoodsPage: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const foodData: Food[] = await client.fetch(`*[_type == "food"]`);
      setFoods(foodData);
    };

    fetchData();
  }, []);

  return (
    <main>
      <Header2 />
      <div
        className="bg-cover bg-center h-48 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/homeimg/heropic.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Our Shop</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Our Shop</span>
        </p>
      </div>
    
    <div className="container w-3/4 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Food Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div
            key={food._id}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <Link href={`/ourshop/${food._id}`}>
              <div>
                <Image
                  src={urlFor(food.image.asset._ref).url()}
                  alt={food.name}
                  width={300}
                  height={300}
                  className=" w-80 h-70 object-cover"
                />
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-bold">{food.name}</h2>
              <p className="text-gray-600">{food.description}</p>
              <p className="text-gray-800 font-semibold">
                ${food.price.toFixed(2)}
              </p>
              <Link
                href={`/ourshop/${food._id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};

export default FoodsPage;
