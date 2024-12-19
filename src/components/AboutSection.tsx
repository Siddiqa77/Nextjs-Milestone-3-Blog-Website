import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-4 py-12 ">
      <div className="max-w-5xl w-full p-6 md:p-12 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Image */}
          <img
            className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-md"
            src="/aboutsectionpic1.png"
            alt="Profile"
          />
          {/* Profile Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold family text-[#1A0B5B]">Jonathan Doe</h3>
            <p className="text-gray-800 text-sm md:text-base">
              Managing Director
            </p>
          </div>
        </div>
        {/* Description */}
        <p className="mt-6 text-gray-500 text-center md:text-left jakarta leading-relaxed">
          Meet Jonathan Doe, a passionate writer and blogger with a love for
          technology and travel. Jonathan holds a degree in Computer Science
          and has spent years working in the tech industry, gaining a deep
          understanding of the impact technology has on our lives.
        </p>
        {/* Social Icons */}
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebookSquare size={24} />
          </a>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagramSquare size={24} />
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-600 transition transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitterSquare size={24} />
          </a>
          <a
            href="#"
            className="text-red-600 hover:text-red-800 transition transform hover:scale-110"
            aria-label="YouTube"
          >
            <FaYoutubeSquare size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
