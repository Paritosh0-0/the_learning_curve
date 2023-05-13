import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-indigo-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 mt-7">
      <div className="flex justify-between h-16 px-5">
        <div className="flex items-center">
          <img className="h-8 w-auto" src="/assets/logo.svg" alt="Logo" />
          <span className="ml-3 text-xl hidden lg:block">
            The Learning Curve
          </span>
        </div>
        <div className="flex items-center font-semibold">
          <button className="py-3 px-6 cursor-pointer bg-indigo-300 text-gray-800 rounded-lg shadow-md hover:text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
