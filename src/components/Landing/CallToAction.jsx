import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/95 to-primary-700/95"></div>
      
              <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-8" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
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


        </div>
      </div>
    </section>
  );
};

export default CallToAction; 