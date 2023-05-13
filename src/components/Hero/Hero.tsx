import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="text-left py-12 flex-wrap-reverse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 h-1/2 flex flex-col justify-around mb-10 md:mb-0">
          <div className="text-3xl lg:text-5xl space-y-4 font-bold text-gray-800 mb-4">
            <div className="leading-[8vin] md:leading-[6.75vmin]">Learning Disabilities don't define you.
            You define them.</div>
          </div>
          <p className="text-gray-600 text-lg mb-8 py-2">
            We believe that learning disabilities are not a limitation, but rather an
            opportunity to approach learning differently.
          </p>
          <button className="py-3 px-6 cursor-pointer w-fit bg-indigo-300 text-gray-800 rounded-lg shadow-md hover:bg-gold-400 hover:text-white">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full"
            src="/assets/hero.jpg"
            alt="Dyslexia illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
