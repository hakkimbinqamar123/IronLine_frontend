import React from 'react'
import bg from '../assets/Images/bg.webp'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[580px]">
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Oil Rig"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-40 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          When Safety Matters, Strength Matters
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Leading Energy & Infrastructure Solutions
        </p>
        <Link
          to="/services"
          className="inline-block bg-[#173E73] hover:bg-white hover:text-[#0F2A44] px-6 py-3 rounded-md font-medium"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default HeroSection
