import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Your Program",
      description: "Explore our variety of online and in-person programs designed to match your academic goals and interests.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      number: 2,
      title: "Submit Application",
      description: "Complete our online application form with your academic background and program interests.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      )
    },
    {
      number: 3,
      title: "Competitive Interview",
      description: "Participate in an online interview to discuss your goals and ensure program alignment.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    },
    {
      number: 4,
      title: "Accept & Pay Deposit",
      description: "Receive your admission offer and secure your spot with a 50% deposit payment.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24" style={{ backgroundColor: '#F0F4F9' }}>
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 text-gray-900 text-heading" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
              How It Works
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto text-body px-4" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>
              At Newton Imperial Education (NIE), we make the process of enrolling in our programs simple and transparent. Here's how to get started on your academic journey.
            </p>
          </div>

          {/* Vertical Stepper */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical dotted line - positioned to align with circle centers */}
              <div className="hidden sm:block absolute left-6 sm:left-7 lg:left-8 top-0 bottom-0 w-0.5 border-l-2 border-dotted border-gray-600"></div>
              
              {/* Steps */}
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                    {/* Step Number - centered on the line */}
                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 lg:mr-8 relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center relative" style={{ backgroundColor: '#0F2A44', border: '2px solid #0F2A44' }}>
                        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Step Card */}
                    <div className="flex-1 bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-2 sm:mb-3 card-title" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 card-description" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learn More Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6 text-heading" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
                Want to Know More About Our Process?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto text-body" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>
                Get detailed information about each step, including tips for success, payment options, and what to expect throughout your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/how-it-works"
                  className="inline-block bg-[#0F2A44] hover:bg-[#1A3659] text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base lg:text-lg text-button"
                >
                  Learn More
                </Link>
                <a 
                  href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-[#0F2A44] text-[#0F2A44] hover:bg-[#0F2A44] hover:text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base lg:text-lg text-button"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 
