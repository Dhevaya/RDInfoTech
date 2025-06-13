import React, { useEffect } from 'react';
import Group11Image from '../../assets/Group 11.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = ({
  heading = 'Transforming Education & Business Through Technology',
  subheading = 'RD INFOTECH – Your Trusted Partner for Training, Projects, and Franchise Growth.',
  body = 'Empower your future with certified IT courses, academic project development, and profitable franchise opportunities across India.'
}) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className="w-full pt-16 pb-0 px-0 font-sans" style={{ fontFamily: 'Inter' }}>
      <div className="max-w-screen-2xl mx-auto w-full px-8 flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Content Section */}
        <div className="w-full md:w-7/12 text-center md:text-left mb-8 md:mb-0 flex flex-col justify-start">
          <h1
            className="mb-6 text-[#280E5C]"
            style={{ fontSize: '50px', fontWeight: 600, textShadow: '2px 2px 8px #b3a1e6', fontFamily: 'Inter' }}
          >
            {heading}
          </h1>
          <p className="mb-6 text-[#3b2d71]" style={{ fontSize: '24px', fontWeight: 600, fontFamily: 'Inter' }}>
            {subheading}
          </p>
          <p className="text-lg md:text-xl text-[#333] leading-relaxed" style={{ fontSize: '24px', fontFamily: 'Inter' }}>
            {body}
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end self-end">
          <img
            src={Group11Image}
            alt="Transforming Education"
            className="w-full max-w-[420px] md:max-w-[520px] h-auto object-contain"
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
