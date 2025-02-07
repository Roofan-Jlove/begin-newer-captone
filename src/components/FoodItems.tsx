import Image from "next/image";
// components/ChooseFoodItemSection.js
export default function Food() {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p
            className="text-lg text-[#FF9F0D] mb-2"
            style={{ fontFamily: "'Miniver', cursive" }}
          >
            Food Category
          </p>
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
              width={48}
              height={48}
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
            width={48}
            height={48}
            className="rounded-lg object-cover h-48 w-full"
          />
          <Image
            src="/homeimg/food-item-3.png"
            alt="Food Item 3"
            width={48}
            height={48}
            className="rounded-lg object-cover h-48 w-full"
          />
          <Image
            src="/homeimg/food-item-4.png"
            alt="Food Item 4"
            width={48}
            height={48}
            className="rounded-lg object-cover h-48 w-full"
          />
        </div>

        {/* Highlight Section */}

        <section className="bg-black text-white py-16 px-8">
          <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-1">
            {/* Left: Image Grid */}
                        
            <div className="sec4 px-[20px] py-[60px] sm:px-[60px] text-white max-w-[1320px] lg:h-[800px] mx-auto flex justify-between items-center flex-col lg:flex-row lg:gap-0 gap-[30px]">
              <div className="lg:w-[50%] flex flex-wrap gap-[20px] justify-center">
                <div className="flex gap-[20px] items-end flex-col sm:flex-row">
                  <div className="sm:max-w-[360px] h-[360px]">
                    <Image
                      src="/homeimg/food-highlight-1.png"
                      className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="sm:max-w-[290px] h-[230px] pb-[10px]">
                    <Image
                      src="/homeimg/food-highlight-2.png"
                      className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="flex gap-[20px] items-start flex-col sm:flex-row">
                  <div className="sm:max-w-[244px] h-[306px] pt-[10px]">
                    <Image
                      src="/homeimg/food-highlight-3.png"
                      className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="sm:max-w-[225px] h-[225px] pt-[10px]">
                    <Image
                      src="/homeimg/food-highlight-4.png"
                      className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <div className="w-[161px] h-[166px]">
                      <Image
                        src="/homeimg/food-highlight-5.png"
                        className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                        alt=""
                        width={50}
                      height={50}
                      />
                    </div>
                    <div className="w-[161px] h-[166px]">
                      <Image
                        src="/homeimg/food-highlight-6.png"
                        className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                        alt=""
                        width={50}
                      height={50}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Text Content */}

              <div className="lg:w-[40%]">
                <h3 className=" text-[#FF9F0D] text-[32px] font-normal lg:text-start text-center"
                style={{ fontFamily: "'Miniver', cursive" }}>
                  Why Choose us
                </h3>
                <div className="flex flex-col gap-[25px]">
                  <h1
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    className="md:leading-[68px] font-helvetica text-[38px] md:text-[60px] text-white lg:text-start text-center"
                  >
                    <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste
                    And Experienced
                  </h1>
                  <p className="font-normal text-[16px] text-white text-center lg:text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                    fringilla bibendum. Urna, elit augue urna, vitae feugiat
                    pretium donec id elementum. Ultrices mattis sed vitae mus
                    risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                  </p>
                  <div className="flex gap-[20px] lg:justify-start justify-center">
                    <div className="flex flex-col gap-[10px] items-center cursor-pointer">
                      <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                        <img
                          src="/homeimg/Hamburger.png"
                          className="w-[50px] h-[50px] object-contain"
                          alt=""
                        />
                      </div>
                      <h6 className="font-normal text-[18px] text-center lg:text-start">
                        Fast Food
                      </h6>
                    </div>
                    <div className="flex flex-col gap-[10px] items-center cursor-pointer">
                      <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                        <img
                          src="/homeimg/cookie.png"
                          className="w-[50px] h-[50px] object-contain"
                          alt=""
                        />
                      </div>
                      <h6 className="font-normal text-[18px] text-center lg:text-start">
                        Lunch
                      </h6>
                    </div>
                    <div className="flex flex-col gap-[10px] items-center cursor-pointer">
                      <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                        <img
                          src="/homeimg/wine.png"
                          className="w-[50px] h-[50px] object-contain"
                          alt=""
                        />
                      </div>
                      <h6 className="font-normal text-[18px] text-center lg:text-start">
                        Dinner
                      </h6>
                    </div>
                  </div>
                  <div className="h-[100%] flex justify-center lg:justify-start">
                    <div className="bg-[#FF9F0D] rounded-l-[6px] w-[5px] h-auto"></div>

                    <div className="flex justify-around bg-white py-[12px] rounded-r-[6px] max-w-[300px]">
                      <h2
                        className="text-[#FF9F0D] font-bold text-[48px]"
                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                      >
                        30+
                      </h2>
                      <div>
                        <p className="m-0 text-[20px] font-normal text-[#1E1E1E]">
                          Years of
                        </p>
                        <p
                          className="m-0 text-[24px] font-bold text-[#1E1E1E]"
                          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                        >
                          Experienced
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
