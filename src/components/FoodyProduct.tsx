// components/AboutUsSection.js

export default function FoodyProduct() {
    return (
      <section className="bg-black text-white py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div>
            <p className="text-lg text-[#FF9F0d] mb-2"style={{ fontFamily: "'Miniver', cursive" }}>About us</p>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#FF9F0d]">We</span> Create the best foody product
            </h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
              elit quisque urna, vitae feugiat pretium donec id elementum. Ut
              ultrices mattis sed vitae risus faucibus. Lacus nisi, et ac dapibus
              sit eu velit in consequat.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✔</span> Lacus nisi, et ac dapibus sit eu velit in consequat.
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✔</span> Quisque diam pellentesque bibendum non dui volutpat fringilla
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
            </ul>
            <button className="bg-[#FF9F0d] text-black px-6 py-2 rounded-lg hover:bg-[#FF9F0d] transition">
              Read More
            </button>
          </div>
  
          {/* Right Content */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/homeimg/large-food.png"
              alt="Delicious food"
              className="col-span-2 rounded-lg object-cover h-64 w-full"
            />
            <img
              src="/homeimg/food-1.png"
              alt="Food 1"
              className="rounded-lg object-cover h-32 w-full"
            />
            <img
              src="/homeimg/food-2.png"
              alt="Food 2"
              className="rounded-lg object-cover h-32 w-full"
            />
            {/* <img
              src="/images/food-3.jpg"
              alt="Food 3"
              className="rounded-lg object-cover h-32 w-full"
            /> */}
          </div>
        </div>
      </section>
    );
  }
  