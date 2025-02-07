"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client, Chef, urlFor } from "../../utils/sanity";
import Header2 from "../../components/Header2";

const ChefsPage = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const chefsData = await client.fetch(`*[_type == "chef"]`);
      setChefs(chefsData);
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
        <h1 className="text-white text-3xl font-bold">Our Chefs</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Our Chefs</span>
        </p>
      </div>
    
    <div className="container w-3/4 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 bg-black text-white"><span className="text-orange-500">Our</span> Chefs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chefs.map((chef) => (
          <div
            key={chef._id}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <Link href={`/chefs/${chef._id}`}>
              <div>
                <Image
                  src={urlFor(chef.image.asset._ref).url()}
                  alt={chef.name}
                  width={300}
                  height={300}
                  className=" w-80 h-70 object-cover"
                />
              </div>
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-bold">{chef.name}</h2>
              <p className="text-gray-600">{chef.bio}</p>
              <Link
                href={`/chefs/${chef._id}`}
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};

export default ChefsPage;
