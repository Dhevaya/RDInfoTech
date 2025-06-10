import React from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

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
  return (
    <section className="py-12 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#280E5C] drop-shadow-lg" style={{ textShadow: '2px 2px 8px #b3a1e6' }}>
        Clients Testimonial
      </h2>
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-6 scrollbar-none">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[90vw] sm:min-w-[400px] md:min-w-[350px] lg:min-w-[400px] max-w-[90vw] md:max-w-[350px] lg:max-w-[400px] bg-[#f7f7fb] rounded-2xl shadow-lg p-8 flex flex-col h-full justify-between snap-center"
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