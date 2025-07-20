import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MentorInstitutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const institutions = [
    {
      name: "Oxford University",
      displayName: { first: "Oxford", second: "University" },
      logo: "/school_logos/oxford_logo.png",
      alt: "Oxford University Logo"
    },
    {
      name: "University of Cambridge",
      displayName: { first: "Cambridge", second: "University" },
      logo: "/school_logos/cambridge_logo.png",
      alt: "Cambridge University Logo"
    },
    {
      name: "Princeton University",
      displayName: { first: "Princeton", second: "University" },
      logo: "/school_logos/princeton_logo.png",
      alt: "Princeton University Logo"
    },
    {
      name: "Harvard University",
      displayName: { first: "Harvard", second: "University" },
      logo: "/school_logos/harvard_logo.png",
      alt: "Harvard University Logo"
    },
    {
      name: "Massachusetts Institute of Technology",
      displayName: { first: "MIT", second: "" },
      logo: "/school_logos/mit_logo.jpg",
      alt: "MIT Logo"
    },
    {
      name: "Stanford University",
      displayName: { first: "Stanford", second: "University" },
      logo: "/school_logos/stanford_logo.png",
      alt: "Stanford University Logo"
    },
    {
      name: "Peking University",
      displayName: { first: "Peking", second: "University" },
      logo: "/school_logos/peking_logo.png",
      alt: "Peking University Logo"
    },
    {
      name: "Tsinghua University",
      displayName: { first: "Tsinghua", second: "University" },
      logo: "/school_logos/tsinghua_logo.png",
      alt: "Tsinghua University Logo"
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(institutions.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentInstitutions = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return institutions.slice(startIndex, startIndex + itemsPerSlide);
  };

    return (
    <section className="py-16 lg:py-24 bg-gray-50 rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', color: '#0F2A44' }}>
              Our Mentors Are From Top Institutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Learn from experts who have studied and worked at the world's most prestigious universities
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Institutions Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {getCurrentInstitutions().map((institution, index) => (
                <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center justify-center group transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center flex-shrink-0 mb-4">
                    <img 
                      src={institution.logo} 
                      alt={institution.alt}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm lg:text-base font-bold text-gray-900 leading-tight uppercase">
                      {institution.displayName.first}
                    </h3>
                    {institution.displayName.second && (
                      <h3 className="text-sm lg:text-base font-bold text-gray-900 leading-tight uppercase">
                        {institution.displayName.second}
                      </h3>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center mt-12 space-x-8">
              {/* Left Arrow */}
              <button 
                onClick={prevSlide}
                className="w-16 h-16 rounded-full bg-white border-2 border-[#0F2A44] flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Progress Indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#B8A67A] w-4' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                onClick={nextSlide}
                className="w-16 h-16 rounded-full bg-white border-2 border-[#0F2A44] flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <Link 
                to="/mentors"
                className="inline-block text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg"
                style={{ backgroundColor: '#0F2A44' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0F2A44'}
              >
                Find Out More About Our Mentors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorInstitutions; 