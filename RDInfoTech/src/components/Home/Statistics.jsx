import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import studentsImg from '../../assets/Students.png';

const AnimatedNumber = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const rafId = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      setCount(0);
      return;
    }
    let start = 0;
    const increment = target / (duration / 16);
    const animate = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        rafId.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    animate();
    return () => cancelAnimationFrame(rafId.current);
  }, [visible, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const Statistics = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section
      className="w-full relative text-white py-16 mb-16 px-0"
      style={{
        background: `url(${studentsImg}) center/cover no-repeat, #3b2d71`,
        position: 'relative',
      }}
    >
      <div className="absolute inset-0 bg-[#3b2d71]/50 z-0"></div>
      <div className="max-w-screen-2xl mx-auto w-full px-8 flex flex-col md:flex-row items-center justify-around text-center relative z-10">
        {/* Statistic Item 1 */}
        <div className="mb-8 md:mb-0" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-6xl font-bold mb-2">
            <AnimatedNumber target={256} />
          </h2>
          <p className="text-xl uppercase tracking-wider mb-2">Total Courses</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Statistic Item 2 */}
        <div className="mb-8 md:mb-0" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-6xl font-bold mb-2">
            <AnimatedNumber target={500} />
          </h2>
          <p className="text-xl uppercase tracking-wider mb-2">Total Registered ATC</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Statistic Item 3 */}
        <div className="mb-8 md:mb-0" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-6xl font-bold mb-2">
            <AnimatedNumber target={42} />
          </h2>
          <p className="text-xl uppercase tracking-wider mb-2">Total Registered AMC</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Statistics; 