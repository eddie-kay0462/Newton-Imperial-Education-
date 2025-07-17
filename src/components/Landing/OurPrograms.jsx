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
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % programs.length;
      visiblePrograms.push(programs[index]);
    }
    return visiblePrograms;
  };

  return (
    <section className="py-20 bg-white" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            OUR PROGRAMS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Navigation Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Program Cards */}
          <div className="grid md:grid-cols-3 gap-8 mx-20">
            {getVisiblePrograms().map((program, index) => (
              <div key={`${currentSlide}-${index}`} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                {/* Hero Image */}
                <div 
                  className="w-full h-48 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${program.image}')`
                  }}
                />
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {program.description}
                  </p>
                  {program.link === "#" ? (
                    <button className="w-full py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded hover:bg-primary-600 hover:text-white transition-colors">
                      LEARN MORE
                    </button>
                  ) : (
                    <Link 
                      to={program.link}
                      className="w-full py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded hover:bg-primary-600 hover:text-white transition-colors text-center block"
                    >
                      LEARN MORE
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Auto-advance indicator */}
          <div className="flex justify-center mt-4">
            <div className="text-sm text-gray-500">
              {isPaused ? (
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                  </svg>
                  Paused
                </span>
              ) : (
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 00.707-.293l2.414-2.414a1 1 0 00.293-.707V6a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 00.293.707L10.707 12.293A1 1 0 0011.586 13H13" />
                  </svg>
                  Auto-advancing
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have transformed their academic future through our programs.
            </p>
            <Link 
              to="/apply" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms; 