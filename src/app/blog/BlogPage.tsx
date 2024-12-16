import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaBars } from 'react-icons/fa';

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <button className="text-xl">
            <FaBars />
          </button>
        </div>
        <div>
          <Image
            src="/user-profile.png"
            alt="User Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Main Content Section */}
        <main className="lg:w-3/4 lg:pr-8">
          {/* First Blog Post */}
          <article className="mb-8">
            <div className="relative h-96">
              <Image
                src="/Tacos.png"
                alt="Tacos"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-50 text-white p-4 rounded-b-lg">
                <h2 className="text-2xl font-bold">15 Reasons To Do A Digital Detox Challenge</h2>
                <p className="text-sm">Jan 25, 2021 • 5 min read</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </article>

          {/* Second Blog Post */}
          <article className="mb-8">
            <div className="relative h-96">
              <Image
                src="/stuffed-potatoes.png"
                alt="Stuffed Potatoes"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-50 text-white p-4 rounded-b-lg">
                <h2 className="text-2xl font-bold">Traditional Stuffed Potatoes with Ground Beef Cheese</h2>
                <p className="text-sm">Jan 25, 2021 • 5 min read</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </article>
        </main>

        {/* Sidebar Section */}
        <aside className="lg:w-1/4">
          <div className="p-4 mb-8 border rounded-lg shadow-md text-center">
            <Image src="/user-profile.png" alt="Author" width={96} height={96} className="rounded-full mx-auto" />
            <h3 className="mt-4 text-xl font-bold">Alamin Hasan</h3>
            <p className="text-gray-600">Food Specialist</p>
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="#" className="text-blue-600"><FaFacebook /></Link>
              <Link href="#" className="text-blue-400"><FaTwitter /></Link>
              <Link href="#" className="text-pink-600"><FaInstagram /></Link>
            </div>
          </div>

          <div className="p-4 border rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Recent Posts</h4>
            <ul>
              <li className="mb-4">
                <Link href="#">
                  <p className="flex items-center">
                    <Image src="/product-img3.png" alt="Dish" width={48} height={48} className="rounded-lg mr-4" />
                    <span>Dish Title</span>
                  </p>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#">
                  <p className="flex items-center">
                    <Image src="/about3.png" alt="Dish" width={48} height={48} className="rounded-lg mr-4" />
                    <span>Dish Title</span>
                  </p>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#">
                  <p className="flex items-center">
                    <Image src="/product-img.png" alt="Dish" width={48} height={48} className="rounded-lg mr-4" />
                    <span>Dish Title</span>
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
