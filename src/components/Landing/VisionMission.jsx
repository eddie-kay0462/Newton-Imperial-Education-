import React from 'react';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-12 lg:py-16 bg-gray-50 rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', color: '#0F2A44' }}>
              Vision & Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our commitment to excellence in education and research innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Vision */}
            <div className="bg-white border border-gray-200/30 rounded-3xl p-8 lg:p-10 xl:p-12 group hover:shadow-md transition-all duration-300 shadow-sm">
              <div className="text-center mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl items-center justify-center shadow-sm mx-auto mb-4 flex" style={{ backgroundColor: '#0F2A44' }}>
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Our Vision</h3>
              </div>
              <p className="text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                To become the world's leading platform for connecting brilliant young minds with cutting-edge research opportunities, fostering the next generation of innovative thinkers and breakthrough discoveries that will shape the future of science and technology.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-gray-200/30 rounded-3xl p-8 lg:p-10 xl:p-12 group hover:shadow-md transition-all duration-300 shadow-sm">
              <div className="text-center mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl items-center justify-center shadow-sm mx-auto mb-4 flex" style={{ backgroundColor: '#0F2A44' }}>
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Our Mission</h3>
              </div>
              <p className="text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
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