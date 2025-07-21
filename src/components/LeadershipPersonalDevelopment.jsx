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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4 lg:mb-6 hero-title">
              Leadership and Personal Development
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto px-4 hero-subtitle">
              Build essential leadership skills for academic and personal success
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md border border-gray-200/30 p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3" style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}>
                      Leadership and Personal Development
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-primary-600 font-semibold mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>
                      Essential Leadership Skills for Success
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>5 weeks</span>
                      </div>
                      <div className="flex items-center text-primary-600 font-semibold">
                        <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>$1,100</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 lg:mb-6 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>
                      Focus on building the leadership skills necessary to succeed in both academic and personal life. This comprehensive program develops essential leadership qualities that will serve you throughout your academic journey and beyond.
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
                    Apply for Leadership Development Program
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md border border-gray-200/30 p-4 sm:p-6 md:p-8 lg:p-12">
                <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}>
                  Course Details
                </h3>
                <div className="flex items-center text-primary-600 font-semibold mb-2 sm:mb-3 lg:mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>Duration:</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>5 weeks</p>

                <div className="flex items-center text-primary-600 font-semibold mb-2 sm:mb-3 lg:mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>Investment:</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>$1,100</p>

                <div className="flex items-center text-primary-600 font-semibold mb-2 sm:mb-3 lg:mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>Format:</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Online & Interactive</p>

                <div className="flex items-center text-primary-600 font-semibold mb-2 sm:mb-3 lg:mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>What's Included:</span>
                </div>
                <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3 text-sm sm:text-base md:text-lg text-gray-700" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>
                  <li>Leadership activities</li>
                  <li>Personal reflection journals</li>
                  <li>Peer feedback sessions</li>
                  <li>Goal-setting workshops</li>
                </ul>

                <div className="mt-6">
                  <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}>
                    Contact Us
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>
                    If you have any questions or would like to learn more about our programs, please don't hesitate to contact us.
                  </p>
                  <a 
                    href="mailto:info@example.com"
                    className="inline-block bg-primary-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm md:text-base w-full sm:w-auto"
                    style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#0F2A44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
            Ready to Develop Your Leadership Skills?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.25rem)' }}>
            Join our leadership development program and unlock your potential for academic and personal success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a 
              href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg bg-[#B8A67A] hover:bg-[#9A8B6A]"
            >
              Apply Now
            </a>
            <Link 
              to="/find-a-course"
              className="group inline-block text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg bg-transparent hover:bg-white hover:text-[#0F2A44] border-2 border-white text-center leading-tight"
            >
              <span className="sm:hidden">Browse Courses</span>
              <span className="hidden sm:inline">Find Available Courses</span>
              <svg 
                className="inline-block ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipPersonalDevelopment;