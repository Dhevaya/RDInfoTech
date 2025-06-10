// import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import ISO from '../../assets/ISO.png'
// import mmsLogo from '../../assets/mms.png';
// import egacLogo from '../../assets/egac.png';
// import iafLogo from '../../assets/IAF.png';

// const Certifications = () => {
//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-[#3b2d71] text-center mb-4">Certifications & Accreditations</h2>
//         <p className="text-xl text-gray-700 text-center mb-12">Trusted. Verified. Globally Recognized.</p>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Content Section */}
//           <div>
//             <p className="text-gray-700 leading-relaxed mb-6">
//               At RD INFOTECH, we are committed to maintaining the highest standards of quality,
//               reliability, and compliance in all our services. Our official certifications from national and
//               international bodies validate our mission to deliver education and development services that
//               truly make a difference.
//             </p>
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Official Certifications:</h3>

//             {/* Certification Item 1 */}
//             <div className="flex items-start mb-8">
//               <div className="flex-grow pr-4">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-2">ISO 9001:2015 - Certified Quality Management System</h4>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   We are ISO 9001:2015 certified for implementing a globally recognized
//                   quality management system. This certification reflects our focus on
//                   structured processes, consistent service delivery, and continuous improvement in
//                   education and IT solutions.
//                 </p>
//               </div>
//               <img src={ISO} alt="ISO 9001:2015 Certificate" className="w-64 h-24 object-contain" /> {/* Placeholder for image */}
//             </div>

//             {/* Certification Item 2 */}
//             <div className="flex items-start mb-8">
//               <div className="flex-grow pr-4">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-2">MMS - Magnitude Management Services</h4>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   Our certification is supported by Magnitude Management Services, a
//                   recognized body that audits and certifies
//                   organizations based on strict quality
//                   assurance frameworks and global
//                   training standards.
//                 </p>
//               </div>
//               <img src={mmsLogo} alt="MMS Logo" className="w-24 h-24 object-contain" />
//             </div>

//             {/* Certification Item 3 */}
//             <div className="flex items-start mb-8">
//               <div className="flex-grow pr-4">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-2">EGAC Accredited - Global Standards in Training</h4>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   Accredited by the Egyptian Accreditation
//                   Council (EGAC), our programs meet
//                   international criteria for transparency,
//                   effectiveness, and learner-focused
//                   outcomes.
//                 </p>
//               </div>
//               <img src={egacLogo} alt="EGAC Logo" className="w-24 h-24 object-contain" />
//             </div>

//             {/* Certification Item 4 */}
//             <div className="flex items-start mb-8">
//               <div className="flex-grow pr-4">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-2">IAF Certified - International Accreditation Forum</h4>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   Through recognition from the
//                   International Accreditation Forum (IAF),
//                   our certifications gain global
//                   acceptability and add credibility to
//                   learners and partners alike.
//                 </p>
//               </div>
//               <img src={iafLogo} alt="IAF Logo" className="w-24 h-24 object-contain" />
//             </div>
//           </div>

//           {/* Right Image Section (for certifications) */}
//           <div className="hidden md:flex flex-col items-center justify-center space-y-8">
//             {/* Images are rendered alongside their descriptions in the left column for mobile/smaller screens */}
//           </div>
//         </div>

//         <div className="flex justify-center mt-8">
//           <button className="bg-[#3b2d71] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-opacity-90 transition-colors duration-300">
//             <span>View Sample Certificate</span>
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ISO from '../../assets/ISO.png';
import mmsLogo from '../../assets/mms.png';
import egacLogo from '../../assets/egac.png';
import iafLogo from '../../assets/IAF.png';

const Certifications = () => {
  return (
    <section className="py-8">
      <div className="w-full px-8">
        <h2 className="text-2xl font-bold text-[#3b2d71] text-center mb-2 uppercase">Certifications & Accreditations</h2>
        <p className="text-base font-bold text-gray-700 text-center mb-6 uppercase">Trusted. Verified. Globally Recognized.</p>

        <div className="max-w-3xl mx-auto">
          {/* Introductory Paragraph */}
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            At RD INFOTECH, we are committed to maintaining the highest standards of quality, reliability, and compliance in all our services. Our official certifications from national and international bodies validate our mission to deliver education and development services that truly make a difference.
          </p>
          <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">Our Official Certifications:</h3>

          {/* Certification Item 1 */}
          <div className="flex items-start mb-6">
            <div className="flex-grow pr-4">
              <h4 className="text-base font-bold text-gray-800 uppercase">ISO 9001:2015 – Certified Quality Management System</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                We are ISO 9001:2015 certified for implementing a globally recognized quality management system. This certification reflects our focus on structured processes, consistent service delivery, and continuous improvement in education and IT solutions.
              </p>
            </div>
            <img src={ISO} alt="ISO 9001:2015 Certificate" className="w-64 h-32 object-contain" />
          </div>

          {/* Certification Item 2 */}
          <div className="flex items-start mb-6">
            <div className="flex-grow pr-4">
              <h4 className="text-base font-bold text-gray-800 uppercase">MMS – Magnitude Management Services</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Our certification is supported by Magnitude Management Services, a recognized body that audits and certifies organizations based on strict quality assurance frameworks and global training standards.
              </p>
            </div>
            <img src={mmsLogo} alt="MMS Logo" className="w-24 h-24 object-contain" />
          </div>

          {/* Certification Item 3 */}
          <div className="flex items-start mb-6">
            <div className="flex-grow pr-4">
              <h4 className="text-base font-bold text-gray-800 uppercase">EGAC Accredited – Global Standards in Training</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Accredited by the Egyptian Accreditation Council (EGAC), our programs meet international criteria for transparency, effectiveness, and learner-focused outcomes.
              </p>
            </div>
            <img src={egacLogo} alt="EGAC Logo" className="w-24 h-24 object-contain" />
          </div>

          {/* Certification Item 4 */}
          <div className="flex items-start mb-6">
            <div className="flex-grow pr-4">
              <h4 className="text-base font-bold text-gray-800 uppercase">IAF Certified – International Accreditation Forum</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Through recognition from the International Accreditation Forum (IAF), our certifications gain global acceptability and add credibility to learners and partners alike.
              </p>
            </div>
            <img src={iafLogo} alt="IAF Logo" className="w-24 h-24 object-contain" />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-[#3b2d71] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 hover:bg-opacity-90 transition-colors duration-300 uppercase">
            <span>View Sample Certificate</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;