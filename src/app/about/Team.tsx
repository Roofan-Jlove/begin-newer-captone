import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => (
  <div className="text-center">
    <Image src={image} alt={name} width={150} height={150} className=" mx-auto" />
    <h3 className="mt-4 text-xl font-bold">{name}</h3>
    <p className="text-gray-600">{role}</p>
    <div className="flex justify-center space-x-4 mt-2">
      <a href="#" className="text-blue-600"><FaFacebook /></a>
      <a href="#" className="text-blue-400"><FaTwitter /></a>
      <a href="#" className="text-pink-600"><FaInstagram /></a>
    </div>
  </div>
);

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, image, text }) => (
  <div className="text-center">
    <Image src={image} alt={name} width={100} height={100} className="rounded-full mx-auto" />
    <h3 className="mt-4 text-xl font-bold">{name}</h3>
    <p className="text-gray-600 mb-4">{role}</p>
    <p className="text-gray-600">{text}</p>
  </div>
);

const Team: React.FC = () => {
  const teamMembers = [
    { name: "Mark Henry", role: "Owner", image: "/Team.png" },
    { name: "Lucky Helen", role: "Chef", image: "/Team.png" },
    { name: "Moon Henry", role: "Chef", image: "/Team.png" },
    { name: "Tom Monroe", role: "Supervisor", image: "/Team.png" },
  ];

  const testimonial = {
    name: "Alamin Hasan",
    role: "Food Specialist",
    image: "/image.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum pellentesque lorem, et volutpat. Vivamus bibendum, felis ut ultricies euismod, velit magna pretium orci, et aliquam, dolor urna sit amet lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };

  return (
    <div className=" container mx-auto px-4 py-8">
      {/* Team Member Section */}
      <section className="bg-[#FF9F0d] h-60 py-8">
        <h2 className="text-2xl text-gray-100 font-bold text-center mb-6">Team Member</h2>
        <p className="text-md text-gray-100 font-bold text-center mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-52 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">What our clients are saying</h2>
        <Testimonial {...testimonial} />
      </section>
    </div>
  );
};

export default Team;
