import React from 'react';

const ProductCard = ({
  image = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  title = 'Full Stack Web Development',
  duration = '3–6 months',
  certification = 'Certification Included',
  features = ['Live Projects + LMS Access'],
  onView = () => {},
}) => {
  return (
    <div className="rounded-2xl shadow-lg bg-white overflow-hidden flex flex-col border border-[#280E5C]/30 max-w-xs w-full mx-auto">
      <div className="bg-[#280E5C] p-4 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="rounded-lg object-cover w-full h-36 md:h-40"
          style={{ maxHeight: '160px' }}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[#280E5C] mb-2 text-center">{title}</h3>
        <ul className="text-sm text-gray-800 mb-4 list-disc list-inside space-y-1">
          <li><span className="font-semibold">Duration:</span> {duration}</li>
          <li>{certification}</li>
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <button
          className="bg-[#280E5C] text-white rounded-md px-6 py-2 font-semibold text-base mt-auto hover:bg-[#3b2d71] transition-colors"
          onClick={onView}
        >
          View Course
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 