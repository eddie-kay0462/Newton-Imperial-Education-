import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const WhoShouldJoin = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Who Should Join Our Programs?
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover if our programs are the right fit for your academic journey and career goals
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Designed for Ambitious Students
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our programs are designed for high school and college students eager to explore higher education, develop research skills, and build academic networks. Whether you're at the beginning of your academic journey or looking for advanced research opportunities, we have something for everyone.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Who Should Join */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Ideal Students
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">High school students (ages 14-18) with strong academic performance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">College students seeking research experience and publication opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Students interested in STEM fields, social sciences, or humanities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Ambitious learners who want to enhance their university applications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Future researchers and academic leaders</span>
                </li>
              </ul>
            </div>

            {/* What You'll Gain */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  What You'll Gain
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Hands-on research experience with world-class mentors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Publication opportunities in peer-reviewed journals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Strong letters of recommendation for university applications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Global network of peers and academic connections</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Advanced research and critical thinking skills</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Success Statistics */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Student Success
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how our students have transformed their academic journeys
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">97%</div>
                <div className="text-lg text-gray-600">University Acceptance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-lg text-gray-600">Students Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
                <div className="text-lg text-gray-600">Research Papers Published</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
                <div className="text-lg text-gray-600">Countries Represented</div>
              </div>
            </div>
          </div>

          {/* Program Eligibility */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Program Eligibility & Requirements
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Academic Requirements</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    Minimum GPA of 3.5 (or equivalent)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    Strong performance in relevant subjects
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    Demonstrated interest in research or academic pursuits
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    English proficiency (for international students)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Personal Qualities</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    Intellectual curiosity and motivation
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    Commitment to academic excellence
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    Strong communication skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    Ability to work independently and in teams
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-primary-600 text-white rounded-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Join Our Community?
              </h3>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Take the first step toward transforming your academic journey with world-class mentorship and research opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Apply Now
                </a>
                <Link 
                  to="/#programs"
                  className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoShouldJoin; 