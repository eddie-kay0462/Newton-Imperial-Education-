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
    },
    {
      name: "Stanford University",
      logo: "/school_logos/stanford_logo.jpeg",
      alt: "Stanford University Logo"
    },
    {
      name: "Yale University",
      logo: "/school_logos/yale_logo.png",
      alt: "Yale University Logo"
    },
    {
      name: "Princeton University",
      logo: "/school_logos/princeton_logo.png",
      alt: "Princeton University Logo"
    },
    {
      name: "Columbia University",
      logo: "/school_logos/columbia_logo.png",
      alt: "Columbia University Logo"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-none mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Our Mentors Are From Top Institutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Learn from experts who have studied and worked at the world's most prestigious universities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {institutions.map((institution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 lg:w-24 lg:h-24 mb-6 flex items-center justify-center">
                  <img 
                    src={institution.logo} 
                    alt={institution.alt}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-sm lg:text-base font-semibold text-gray-900 text-center leading-tight">
                  {institution.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 text-center">
            <div className="bg-white border border-gray-200 rounded-3xl p-12 lg:p-16">
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">120+</div>
                  <div className="text-lg text-gray-600">Expert Mentors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">8</div>
                  <div className="text-lg text-gray-600">Top Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-lg text-gray-600">PhD Level</div>
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