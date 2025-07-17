import React, { useState } from 'react';

const MentorsFrom = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const mentors = [
    {
      role: "ML Researcher",
      institution: "Harvard",
      image: "/mentor-1.jpg"
    },
    {
      role: "PHD Candidate",
      institution: "MIT",
      image: "/mentor-2.jpg"
    },
    {
      role: "Assistant Professor",
      institution: "Yale",
      image: "/mentor-3.jpg"
    },
    {
      role: "Research Scientist",
      institution: "Stanford",
      image: "/mentor-4.jpg"
    },
    {
      role: "Data Scientist",
      institution: "Oxford",
      image: "/mentor-5.jpg"
    },
    {
      role: "Postdoc Researcher",
      institution: "Cambridge",
      image: "/mentor-6.jpg"
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            WHERE DO OUR MENTORS COME FROM?
          </h2>
        </div>

        <div className="relative">
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

          {/* Mentor Cards */}
          <div className="grid md:grid-cols-3 gap-8 mx-20">
            {getVisibleMentors().map((mentor, index) => (
              <div key={`${currentSlide}-${index}`} className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                {/* Profile Icon */}
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8c0 2.208-1.79 4-3.998 4-2.208 0-3.998-1.792-3.998-4s1.79-4 3.998-4c2.208 0 3.998 1.792 3.998 4z"/>
                  </svg>
                </div>
                
                {/* Mentor Info */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {mentor.role}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {mentor.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {mentors.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsFrom; 