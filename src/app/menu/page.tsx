import Experience from "../../components/Experiance";
import Header2 from "../../components/Header2";
import React from "react";
import MenuSection from "./MenuSection";
import DessertSection from "./DesertDrink";
import PartnersAndClients from "../../components/PartnerClient";
import Link from "next/link";

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
        <h1 className="text-white text-3xl font-bold">Our Menu</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Menu</span>
        </p>
      </div>

      {/* Swction 2 Below */}

      <MenuSection />

      <Experience />

      <DessertSection />

      <PartnersAndClients />
    </div>
  );
};

export default page;
