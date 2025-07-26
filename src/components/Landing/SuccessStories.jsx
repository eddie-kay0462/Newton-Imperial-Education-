import React, { useState, useEffect } from 'react';
import CounterAnimation from '../CounterAnimation.jsx';

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const stories = [
    {
      name: "Ethan N.",
      role: "Research Scholar",
      achievement: "Gained academic confidence and leadership skills",
      quote: "Studying at Newton Imperial College has been a life-changing experience. The support from my tutors and the academic community here has helped me discover confidence I never knew I had.",
      university: "Now at Stanford University",
      image: "/student-profile-1.jpg",
      initial: "E"
    },
    {
      name: "Ella J.",
      role: "Academic Excellence Student",
      achievement: "Thriving in collaborative learning environment",
      quote: "I'm incredibly thankful for the chance to learn alongside such inspiring peers at Newton Imperial. Every day here challenges me to grow intellectually and personally.",
      university: "Now at MIT",
      image: "/student-profile-2.jpg",
      initial: "E"
    },
    {
      name: "Hannah M.",
      role: "International Student",
      achievement: "Embracing global academic excellence",
      quote: "Newton Imperial College welcomed me with open arms. The international perspective and academic excellence have given me the tools to dream bigger than ever before.",
      university: "Now at Oxford University",
      image: "/student-profile-3.jpg",
      initial: "H"
    },
    {
      name: "Liam T.",
      role: "Focused Scholar",
      achievement: "Developed determination and focus",
      quote: "I'm proud to be part of Newton Imperial College. The rigorous learning environment and encouragement from staff have made me a more focused and determined student.",
      university: "Now at Princeton University",
      image: "/student-profile-4.jpg",
      initial: "L"
    },
    {
      name: "Mei C.",
      role: "Aspiring Researcher",
      achievement: "Found supportive academic community",
      quote: "Being part of Newton Imperial College means being part of something bigger. I've found a place where my goals are supported and my potential is recognized.",
      university: "Now at Harvard University",
      image: "/student-profile-5.jpg",
      initial: "M"
    },
    {
      name: "Jordan W.",
      role: "Motivated Learner",
      achievement: "Transformed academic outlook",
      quote: "Newton Imperial College has changed my outlook on learning. The energy here is powerful—it's a place where ambition turns into action.",
      university: "Now at Yale University",
      image: "/student-profile-6.jpg",
      initial: "J"
    },
    {
      name: "Anna T.",
      role: "Grateful Student",
      achievement: "Building confidence for the future",
      quote: "I feel incredibly lucky to study at Newton Imperial. The supportive atmosphere and world-class education have helped me believe in my future.",
      university: "Now at Cambridge University",
      image: "/student-profile-7.jpg",
      initial: "A"
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

  // Auto-advance functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % stories.length);
      }, 5000); // Auto-advance every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, stories.length]);

  const currentStory = stories[currentSlide];

  return (
    <section id="success-stories" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50 rounded-3xl mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
      {/* Container with proper max-width and responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 text-heading" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
            Success Stories
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto text-body px-4" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>
            Hear from students who have transformed their academic journey through our programs
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Story Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 mx-0 lg:mx-8 xl:mx-12 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="text-center mb-6 sm:mb-8">
              {/* Profile Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm">
                <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-600">
                  {currentStory.initial}
                </span>
              </div>
              
              {/* Quote */}
              <div className="mb-6 sm:mb-8">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary-200 mx-auto mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <blockquote className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
                  "{currentStory.quote}"
                </blockquote>
              </div>
              
              {/* Student Info */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal', fontSize: 'clamp(1.125rem, 1.8vw, 1.5rem)' }}>
                  {currentStory.name}
                </h3>
                <p className="text-base sm:text-lg xl:text-lg font-black text-primary-600 mb-3 sm:mb-4 uppercase" style={{ fontFamily: 'Circular Std, Arial, sans-serif', fontSize: 'clamp(1rem, 1.6vw, 1.125rem)' }}>
                  {currentStory.role}
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>
                  {currentStory.achievement}
                </p>
                <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-green-100 border border-green-200 rounded-full">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-700 font-semibold text-sm sm:text-base">
                    {currentStory.university}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-8 sm:mt-12 lg:mt-16 space-x-8">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white border border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] transition-all duration-300 group"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Progress Indicators */}
            <div className="flex space-x-2">
              {stories.map((_, index) => (
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
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white border border-[#0F2A44] rounded-full flex items-center justify-center hover:bg-[#0F2A44] transition-all duration-300 group"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 shadow-sm">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
                Student Achievements
              </h3>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>
                Our students consistently achieve remarkable academic success
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              <div className="text-center">
                <CounterAnimation 
                  targetValue={150} 
                  suffix="+" 
                  duration={2000}
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                />
                <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 px-1">Research Papers Published</div>
              </div>
              <div className="text-center">
                <CounterAnimation 
                  targetValue={95} 
                  suffix="%" 
                  duration={2000}
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                />
                <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 px-1">Top University Acceptance</div>
              </div>
              <div className="text-center">
                <CounterAnimation 
                  targetValue={2.5} 
                  prefix="$" 
                  suffix="M" 
                  duration={2000}
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                />
                <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 px-1">In Scholarships Awarded</div>
              </div>
              <div className="text-center">
                <CounterAnimation 
                  targetValue={50} 
                  suffix="+" 
                  duration={2000}
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                />
                <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 px-1">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 
