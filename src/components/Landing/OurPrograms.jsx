import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OurPrograms = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const programs = [
    {
      title: "Research Scholar Programs",
      description: "Comprehensive research-focused programs designed to develop critical thinking, analytical skills, and academic excellence. Students engage in advanced research projects under expert mentorship.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/research-scholar-programs"
    },
    {
      title: "Intensive Programs",
      description: "Accelerated learning programs that provide intensive academic preparation and skill development. Perfect for students seeking rapid advancement in their chosen fields.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/intensive-programs"
    },
    {
      title: "University Prep Course",
      description: "Comprehensive preparation courses designed to ensure students are fully prepared for university-level academics, including study skills, critical thinking, and subject mastery.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/university-prep-course"
    },
    {
      title: "Summer Programs",
      description: "Engaging summer learning experiences that combine academic enrichment with practical skills development. Perfect for students looking to maximize their summer break.",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/summer-programs"
    },
    {
      title: "Career Exploration and University Pathways",
      description: "Discover your passion and chart your academic future with our comprehensive career exploration program. Get personalized guidance on university selection and career paths.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: "/career-exploration-pathways"
    },
    {
      title: "Leadership and Personal Development",
      description: "Focus on building the leadership skills necessary to succeed in both academic and personal life. Develop self-confidence, communication skills, and goal-setting abilities.",
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

  const goToSlide = (index) => {
    setCurrentSlide(index);
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
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 rounded-2xl sm:rounded-3xl mx-2 sm:mx-6 lg:mx-8 xl:mx-4 2xl:mx-2 section-container" id="programs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-16 wide-container">
        <div className="max-w-none mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)' }}>
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
            {/* Left Navigation Arrow */}
            <button 
              onClick={prevSlide}
              className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 lg:w-16 lg:h-16 bg-white border-2 border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
            >
              <svg className="w-4 h-4 lg:w-6 lg:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button 
              onClick={nextSlide}
              className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 lg:w-16 lg:h-16 bg-white border-2 border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
            >
              <svg className="w-4 h-4 lg:w-6 lg:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Program Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 mx-2 lg:mx-4 xl:mx-6 2xl:mx-8 wide-grid card-grid-wide">
              {getVisiblePrograms().map((program, index) => (
                <div key={`${currentSlide}-${index}`} className={`bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col min-h-[400px] lg:min-h-[420px] xl:min-h-[440px] 2xl:min-h-[450px] wide-card ${index >= 2 ? 'hidden lg:block' : ''}`}>
                  {/* Hero Image */}
                  <div 
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-56 xl:h-60 2xl:h-64 bg-cover bg-center bg-no-repeat wide-image"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${program.image}')`
                    }}
                  />
                  
                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-8 xl:p-10 flex flex-col flex-grow text-left">
                    <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.5rem)' }}>
                      {program.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed flex-grow" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)' }}>
                      {program.description}
                    </p>
                    <div className="mt-auto pt-4">
                      {program.link === "#" ? (
                        <button className="w-full py-3 sm:py-4 px-4 sm:px-6 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 text-sm sm:text-base lg:text-base" style={{ fontSize: 'clamp(0.875rem, 1.6vw, 0.9rem)' }}>
                          Learn More
                        </button>
                      ) : (
                        <Link 
                          to={program.link}
                          className="w-full py-3 sm:py-4 px-4 sm:px-6 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 text-center block text-sm sm:text-base lg:text-base" style={{ fontSize: 'clamp(0.875rem, 1.6vw, 0.9rem)' }}
                        >
                          Learn More
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots - Hidden on tablets */}
            <div className="hidden xl:flex justify-center mt-8 sm:mt-12 space-x-1.5">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary-600 scale-100' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default OurPrograms; 