import React from 'react';

const MentorInstitutions = () => {
  const institutions = [
    {
      name: "Oxford University",
      logo: "/school_logos/oxford_logo.png",
      alt: "Oxford University Logo"
    },
    {
      name: "University of Cambridge",
      logo: "/school_logos/cambridge_logo.png",
      alt: "Cambridge University Logo"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Our Mentors Are From Top Institutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Learn from experts who have studied and worked at the world's most prestigious universities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
            {institutions.map((institution, index) => (
              <div key={index} className="flex items-center justify-center group transition-all duration-300">
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={institution.logo} 
                      alt={institution.alt}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight uppercase">
                    {institution.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="border border-gray-200 rounded-2xl p-12 lg:p-16">
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">120+</div>
                  <div className="text-lg lg:text-xl text-gray-600 font-medium">Expert Mentors</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">2</div>
                  <div className="text-lg lg:text-xl text-gray-600 font-medium">Top Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-lg lg:text-xl text-gray-600 font-medium">PhD Level</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorInstitutions; 