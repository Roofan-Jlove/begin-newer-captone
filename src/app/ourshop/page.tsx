import Header2 from "@/components/Header2";
import OurShop from "@/components/OurShop";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      
      <Header2 />
      <div
        className=" bg-cover bg-center h-96 flex flex-col items-center justify-center"
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
          <span className="text-orange-500">Shop</span>
        </p>
      </div>
      <OurShop />
    </div>
  );
};

export default page;
