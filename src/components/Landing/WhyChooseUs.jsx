import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Why Choose NIE
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover what makes our educational programs exceptional and why students worldwide choose us for their academic journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src="/landing_page/why_choose_us.png"
                  alt="Why Choose Newton Imperial Education"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-30"></div>
                </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Excellence in Education, Research, and Personal Development
                </h3>
                
                <div className="space-y-2 text-gray-600 text-justify" style={{ lineHeight: '1.4' }}>
                  <p className="text-lg">
                    At Newton Imperial Education, we believe every student deserves access to world-class education and mentorship. Our programs are designed to unlock your potential and prepare you for success in top universities and beyond.
                  </p>
                  
                  <p className="text-lg">
                    We partner with leading researchers and academics from prestigious institutions like Harvard, MIT, Oxford, and Cambridge to provide you with unparalleled learning experiences that go beyond traditional education.
                  </p>
                  
                  <p className="text-lg">
                    Join our community of ambitious students who are transforming their academic trajectories and building the foundation for extraordinary futures.
                  </p>
                </div>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">World-Class Mentors</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Research Opportunities</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Global Community</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Proven Results</span>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="pt-0">
                <Link
                  to="/why-choose-us"
                  className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg group"
                  style={{ 
                    backgroundColor: '#0F2A44',
                    borderColor: '#0F2A44'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#0F2A44'}
                >
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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