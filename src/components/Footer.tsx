import Link from "next/link";
import BotFooter from "./BotFooter";
import NewsletterSection from "./NewsletterSection";
import { Clock } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      {/* Support Section */}

      <NewsletterSection />

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="w-[300px]">
          <h3 className="text-xl font-bold mb-5">About Us.</h3>
          <p className="mb-6 text-sm leading-[26px]">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable safe, and professional chauffeured car
            service in major cities across World.
          </p>
          <div className="flex items-start">
            <div className="bg-[#FF9F0D] p-2 rounded mr-4 w-[77.23px] h-[70.79px] justify-center items-center">
              <Clock className="text-white font-bold" />
            </div>
            <div>
              <h4 className="font-semibold">Opening Hours</h4>
              <p className="text-sm">Mon - Sat(8.00 - 6.00)</p>
              <p className="text-sm">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-5">Useful Links</h3>
          <ul className="block space-y-3 text-md text-gray-400">
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        {/* HELPS  Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-5">Helps?</h3>
          <ul className="space-y-3 text-md text-gray-400">
            <li>
              <Link
                href="/faq"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Term & Condition
              </Link>
            </li>
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Reporting
              </Link>
            </li>
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Support Policy
              </Link>
            </li>
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/signIn"
                className="text-white hover:text-[#FF9F0D] transition-colors"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h3 className="text-xl font-bold mb-5">Recent Posts</h3>
          <div className="space-y-4 space-x-4 flex justify-start items-center">
            <Image
              src="/homeimg/postimg.png"
              alt=""
              width={70}
              height={70}
            ></Image>
            <div>
              <p className="text-sm text-orange-400">
                Is fast food good is for your body & health?
              </p>
              <p className="text-gray-400 text-sm ">February 28,2022</p>
            </div>
          </div>
          <div className="space-y-4 space-x-4 flex justify-start items-center">
            <Image
              src="/homeimg/postimg.png"
              alt=""
              width={70}
              height={70}
            ></Image>
            <div>
              <p className="text-sm text-orange-400">
                Change your food habit With organic food
              </p>
              <p className="text-gray-400 text-sm">February 28,2022</p>
            </div>
          </div>
          <div className="space-y-4 space-x-4 flex justify-start items-center">
            <Image
              src="/homeimg/postimg.png"
              alt=""
              width={70}
              height={70}
            ></Image>
            <div>
              <p className="text-sm text-orange-400">
                Do you like fastfood for your life?
              </p>
              <p className="text-gray-400 text-sm">February 28,2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="bg-slate-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-black">
            Copyright © 2022 by Anymen. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <BotFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
