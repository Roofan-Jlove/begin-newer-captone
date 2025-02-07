import Header2 from "../../components/Header2";
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
        <h1 className="text-white text-3xl font-bold">
          On Contact and Custom 404 Error
        </h1>
        <p className="text-white mt-2">
          <Link href="/" className="text-gray-300 hover:underline">
            Home
          </Link>{" "}
          <span className="text-[#FF9F0D]">›</span>{" "}
          <span className="text-[#FF9F0D]">Contact - 404</span>
        </p>
      </div>

      {/* sECTION 2 bELOW */}

      <div className="flex h-96 items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#FF9F0D] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Oops! Look likes something going wrong
          </h2>
          <p className="text-gray-500 mb-6">
            Page cannot be found! We&apos;ll fix it as soon as we can. Meanwhile,
            check out these fresh ideas.
          </p>
          <Link
            href="/"
            className="bg-[#FF9F0D] text-white py-2 px-6 rounded-lg hover:bg-[#FF9F0D]"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
