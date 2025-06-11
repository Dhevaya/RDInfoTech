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
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#280E5C] mb-6 text-center" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>About RD INFOTECH</h1>

        <div className="mb-8 text-gray-700 text-center text-left text-base md:text-lg leading-loose">
        RD INFOTECH is a government-certified and ISO 9001:2015 accredited institution offering skill-based training, franchise opportunities, and project development solutions. We are committed to bridging the gap between education and employability by providing hands-on, industry-ready learning experiences.
        <br /><br />
        WIR is a strong foundation in quality, compliance, and innovation. RD INFOTECH supports students, professionals, and entrepreneurs through a wide network of training programs, academic services, and technical partnerships.
      </div>

        <div className="mb-6 w-full grid grid-cols-1 gap-8 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6">
          {/* Mission Text (Top Left) */}
          <div className="md:row-start-1 md:col-start-1 flex flex-col justify-center">
            <h1 className="text-2xl font-extrabold text-[#280E5C] mb-1 text-left" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>Our Mission</h1>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            To deliver accessible, practical, and future-focused education that empowers individuals and institutions. We strive to promote skill development, foster entrepreneurship, and enable real-world project experience through a structured and certified learning ecosystem.
          </p>
          </div>
          {/* Mission Image (Top Right) */}
          <div className="md:row-start-1 md:col-start-2 flex items-center justify-center">
            <img src={MissionImg} alt="Mission" className="w-64 md:w-80 h-84 md:h-94 object-contain" data-aos="fade-up" />
          </div>
          {/* Vision Image (Bottom Left) */}
          <div className="md:row-start-2 md:col-start-1 flex items-center justify-center">
            <img src={VisionImg} alt="Vision" className="w-64 md:w-96 h-48 md:h-72 object-contain" data-aos="fade-left" />
        </div>
          {/* Vision Text (Bottom Right) */}
          <div className="md:row-start-2 md:col-start-2 flex flex-col justify-center">
            <h1 className="text-2xl font-extrabold text-[#280E5C] mb-1 text-right" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>Our Vision</h1>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            To be a leading national and global provider of technology education and project solutions—recognized for skill quality, trust, and impact. We envision a digitally skilled India powered by certified professionals and successful educational partners.
          </p>
        </div>
      </div>

      <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#280E5C] mb-4 text-center">Why Choose RD INFOTECH?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-6 text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
          <li><strong>ISO 9001:2015, EAGC, IAF, and MSME Certified</strong> - Globally and nationally recognized for quality management and training standards.</li>
          <li><strong>Government Recognized Training & Certification</strong> - Our certifications hold value for job applications, career growth, and skill validation.</li>
          <li><strong>Job-Oriented Courses & Real-Time Projects</strong> - Programs designed to match current industry needs, with hands-on learning at the core.</li>
          <li><strong>Franchise Opportunities with Complete Support</strong> - Start your own certified center with our ready-to-launch business model, LMS, and ongoing guidance.</li>
          <li><strong>Custom Project Development for Students & Businesses</strong> - Get academic and enterprise-level project solutions, including documentation and deployment.</li>
          <li><strong>Hybrid Learning Model</strong> - Flexible online and offline classes for students, working professionals, and franchise partners.</li>
          <li><strong>Placement Assistance & Internship Opportunities</strong> - Our training includes career support through resume building, interview prep, and referrals.</li>
        </ul>
      </div>

        <Testimonials />
      </div>
    </>
  );
};

export default AboutUs;
