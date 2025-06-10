import React from 'react';

const Statistics = () => {
  return (
<section className="bg-[#3b2d71] text-white py-16 mb-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around text-center">
        {/* Statistic Item 1 */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-6xl font-bold mb-2">256</h2>
          <p className="text-xl uppercase tracking-wider mb-2">Total Courses</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Statistic Item 2 */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-6xl font-bold mb-2">500</h2>
          <p className="text-xl uppercase tracking-wider mb-2">Total Registered ATC</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Statistic Item 3 */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-6xl font-bold mb-2">42</h2>
          <p className="text-xl uppercase tracking-wider mb-2">Total Registered AMC</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Statistics; 