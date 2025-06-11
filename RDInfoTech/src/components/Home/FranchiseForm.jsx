import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    website: '',
    name: '',
    email: '',
    mobile: '',
    instituteName: '',
    city: '',
    address: '',
    pinCode: '',
    preferredStartDate: '',
    experience: '',
    motivation: '',
    aadhaar: '',
    consentInfoTrue: false,
    consentContactAgree: false,
    totalComputers: '',
    totalStaff: '',
  });

  const [message, setMessage] = useState('');

  const [fileNames, setFileNames] = useState({
    panFile: '',
    aadhaarFile: '',
    photo: '',
    signature: '',
    stamp: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFileNames({ ...fileNames, [name]: files[0] ? files[0].name : '' });
    // You can also handle the file upload logic here if needed
  };

  const handleSubmit = async () => {
    // Validate required fields
    const requiredFields = ['name', 'email', 'mobile', 'instituteName', 'city', 'address', 'pinCode'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setMessage('Please fill out all required fields.');
        return;
      }
    }

    // Mock API call to save form data
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Application submitted successfully.');
        setFormData({
          website: '',
          name: '',
          email: '',
          mobile: '',
          instituteName: '',
          city: '',
          address: '',
          pinCode: '',
          preferredStartDate: '',
          experience: '',
          motivation: '',
          aadhaar: '',
          consentInfoTrue: false,
          consentContactAgree: false,
          totalComputers: '',
          totalStaff: '',
        });
      } else {
        setMessage('Failed to submit application.');
      }
    } catch (error) {
      setMessage('Failed to submit application.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Main Heading */}
      <h1 className="text-2xl font-bold text-[#280E5C] mb-2 text-center uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
        Franchise Application Form
      </h1>
      {/* Subtext */}
      <p className="mb-6 text-gray-500 text-xs text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
        <span className="font-bold">Become an Authorized RD INFOTECH Partner</span> <br />
        Fill out the form below to apply for a franchise opportunity with RD INFOTECH. Our team will review your application and connect with you shortly.
      </p>

      {/* Success/Error Message */}
      {message && (
        <div className={`mb-4 p-3 text-xs text-center rounded ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
          {message}
        </div>
      )}

      {/* Form Container */}
      <div className="border border-gray-300 rounded p-4 space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Personal & Contact Information Section */}
        <div className="mb-8">
          <h2 className="text-base font-bold text-[#280E5C] mb-6 uppercase text-center drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>Personal & Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <label className="text-xs w-48 font-medium">Name <span className="text-red-600">*</span> :</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
            <div className="mb-2 relative">
              <label className="w-full block cursor-pointer">
                <input type="file" name="photo" onChange={handleFileChange} className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10" />
                <div className="w-full border border-[#280E5C] rounded px-2 py-2 text-xs text-gray-400 bg-white focus:outline-none text-left flex items-center justify-between gap-2">
                  <span>{fileNames.photo || 'Upload Passport-size Photo'}</span>
                  <FaCloudUploadAlt className="text-[#280E5C] text-lg ml-2" />
                </div>
              </label>
            </div>
            <div className="mb-2 relative">
              <label className="w-full block cursor-pointer">
                <input type="file" name="signature" onChange={handleFileChange} className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10" />
                <div className="w-full border border-[#280E5C] rounded px-2 py-2 text-xs text-gray-400 bg-white focus:outline-none text-left flex items-center justify-between gap-2">
                  <span>{fileNames.signature || 'Upload Signature'}</span>
                  <FaCloudUploadAlt className="text-[#280E5C] text-lg ml-2" />
                </div>
              </label>
            </div>
            <div className="mb-2 relative">
              <label className="w-full block cursor-pointer">
                <input type="file" name="stamp" onChange={handleFileChange} className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10" />
                <div className="w-full border border-[#280E5C] rounded px-2 py-2 text-xs text-gray-400 bg-white focus:outline-none text-left flex items-center justify-between gap-2">
                  <span>{fileNames.stamp || 'Upload Stamp'}</span>
                  <FaCloudUploadAlt className="text-[#280E5C] text-lg ml-2" />
                </div>
              </label>
            </div>
            <div className="flex items-center mb-2">
              <label className="text-xs w-48 font-medium">Mobile Number <span className="text-red-600">*</span> :</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Enter your phone number" className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
            <div className="flex items-center mb-2">
              <label className="text-xs w-48 font-medium">Birthdate <span className="text-red-600">*</span> :</label>
              <input type="date" name="birthdate" value={formData.birthdate || ''} onChange={handleChange} required className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
          </div>
        </div>

        {/* Business / Institute Information Section */}
        <div className="mb-8">
          <h2 className="text-base font-bold text-[#280E5C] mb-6 uppercase text-center drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>Business / Institute Information</h2>
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <label className="text-xs w-48 font-medium">Institute Name <span className="text-red-600">*</span> :</label>
              <input type="text" name="instituteName" value={formData.instituteName} onChange={handleChange} required placeholder="Enter institute name" className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
            <div className="flex items-center mb-2">
              <label className="text-xs w-48 font-medium">City / Location <span className="text-red-600">*</span> :</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="Enter city or location" className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
            <div className="flex items-center mb-2">
              <label className="text-xs w-48 font-medium">Full Address <span className="text-red-600">*</span> :</label>
              <input type="text" name="address" value={formData.address || ''} onChange={handleChange} required placeholder="Enter full address" className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
            <div className="flex items-center mb-2">
              <label className="text-xs w-48 font-medium">PIN Code <span className="text-red-600">*</span> :</label>
              <input type="text" name="pinCode" value={formData.pinCode || ''} onChange={handleChange} required placeholder="Enter PIN code" className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
            <div className="flex items-center mb-2">
              <label className="text-xs w-48 font-medium">Total Number of Computers :</label>
              <input type="text" name="totalComputers" value={formData.totalComputers || ''} onChange={handleChange} placeholder="Enter total number of computers" className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
            <div className="flex items-center mb-2">
              <label className="text-xs w-48 font-medium">Total Staff :</label>
              <input type="text" name="totalStaff" value={formData.totalStaff || ''} onChange={handleChange} placeholder="Enter total staff" className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
          </div>
        </div>

        {/* KYC & Identity Verification Section */}
        <div className="mb-8">
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <label className="text-xs w-48 font-medium">Aadhaar Number <span className="text-red-600">*</span> :</label>
              <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleChange} required placeholder="Enter Aadhaar number" className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
            <div className="mb-2 relative">
              <label className="w-full block cursor-pointer">
                <input type="file" name="aadhaarFile" onChange={handleFileChange} className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10" />
                <div className="w-full border border-[#280E5C] rounded px-2 py-2 text-xs text-gray-400 bg-white focus:outline-none text-left flex items-center justify-between gap-2">
                  <span>{fileNames.aadhaarFile || 'Upload Aadhaar Card (PDF or Image)'}</span>
                  <FaCloudUploadAlt className="text-[#280E5C] text-lg ml-2" />
                </div>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-xs w-48 mb-0">Preferred Franchise Start Date :</label>
              <input type="date" name="preferredStartDate" value={formData.preferredStartDate} onChange={handleChange} className="flex-grow border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs mb-1">Do you have any experience in training or business?</label>
              <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="Provide experience details" className="w-full border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs mb-1">Why do you want to take an RD INFOTECH franchise?</label>
              <input type="text" name="motivation" value={formData.motivation} onChange={handleChange} placeholder="Share your motivation" className="w-full border border-[#280E5C] rounded px-2 py-1 text-xs placeholder-gray-400 placeholder-italic focus:outline-none" />
            </div>
          </div>
        </div>

        {/* Declaration & Consent Section */}
        <div className="mb-8">
          <h2 className="text-base font-bold text-[#280E5C] mb-6 uppercase text-center drop-shadow-md" style={{ fontFamily: 'Inter, sans-serif' }}>Declaration & Consent</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="consentInfoTrue" checked={formData.consentInfoTrue} onChange={handleChange} className="text-[#280E5C] focus:ring-[#280E5C]" />
              <label className="text-xs">I confirm that the above information is true and accurate</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" name="consentContactAgree" checked={formData.consentContactAgree} onChange={handleChange} className="text-[#280E5C] focus:ring-[#280E5C]" />
              <label className="text-xs">I agree to be contacted by RD INFOTECH for further discussion.</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-[#280E5C] text-white px-4 py-2 rounded text-sm font-semibold uppercase hover:bg-opacity-90 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;