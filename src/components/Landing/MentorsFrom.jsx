import React, { useState } from 'react';

const MentorsFrom = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const mentors = [
    {
      role: "ML Researcher",
      institution: "Harvard",
      image: "/mentor-1.jpg",
      description: "Specializes in machine learning applications in healthcare"
    },
    {
      role: "PhD Candidate",
      institution: "MIT",
      image: "/mentor-2.jpg",
      description: "Researching quantum computing and cryptography"
    },
    {
      role: "Assistant Professor",
      institution: "Yale",
      image: "/mentor-3.jpg",
      description: "Expert in cognitive neuroscience and brain imaging"
    },
    {
      role: "Research Scientist",
      institution: "Stanford",
      image: "/mentor-4.jpg",
      description: "Developing AI systems for autonomous vehicles"
    },
    {
      role: "Data Scientist",
      institution: "Oxford",
      image: "/mentor-5.jpg",
      description: "Analyzing complex datasets for climate research"
    },
    {
      role: "Postdoc Researcher",
      institution: "Cambridge",
      image: "/mentor-6.jpg",
      description: "Investigating sustainable energy solutions"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mentors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mentors.length) % mentors.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleMentors = () => {
    const visibleMentors = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % mentors.length;
      visibleMentors.push(mentors[index]);
    }
    return visibleMentors;
  };

  return (
    <section id="mentors" className="py-12 sm:py-16 lg:py-24 bg-gray-50 rounded-2xl sm:rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)', color: '#0F2A44' }}>
              Where Do Our Mentors Come From?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1rem)' }}>
              Meet our exceptional mentors from the world's leading research institutions
            </p>
          </div>

          <div className="relative">
            {/* Left Navigation Arrow */}
            <button 
              onClick={prevSlide}
              className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 lg:w-16 lg:h-16 bg-white border-2 border-[#0F2A44] rounded-full items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
            >
              <svg className="w-4 h-4 lg:w-6 lg:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button 
              onClick={nextSlide}
              className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 lg:w-16 lg:h-16 bg-white border-2 border-[#0F2A44] rounded-full items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
            >
              <svg className="w-4 h-4 lg:w-6 lg:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mentor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 mx-0 lg:mx-2 xl:mx-1 2xl:mx-0 wide-grid card-grid-wide">
              {getVisibleMentors().map((mentor, index) => (
                <div key={`${currentSlide}-${index}`} className={`bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 2xl:p-14 text-center shadow-sm hover:shadow-md transition-all duration-300 min-h-[300px] lg:min-h-[380px] xl:min-h-[400px] 2xl:min-h-[420px] wide-mentor-card ${index >= 2 ? 'hidden lg:block' : ''}`}>
                  {/* Profile Icon */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg" style={{ backgroundColor: '#0F2A44' }}>
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8c0 2.208-1.79 4-3.998 4-2.208 0-3.998-1.792-3.998-4s1.79-4 3.998-4c2.208 0 3.998 1.792 3.998 4z"/>
                    </svg>
                  </div>
                  
                  {/* Mentor Info */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2" style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.5rem)' }}>
                      {mentor.role}
                    </h3>
                    <p className="text-base sm:text-lg xl:text-lg font-black text-primary-600 mb-3 sm:mb-4 uppercase" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.125rem)' }}>
                      {mentor.institution}
                    </p>
                    <p className="text-sm sm:text-base xl:text-base text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)' }}>
                      {mentor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots - Hidden on tablets */}
            <div className="hidden xl:flex justify-center mt-8 sm:mt-12 space-x-1.5">
              {mentors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-[#B8A67A] w-4' : 'bg-gray-300 hover:bg-gray-400'
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

export default MentorsFrom; 