import React from 'react';
import { Link } from 'react-router-dom';
import CounterAnimation from '../CounterAnimation.jsx';

const OurStudents = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-50 rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28" id="our-students">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 px-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', color: '#0F2A44' }}>
              Who Should Join Our Programs?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)' }}>
              Our programs are designed for high school and college students eager to explore higher education, develop research skills, and build academic networks. Whether you're at the beginning of your academic journey or looking for advanced research opportunities, we have something for everyone.
            </p>
          </div>

          {/* Simplified Overview Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Perfect for Ambitious Students
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  From high school students with strong academic performance to college students seeking research experience, our programs cater to future researchers and academic leaders who want to enhance their university applications.
                </p>
                <Link 
                  to="/who-should-join"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors group"
                >
                  Find Out More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What You'll Gain
                </h3>
                <ul className="space-y-3">
                <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                    <span className="text-gray-700">Hands-on research experience with world-class mentors</span>
                </li>
                <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                    <span className="text-gray-700">Publication opportunities in peer-reviewed journals</span>
                </li>
                <li className="flex items-start">
                    <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                    <span className="text-gray-700">Strong letters of recommendation for university applications</span>
                </li>
              </ul>
              </div>
            </div>
          </div>

          {/* Success Statistics */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 lg:p-16 shadow-sm">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.25rem, 3vw, 1.875rem)' }}>
                  Our Student Success
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}>
                  See how our students have transformed their academic journeys
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                                  <div className="text-center">
                    <CounterAnimation 
                      targetValue={100} 
                      suffix="%" 
                      duration={2000}
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                    />
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 px-1" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}>University Acceptance Rate</div>
                  </div>
                  <div className="text-center">
                    <CounterAnimation 
                      targetValue={500} 
                      suffix="+" 
                      duration={2000}
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                    />
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 px-1" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}>Students Mentored</div>
                  </div>
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
                      targetValue={25} 
                      suffix="+" 
                      duration={2000}
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-600 mb-2"
                    />
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600 px-1" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}>Countries Represented</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStudents; 