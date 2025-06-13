import React, { useState } from 'react';

const Verification = () => {
  const [studentId, setStudentId] = useState('');
  const [atcCode, setAtcCode] = useState('');
  const [message, setMessage] = useState('');

  const handleStudentVerification = async (e) => {
    e.preventDefault();
    // Mock API call to save studentId
    try {
      // Replace with actual API call
      console.log('Saving Student ID:', studentId);
      setMessage('Student Certificate ID saved successfully.');
      setStudentId('');
    } catch (error) {
      setMessage('Failed to save Student Certificate ID.');
    }
  };

  const handleAtcVerification = async (e) => {
    e.preventDefault();
    // Mock API call to save atcCode
    try {
      // Replace with actual API call
      console.log('Saving ATC Code:', atcCode);
      setMessage('ATC Code saved successfully.');
      setAtcCode('');
    } catch (error) {
      setMessage('Failed to save ATC Code.');
    }
  };

  return (
    <div className="w-full font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="w-full bg-[#E5E6EA] h-64 flex items-center justify-center text-gray-400 text-2xl mb-8">
        Image Placeholder
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold text-[#280E5C] mb-6 text-center" style={{ fontFamily: 'Inter' }}>
        Certificate & Franchise Verification
      </h1>
        <p className="mb-6 text-gray-700 text-justify md:text-left" style={{ fontFamily: 'Inter' }}>
          <span className="font-semibold text-black">Verify the authenticity of certifications and authorized centers affiliated with RD INFOTECH.</span><br/>
          We maintain a transparent and secure verification system to ensure the credibility of our students, partners, and services.
          Use this page to validate a Student Certificate or check if an institute is an Authorized Training Center (ATC) under RD INFOTECH.
        </p>

      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{message}</div>
      )}

      <form onSubmit={handleStudentVerification} className="mb-8">
          <h2 className="text-xl font-semibold text-[#280E5C] mb-2" style={{ fontFamily: 'Inter' }}>Student Certificate Verification</h2>
          <label htmlFor="studentId" className="block mb-1 font-medium" style={{ fontFamily: 'Inter' }}>
          Enter Student Certificate ID
        </label>
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 mb-3 focus:outline-none focus:ring-2 focus:ring-[#280E5C] w-full max-w-md"
          required
          style={{ fontFamily: 'Inter' }}
        />
        <button
          type="submit"
            className="bg-[#280E5C] text-white px-6 py-2 rounded hover:bg-[#2a2050] transition-colors block mt-4 w-fit"
            style={{ fontFamily: 'Inter' }}
        >
          Verification &rarr;
        </button>
      </form>

      <form onSubmit={handleAtcVerification}>
          <h2 className="text-xl font-semibold text-[#280E5C] mb-2" style={{ fontFamily: 'Inter' }}>ATC (Franchise Partner) Verification</h2>
          <label htmlFor="atcCode" className="block mb-1 font-medium" style={{ fontFamily: 'Inter' }}>
          Enter ATC Code
        </label>
        <input
          type="text"
          id="atcCode"
          value={atcCode}
          onChange={(e) => setAtcCode(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 mb-3 focus:outline-none focus:ring-2 focus:ring-[#280E5C] w-full max-w-md"
          required
          style={{ fontFamily: 'Inter' }}
        />
        <button
          type="submit"
            className="bg-[#280E5C] text-white px-6 py-2 rounded hover:bg-[#2a2050] transition-colors block mt-4 w-fit"
            style={{ fontFamily: 'Inter' }}
        >
          Verification &rarr;
        </button>
      </form>
      </div>
    </div>
  );
};

export default Verification;
