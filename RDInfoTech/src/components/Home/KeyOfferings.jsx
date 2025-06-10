// // import React from 'react';
// // import { FaArrowRight } from 'react-icons/fa';

// // const KeyOfferings = () => {
// //   return (
// //     <section className="bg-white py-16">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-4xl font-bold text-[#3b2d71] text-center mb-12">Our Key Offerings</h2>

// //         {/* Buttons Section */}
// //         <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
// //           <button className="bg-[#3b2d71] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
// //             Start a Franchise
// //           </button>
// //           <button className="bg-gray-200 text-[#3b2d71] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
// //             Project Development
// //           </button>
// //           <button className="bg-blue-100 text-[#3b2d71] px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-200 transition-colors duration-300">
// //             Get Certified
// //           </button>
// //         </div>

// //         {/* Content Section */}
// //         <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
// //           <h3 className="text-2xl font-bold text-gray-800 mb-4">
// //             Launch Your Own IT Training and Project Development Center
// //           </h3>
// //           <p className="mb-6">
// //             Become a certified RD INFOTECH partner and start your own training institute or project
// //             development hub. Our franchise model is designed for long-term growth and
// //             sustainability.
// //           </p>
// //           <h4 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h4>
// //           <ul className="list-disc list-inside space-y-2 mb-8">
// //             <li>Low investment, high return business opportunity</li>
// //             <li>Access to branded LMS and ready-made course materials</li>
// //             <li>Instructor training and academic support</li>
// //             <li>Complete business guidance, including marketing support</li>
// //             <li>Continuous operational and technical assistance</li>
// //           </ul>

// //           <div className="flex justify-center">
// //             <button className="bg-[#3b2d71] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-opacity-90 transition-colors duration-300">
// //               <span>Apply for Franchise Partnership</span>
// //               <FaArrowRight />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default KeyOfferings; 

// import React, { useState } from 'react';
// import { FaArrowRight } from 'react-icons/fa';

// const KeyOfferings = () => {
//   const [activeSection, setActiveSection] = useState('franchise');

//   return (
//     <section className="bg-white py-16 font-inter">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-[#280E5C] text-center mb-12">Our Key Offerings</h2>

//         {/* Buttons Section */}
//         <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
//           <button
//             className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
//               activeSection === 'franchise'
//                 ? 'bg-[#280E5C] text-white hover:bg-opacity-90'
//                 : 'bg-gray-200 text-[#280E5C] hover:bg-gray-300'
//             }`}
//             onClick={() => setActiveSection('franchise')}
//           >
//             Start a Franchise
//           </button>
//           <button
//             className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
//               activeSection === 'project'
//                 ? 'bg-[#280E5C] text-white hover:bg-opacity-90'
//                 : 'bg-gray-200 text-[#280E5C] hover:bg-gray-300'
//             }`}
//             onClick={() => setActiveSection('project')}
//           >
//             Project Development
//           </button>
//           <button
//             className="bg-blue-100 text-[#280E5C] px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-200 transition-colors duration-300"
//           >
//             Get Certified
//           </button>
//         </div>

//         {/* Content Section */}
//         <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
//           {activeSection === 'franchise' ? (
//             <>
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Launch Your Own IT Training and Project Development Center
//               </h3>
//               <p className="mb-6">
//                 Become a certified RD INFOTECH partner and start your own training institute or project
//                 development hub. Our franchise model is designed for long-term growth and
//                 sustainability.
//               </p>
//               <h4 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h4>
//               <ul className="list-disc list-inside space-y-2 mb-8">
//                 <li>Low investment, high return business opportunity</li>
//                 <li>Access to branded LMS and ready-made course materials</li>
//                 <li>Instructor training and academic support</li>
//                 <li>Complete business guidance, including marketing support</li>
//                 <li>Continuous operational and technical assistance</li>
//               </ul>
//               <div className="flex justify-center">
//                 <button className="bg-[#280E5C] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-opacity-90 transition-colors duration-300">
//                   <span>Apply for Franchise Partnership</span>
//                   <FaArrowRight />
//                 </button>
//               </div>
//             </>
//           ) : (
//             <>
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Comprehensive Project Development Solutions
//               </h3>
//               <p className="mb-6">
//                 Partner with RD INFOTECH to deliver high-quality project development services, from
//                 software solutions to IT infrastructure projects. We provide end-to-end support to
//                 ensure project success.
//               </p>
//               <h4 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h4>
//               <ul className="list-disc list-inside space-y-2 mb-8">
//                 <li>Expert guidance on project planning and execution</li>
//                 <li>Access to advanced development tools and technologies</li>
//                 <li>Support for custom software and app development</li>
//                 <li>Quality assurance and testing services</li>
//                 <li>Scalable solutions for businesses of all sizes</li>
//               </ul>
//               <div className="flex justify-center">
//                 <button className="bg-[#280E5C] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-opacity-90 transition-colors duration-300">
//                   <span>Start Your Project Today</span>
//                   <FaArrowRight />
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyOfferings;

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const KeyOfferings = () => {
  const [activeSection, setActiveSection] = useState('franchise');

  return (
    <section className="w-full py-16 font-inter px-0">
      <div className="max-w-screen-2xl mx-auto w-full px-8">
        <h2 className="text-5xl font-extrabold text-center mb-12" style={{ color: '#280E5C', textShadow: '2px 2px 8px #b3a1e6', fontFamily: 'Inter, sans-serif' }}>
          Our Key Offerings
        </h2>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12 font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
          <button
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
              activeSection === 'franchise'
                ? 'bg-[#280E5C] text-white shadow-md'
                : 'bg-[#e0e2f1] text-[#280E5C]'
            }`}
            onClick={() => setActiveSection('franchise')}
          >
            Start a Franchise
          </button>
          <button
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
              activeSection === 'project'
                ? 'bg-[#280E5C] text-white shadow-md'
                : 'bg-[#e0e2f1] text-[#280E5C]'
            }`}
            onClick={() => setActiveSection('project')}
          >
            Project Development
          </button>
          <button
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ${
              activeSection === 'certified'
                ? 'bg-[#280E5C] text-white shadow-md'
                : 'bg-[#e0e2f1] text-[#280E5C]'
            }`}
            onClick={() => setActiveSection('certified')}
          >
            Get Certified
          </button>
        </div>

        {/* Content Section */}
        <div className="w-full text-gray-700 text-lg leading-relaxed px-8">
          {activeSection === 'franchise' ? (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Launch Your Own IT Training and Project Development Center
              </h3>
              <p className="mb-6">
                Become a certified RD INFOTECH partner and start your own training institute or project
                development hub. Our franchise model is designed for long-term growth and
                sustainability.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2 mb-8">
                <li>Low investment, high return business opportunity</li>
                <li>Access to branded LMS and ready-made course materials</li>
                <li>Instructor training and academic support</li>
                <li>Complete business guidance, including marketing support</li>
                <li>Continuous operational and technical assistance</li>
              </ul>
              <div className="flex justify-center">
                <button className="bg-[#280E5C] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-opacity-90 transition-colors duration-300">
                  <span>Apply for Franchise Partnership</span>
                  <FaArrowRight />
                </button>
              </div>
            </>
          ) : activeSection === 'project' ? (
            <>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-left" style={{ color: '#280E5C', fontFamily: 'Inter, sans-serif' }}>
                Customized Solutions for Academic and Business Needs
              </h3>
              <div className="text-base md:text-lg text-black text-left mb-4 font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="mb-2">We offer high-quality project development services for students, startups, and organizations. Our team delivers complete end-to-end solutions with documentation and technical mentorship.</p>
                <span className="font-bold">Services Include:</span>
                <ul className="list-disc pl-6 mb-2">
                  <li>Final year academic projects (B.Tech, BCA, MCA, M.Sc CS/IT, etc.)</li>
                  <li>IEEE-based and research-oriented projects</li>
                  <li>Web and mobile application development (MERN, Android, Python, etc.)</li>
                  <li>Business tools and platforms – ERP, CRM, eCommerce, and automation</li>
                </ul>
                <span className="font-bold">Deliverables:</span> Source code, project report, deployment assistance, and support.
              </div>
              <div className="flex justify-center mt-8">
                <button className="bg-[#280E5C] text-white px-10 py-4 rounded-lg text-lg font-semibold flex items-center space-x-4 hover:bg-opacity-90 transition-colors duration-300 shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span>Submit Your Project Request</span>
                  <span className="text-2xl"><FaArrowRight /></span>
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Become a Certified Professional
              </h3>
              <p className="mb-6">
                Elevate your career with RD INFOTECH's certification programs. Gain industry-recognized
                credentials and access exclusive resources to excel in IT and project management.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2 mb-8">
                <li>Industry-recognized certification programs</li>
                <li>Comprehensive online and offline training</li>
                <li>Access to expert instructors and mentors</li>
                <li>Hands-on projects and real-world case studies</li>
                <li>Certification support and career guidance</li>
              </ul>
              <div className="flex justify-center">
                <button className="bg-[#280E5C] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-opacity-90 transition-colors duration-300">
                  <span>Explore Courses & Enroll Now</span>
                  <FaArrowRight />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default KeyOfferings;