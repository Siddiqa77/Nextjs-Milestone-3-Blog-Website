import React from 'react';

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-[1177px]">
      {/* Heading */}
      <h2 className="text-4xl family font-bold text-center text-[#1A0B5B] mt-12 mb-16">
        Our Features
      </h2>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">
        {/* First Card */}
        <div className="relative bg-[#fff] flex flex-col items-center justify-center p-6  rounded-lg ">
          {/* Top Image */}
          <img
            src="/servicepic1.png"
            alt="24/7 Support"
            className="w-16 h-16 object-contain mb-4"
          />
          {/* Text Content */}
          <h3 className="text-[#151875] text-base md:text-lg font-semibold mb-2 family">
            24/7 Support
          </h3>
          <p className="text-[#1a0b5b]/30 text-sm md:text-base font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Second Card */}
        <div className="relative bg-[#fff] flex flex-col items-center justify-center p-6  rounded-lg">
          {/* Top Image */}
          <img
            src="/servicepic2.png"
            alt="Secure Payment"
            className="w-16 h-16 object-contain mb-4"
          />
          {/* Text Content */}
          <h3 className="text-[#151875] text-base md:text-lg font-semibold mb-2 family">
            Secure Payment
          </h3>
          <p className="text-[#1a0b5b]/30 text-sm md:text-base font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Third Card */}
        <div className="relative bg-[#fff] flex flex-col items-center justify-center p-6  rounded-lg">
          {/* Top Image */}
          <img
            src="/servicepic3.png"
            alt="Fast Delivery"
            className="w-16 h-16 object-contain mb-4"
          />
          {/* Text Content */}
          <h3 className="text-[#151875] text-base md:text-lg font-semibold mb-2 family">
            Fast Delivery
          </h3>
          <p className="text-[#1a0b5b]/30 text-sm md:text-base font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>

        {/* Fourth Card */}
        <div className="relative bg-[#fff] flex flex-col items-center justify-center p-6  rounded-lg">
          {/* Top Image */}
          <img
            src="/servicepic4.png"
            alt="Easy Returns"
            className="w-16 h-16 object-contain mb-4"
          />
          {/* Text Content */}
          <h3 className="text-[#151875] text-base md:text-lg font-semibold mb-2 family">
            Easy Returns
          </h3>
          <p className="text-[#1a0b5b]/30 text-sm md:text-base font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;