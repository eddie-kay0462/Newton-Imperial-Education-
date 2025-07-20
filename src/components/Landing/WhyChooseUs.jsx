import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 rounded-2xl sm:rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)', color: '#0F2A44' }}>
              Why Choose NIE
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1rem)' }}>
              Discover what makes our educational programs exceptional and why students worldwide choose us for their academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
            {/* Left Side - Image */}
            <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[540px] min-h-[320px] lg:min-h-[360px] xl:min-h-[400px]">
                <img 
                  src="/landing_page/why_choose_us.png"
                  alt="Why Choose Newton Imperial Education"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-primary-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-blue-100 rounded-full opacity-30"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-2 sm:space-y-3 order-1 lg:order-2 flex flex-col justify-center h-full">
              <div className="space-y-2 sm:space-y-3 text-gray-600 text-left lg:text-justify" style={{ lineHeight: '1.4' }}>
                <p className="text-sm sm:text-base lg:text-base mb-1" style={{ fontSize: 'clamp(0.875rem, 1.6vw, 1rem)' }}>
                  At Newton Imperial Education, we believe every student deserves access to world-class education and mentorship. Our programs are designed to unlock your potential and prepare you for success in top universities and beyond.
                </p>
                <p className="text-sm sm:text-base lg:text-base mb-1" style={{ fontSize: 'clamp(0.875rem, 1.6vw, 1rem)' }}>
                  We partner with leading researchers and academics from prestigious institutions like Harvard, MIT, Oxford, and Cambridge to provide you with unparalleled learning experiences that go beyond traditional education.
                </p>
              </div>
              {/* Key highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 0.9rem)' }}>World-Class Mentors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 0.9rem)' }}>Research Opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 0.9rem)' }}>Global Community</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary-600 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 0.9rem)' }}>Proven Results</span>
                </div>
              </div>
              {/* Learn More Button */}
              <div className="pt-2">
                <Link
                  to="/why-choose-us"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg group"
                  style={{ 
                    backgroundColor: '#0F2A44',
                    borderColor: '#0F2A44',
                    fontSize: 'clamp(0.875rem, 2.2vw, 1rem)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#0F2A44'}
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 