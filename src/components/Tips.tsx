import React from "react";

const Tips: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Taking Care of Dyslexic Children
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Create a Structured and Consistent Routine
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Dyslexic children often struggle with organization and planning.
              Creating a consistent daily routine can help them feel more secure
              and in control. Make sure to build in time for rest, exercise, and
              creative activities.
            </p>
            <div className="flex flex-col justify-center items-center w-full">
              <ul className="list-disc list-inside items-center text-left">
                <li>Establish consistent bedtimes and wake-up times</li>
                <li>Plan out meals and snacks in advance</li>
                <li>Schedule time for homework and studying</li>
                <li>Build in time for physical activity and creative play</li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Use Multisensory Learning Techniques
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Dyslexic children often learn best when multiple senses are
              engaged in the learning process. This can involve using a variety
              of tools and techniques to help them process information and
              retain knowledge.
            </p>
            <div className="flex flex-col justify-center items-center w-full">
              <ul className="list-disc list-inside items-center text-left">
                <li>Use hands-on learning activities and manipulatives</li>
                <li>Incorporate visual aids such as charts and diagrams</li>
                <li>Use audiobooks and podcasts to supplement reading</li>
                <li>Encourage the use of color coding and highlighting</li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Build Self-Esteem and Confidence
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Dyslexic children often struggle with self-esteem and confidence
              due to difficulties with reading and writing. As a parent or
              caregiver, it's important to provide positive feedback and
              encourage a growth mindset.
            </p>
            <div className="flex flex-col justify-center items-center w-full">
              <ul className="list-disc list-inside items-center text-left">
                <li>Focus on strengths and accomplishments</li>
                <li>Praise effort and hard work</li>
                <li>Encourage exploration and experimentation</li>
                <li>Provide opportunities for leadership and teamwork</li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Stay Connected with Educators
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Dyslexic children often benefit from additional support and
              accommodations in the classroom. It's important to stay in touch
              with your child's teachers and healthcare providers to ensure they
              are receiving the help they need.
            </p>
            <div className="flex flex-col justify-center items-center w-full">
              <ul className="list-disc list-inside w-fit items-center text-left">
                <li>Attend parent-teacher conferences and IEP meetings</li>
                <li>Ask about accommodations and support services</li>
                <li>Keep track of your child's progress and challenges</li>
                <li>Seek out additional resources and support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tips;
