import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import logo from '../assets/Blue and Green Business Technology Globe Logo (1)[1].png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [search, setSearch] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const courses = [
    { name: 'JAVA', link: '#' },
    { name: 'Web Development', link: '#' },
    { name: 'Python', link: '#' },
    { name: 'C++', link: '#' },
    { name: 'Data Science', link: '#' },
    { name: 'Machine Learning', link: '#' },
    { name: 'Android Development', link: '#' },
    { name: 'Digital Marketing', link: '#' },
  ];

  return (
    <nav>
      {/* Top Navbar Section */}
      <div style={{ background: '#280E5C' }} className="text-white w-full h-24 overflow-visible">
        <div className="flex items-center justify-between px-4 md:px-8 h-24 ">
          {/* Logo */}
          <div className="flex items-center h-24 overflow-visible flex-shrink-0">
            <img
              src={logo}
              alt="RD Infotech Logo"
              className="h-[80px] w-auto max-h-[80px] max-w-[120px] md:h-[140px] md:max-h-[140px] md:max-w-[260px] object-contain"
              style={{ minWidth: '80px' }}
            />
          </div>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center ml-auto">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setIsCoursesDropdownOpen(true)}
              onMouseLeave={() => setIsCoursesDropdownOpen(false)}
            >
              <span className="flex items-center text-lg font-semibold cursor-pointer select-none" style={{ fontFamily: 'Inter, sans-serif' }}>
                Courses
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
              {isCoursesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-900 rounded shadow-lg z-50 py-2">
                  {courses.map((course) => (
                    <a
                      key={course.name}
                      href={course.link}
                      className="block px-4 py-2 hover:bg-[#280E5C] hover:text-white text-sm transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {course.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* Search Bar */}
            <div className="relative w-[300px] lg:w-[700px]">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    navigate(`/our-courses?search=${encodeURIComponent(search)}`);
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="w-full rounded-full py-2 pl-10 pr-4 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                onClick={() => {
                  navigate(`/our-courses?search=${encodeURIComponent(search)}`);
                  setIsMobileMenuOpen(false);
                }}
                aria-label="Search"
                type="button"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
            {/* Login Button */}
            <Link
              to="/login"
              className="px-8 py-2 border border-white rounded-full transition-colors duration-300 text-lg font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            {/* Phone Icon */}
            <Link
              to="/contact"
              className="p-2 border border-white rounded-full transition-colors duration-300 ml-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiPhoneCall className="w-6 h-6" />
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#280E5C] px-4 pb-4 flex flex-col gap-4 animate-fade-in-down z-50 absolute left-0 right-0 top-24 w-full" style={{ minHeight: 'calc(100vh - 6rem)' }}>
            {/* Secondary nav links for mobile */}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors duration-300 ${
                location.pathname === '/' ? 'border-b-2 border-white pb-1 text-white' : 'hover:text-white'
              } text-lg font-medium`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors duration-300 ${
                location.pathname === '/about' ? 'border-b-2 border-white pb-1 text-white' : 'hover:text-white'
              } text-lg font-medium`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              About us
            </Link>
            <Link
              to="/franchise"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors duration-300 ${
                location.pathname === '/franchise' ? 'border-b-2 border-white pb-1 text-white' : 'hover:text-white'
              } text-lg font-medium`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Our Franchise
            </Link>
            <Link
              to="/verification"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-colors duration-300 ${
                location.pathname === '/verification' ? 'border-b-2 border-white pb-1 text-white' : 'hover:text-white'
              } text-lg font-medium`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Verification
            </Link>
            {/* Existing mobile menu items */}
            <div className="flex flex-col mt-2">
              <div
                className="flex items-center text-lg font-semibold cursor-pointer select-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
              >
                Courses
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {isCoursesDropdownOpen && (
                <div className="bg-white text-gray-900 rounded shadow-lg z-50 py-2 mt-2">
                  {courses.map((course) => (
                    <a
                      key={course.name}
                      href={course.link}
                      className="block px-4 py-2 hover:bg-[#280E5C] hover:text-white text-sm transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {course.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
                className="w-full rounded-full py-2 pl-10 pr-4 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
            <div className="flex flex-col items-center w-full gap-2">
          <Link
            to="/login"
                className="w-1/2 md:w-auto px-8 py-2 border border-white rounded-full transition-colors duration-300 text-lg font-medium text-center mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={() => { setIsMobileMenuOpen(false); }}
          >
            Login
          </Link>
          <Link
            to="/contact"
                className="w-1/2 md:w-auto p-2 border border-white rounded-full transition-colors duration-300 text-center"
                onClick={() => { setIsMobileMenuOpen(false); }}
          >
                <FiPhoneCall className="w-6 h-6 mx-auto" />
          </Link>
        </div>
          </div>
        )}
      </div>

      {/* Secondary Navbar Section (Desktop Only) */}
      <div className="bg-[#e0e2f1] text-gray-800 w-full hidden md:block">
        <div className="flex justify-center gap-20 py-2 text-lg font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
          <Link
            to="/"
            className={`transition-colors duration-300 ${
              location.pathname === '/' ? 'border-b-2 border-primary pb-1 text-primary' : 'hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition-colors duration-300 ${
              location.pathname === '/about' ? 'border-b-2 border-primary pb-1 text-primary' : 'hover:text-primary'
            }`}
          >
            About us
          </Link>
          <Link
            to="/franchise"
            className={`transition-colors duration-300 ${
              location.pathname === '/franchise' ? 'border-b-2 border-primary pb-1 text-primary' : 'hover:text-primary'
            }`}
          >
            Our Franchise
          </Link>
          <Link
            to="/verification"
            className={`transition-colors duration-300 ${
              location.pathname === '/verification' ? 'border-b-2 border-primary pb-1 text-primary' : 'hover:text-primary'
            }`}
          >
            Verification
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
