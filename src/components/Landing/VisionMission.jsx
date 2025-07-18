import React from 'react';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-none mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Vision & Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our commitment to excellence in education and research innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 lg:p-12 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Our Vision</h3>
              </div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                To become the world's leading platform for connecting brilliant young minds with cutting-edge research opportunities, fostering the next generation of innovative thinkers and breakthrough discoveries that will shape the future of science and technology.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 lg:p-12 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Our Mission</h3>
              </div>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                To provide exceptional research opportunities and mentorship to ambitious students worldwide, bridging the gap between academic potential and real-world impact through collaborative partnerships with leading universities and research institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission; 