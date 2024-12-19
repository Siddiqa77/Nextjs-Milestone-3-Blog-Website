import AboutSection from "@/components/AboutSection";
import Service from "@/components/Service";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Heading */}
      <div className="wrapper py-12 px-6">
        <h2 className="text-3xl md:text-5xl family font-bold text-center text-[#1A0B5B] mb-12">
          About Us
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-16 wrapper">
          {/* Image Section */}
          <div className="relative max-w-sm md:max-w-md">
            <div className="absolute inset-0 bg-[#2b3cab] rounded-md -z-10"></div>
            <img
              className="w-full h-auto rounded-md shadow-lg"
              src="/aboutpic.png"
              alt="About Us"
            />
          </div>

          {/* Content Section */}
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold family text-[#151875] mb-4">
              Know more About Blog <br /> Post History
            </h3>
            <p className="text-base md:text-lg text-[#8a8fb9]  jakarta leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <Link href="/contact">
              <div className="inline-block px-6 py-3 bg-[#2563eb] hover:font-bold  text-[#ffffff] family text-[16px]] text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section Component */}
      <div className="bg-gray-100 py-12 px-6">
        <AboutSection />
      </div>

      {/* Services Section Component */}
      <div className="py-12 px-6">
        <Service />
      </div>
    </div>
  );
};

export default About;
