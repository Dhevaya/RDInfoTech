import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ISO from '../../assets/ISO.png';
import mmsLogo from '../../assets/mms.png';
import egacLogo from '../../assets/egac.png';
import iafLogo from '../../assets/IAF.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const certifications = [
  {
    title: 'ISO 9001:2015 – Certified Quality Management System',
    description:
      'We are ISO 9001:2015 certified for implementing a globally recognized quality management system. This certification reflects our focus on structured processes, consistent service delivery, and continuous improvement in education and IT solutions.',
    img: ISO,
    alt: 'ISO 9001:2015 Certificate',
    imgClass: 'w-[350px] h-[210px] md:w-[480px] md:h-[290px]',
  },
  {
    title: 'MMS – Magnitude Management Services',
    description:
      'Our certification is supported by Magnitude Management Services, a recognized body that audits and certifies organizations based on strict quality assurance frameworks and global training standards.',
    img: mmsLogo,
    alt: 'MMS Logo',
    imgClass: 'w-[260px] h-[140px] md:w-[340px] md:h-[200px]',
  },
  {
    title: 'EGAC Accredited – Global Standards in Training',
    description:
      'Accredited by the Egyptian Accreditation Council (EGAC), our programs meet international criteria for transparency, effectiveness, and learner-focused outcomes.',
    img: egacLogo,
    alt: 'EGAC Logo',
    imgClass: 'w-[260px] h-[200px] md:w-[340px] md:h-[260px]',
  },
  {
    title: 'IAF Certified – International Accreditation Forum',
    description:
      'Through recognition from the International Accreditation Forum (IAF), our certifications gain global acceptability and add credibility to learners and partners alike.',
    img: iafLogo,
    alt: 'IAF Logo',
    imgClass: 'w-[280px] h-[120px] md:w-[380px] md:h-[180px]',
  },
];

const Certifications = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className="w-full py-16 px-0 font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-[1200px] md:max-w-[1600px] mx-auto w-full px-4 md:px-12">
        <h2 className="text-5xl font-extrabold text-center mb-8" style={{ color: '#280E5C', textShadow: '2px 2px 8px #b3a1e6', fontFamily: 'Inter, sans-serif' }}>
          Certifications & Accreditations
        </h2>
        <p className="text-xl md:text-2xl font-bold text-gray-700 text-center mb-10 uppercase">Trusted. Verified. Globally Recognized.</p>
        <div className="w-full mb-8">
          <p className="text-base md:text-lg text-[#333] leading-relaxed mb-6 text-left">
            At RD INFOTECH, we are committed to maintaining the highest standards of quality, reliability, and compliance in all our services. Our official certifications from national and international bodies validate our mission to deliver education and development services that truly make a difference.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#280E5C] text-left uppercase">Our Official Certifications:</h3>
          <div className="flex flex-col gap-12">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex flex-row items-center gap-8 w-full min-h-[180px]">
                <div className="w-[60%] text-left flex flex-col justify-center px-4 md:px-8">
                  <h4 className="text-xl md:text-2xl font-bold mb-2 text-[#280E5C] leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>{cert.title}</h4>
                  <p className="text-base md:text-lg text-[#333] leading-snug" style={{ fontFamily: 'Inter, sans-serif' }}>{cert.description}</p>
                </div>
                <div className="w-[40%] flex justify-center items-center h-full">
                  <img src={cert.img} alt={cert.alt} className={cert.imgClass + ' object-contain'} data-aos="fade-up" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#280E5C] text-white px-16 py-5 rounded-lg text-lg font-bold flex items-center gap-4 hover:bg-opacity-90 transition-colors duration-300 shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span>View Sample Certificate</span>
            <span className="text-3xl"><FaArrowRight /></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;