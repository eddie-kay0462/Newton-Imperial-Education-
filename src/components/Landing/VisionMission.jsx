import React from 'react';

const VisionMission = () => {
  return (
    <section className="py-24 gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vision & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence in education and research innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="card p-10 group hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-primary-700 rounded-full flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To become the world's leading platform for connecting brilliant young minds with cutting-edge research opportunities, fostering the next generation of innovative thinkers and breakthrough discoveries that will shape the future of science and technology.
            </p>
          </div>

          {/* Mission */}
          <div className="card p-10 group hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-primary-700 rounded-full flex items-center justify-center mr-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To democratize access to world-class research opportunities by connecting exceptional students with renowned mentors from top-tier institutions, providing comprehensive support for research publication, and building a global community of future scientific leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission; 