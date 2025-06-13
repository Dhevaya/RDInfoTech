// // // // // import React from 'react';

// // // // // const ProductCard = ({
// // // // //   image = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
// // // // //   title = 'Full Stack Web Development',
// // // // //   duration = '3–6 months',
// // // // //   certification = 'Certification Included',
// // // // //   features = ['Live Projects + LMS Access'],
// // // // //   onView = () => {},
// // // // // }) => {
// // // // //   return (
// // // // //     <div className="rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col border border-[#280E5C]/30 max-w-xs w-full mx-auto">
// // // // //       <div className="bg-[#280E5C] p-4 flex items-center justify-center">
// // // // //         <img
// // // // //           src={image}
// // // // //           alt={title}
// // // // //           className="rounded-lg object-cover w-full h-36 md:h-40"
// // // // //           style={{ maxHeight: '160px' }}
// // // // //         />
// // // // //       </div>
// // // // //       <div className="p-5 flex flex-col flex-1">
// // // // //         <h3 className="text-lg font-bold text-[#280E5C] mb-2 text-center">{title}</h3>
// // // // //         <ul className="text-sm text-gray-800 mb-4 list-disc list-inside space-y-1">
// // // // //           <li><span className="font-semibold">Duration:</span> {duration}</li>
// // // // //           <li>{certification}</li>
// // // // //           {features.map((f, i) => (
// // // // //             <li key={i}>{f}</li>
// // // // //           ))}
// // // // //         </ul>
// // // // //         <button
// // // // //           className="bg-[#280E5C] text-white rounded-md px-6 py-2 font-semibold text-base mt-auto hover:bg-[#3b2d71] transition-colors"
// // // // //           onClick={onView}
// // // // //         >
// // // // //           View Course
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductCard; 

// // // // import React from 'react';

// // // // const ProductCard = ({
// // // //   image = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
// // // //   title = 'Full Stack Web Development',
// // // //   description = 'Learn to build modern web applications with this comprehensive course.',
// // // //   onView = () => {},
// // // // }) => {
// // // //   return (
// // // //     <div className="rounded-lg shadow-md bg-white overflow-hidden flex flex-col border border-[#280E5C]/20 max-w-sm w-full mx-auto">
// // // //       <div className="bg-[#280E5C] p-3 flex items-center justify-center">
// // // //         <img
// // // //           src={image}
// // // //           alt={title}
// // // //           className="rounded-md object-cover w-full h-32 md:h-36"
// // // //           style={{ maxHeight: '144px' }}
// // // //         />
// // // //       </div>
// // // //       <div className="p-4 flex flex-col flex-1">
// // // //         <h3
// // // //           className="text-lg font-bold text-[#280E5C] mb-2 text-center"
// // // //           style={{ fontFamily: 'Inter, sans-serif' }}
// // // //         >
// // // //           {title}
// // // //         </h3>
// // // //         <p
// // // //           className="text-sm text-gray-600 mb-4 text-center flex-1"
// // // //           style={{ fontFamily: 'Inter, sans-serif' }}
// // // //         >
// // // //           {description}
// // // //         </p>
// // // //         <button
// // // //           className="bg-[#280E5C] text-white rounded-md px-5 py-2 font-semibold text-sm mt-auto hover:bg-[#3b2d71] transition-colors mx-auto block"
// // // //           onClick={onView}
// // // //           style={{ fontFamily: 'Inter, sans-serif' }}
// // // //         >
// // // //           View Course
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductCard;

// // // import React from 'react';

// // // const ProductCard = ({ image, title, description, onView }) => {
// // //   return (
// // //     <div className="rounded-lg shadow-md bg-white overflow-hidden flex flex-col border border-[#280E5C]/20 max-w-sm w-full mx-auto">
// // //       <div className="bg-[#280E5C] p-3 flex items-center justify-center">
// // //         <img
// // //           src={image}
// // //           alt={title}
// // //           className="rounded-md object-cover w-full h-32 md:h-36"
// // //           style={{ maxHeight: '144px' }}
// // //           onError={(e) => (e.target.src = 'https://via.placeholder.com/400x144?text=Course+Image')}
// // //         />
// // //       </div>
// // //       <div className="p-4 flex flex-col flex-1">
// // //         <h3
// // //           className="text-lg font-bold text-[#280E5C] mb-2 text-center"
// // //           style={{ fontFamily: 'Inter, sans-serif' }}
// // //         >
// // //           {title}
// // //         </h3>
// // //         <p
// // //           className="text-sm text-gray-600 mb-4 text-center flex-1"
// // //           style={{ fontFamily: 'Inter, sans-serif' }}
// // //         >
// // //           {description}
// // //         </p>
// // //         <button
// // //           className="bg-[#280E5C] text-white rounded-md px-5 py-2 font-semibold text-sm mt-auto hover:bg-[#3b2d71] transition-colors mx-auto block"
// // //           onClick={onView}
// // //           style={{ fontFamily: 'Inter, sans-serif' }}
// // //         >
// // //           View Course
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductCard;


// // import React from 'react';

// // const ProductCard = ({ image, title, description, onView }) => {
// //   console.log('ProductCard Props:', { image, title, description });

// //   // Fallback values in case API data is missing fields
// //   const displayTitle = title || 'Untitled Course';
// //   const displayDescription = description || 'No description available.';
// //   const displayImage = image || 'https://via.placeholder.com/400x144?text=Course+Image';

// //   return (
// //     <div className="rounded-lg shadow-md bg-white overflow-hidden flex flex-col border border-[#280E5C]/20 max-w-sm w-full mx-auto">
// //       <div className="bg-[#280E5C] p-3 flex items-center justify-center">
// //         <img
// //           src={displayImage}
// //           alt={displayTitle}
// //           className="rounded-md object-cover w-full h-32 md:h-36"
// //           style={{ maxHeight: '144px' }}
// //           onError={(e) => (e.target.src = 'https://via.placeholder.com/400x144?text=Course+Image')}
// //         />
// //       </div>
// //       <div className="p-4 flex flex-col flex-1">
// //         <h3
// //           className="text-lg font-bold text-[#280E5C] mb-2 text-center"
// //           style={{ fontFamily: 'Inter, sans-serif' }}
// //         >
// //           {displayTitle}
// //         </h3>
// //         <p
// //           className="text-sm text-gray-600 mb-4 text-center flex-1"
// //           style={{ fontFamily: 'Inter, sans-serif' }}
// //         >
// //           {displayDescription}
// //         </p>
// //         <button
// //           className="bg-[#280E5C] text-white rounded-md px-5 py-2 font-semibold text-sm mt-auto hover:bg-[#3b2d71] transition-colors mx-auto block"
// //           onClick={onView}
// //           style={{ fontFamily: 'Inter, sans-serif' }}
// //         >
// //           View Course
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ image, title, description }) => {
//   const navigate = useNavigate();

//   // Fallback values in case API data is missing fields
//   const displayTitle = title || 'Untitled Course';
//   const displayDescription = description || 'No description available.';
//   const displayImage = image || 'https://via.placeholder.com/400x144?text=Course+Image';

//   const handleViewCourse = () => {
//     // Create a URL-friendly version of the course title
//     const coursePath = displayTitle.toLowerCase().replace(/\s+/g, '-');
//     navigate(`/course/${coursePath}`);
//   };

//   return (
//     <div className="rounded-lg shadow-md bg-white overflow-hidden flex flex-col border border-[#280E5C]/20 max-w-sm w-full mx-auto">
//       <div className="bg-[#280E5C] p-3 flex items-center justify-center">
//         <img
//           src={displayImage}
//           alt={displayTitle}
//           className="rounded-md object-cover w-full h-32 md:h-36"
//           style={{ maxHeight: '144px' }}
//           onError={(e) => (e.target.src = 'https://via.placeholder.com/400x144?text=Course+Image')}
//         />
//       </div>
//       <div className="p-4 flex flex-col flex-1">
//         <h3
//           className="text-lg font-bold text-[#280E5C] mb-2 text-center"
//           style={{ fontFamily: 'Inter, sans-serif' }}
//         >
//           {displayTitle}
//         </h3>
//         <p
//           className="text-sm text-gray-600 mb-4 text-center flex-1"
//           style={{ fontFamily: 'Inter, sans-serif' }}
//         >
//           {displayDescription}
//         </p>
//         <button
//           className="bg-[#280E5C] text-white rounded-md px-5 py-2 font-semibold text-sm mt-auto hover:bg-[#3b2d71] transition-colors mx-auto block"
//           onClick={handleViewCourse}
//           style={{ fontFamily: 'Inter, sans-serif' }}
//         >
//           View Course
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, title, description }) => {
  const navigate = useNavigate();

  // Fallback values in case API data is missing fields
  const displayTitle = title || 'Untitled Course';
  const displayDescription = description || 'No description available.';
  const displayImage = image || 'https://via.placeholder.com/400x144?text=Course+Image';

  const handleViewCourse = () => {
    // Create a URL-friendly version of the course title
    const coursePath = displayTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/course/${coursePath}`);
  };

  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden flex flex-col border border-[#280E5C]/20 max-w-sm w-full mx-auto mb-6">
      <div className="bg-[#280E5C] p-3 flex items-center justify-center">
        <img
          src={displayImage}
          alt={displayTitle}
          className="rounded-md object-cover w-full h-32 md:h-36"
          style={{ maxHeight: '144px' }}
          onError={(e) => (e.target.src = 'https://via.placeholder.com/400x144?text=Course+Image')}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3
          className="text-lg font-bold text-[#280E5C] mb-2 text-center"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {displayTitle}
        </h3>
        <p
          className="text-sm text-gray-600 mb-4 text-center flex-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {displayDescription}
        </p>
        <button
          className="bg-[#280E5C] text-white rounded-md px-5 py-2 font-semibold text-sm mt-auto hover:bg-[#3b2d71] transition-colors mx-auto block"
          onClick={handleViewCourse}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          View Course
        </button>
      </div>
    </div>
  );
};

export default ProductCard;