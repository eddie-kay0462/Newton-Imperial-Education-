import React from 'react';

const MentorInstitutions = () => {
  const institutions = [
    {
      name: "Harvard University",
      logo: "/school_logos/harvard_logo.png",
      alt: "Harvard University Logo"
    },
    {
      name: "MIT",
      logo: "/school_logos/mit_logo.jpg",
      alt: "MIT Logo"
    },
    {
      name: "Oxford University",
      logo: "/school_logos/oxford_logo.png",
      alt: "Oxford University Logo"
    },
    {
      name: "Cambridge University",
      logo: "/school_logos/cambridge_logo.png",
      alt: "Cambridge University Logo"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            OUR MENTORS ARE FROM TOP INSTITUTIONS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experts who have studied and worked at the world's most prestigious universities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center">
          {institutions.map((institution, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-32 h-32 mb-4 flex items-center justify-center bg-white rounded-lg shadow-sm">
                <img 
                  src={institution.logo} 
                  alt={institution.alt}
                  className="max-w-full max-h-full object-contain hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {institution.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <span className="text-sm">And many more prestigious institutions worldwide</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorInstitutions; 