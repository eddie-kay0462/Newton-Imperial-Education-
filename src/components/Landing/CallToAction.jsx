import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-br from-[#0F2A44] to-[#0a1f33] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A44]/95 to-[#0a1f33]/95"></div>
      
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 sm:mb-8 text-heading" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
            Start Your Journey Today
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-100 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto text-body px-4" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>
            Join thousands of students who have transformed their academic future through our research programs. 
            Take the first step toward academic excellence and research success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0F2A44] hover:bg-gray-100 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base lg:text-lg inline-block w-full sm:w-auto"
            >
              Apply Now
            </a>
            
            <a 
              href="/#programs"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0F2A44] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base lg:text-lg inline-block w-full sm:w-auto"
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
