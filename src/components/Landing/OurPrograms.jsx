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
    if (!isPaused) {
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

  const getVisiblePrograms = () => {
    const visiblePrograms = [];
    // Always show 3 cards, but CSS will handle the display
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % programs.length;
      visiblePrograms.push(programs[index]);
    }
    return visiblePrograms;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50 rounded-2xl sm:rounded-3xl mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16" id="programs">
      {/* Container with proper max-width and responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 lg:mb-8" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', color: '#0F2A44' }}>
            Our Programs
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Discover our comprehensive range of educational programs designed to unlock your potential and prepare you for success.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Program Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {getVisiblePrograms().map((program, index) => (
              <div key={`${currentSlide}-${index}`} className={`bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col ${index >= 2 ? 'hidden lg:block' : ''}`}>
                {/* Hero Image */}
                <div 
                  className="w-full h-48 sm:h-56 lg:h-60 xl:h-64 bg-cover bg-center bg-no-repeat flex-shrink-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${program.image}')`
                  }}
                />
                
                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ minHeight: '3rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {program.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-8 sm:mt-12 lg:mt-16 space-x-4">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white border-2 border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white border-2 border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Centralized Learn More Button */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <Link 
              to="/programs"
              className="inline-flex items-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-[#0F2A44] text-white font-semibold rounded-full hover:bg-[#766542] transition-all duration-300 text-lg sm:text-xl lg:text-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More About Our Programs
              <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms; 