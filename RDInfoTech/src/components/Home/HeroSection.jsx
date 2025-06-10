import React from 'react';
import Group11Image from '../../assets/Group 11.png';

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="w-full px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-[#3b2d71] leading-tight mb-4">
            Transforming Education &<br />Business Through<br />Technology
          </h1>
          <p className="text-xl font-semibold text-[#3b2d71] mb-6">
            RD INFOTECH – Your Trusted Partner for<br />Training, Projects, and Franchise Growth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Empower your future with certified IT<br />courses, academic project development,<br />and profitable franchise opportunities<br />across India.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={Group11Image}
            alt="Transforming Education"
            className="max-w-100 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
