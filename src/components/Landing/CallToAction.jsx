import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/95 to-primary-700/95"></div>
      
      <div className="w-full max-w-none mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
            Start Your Journey Today
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of students who have transformed their academic future through our research programs. 
            Take the first step toward academic excellence and research success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg inline-block"
            >
              Apply Now
            </a>
            
            <a 
              href="/#programs"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg inline-block"
            >
              Explore Programs
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-100">Students Enrolled</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white mb-2">120+</div>
              <div className="text-primary-100">Research Mentors</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-white mb-2">97%</div>
              <div className="text-primary-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 