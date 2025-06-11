import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

// Dummy data fallback
const featuredCoursesFallback = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Full Stack Web Development',
    duration: '3–6 months',
    certification: 'Certification Included',
    features: ['Live Projects + LMS Access'],
  },
  // Repeat for demo
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Full Stack Web Development',
    duration: '3–6 months',
    certification: 'Certification Included',
    features: ['Live Projects + LMS Access'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Full Stack Web Development',
    duration: '3–6 months',
    certification: 'Certification Included',
    features: ['Live Projects + LMS Access'],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Full Stack Web Development',
    duration: '3–6 months',
    certification: 'Certification Included',
    features: ['Live Projects + LMS Access'],
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Full Stack Web Development',
    duration: '3–6 months',
    certification: 'Certification Included',
    features: ['Live Projects + LMS Access'],
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Full Stack Web Development',
    duration: '3–6 months',
    certification: 'Certification Included',
    features: ['Live Projects + LMS Access'],
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Full Stack Web Development',
    duration: '3–6 months',
    certification: 'Certification Included',
    features: ['Live Projects + LMS Access'],
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Full Stack Web Development',
    duration: '3–6 months',
    certification: 'Certification Included',
    features: ['Live Projects + LMS Access'],
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'Full Stack Web Development',
    duration: '3–6 months',
    certification: 'Certification Included',
    features: ['Live Projects + LMS Access'],
  },
];

const OurCourses = () => {
  const location = useLocation();
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [search, setSearch] = useState('');
  const didInit = useRef(false);

  // Only set search from URL on initial mount
  useEffect(() => {
    if (!didInit.current) {
      const params = new URLSearchParams(location.search);
      const searchParam = params.get('search') || '';
      setSearch(searchParam);
      didInit.current = true;
    }
  }, [location.search]);

  useEffect(() => {
    // Simulate backend fetch
    setTimeout(() => {
      setFeaturedCourses(featuredCoursesFallback);
    }, 500);
  }, []);

  const filteredCourses = search.trim() === ''
    ? featuredCourses
    : featuredCourses.filter(course => {
        const searchText = search.trim().toLowerCase();
        return (
          course.title.toLowerCase().includes(searchText) ||
          course.certification.toLowerCase().includes(searchText) ||
          course.features.some(f => f.toLowerCase().includes(searchText))
        );
      });

  return (
    <div className="w-full min-h-screen bg-[#f7f7fb] font-sans">
      {/* Banner */}
      <div className="w-full h-40 md:h-56 bg-[#280E5C] flex items-center justify-center relative mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center z-10 drop-shadow-lg" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>
          Our Courses
        </h1>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-20">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Find: Full Stack Web Development..."
            className="w-full rounded-full py-2 px-5 text-base text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#280E5C] shadow"
          />
        </div>
      </div>
      {/* Description */}
      <div className="max-w-3xl mx-auto text-center mb-8 px-2">
        <h2 className="text-lg md:text-xl font-bold text-[#280E5C] mb-2">Build Job-Ready Skills with RD INFOTECH's Industry-Aligned Training Programs</h2>
        <p className="text-base md:text-lg text-gray-700">
          Whether you're a student, professional, or entrepreneur, our certified courses are designed to help you gain practical skills and real-world experience. Learn from experts, work on live projects, and earn credentials that matter.
        </p>
      </div>
      {/* Featured Courses */}
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="text-2xl md:text-3xl font-bold text-[#280E5C] mb-6">Featured Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <ProductCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCourses; 