import React, { useState } from 'react';
import { FaUser, FaPhone, FaAlignJustify } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    requirement: 'Project Development',
    description: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({...formData, requirement: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock API call to save form data
    try {
      console.log('Submitting Contact Us Form:', formData);
      setMessage('Your message has been sent successfully.');
      setFormData({
        name: '',
        contactNumber: '',
        requirement: 'Project Development',
        description: '',
      });
    } catch (error) {
      setMessage('Failed to send your message.');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-0 mt-0 bg-[#f7f7fb]">
      {/* Full-width Image Placeholder */}
      <div className="w-full bg-gray-200 flex items-center justify-center" style={{ height: '180px' }}>
        <span className="text-gray-400 text-2xl">Image Placeholder</span>
      </div>
      {/* Heading and Form */}
      <div className="w-full max-w-xl flex flex-col items-center justify-center mt-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#280E5C] mb-6 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>Get In Touch With Us !</h1>
        {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{message}</div>
        )}
        <form onSubmit={handleSubmit} className="border border-[#280E5C] rounded-lg p-6 space-y-6 w-full bg-white">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 border border-[#280E5C] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#280E5C]"
            />
          </div>
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="tel"
              name="contactNumber"
              placeholder="Enter Your Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full pl-10 border border-[#280E5C] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#280E5C]"
            />
          </div>
          <label className="block text-base text-[#280E5C] font-medium mb-2"></label>
          {/* Read-only textbox showing selected requirement as placeholder */}
          <input
            type="text"
            value={formData.requirement ? formData.requirement : ''}
            placeholder="Please select your requirement"
            readOnly
            className="w-full border border-[#280E5C] rounded px-3 py-2 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#280E5C] mb-2"
            style={{ backgroundColor: '#f7f7fb' }}
          />
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mb-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="requirement"
                value="Start a Franchise"
                checked={formData.requirement === 'Start a Franchise'}
                onChange={handleRadioChange}
              />
              <span>Start a Franchise</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="requirement"
                value="Project Development"
                checked={formData.requirement === 'Project Development'}
                onChange={handleRadioChange}
              />
              <span>Project Development</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="requirement"
                value="Get Certified"
                checked={formData.requirement === 'Get Certified'}
                onChange={handleRadioChange}
              />
              <span>Get Certified</span>
            </label>
          </div>
          <div className="relative">
            <FaAlignJustify className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full pl-10 border border-[#280E5C] rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#280E5C]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#280E5C] text-white px-6 py-2 rounded hover:bg-[#2a2050] transition-colors w-auto mx-auto block text-base min-w-[100px]"
            style={{ fontWeight: 600 }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
