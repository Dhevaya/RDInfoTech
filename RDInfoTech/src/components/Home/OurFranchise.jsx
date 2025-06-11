import React from 'react';

const franchisePartners = [
  {
    name: 'ABC Institute of Technology - Nagpur, Maharashtra',
    description: `ABC Institute joined RD INFOTECH as an official franchise partner in early 2024. With our support, they established a certified training center offering Full Stack Development, Python, Tally + GST, and Final Year Project Development.`,
  },
  {
    name: 'XYZ Institute of Technology - Mumbai, Maharashtra',
    description: `XYZ Institute joined RD INFOTECH in 2023 and offers certified training in Data Science, Machine Learning, and Cloud Computing.`,
  },
];

const OurFranchise = () => {
  return (
    <div className="w-full bg-[#F5F5FA] min-h-screen font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="w-full bg-[#E5E6EA] h-64 flex items-center justify-center text-gray-400 text-2xl mb-8">
        Image Placeholder
      </div>
      <div className="max-w-7xl mx-auto w-full px-2 py-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#280E5C] text-center mb-4" style={{ textShadow: '2px 2px 8px #b3a1e6', marginTop: 0 }}>Become an RD INFOTECH Franchise Partner</h1>
        <div className="max-w-7xl mx-auto">
          <div className="font-bold text-base md:text-lg text-justify md:text-left mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            Launch Your Own IT Training & Project Development Center with Expert Support
          </div>
          <div className="text-gray-700 text-justify md:text-left text-base md:text-lg leading-loose mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            RD INFOTECH offers a unique franchise opportunity for individuals and institutions who want to start their own technology training institute or academic service center with minimal investment and maximum support.
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#280E5C] mb-6 text-center" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>How the Franchise Model Works</h2>
        <ol className="list-decimal mb-12 text-gray-900 text-lg md:text-xl max-w-7xl mx-auto pl-8 text-justify md:text-left">
          <li className="mb-4">
            <span className="font-bold">Enroll as an Authorized Franchise Partner</span><br />
            <span className="font-normal text-base md:text-lg">Submit your franchise application. Once approved, you'll receive official authorization, branding assets, LMS login, and onboarding training.</span>
          </li>
          <li className="mb-4">
            <span className="font-bold">Access the RD INFOTECH Partner Panel</span><br />
            <span className="font-normal text-base md:text-lg">As a franchisee, you get access to our custom-built Franchise Panel to manage leads, track student enrollments, access course materials, and submit project requirements.</span>
          </li>
          <li className="mb-4">
            <span className="font-bold">Generate Leads Through Your Local Network</span><br />
            <span className="font-normal text-base md:text-lg">Market our courses and services in your area. You are responsible for generating inquiries from students and businesses—whether for certification programs or final-year projects.</span>
          </li>
          <li className="mb-4">
            <span className="font-bold">Submit Leads and Projects to RD INFOTECH</span><br />
            <span className="font-normal text-base md:text-lg">Use the panel to submit student details and project requests. Our central team will handle project development, support, and delivery.</span>
          </li>
          <li className="mb-4">
            <span className="font-bold">Earn Revenue on Every Sale</span><br />
            <span className="font-normal text-base md:text-lg">You earn commission on every course enrollment, project delivered, or certification issued through your franchise—transparent, trackable, and regular.</span>
          </li>
        </ol>
      </div>

      <div className="w-full bg-[#280E5C] text-white py-8 px-0 text-center">
        <div className="max-w-2xl mx-auto w-full px-2 flex flex-col items-center">
          <p className="mb-4 text-base md:text-lg font-medium text-justify md:text-left">
            Join hands with RD INFOTECH and build a future-ready center that delivers certified training, academic support, and real-world solutions.
          </p>
          <button
            onClick={() => window.location.href = '/franchise-application'}
            className="bg-white text-[#280E5C] px-8 py-3 rounded font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 mt-2 shadow-md border border-[#280E5C]"
          >
            Apply for Franchise Partnership
            <span className="inline-block text-lg">→</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-2 py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#280E5C] mb-8 text-center" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>Our Franchise Partners</h2>
        <div className="space-y-16">
          {franchisePartners.map((partner, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center w-full">
              {/* Text Section */}
              <div className="flex-1 flex flex-col justify-center text-left md:pr-8">
                <h3 className="font-bold text-lg md:text-xl text-black mb-2">{partner.name}</h3>
                <p className="text-gray-800 text-base md:text-lg leading-relaxed text-justify md:text-left">{partner.description}</p>
              </div>
              {/* Image Placeholder */}
              <div className="w-full md:w-96 h-40 bg-[#E5E6EA] flex items-center justify-center text-gray-400 text-base font-medium mt-6 md:mt-0">
                Image Placeholder
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFranchise;
