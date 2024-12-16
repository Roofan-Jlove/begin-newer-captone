import Header2 from '@/components/Header2'
import Hero from '@/components/LandingHero'
import OurShop from '@/components/OurShop'
import React from 'react'

const page = () => {
  return (
    <div>
        {/* <Hero /> */}
         <Header2 />
      <div
        className=" bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/homeimg/heropic.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Our Shop</h1>
        <p className="text-white mt-2">
          <a href="/" className="text-gray-300 hover:underline">
            Home
          </a>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Shop</span>
        </p>
      </div>
        <OurShop />
        
    </div>
  )
}

export default page