import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

export default function Aboutus() {
  return (
    <div className="bg-gray-50">
      {/* First Section: About Us */}
      <section className="text-gray-800 body-font py-12">
        <div className="container mx-auto flex flex-col lg:flex-row px-4 lg:px-8 items-center lg:items-start gap-8">
          {/* Left Images */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Image
              className="rounded-lg object-cover"
              alt="hero"
              src="/about1.png"
              width={309}
              height={536}
            />
            <div className="flex flex-col gap-4">
              <Image
                className="rounded-lg object-cover"
                alt="image2"
                src="/about2.png"
                width={309}
                height={271}
              />
              <Image
                className="rounded-lg object-cover"
                alt="image3"
                src="/about3.png"
                width={309}
                height={260}
              />
            </div>
          </div>

          {/* Text Content and Buttons */}
          <div className="lg:ml-8 flex flex-col text-center lg:text-left">
            <h1 className="text-yellow-500 text-sm font-medium italic mb-4">
              About us _____
            </h1>
            <h2 className="text-3xl font-bold mb-4">
              Food is an important part of a balanced Diet
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-400 text-white py-2 px-6 rounded-lg text-lg">
                Show More
              </button>
              <button className="flex items-center text-gray-800 py-2 px-6 border rounded-lg text-lg">
                <IoPlayOutline className="mr-2" />
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Why Choose Us */}
      <section className="text-gray-800 body-font py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="rounded-lg object-cover mx-auto"
            alt="Why Choose Us"
            src="/aboutchose.png"
            width={1320}
            height={386}
          />
        </div>
      </section>

      {/* Third Section: Features */}
      <section className="text-gray-800 body-font py-12 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full flex flex-col items-center border rounded-lg p-6 bg-white">
                <Image src="/Student.png" width={80} height={80} alt="Best Chef" />
                <h3 className="text-lg font-bold text-center mt-4 mb-2">
                  BEST CHEF
                </h3>
                <p className="text-gray-600 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full flex flex-col items-center border rounded-lg p-6 bg-white">
                <Image src="/coffee.png" width={80} height={80} alt="120 Items" />
                <h3 className="text-lg font-bold text-center mt-4 mb-2">
                  120 Item food
                </h3>
                <p className="text-gray-600 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full flex flex-col items-center border rounded-lg p-6 bg-white">
                <Image src="/person.png" width={80} height={80} alt="Environment" />
                <h3 className="text-lg font-bold text-center mt-4 mb-2">
                  Clean Environment
                </h3>
                <p className="text-gray-600 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
