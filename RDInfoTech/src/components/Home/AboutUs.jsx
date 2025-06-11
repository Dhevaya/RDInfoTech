import React, { useEffect } from 'react';
import MissionImg from '../../assets/Mission.png';
import VisionImg from '../../assets/Vision.png';
import Testimonials from './Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div className="w-full bg-[#E5E6EA] h-[28rem] flex items-center justify-center text-gray-400 text-2xl mb-8">
        Image Placeholder
      </div>
      <div className="w-full max-w-7xl mx-auto py-8 px-2" style={{ fontFamily: 'Inter, sans-serif' }}>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#280E5C] mb-6 text-center" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>
          About RD INFOTECH
        </h1>

        <div className="mb-8 text-gray-700 text-center text-left text-base md:text-lg leading-loose text-justify md:text-left">
          RD INFOTECH is a government-certified and ISO 9001:2015 accredited institution offering skill-based training, franchise opportunities, and project development solutions. We are committed to bridging the gap between education and employability by providing hands-on, industry-ready learning experiences.
          <br /><br />
          WIR is a strong foundation in quality, compliance, and innovation. RD INFOTECH supports students, professionals, and entrepreneurs through a wide network of training programs, academic services, and technical partnerships.
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 gap-y-0 mb-0 pb-0">
          {/* Mission Section (Top Row) */}
          <div className="flex flex-col justify-center mb-0 pb-0">
            <h1 className="text-2xl font-extrabold text-[#280E5C] mb-2 text-left" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>
              Our Mission
            </h1>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed">
              To deliver accessible, practical, and future-focused education that empowers individuals and institutions. We strive to promote skill development, foster entrepreneurship, and enable real-world project experience through a structured and certified learning ecosystem.
            </p>
          </div>
          <div className="flex items-center justify-center mb-0 pb-0">
            <img
              src={MissionImg}
              alt="Mission"
              className="w-100 md:w-100 lg:w-100 h-auto object-contain"
              data-aos="fade-up"
            />
          </div>
          {/* Vision Section (Bottom Row) */}
          <div className="flex items-center justify-center -mt-16">
            <img
              src={VisionImg}
              alt="Vision"
              className="w-800 md:w-800 lg:w-800 h-auto object-contain"
              data-aos="fade-left"
            />
          </div>
          <div className="flex flex-col justify-center -mt-16">
            <h1 className="text-2xl font-extrabold text-[#280E5C] mb-2 text-right" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>
              Our Vision
            </h1>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed">
              To be a leading national and global provider of technology education and project solutions—recognized for skill quality, trust, and impact. We envision a digitally skilled India powered by certified professionals and successful educational partners.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#280E5C] mb-4 text-center">Why Choose RD INFOTECH?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-6 text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            <li>
              <strong>ISO 9001:2015, EAGC, IAF, and MSME Certified</strong> - Globally and nationally recognized for quality management and training standards.
            </li>
            <li>
              <strong>Government Recognized Training & Certification</strong> - Our certifications hold value for job applications, career growth, and skill validation.
            </li>
            <li>
              <strong>Job-Oriented Courses & Real-Time Projects</strong> - Programs designed to match current industry needs, with hands-on learning at the core.
            </li>
            <li>
              <strong>Franchise Opportunities with Complete Support</strong> - Start your own certified center with our ready-to-launch business model, LMS, and ongoing guidance.
            </li>
            <li>
              <strong>Custom Project Development for Students & Businesses</strong> - Get academic and enterprise-level project solutions, including documentation and deployment.
            </li>
            <li>
              <strong>Hybrid Learning Model</strong> - Flexible online and offline classes for students, working professionals, and franchise partners.
            </li>
            <li>
              <strong>Placement Assistance & Internship Opportunities</strong> - Our training includes career support through resume building, interview prep, and referrals.
            </li>
          </ul>
        </div>

        <Testimonials />
      </div>
    </>
  );
};

export default AboutUs;