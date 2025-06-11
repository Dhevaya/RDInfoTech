import React from 'react';
import { FaFacebook, FaWhatsapp, FaTelegramPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#280E5C] text-white py-12 font-sans">
      <div className="w-full px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Let's Get in Touch! Section */}
        <div className="col-span-1 md:col-span-1 flex flex-col justify-between h-full">
          <div>
          <h2 className="text-3xl font-bold mb-4">Lets Get in Touch!</h2>
          <p className="text-sm leading-relaxed">
            Have a question or need assistance? Reach out to us via email,
            phone, or the contact form below. We're eager to assist you.
          </p>
          </div>
          {/* Social Media Icons at the bottom left */}
          <div className="flex space-x-6 mt-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
              <FaFacebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
              <FaWhatsapp className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
              <FaTelegramPlane className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-span-1 md:col-span-1">
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm mb-1">Full Name:</label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-1">Message:</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 rounded-md bg-transparent border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-end">
            <button
              type="submit"
                className="px-8 py-2 bg-white text-[#280E5C] rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              Submit
            </button>
            </div>
          </form>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Quick links</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">›</span>Home</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">›</span>About us</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">›</span>Course</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">›</span>Our Franchise</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">›</span>Verification</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">›</span>Certification</a></li>
            <li><a href="#" className="hover:text-gray-300 transition-colors duration-300 flex items-center"><span className="mr-2">›</span>Contact us</a></li>
          </ul>
        </div>

        {/* Head Office Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Head Office:</h3>
          <address className="not-italic space-y-2">
            <p className="flex items-center"><FaPhone className="w-5 h-5 mr-2" />+447473997191</p>
            <p className="flex items-center"><FaEnvelope className="w-5 h-5 mr-2" />sybexdesigns@gmail.com</p>
            <p className="flex items-center"><FaMapMarkerAlt className="w-5 h-5 mr-2" />2068 Boulevard Henri<br/>-Bourassa Est</p>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
