import React, { useRef } from 'react';
import { FaStar, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: 'Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.',
    name: 'Robert Fox',
    role: 'UI/UX Designer',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: 'Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante',
    name: 'Bessie Cooper',
    role: 'Creative Director',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.',
    name: 'Jane Cooper',
    role: 'Photographer',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    text: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    name: 'Wade Warren',
    role: 'Developer',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    text: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    name: 'Esther Howard',
    role: 'Product Manager',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector('div.snap-center');
    const cardWidth = card ? card.offsetWidth + 32 : 350; // 32px gap
    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-12 bg-white relative">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#280E5C] drop-shadow-lg" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>
        Clients Testimonial
      </h2>
      <div className="max-w-7xl mx-auto px-2 md:px-8 relative">
        {/* Left Arrow */}
        <button
          aria-label="Scroll testimonials left"
          className="hidden md:flex absolute left-16 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-gray-100 transition-colors"
          onClick={() => scroll('left')}
          style={{ transform: 'translateY(-50%)' }}
        >
          <FaChevronLeft className="text-2xl text-[#280E5C]" />
        </button>
        {/* Right Arrow */}
        <button
          aria-label="Scroll testimonials right"
          className="hidden md:flex absolute right-16 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-gray-100 transition-colors"
          onClick={() => scroll('right')}
          style={{ transform: 'translateY(-50%)' }}
        >
          <FaChevronRight className="text-2xl text-[#280E5C]" />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-6 scrollbar-none w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] max-w-[400px] bg-[#f7f7fb] rounded-2xl shadow-lg p-8 flex flex-col h-full justify-between snap-center"
            >
              <div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-700 text-base mb-8">“{t.text}”</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow" />
                  <div>
                    <div className="font-bold text-[#280E5C] leading-tight">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
                <FaQuoteRight className="text-3xl text-[#280E5C] opacity-80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 