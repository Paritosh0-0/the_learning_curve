
function LearningDisabilities() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Types of Learning Disabilities
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-8 bg-white h-full sm:p-10">
              <div className="text-xl font-medium text-gray-900">
                Reading Disabilities
              </div>
              <p className="mt-4 text-base text-gray-500">
                Often referred to as{" "}
                <b className="text-black">
                  <i>Dyslexia</i>
                </b>
                , reading disabilities make it difficult to read and comprehend
                written language.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-8 bg-white h-full sm:p-10">
              <div className="text-xl font-medium text-gray-900">
                Written Language Disabilities
              </div>
              <p className="mt-4 text-base text-gray-500">
                Often referred to as{" "}
                <b className="text-black">
                  <i>Dysgraphia</i>
                </b>{" "}
                , written language disabilities make it difficult to write and
                express thoughts through written language.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-8 bg-white h-full sm:p-10">
              <div className="text-xl font-medium text-gray-900">
                Math Disabilities
              </div>
              <p className="mt-4 text-base text-gray-500">
                Often called{" "}
                <b className="text-black">
                  <i>Dyscalculia</i>
                </b>
                , math disabilities make it difficult to understand and work
                with numbers and mathematical concepts.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-8 bg-white h-full sm:p-10">
              <div className="text-xl font-medium text-gray-900">
                Developmental Coordination Disorder
              </div>
              <p className="mt-4 text-base text-gray-500">
                Also known as <b className="text-black"><i>Dyspraxia</i></b> (DCD), is a difficulty with motor
                skills that affects coordination, planning and execution of
                movements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningDisabilities;
