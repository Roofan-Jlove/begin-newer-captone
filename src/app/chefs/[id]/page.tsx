"use client";

import { useParams } from "next/navigation"; // Correct import for useParams
import { client, Chef, urlFor } from "../../../utils/sanity"; // Adjust the import path as necessary
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header2 from "../../../components/Header2";

const ChefDetail: React.FC = () => {
  const params = useParams(); // Get params using useParams
  const id = params?.id as string; // Ensure id is treated as a string
  const [chefData, setChefData] = useState<Chef | null>(null);

  useEffect(() => {
    const fetchChef = async () => {
      if (!id) {
        return;
      }
      const chef: Chef = await client.fetch(
        `*[_type == "chef" && _id == $id][0]`,
        { id }
      );
      setChefData(chef);
    };

    fetchChef();
  }, [id]);

  if (!chefData) {
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
        <h1 className="text-white text-3xl font-bold">Chef Detail</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Chef Detail</span>
        </p>
      </div>

      <div className="w-3/5 mx-auto py-8 flex items-center justify-center">
      
        <div className="flex justify-center items-center">
          <div className="mr-10">
            <Image
              src={urlFor(chefData.image.asset._ref).url()}
              alt={chefData.name}
              width={400}
              height={400}
              className="w-[400px] h-[400px] object-cover mb-4"
            />
          </div>
          <div className="ml-10">
            <h1 className="text-3xl font-bold mb-4">{chefData.name}</h1>
            <p>{chefData.position}</p>
            <p className="mb-4">{chefData.bio}</p>
           
            <h2 className="text-xl font-bold mb-4">Specialty</h2>
            <p>{chefData.specialty}</p>
            <h1 className="text-xl font-bold mb-4">About Chef</h1>
            <p>{chefData.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChefDetail;
