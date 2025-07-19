import React, { useState } from 'react';
import CounterAnimation from '../CounterAnimation.jsx';

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const stories = [
    {
      name: "Sarah Johnson",
      role: "Research Scholar",
      achievement: "Published first research paper at 17",
      quote: "I published my first research paper at 17 thanks to Newton Imperial! The mentorship and guidance I received were incredible. Working with a Harvard researcher opened doors I never thought possible.",
      university: "Now at Stanford University",
      image: "/student-profile-1.jpg",
      initial: "S"
    },
    {
      name: "Michael Chen",
      role: "AI Research Student",
      achievement: "Developed breakthrough ML algorithm",
      quote: "Newton Imperial connected me with top researchers at MIT. The collaborative environment helped me push the boundaries of machine learning. I'm now working on cutting-edge AI research.",
      university: "Now at MIT",
      image: "/student-profile-2.jpg",
      initial: "M"
    },
    {
      name: "Emma Rodriguez",
      role: "Biotech Researcher",
      achievement: "Co-authored 3 research papers",
      quote: "The research opportunities at Newton Imperial opened doors I never thought possible. I'm now working on cutting-edge biotechnology research with world-class mentors.",
      university: "Now at Harvard Medical School",
      image: "/student-profile-3.jpg",
      initial: "E"
    },
    {
      name: "David Kim",
      role: "Physics Research Student",
      achievement: "Contributed to quantum computing research",
      quote: "The mentorship program at Newton Imperial gave me the confidence to pursue advanced physics research. I'm now working on quantum computing applications.",
      university: "Now at Princeton University",
      image: "/student-profile-4.jpg",
      initial: "D"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentStory = stories[currentSlide];

  return (
    <section id="success-stories" className="py-16 lg:py-24 bg-gray-50 rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}>
              Success Stories
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)' }}>
              Hear from students who have transformed their academic journey through our programs
            </p>
          </div>

          <div className="relative">
            {/* Left Navigation Arrow */}
            <button 
              onClick={prevSlide}
              className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-16 h-16 bg-white border-2 border-[#0F2A44] rounded-full items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Navigation Arrow */}
            <button 
              onClick={nextSlide}
              className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-16 h-16 bg-white border-2 border-[#0F2A44] rounded-full items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Story Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 lg:p-16 mx-0 lg:mx-20 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-center mb-8">
                {/* Profile Avatar */}
                <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="text-2xl lg:text-3xl font-bold text-primary-600">
                    {currentStory.initial}
                  </span>
                </div>
                
                {/* Quote */}
                <div className="mb-8">
                  <svg className="w-12 h-12 text-primary-200 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic max-w-4xl mx-auto">
                    "{currentStory.quote}"
                  </blockquote>
                </div>
                
                {/* Student Info */}
                <div className="text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {currentStory.name}
                  </h3>
                  <p className="text-lg font-semibold text-primary-600 mb-2">
                    {currentStory.role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {currentStory.achievement}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-green-700 font-semibold text-sm">
                      {currentStory.university}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="hidden sm:flex justify-center mt-12 space-x-1.5">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary-600 scale-100' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-20">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 lg:p-16 shadow-sm">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.25rem, 3vw, 1.875rem)' }}>
                  Student Achievements
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}>
                  Our students consistently achieve remarkable academic success
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                                  <div className="text-center">
                    <CounterAnimation 
                      targetValue={150} 
                      suffix="+" 
                      duration={2000}
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                    />
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 px-1" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}>Research Papers Published</div>
                  </div>
                  <div className="text-center">
                    <CounterAnimation 
                      targetValue={95} 
                      suffix="%" 
                      duration={2000}
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                    />
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 px-1" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}>Top University Acceptance</div>
                  </div>
                  <div className="text-center">
                    <CounterAnimation 
                      targetValue={2.5} 
                      prefix="$" 
                      suffix="M" 
                      duration={2000}
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                    />
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 px-1" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}>In Scholarships Awarded</div>
                  </div>
                  <div className="text-center">
                    <CounterAnimation 
                      targetValue={50} 
                      suffix="+" 
                      duration={2000}
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                    />
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 px-1" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}>Awards Won</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 