import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://codify-backend-n4xb.onrender.com/get-course')
      .then(response => response.json())
      .then(data => {
        // Limit to 3 courses for the featured section
        setCourses(data.slice(0, 3));
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div className="py-10 px-5 bg-[#F5F6FA]">
      <h2
        className="text-3xl font-bold text-[#280E5C] mb-6"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Featured Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <ProductCard
              key={index}
              title={course.title}
              description={course.description}
              // Not fetching image from API as per instruction, using placeholder
              image="https://via.placeholder.com/400x144?text=Course+Image"
            />
          ))
        ) : (
          <p className="text-gray-600">Loading courses...</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedCourses;