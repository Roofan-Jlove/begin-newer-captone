import Image from 'next/image';
import React from 'react';

interface Chef {
  name: string;
  role: string;
  image: string;
}

const chefs: Chef[] = [
  {
    name: "D. Eastwood",
    role: "Chef Chief",
    image: "/homeimg/chef1.png",
  },
  {
    name: "B. Soderish",
    role: "Assistant Chef",
    image: "/homeimg/chef.png",
  },
  {
    name: "Mr. Wilton",
    role: "Assistanting Chef",
    image: "/homeimg/chef3.png",
  },
  {
    name: "WoodFood",
    role: "Chef",
    image: "/homeimg/chef4.png",
  },
];

const MeetChef: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-[#FF9F0D] text-3xl"
            style={{ fontFamily: "'Miniver', cursive" }}
          >
            Chef
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            Meet Our <span className="text-[#FF9F0D]">Chef</span>
          </h1>
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={chef.image}
                alt={chef.name}
                width={32}
              height={32}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{chef.name}</h3>
                <p className="text-gray-400 text-sm">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button className="border border-[#FF9F0D] text-[#FF9F0D] py-2 px-4 rounded hover:bg-[#FF9F0D] hover:text-black transition">
            See More
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 bg-gray-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-[#FF9F0D] italic mb-2"
            style={{ fontFamily: "'Miniver', cursive" }}
          >
            Testimonials
          </h2>
          <h3 className="text-3xl font-bold mb-6">
            What our client are saying
          </h3>
          <div className="relative bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            {/* Client Image */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Image
                src="/homeimg/client0.png"
                alt="Client"
                width={32}
              height={32}
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="pt-8">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Quisque diam pellentesque bibendum non volutpat purus scelerisque.
              </p>
              {/* Stars */}
              <div className="flex justify-center mb-2 text-[#FF9F0D]">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
              </div>
              <h4 className="font-bold">Alamin Hasan</h4>
              <p className="text-gray-400 text-sm">Food Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetChef;
