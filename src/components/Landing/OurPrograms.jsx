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
    <section className="py-20 lg:py-32 bg-white" id="programs">
      <div className="w-full max-w-none mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Our Programs
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:border-primary-600 shadow-lg"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:border-primary-600 shadow-lg"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Program Cards */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mx-0 lg:mx-20">
              {getVisiblePrograms().map((program, index) => (
                <div key={`${currentSlide}-${index}`} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                  {/* Hero Image */}
                  <div 
                    className="w-full h-64 lg:h-72 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${program.image}')`
                    }}
                  />
                  
                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col flex-grow">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 leading-tight">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-base lg:text-lg">
                      {program.description}
                    </p>
                    {program.link === "#" ? (
                      <button className="w-full py-4 px-6 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 text-base lg:text-lg">
                        Learn More
                      </button>
                    ) : (
                      <Link 
                        to={program.link}
                        className="w-full py-4 px-6 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 text-center block text-base lg:text-lg"
                      >
                        Learn More
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
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

export default OurPrograms; 