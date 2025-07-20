import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OurPrograms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const programs = [
    {
      title: "Research Scholar Programs",
      description: "Comprehensive research-focused programs designed to develop critical thinking and academic excellence.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/research-scholar-programs"
    },
    {
      title: "Intensive Programs",
      description: "Accelerated learning programs that provide intensive academic preparation and skill development.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/intensive-programs"
    },
    {
      title: "University Prep Course",
      description: "Comprehensive preparation courses designed to ensure students are fully prepared for university-level academics.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/university-prep-course"
    },
    {
      title: "Summer Programs",
      description: "Engaging summer learning experiences that combine academic enrichment with practical skills development.",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/summer-programs"
    },
    {
      title: "Career Exploration and University Pathways",
      description: "Discover your passion and chart your academic future with our comprehensive career exploration program.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/career-exploration-pathways"
    },
    {
      title: "Leadership and Personal Development",
      description: "Focus on building the leadership skills necessary to succeed in both academic and personal life.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/leadership-personal-development"
    }
  ];

  // Auto-advance functionality
  useEffect(() => {
    // Only auto-advance on larger screens (lg and up)
    if (!isPaused && window.innerWidth >= 1024) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % programs.length);
      }, 4000); // Auto-advance every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, programs.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
  };

  // For laptops and up, show 3 cards at a time with chevron navigation
  const [desktopPage, setDesktopPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(programs.length / cardsPerPage);

  const getVisiblePrograms = () => {
    if (window.innerWidth >= 1024) {
      // On laptops and up, show 3 cards per page
      const start = desktopPage * cardsPerPage;
      return programs.slice(start, start + cardsPerPage);
    }
    // Otherwise, keep the slider logic for mobile/tablet
    const visiblePrograms = [];
    const cardsToShow = window.innerWidth < 640 ? 1 : 2;
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentSlide + i) % programs.length;
      visiblePrograms.push(programs[index]);
    }
    return visiblePrograms;
  };

  // Desktop chevron navigation handlers
  const nextDesktopPage = () => {
    setDesktopPage((prev) => (prev + 1) % totalPages);
  };
  const prevDesktopPage = () => {
    setDesktopPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50 rounded-2xl sm:rounded-3xl mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16" id="programs">
      {/* Container with proper max-width and responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)', color: '#0F2A44' }}>
            Our Programs
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1rem)' }}>
            Discover our comprehensive range of educational programs designed to unlock your potential and prepare you for success.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Program Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            {getVisiblePrograms().map((program, index) => (
              <div key={`${desktopPage}-${currentSlide}-${index}`} className={`bg-white border border-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full`}>
                {/* Hero Image */}
                <div 
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 bg-cover bg-center bg-no-repeat flex-shrink-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${program.image}')`
                  }}
                />
                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col flex-1 min-h-[260px] lg:min-h-[320px] lg:h-[320px]">
                  <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2" style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.5rem)' }}>
                    {program.title}
                  </h3>
                  <p className="text-base sm:text-lg xl:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                    {program.description}
                  </p>
                  <div className="mt-auto flex justify-start lg:justify-end">
                    <Link 
                      to={program.link}
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#0F2A44] text-white font-semibold rounded-full hover:bg-[#766542] transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-fit self-end"
                    >
                      Learn More
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows: show on mobile/tablet, and on desktop for 3-card paging */}
          {window.innerWidth < 1024 ? (
            <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-12 lg:mt-16 space-x-3 sm:space-x-4">
              {/* Left Arrow */}
              <button 
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border-2 border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {/* Right Arrow */}
              <button 
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border-2 border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-8 lg:mt-12 space-x-4">
              <button
                onClick={prevDesktopPage}
                className="w-12 h-12 bg-white border-2 border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextDesktopPage}
                className="w-12 h-12 bg-white border-2 border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurPrograms; 