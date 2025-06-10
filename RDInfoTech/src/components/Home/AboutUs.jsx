import React from 'react';
import MissionImg from '../../assets/Mission.png';
import VisionImg from '../../assets/Vision.png';

const AboutUs = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-2 py-8 font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#280E5C] mb-6 text-center" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>About RD INFOTECH</h1>

      <div className="mb-8 text-gray-700 text-center text-base md:text-lg leading-loose">
        RD INFOTECH is a government-certified and ISO 9001:2015 accredited institution offering skill-based training, franchise opportunities, and project development solutions. We are committed to bridging the gap between education and employability by providing hands-on, industry-ready learning experiences.
        <br /><br />
        WIR is a strong foundation in quality, compliance, and innovation. RD INFOTECH supports students, professionals, and entrepreneurs through a wide network of training programs, academic services, and technical partnerships.
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {/* Mission Row */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-2 md:gap-8">
          <div className="flex-1 flex flex-col items-start">
            <h2 className="text-2xl font-extrabold text-[#280E5C] mb-1 w-full text-left" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>Our Mission</h2>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              To deliver accessible, practical, and future-focused education that empowers individuals and institutions. We strive to promote skill development, foster entrepreneurship, and enable real-world project experience through a structured and certified learning ecosystem.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center mt-2 md:mt-0">
            <img src={MissionImg} alt="Mission" className="w-56 md:w-64 h-56 md:h-64 object-contain" />
          </div>
        </div>
        {/* Vision Row */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-2 md:gap-8">
          <div className="flex-shrink-0 flex items-center justify-center order-2 md:order-1 mt-2 md:mt-0">
            <img src={VisionImg} alt="Vision" className="w-100 md:w-100 h-100 md:h-80 object-contain" />
          </div>
          <div className="flex-1 flex flex-col items-end order-1 md:order-2">
            <h2 className="text-2xl font-extrabold text-[#280E5C] mb-1 w-full text-right" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>Our Vision</h2>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              To be a leading national and global provider of technology education and project solutions—recognized for skill quality, trust, and impact. We envision a digitally skilled India powered by certified professionals and successful educational partners.
            </p>
          </div>
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

      <div>
        <h2 className="text-2xl font-bold text-[#280E5C] mb-4 text-center">Clients Testimonial</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-300 rounded p-4 bg-white">
            <div className="text-yellow-400 mb-2 text-xl">★★★★★</div>
            <p className="text-gray-700 italic text-base md:text-lg">"RD INFOTECH provided me with the skills and confidence to excel in my career."</p>
            <p className="mt-2 font-semibold text-right">- Ankit K.</p>
          </div>
          <div className="border border-gray-300 rounded p-4 bg-white">
            <div className="text-yellow-400 mb-2 text-xl">★★★★★</div>
            <p className="text-gray-700 italic text-base md:text-lg">"The training and support from RD INFOTECH were exceptional."</p>
            <p className="mt-2 font-semibold text-right">- Priya S.</p>
          </div>
          <div className="border border-gray-300 rounded p-4 bg-white">
            <div className="text-yellow-400 mb-2 text-xl">★★★★★</div>
            <p className="text-gray-700 italic text-base md:text-lg">"I highly recommend RD INFOTECH for anyone looking to upskill."</p>
            <p className="mt-2 font-semibold text-right">- Rahul M.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
