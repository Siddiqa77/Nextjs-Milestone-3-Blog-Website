import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-[#ffffff] container flex justify-center items-center min-h-screen bg-cover">
      {/* Image with reduced opacity */}
      <Image
        src="/heropic.png"
        alt="Hero pic"
        width={2000}
        height={1000}
        className="absolute inset-0 object-cover w-full h-full opacity-90"
      />

      {/* Centered heading */}
      <div className="absolute">
        <h1 className="relative  z-10 text-4xl md:text-6xl text-[#ffffff] font-bold text-center family leading-normal">
          Welcome to My Blog
        </h1>
        <p className="text-[#ffffff] family text-[20px] tracking-wider leading-widest">
          The Impact of Technology on the Workplace How Technology is Changing
        </p>
      </div>
    </div>
  );
};

export default Hero;
