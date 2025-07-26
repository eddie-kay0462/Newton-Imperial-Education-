import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MentorInstitutions = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with Cambridge (index 1)
  
  const institutions = [
    {
      name: "University of Oxford",
      displayName: { first: "University of", second: "Oxford" },
      logo: "/school_logos/oxford_logo.png",
      alt: "University of Oxford Logo"
    },
    {

      name: "University of Cambridge",
      displayName: { first: "University of", second: "Cambridge" },
      logo: "/school_logos/cambridge_logo.png",
      alt: "University of Cambridge Logo"
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
      logo: "/school_logos/mit_logo.png",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % institutions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + institutions.length) % institutions.length);
  };

  const getVisibleInstitutions = () => {
    // Show 1 on mobile, 2 on tablet, 4 on desktop
    const itemsToShow = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4;
    const visibleInstitutions = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentSlide + i) % institutions.length;
      visibleInstitutions.push(institutions[index]);
    }
    return visibleInstitutions;
  };

    return (
    <section className="py-16 lg:py-24 bg-gray-50 rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 text-heading" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
              Our Mentors Are From Top Institutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1rem)' }}>
              Learn from experts who have studied and worked at the world's most prestigious universities
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Institutions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
              {getVisibleInstitutions().map((institution, index) => (
                <div key={`${currentSlide}-${index}`} className={`bg-white rounded-lg p-6 flex flex-col items-center justify-center group transition-all duration-300 shadow-sm hover:shadow-md ${index >= 1 ? 'hidden sm:block' : ''} ${index >= 2 ? 'hidden lg:block' : ''}`}>
                  <div className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center flex-shrink-0 mb-4">
                    <img 
                      src={institution.logo} 
                      alt={institution.alt}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2" style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.5rem)' }}>
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
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Progress Indicators */}
              <div className="flex space-x-2 hidden sm:flex">
                {Array.from({ length: Math.ceil(institutions.length / (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4)) }, (_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === Math.floor(currentSlide / (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4))
                        ? 'bg-[#B8A67A] w-4' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <Link 
                to="/mentors"
                className="inline-block text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base lg:text-lg"
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
