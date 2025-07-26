import React from 'react';

const ReadyToBeginJourney = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
                Ready to Begin Your Journey?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                Join thousands of students who have transformed their academic future through our programs.
              </p>
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base lg:text-lg"
                style={{ backgroundColor: '#0F2A44' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0F2A44'}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBeginJourney; 
