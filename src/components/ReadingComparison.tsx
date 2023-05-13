import React from "react";

const ReadingComparison: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full justify-around px-7">
      <img src="/assets/reading.jpg" alt="Reading" className="w-full md:w-1/4" />
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-2 justify-center items-center w-full h-full">
          <div className="flex flex-col items-center">
            <div className="text-4xl flex justify-center items-center w-full">
              Normal Reading
            </div>
            <p className="text-gray-600 text-[1.3rem] py-4  w-[80%]">
              Dyslexia is a specific learning disorder that affects reading
              ability in children and adults. In normal reading, words appear
              clear and easy to understand, and sentences flow naturally.
            </p>
          </div>
          <div className="flex flex-col items-center pt-6">
            <div className="text-4xl flex justify-center items-center w-full">
              Dyslexic Reading
            </div>
            <p className="text-gray-600 text-[1.3rem] py-4 w-[80%]">
              Dyslexic reading can be a challenging experience, as the letters
              in words may appear jumbled and out of order. Spacing between
              words and letters may also be inconsistent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingComparison;
