import React from 'react';

const ReadyToBeginJourney = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 lg:p-16">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Ready to Begin Your Journey?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of students who have transformed their academic future through our programs.
              </p>
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
                style={{ backgroundColor: '#8A774A' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#8A774A'}
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