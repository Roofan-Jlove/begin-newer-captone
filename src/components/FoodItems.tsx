
import Image from "next/image";
// components/ChooseFoodItemSection.js
export default function Food() {
    return (
      <section className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <p className="text-lg text-[#FF9F0D] mb-2"style={{ fontFamily: "'Miniver', cursive" }}>Food Category</p>
            <h2 className="text-4xl font-bold">
              Choose <span className="text-[#FF9F0D]">Food Item</span>
            </h2>
          </div>
  
          {/* Food Item Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="relative">
              <Image
                src="/homeimg/food-item-1.png"
                alt="Food Item 1"
                className="rounded-lg object-cover h-48 w-full"
              />
              <span className="absolute top-2 left-2 bg-[#FF9F0D] text-black px-2 py-1 text-sm rounded">
                Save 30%
              </span>
              <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">
                Fast Food Dish
              </p>
            </div>
            <Image
              src="/homeimg/food-item-2.png"
              alt="Food Item 2"
              className="rounded-lg object-cover h-48 w-full"
            />
            <Image
              src="/homeimg/food-item-3.png"
              alt="Food Item 3"
              className="rounded-lg object-cover h-48 w-full"
            />
            <Image
              src="/homeimg/food-item-4.png"
              alt="Food Item 4"
              className="rounded-lg object-cover h-48 w-full"
            />
          </div>
  
          {/* Highlight Section */}

          <section className="bg-black text-white py-16 px-8">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-1">
        {/* Left: Image Grid */}
        <div className="grid grid-cols-2">
          <div className="col-span-2">
            <Image
              src="/homeimg/food-highlight-1.png"
              alt="Tacos"
              width={500}
              height={300}
              className="w-[362px] h-[356px] rounded-lg"
            />
          </div>
          <Image
            src="/homeimg/food-highlight-3.png"
            alt="Burger"
            width={240}
            height={200}
            className="w-[281px] h-[231px] mt-[30px] rounded-lg"
           />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:w-1/2">
          <Image
            src="/homeimg/food-highlight-2.png"
            alt="Steak"
            width={240}
            height={200}
            className="rounded-lg"
          />
          <Image
            src="/homeimg/food-highlight-4.png"
            alt="Fries"
            width={240}
            height={200}
            className="rounded-lg"
          />
          
          <Image
            src="/homeimg/food-highlight-5.png"
            alt="Salad"
            width={240}
            height={200}
            className="rounded-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-[#FF9F0D] text-lg font-semibold"style={{ fontFamily: "'Miniver', cursive" }}>Why Choose us</h2>
          <h1 className="text-4xl font-bold">
            Extra <span className="text-[#FF9F0D]">ordinary taste</span> <br /> And Experienced
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dictum pellentesque lorem non mollis. Integer feugiat tortor. Ut
            quis quam nec magna dictum eleifend ac ut erat.
          </p>

          {/* Icon Features */}
          <div className="flex items-center space-x-4">
            {/* Icon 1 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-[#FF9F0D] p-4 ">
                <Image
                  src="/homeimg/Hamburger.png"
                  alt="Fast Food"
                  width={32}
                  height={32}
                />
              </div>
              <p>Fast Food</p>
            </div>

            {/* Icon 2 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-[#FF9F0D] p-4 ">
                <Image
                  src="/homeimg/Cookie.png"
                  alt="Lunch"
                  width={32}
                  height={32}
                />
              </div>
              <p>Lunch</p>
            </div>

            {/* Icon 3 */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-[#FF9F0D] p-4 ">
                <Image
                  src="/homeimg/Wine.png"
                  alt="Dinner"
                  width={32}
                  height={32}
                />
              </div>
              <p>Dinner</p>
            </div>
          </div>

          {/* Highlighted Box */}
          <div className="flex items-center space-x-4 bg-white text-black p-4 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-[#FF9F0D]">30+</h2>
            <p>
              Years of <br />
              Experienced
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
      </section>
    );
  }
  