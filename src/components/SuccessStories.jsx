import React, { useState } from 'react';

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const stories = [
    {
      name: "Sarah Johnson",
      role: "Research Scholar",
      achievement: "Published first research paper at 17",
      quote: "I published my first research paper at 17 thanks to Newton Imperial! The mentorship and guidance I received were incredible.",
      university: "Now at Stanford University",
      image: "/student-profile-1.jpg",
      initial: "S"
    },
    {
      name: "Michael Chen",
      role: "AI Research Student",
      achievement: "Developed breakthrough ML algorithm",
      quote: "Newton Imperial connected me with top researchers at MIT. The collaborative environment helped me push the boundaries of machine learning.",
      university: "Now at MIT",
      image: "/student-profile-2.jpg",
      initial: "M"
    },
    {
      name: "Emma Rodriguez",
      role: "Biotech Researcher",
      achievement: "Co-authored 3 research papers",
      quote: "The research opportunities at Newton Imperial opened doors I never thought possible. I'm now working on cutting-edge biotechnology research.",
      university: "Now at Harvard Medical School",
      image: "/student-profile-3.jpg",
      initial: "E"
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
          Student Success Stories
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Hear from our students who have achieved remarkable success through our programs
        </p>
        
        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            
            <div className="relative z-10">
              {/* Student Profile */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                {/* Student Picture */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src={currentStory.image} 
                    alt={`${currentStory.name} Profile`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white text-2xl font-bold">
                    {currentStory.initial}
                  </div>
                </div>
                
                {/* Student Info */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentStory.name}</h3>
                  <p className="text-primary-600 font-semibold mb-1">{currentStory.role}</p>
                  <p className="text-gray-600">{currentStory.achievement}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="mb-8">
                <svg className="w-12 h-12 text-primary-600 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                
                <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed mb-6 max-w-3xl mx-auto">
                  "{currentStory.quote}"
                </blockquote>
              </div>
              
              {/* Achievement */}
              <div className="inline-flex items-center gap-3 bg-primary-50 text-primary-700 px-6 py-3 rounded-full font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{currentStory.university}</span>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {stories.map((_, index) => (
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

export default SuccessStories; 