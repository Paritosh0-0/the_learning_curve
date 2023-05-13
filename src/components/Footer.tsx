import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Join us on Google Play</h2>
        <p className="text-lg mb-4">
          Download our app today to fight learning disabilities and help your
          child succeed!
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.yourappname"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500"
        >
          <FaGooglePlay className="w-6 h-6 mr-2" />
          Get it on Google Play
        </a>
        <p className="mt-6">
          Our app is designed to help dyslexic children and their families. We
          offer a variety of features to improve reading and writing skills
        </p>
        <p className="mt-6">
          Join our community today and start your journey towards success!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
