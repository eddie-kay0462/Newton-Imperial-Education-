import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const UniversityPrepCourse = () => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4 lg:mb-6 hero-title">
              University Preparation Course
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto px-4 hero-subtitle">
              Comprehensive preparation for university-level academics and research
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 bg-gray-25">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Program Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md border border-gray-200/30 p-4 sm:p-6 md:p-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}>Program Overview</h2>
              
              <div className="prose max-w-none">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1.125rem)' }}>
                  A comprehensive program aimed at preparing students for the academic rigors of university. 
                  The course covers critical skills such as research, writing, time management, and independent study.
                </p>

                <div className="bg-primary-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-primary-900 mb-2 sm:mb-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Course Format</h3>
                  <p className="text-xs sm:text-sm md:text-base text-primary-800" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>
                    Weekly modules, live interactive webinars, assignments, and group discussions.
                  </p>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}>Program Highlights</h3>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Academic Writing Excellence</h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>Learn how to write university-level essays and research papers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Study Skills & Time Management</h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>Build effective study habits and time management techniques.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>University Transition</h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>Explore key differences between high school and university life.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-25 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Ready to Start Your University Journey?</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>
                    Join hundreds of students who have successfully transitioned to university with our comprehensive preparation program.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a 
                      href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-xs sm:text-sm md:text-base w-full sm:w-auto text-center"
                      style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}
                    >
                      Enroll Now - $1,500
                    </a>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-xs sm:text-sm md:text-base w-full sm:w-auto">
                      Download Curriculum
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Course Details & Contact */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md border border-gray-200/30 p-4 sm:p-6 lg:sticky lg:top-24">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Course Details</h3>
              
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Duration</span>
                    <div className="font-medium text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.6vw, 1rem)' }}>6 weeks</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Investment</span>
                    <div className="font-medium text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.6vw, 1rem)' }}>$1,500</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-600 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Format</span>
                    <div className="font-medium text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.6vw, 1rem)' }}>Online & Interactive</div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 sm:pt-6">
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>What's Included</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Weekly live webinars</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Interactive assignments</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Group discussions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Course materials</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Certificate of completion</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                <h4 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Contact Us</h4>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                  <p style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Course Support</p>
                  <p style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Email: hello@newtonimperial.education</p>
                  <p style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Phone: +44 7999 846221</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UniversityPrepCourse; 