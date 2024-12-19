import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="wrapper py-12 px-6 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#1A0B5B] mb-12">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Information About Us */}
        <div>
          <h3 className="text-[#151875] text-4xl font-bold mb-4">Information About Us</h3>
          <p className="text-[#8a8fb9] text-base leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.
          </p>
          <div className="flex space-x-3">
            <div className="w-6 h-6 bg-[#5625df] rounded-full"></div>
            <div className="w-6 h-6 bg-[#ff27b7] rounded-full"></div>
            <div className="w-6 h-6 bg-[#37daf3] rounded-full"></div>
          </div>
        </div>

        {/* Contact Way */}
        <div>
          <h3 className="text-[#151875] text-4xl font-bold mb-4">Contact Way</h3>
          <div className="space-y-6">
            <div>
              <p className="text-[#8a8fb9] font-semibold">Tel: 877-67-88-99</p>
              <p className="text-[#8a8fb9] font-semibold">E-Mail: shop@store.com</p>
            </div>
            <div>
              <p className="text-[#8a8fb9] font-semibold">Support Forum</p>
              <p className="text-[#8a8fb9] font-semibold">For over 24hr</p>
            </div>
            <div>
              <p className="text-[#8a8fb9] font-semibold">20 Margaret st, London</p>
              <p className="text-[#8a8fb9] font-semibold">Great Britain, 3NM98-LK</p>
            </div>
          </div>
        </div>
      </div>

      {/* Get In Touch Form */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-[#151875] text-4xl font-bold mb-6">Get In Touch</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fb2e86]"
            />
            <input
              type="email"
              placeholder="Your E-mail*"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fb2e86]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject*"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fb2e86]"
          />
          <textarea
            placeholder="Type Your Message*"
            rows={5}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#fb2e86]"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-[#2563eb] hover:font-bold  text-[#ffffff] family text-[16px] "
          >
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
