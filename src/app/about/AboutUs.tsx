import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";

export default function Aboutus() {
  return (
    <div>
      {/* Frist Section: Content and Buttons */}
      <section className="w-[1169px]  text-white body-font ">
        <div className="container mx-auto flex px-5 py-24 justify-center items-center">
          {/* <Hero /> */}
          <div className="flex flex-col md:flex-row items-start md:space-x-4 mt-2 ml-2">
            <Image
              className="object-cover object-center w-336px h-536px mt-530px ml-300px radius-6px"
              alt="hero"
              src="/about1.png"
              width={309}
              height={536}
            />
          </div>
          {/* Right Images */}
          <div className="flex flex-col items-center space-y-2 space-x-2 mt-2 ml-2">
            <Image
              className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
              alt="image2"
              src="/about2.png"
              width={309}
              height={271}
            />
            {/* Bottom Image */}
            <Image
              className="object-cover object-center w-309px h-260px mt-882px ml-660px radius-6px"
              alt="image3"
              src="/about3.png"
              width={309}
              height={260}
            />
          </div>
          {/* Text Content and Buttons */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex mt-714px flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic font-miniver">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-black  border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 block" />{" "}
                {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-[1169px] text-white body-font justify-around">
        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col w-[579px]">
          <h1 className="text-black text-3xl text-bold">Why Choose Us</h1>
          <p className="text-black text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
        </div>
        <div>
          <Image
            className="mb-5 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-2 "
            alt="hero"
            src="/aboutchose.png"
            width={1320}
            height={386}
          />
        </div>
      </section>
      {/* Thrid section */}
      <section className="w-[1320px]">
        <div className="text-white body-font">
          <div className="container px-3 py-20 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full  flex justify-center items-center  flex-col border-2 rounded-lg overflow-hidden">
                  <Image src="/Student.png" width={80} height={80} alt="blog" />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                      BEST CHEF
                    </h1>
                    <p className="leading-relaxed mb-3 text-center text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque diam pellentesque bibendum non dui volutpat
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 flex justify-center items-center  flex-col rounded-lg overflow-hidden">
                  <Image
                    className=""
                    src="/coffee.png"
                    width={80}
                    height={80}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                      120 Item food
                    </h1>
                    <p className="leading-relaxed mb-3 text-center text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque diam pellentesque bibendum non dui volutpat
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
                  <Image
                    className=" flex flex-col justify-center items-center"
                    src="/person.png"
                    width={80}
                    height={80}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                      Clean Environment
                    </h1>
                    <p className="leading-relaxed mb-3 text-center text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque diam pellentesque bibendum non dui volutpat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
