import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#E8E8EA] py-12 px-8  tracking-wide">
        <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 items-center gap-8">
          <h2 className="lg:col-span-2 text-xl font-semibold text-[#696A75] jakarta">
            Join our newsletter to keep up to date with us!
            <br /> Enter your email Subscribe
          </h2>
          <div className="bg-transparent border border-gray-500 flex px-1 py-1 rounded-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent pl-4 text-[16px] jakarta text-gray-400"
            />
            <button
              type="button"
              className="bg-[#2563eb] hover:font-bold  text-[#ffffff] family text-[16px] rounded-full px-5 py-2.5"
            >
              Subscribe
            </button>
          </div>
        </div>

        <hr className="my-12 border-gray-800" />

        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-8">
          <div className="lg:col-span-3 max-lg:col-span-full">
            <a href="javascript:void(0)">
              <Image src="/logo.png" alt="logo" width={200} height={80}/>
            </a>
            <p className="text-[#696A75] text-sm lg:max-w-sm mt-6 jakarta">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              gravida, mi eu pulvinar cursus, sem elit interdum mauris.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-extrabold mb-4 text-[#181A2A] family">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href=""
                  className="text-[#181A2A] hover:font-bold text-[16px] jakarta"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#181A2A] hover:font-bold text-[16px] jakarta"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#181A2A] hover:font-bold text-[16px] jakarta"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#181A2A] hover:font-bold text-[16px] jakarta"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold mb-4 text-[#181A2A] family">
              About Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href=""
                  className="text-[#181A2A] hover:font-bold text-[16px] family"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#181A2A] hover:font-bold text-[16px] family"
                >
                  Mission and Values
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#181A2A] hover:font-bold text-[16px]"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-[#181A2A] hover:font-bold text-[16px]"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-[16px] text-[#696A75] mt-8 jakarta border-t-2">
          © MetaBlog All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
