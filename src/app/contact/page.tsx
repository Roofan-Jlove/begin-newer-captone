import Header2 from '@/components/Header2'
import React from 'react'

const page = () => {
  return (
    <div>
         {/* Header */}
         <Header2 />
      <div
        className="bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/homeimg/heropic.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Contact Us</h1>
        <p className="text-white mt-2">
          <a href="/" className="text-gray-300 hover:underline">
            Home
          </a>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Contact</span>
        </p>
      </div>

      {/* Section 2 Below */}

      
    </div>
  )
}
export default page