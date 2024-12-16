import Header2 from "@/components/Header2";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <Header2 />
      <div
        className=" bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/homeimg/heropic.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Check Out Page</h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-orange-500"> › </span>{" "}
          <span className="text-orange-500">Check Out</span>
        </p>
      </div>

      {/* CHECKPUT SECTION BELOW */}

      <div className="w-[1169px] flex flex-col-2 justify-center items-center p-8 ml-14">
        {" "}
        <div className="w-2/3 p-4">
          {" "}
          <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>{" "}
          <form className="grid grid-cols-2 gap-4">
            {" "}
            <input
              type="text"
              placeholder="First name"
              className="border p-2"
            />{" "}
            <input type="text" placeholder="Last name" className="border p-2" />{" "}
            <input
              type="email"
              placeholder="Email address"
              className="border p-2"
            />{" "}
            <input
              type="tel"
              placeholder="Phone number"
              className="border p-2"
            />{" "}
            <input
              type="text"
              placeholder="Company"
              className="border p-2 col-span-2"
            />{" "}
            <select className="border p-2 col-span-2">
              {" "}
              <option>Choose country</option>
              {/* Add country options here */}{" "}
            </select>{" "}
            <input
              type="text"
              placeholder="City"
              className="border p-2 col-span-2"
            />{" "}
            <input type="text" placeholder="Zip code" className="border p-2" />{" "}
            <input
              type="text"
              placeholder="Address 1"
              className="border p-2 col-span-2"
            />{" "}
            <input
              type="text"
              placeholder="Address 2"
              className="border p-2 col-span-2"
            />{" "}
            <div className="col-span-2 flex items-center">
              {" "}
              <input
                type="checkbox"
                id="billing-address"
                className="mr-2"
              />{" "}
              <label htmlFor="billing-address">Same as shipping address</label>{" "}
            </div>{" "}
            <div className="col-span-2 flex justify-between">
              {" "}
              <button type="button" className="bg-orange-500 text-white p-2">
                <Link href="/ShopingCart">Back to cart</Link>
              </button>{" "}
              <button type="submit" className="bg-orange-500 text-white p-2">
                Proceed to shipping
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
        <div className="w-1/3 p-4">
          {" "}
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>{" "}
          <div className="space-y-4">
            {" "}
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="flex items-center">
                {" "}
                <Image
                  src="/chkout.png"
                  alt="Chicken Tikka Kabab"
                  className="w-16 h-16 mr-4"
                />{" "}
                <div>
                  {" "}
                  <h3 className="font-bold">Chicken Tikka Kabab</h3>{" "}
                  <p>150 gm x1</p> <p>505</p>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <div className="mt-4">
            {" "}
            <div className="flex justify-between">
              {" "}
              <span>Sub-total</span> <span>1305</span>{" "}
            </div>{" "}
            <div className="flex justify-between">
              {" "}
              <span>Shipping</span> <span>Free</span>{" "}
            </div>{" "}
            <div className="flex justify-between">
              {" "}
              <span>Discount</span> <span>25%</span>{" "}
            </div>{" "}
            <div className="flex justify-between">
              {" "}
              <span>Tax</span> <span>54.765</span>{" "}
            </div>{" "}
            <div className="flex justify-between font-bold">
              {" "}
              <span>Total</span> <span>432.685</span>{" "}
            </div>{" "}
            <button className="bg-orange-500 text-white mt-4 py-2 w-full">
              Place Order
            </button>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
