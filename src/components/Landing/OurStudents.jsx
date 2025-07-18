import React from 'react';

const OurStudents = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50" id="our-students">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Who Should Join Our Programs?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our programs are designed for high school and college students eager to explore higher education, develop research skills, and build academic networks. Whether you're at the beginning of your academic journey or looking for advanced research opportunities, we have something for everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Ideal Candidates */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 lg:p-12 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  Ideal Candidates
                </h3>
              </div>
              <ul className="space-y-4 text-base lg:text-lg text-gray-600">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>High school students (ages 14-18) with strong academic performance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>College students seeking research experience and publication opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Students interested in STEM fields, social sciences, or humanities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Ambitious learners who want to enhance their university applications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Future researchers and academic leaders</span>
                </li>
              </ul>
            </div>

            {/* What You'll Gain */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 lg:p-12 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  What You'll Gain
                </h3>
              </div>
              <ul className="space-y-4 text-base lg:text-lg text-gray-600">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Hands-on research experience with world-class mentors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Publication opportunities in peer-reviewed journals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Strong letters of recommendation for university applications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Global network of peers and academic connections</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Advanced research and critical thinking skills</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Success Statistics */}
          <div className="mt-20">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 lg:p-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  Our Student Success
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  See how our students have transformed their academic journeys
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">97%</div>
                  <div className="text-lg text-gray-600">University Acceptance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-lg text-gray-600">Students Mentored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">150+</div>
                  <div className="text-lg text-gray-600">Research Papers Published</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">25+</div>
                  <div className="text-lg text-gray-600">Countries Represented</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStudents; 