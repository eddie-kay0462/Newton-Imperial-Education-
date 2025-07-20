import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const LeadershipPersonalDevelopment = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative text-white py-8 sm:py-12 lg:py-16 xl:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 3rem)' }}>
              Leadership & Personal Development
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto px-4" style={{ fontSize: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
              Develop essential leadership skills and personal growth for academic and career success
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-white rounded-lg shadow-md border border-gray-200/30 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3" style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}>
                  Leadership & Personal Development
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-primary-600 font-semibold mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>
                  $1,100
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>5 weeks</span>
                  </div>
                  <div className="flex items-center text-primary-600 font-semibold">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>$1,100</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 lg:mb-6 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>
                  Focus on building the leadership skills necessary to succeed in both academic and personal life.
                </p>
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Format:</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>Leadership activities, personal reflection journals, peer feedback sessions.</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Program Highlights:</h4>
                <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  <li className="flex items-start">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>Gain insights into effective communication, teamwork, and decision-making.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>Develop self-confidence and emotional intelligence.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>Learn how to set and achieve personal and academic goals.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm md:text-base w-full sm:w-auto"
                style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}
              >
                Apply for Leadership & Personal Development
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
            Ready to Develop Your Leadership Skills?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.25rem)' }}>
            Join our leadership program and unlock your potential for academic and personal success
          </p>
          <a 
            href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-600 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg hover:bg-gray-100 transition-colors text-xs sm:text-sm md:text-base w-full sm:w-auto"
            style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipPersonalDevelopment; 