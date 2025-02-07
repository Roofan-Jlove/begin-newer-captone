"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../../utils/sanity";
import AddToCartButton from "../../../components/AddToCartButton";
import Link from "next/link";
import Header2 from "../../../components/Header2";


interface Food {
  _id: string;
  name: string;
  description: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  category: string;
  price: number;
  originalPrice?: number;
  tags: string[];
  available: boolean;
}

const FoodDetail: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;
  const [foodData, setFoodData] = useState<Food | null>(null);

  useEffect(() => {
    const fetchFood = async () => {
      if (!id) {
        return;
      }
      const food: Food = await client.fetch(
        `*[_type == "food" && _id == $id][0]`,
        { id }
      );
      setFoodData(food);
    };

    fetchFood();
  }, [id]);

  if (!foodData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Header2 />
      <div
        className="bg-cover bg-center h-48 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/homeimg/heropic.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Food Detail</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Food Detail</span>
        </p>
      </div>

      
    <div className="w-3/5 justify-center mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-4">{foodData.name}</h1>
      <div className="flex justify-center">
        <div className="mx-auto p-4">
          <Image
            src={urlFor(foodData.image.asset._ref).url()}
            alt={foodData.name}
            width={400}
            height={400}
            className="w-[400px] h-[400px] object-cover mb-4"
          />
        </div>
        <div className="items-center">
          <h2 className="text-xl font-bold mb-4">Description</h2>
          <p className="mb-4">{foodData.description}</p>
          <h2 className="text-xl font-bold mb-4">Category</h2>
          <p className="mb-4">{foodData.category}</p>
          <h2 className="text-xl font-bold mb-4">Price</h2>
          <p className="mb-4">
            ${foodData.price.toFixed(2)}{" "}
            {foodData.originalPrice && (
              <span className="line-through text-gray-500">
                ${foodData.originalPrice.toFixed(2)}
              </span>
            )}
          </p>
          <h2 className="text-xl font-bold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {foodData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-4">Availability</h2>
          <p className="mb-4">
            {foodData.available ? "Available" : "Out of Stock"}
          </p>
          <AddToCartButton
            product={{
              id: foodData._id,
              name: foodData.name,
              price: foodData.price,
              image: urlFor(foodData.image.asset._ref).url(), // Pass image URL
            }}
          />
        </div>
      </div>
      </div>
    </main>
  );
};

export default FoodDetail;
