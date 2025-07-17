import React from 'react';

const OurStudents = () => {
  return (
    <section className="py-20 bg-white" id="our-students">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            WHO SHOULD JOIN OUR PROGRAMS?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our programs are designed for high school and college students eager to explore higher education, develop research skills, and build academic networks. Whether you're at the beginning of your academic journey or looking for advanced research opportunities, we have something for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Ideal Candidates */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Ideal Candidates
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">High School Students (ages 15–18)</h4>
                  <p className="text-gray-700">Aiming to pursue university studies and research.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">College Students (ages 18–22)</h4>
                  <p className="text-gray-700">Seeking to enhance their academic profiles.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Research-Interested Students</h4>
                  <p className="text-gray-700">Interested in research and exploring their passion for science, technology, arts, or humanities.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* What You Will Gain */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              What You Will Gain
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">University Readiness</h4>
                  <p className="text-gray-700">Prepare for university life by developing academic and personal skills.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Research Skills</h4>
                  <p className="text-gray-700">Participate in high-level research with top scholars from renowned universities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Career Clarity</h4>
                  <p className="text-gray-700">Explore your academic and career interests while building connections with researchers and professionals.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Global Network</h4>
                  <p className="text-gray-700">Join a community of ambitious students from all over the world.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Academic Journey?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join our community of ambitious students and take the first step toward your academic and career goals.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Apply Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStudents; 