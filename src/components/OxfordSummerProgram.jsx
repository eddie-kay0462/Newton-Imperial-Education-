import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const OxfordSummerProgram = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 drop-shadow-lg" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  Oxford Summer Program
                </h1>
                <p className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-100 mb-8 leading-relaxed drop-shadow-md">
                  Experience the academic excellence of the University of Oxford, where tradition meets innovation in one of the world's most prestigious institutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start sm:justify-center lg:justify-start">
                  <a 
                    href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white font-semibold py-3 px-8 md:px-10 rounded-full transition-all duration-300 hover:shadow-lg text-base bg-[#B8A67A] hover:bg-[#9A8B6A] w-full sm:w-auto md:w-auto min-w-[120px] md:min-w-[140px] text-center"
                  >
                    Apply
                  </a>
                  <a 
                    href="#faq-section"
                    className="inline-block text-white font-semibold py-3 px-6 md:px-8 rounded-full transition-all duration-300 hover:shadow-lg text-base border-2 border-white hover:bg-white hover:text-[#0F2A44] w-full sm:w-auto md:w-auto min-w-[120px] md:min-w-[140px] text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/campuses/oxford-campus-1.jpg" 
                  alt="Oxford University Campus" 
                  className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Program Overview
              </h2>
              <p className="text-lg md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Immerse yourself in the prestigious academic environment of Oxford University through our comprehensive summer program
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Duration</h3>
                <p className="text-gray-600">2-4 weeks intensive program with flexible scheduling options</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Mentorship</h3>
                <p className="text-gray-600">Direct guidance from Oxford PhD candidates and researchers</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Research</h3>
                <p className="text-gray-600">Hands-on research projects with publication opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  A Legacy of Academic Excellence
                </h2>
                <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 1096, the University of Oxford is the oldest university in the English-speaking world. 
                  With over 900 years of academic tradition, Oxford has produced 72 Nobel laureates and countless 
                  influential leaders, thinkers, and innovators.
                </p>
                <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                  Our summer program gives you the unique opportunity to study in the same halls as great minds like 
                  J.R.R. Tolkien, C.S. Lewis, and Stephen Hawking, while working on cutting-edge research projects.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0F2A44] mb-2">900+</div>
                    <div className="text-gray-600">Years of History</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0F2A44] mb-2">72</div>
                    <div className="text-gray-600">Nobel Laureates</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/school_logos/oxford_logo.png" 
                  alt="Oxford University Logo" 
                  className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Campus Life & Experience
              </h2>
              <p className="text-lg md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Immerse yourself in the authentic Oxford experience with accommodation, dining, and cultural activities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#B8A67A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">College Accommodation</h3>
                <p className="text-gray-600">Stay in historic college rooms with modern amenities</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#B8A67A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Formal Dining</h3>
                <p className="text-gray-600">Experience traditional formal hall dinners</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#B8A67A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">City Tours</h3>
                <p className="text-gray-600">Explore Oxford's historic architecture and landmarks</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#B8A67A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Social Events</h3>
                <p className="text-gray-600">Connect with international students and mentors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about our Oxford Summer Program
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "What are the program dates for Summer 2026?",
                    answer: "Our Oxford Summer Program offers flexible 2-4 week sessions throughout July and August 2026. Specific dates will be confirmed upon acceptance, and we'll work with you to find the best schedule."
                  },
                  {
                    question: "What is included in the program fee?",
                    answer: "The program fee includes college accommodation, formal dining experiences, research mentorship, campus tours, social events, and all academic materials. Travel and personal expenses are not included."
                  },
                  {
                    question: "Who can apply for this program?",
                    answer: "We welcome high-achieving students aged 16-19 who are passionate about research and academic excellence. Applicants should have strong academic records and a genuine interest in their chosen field of study."
                  },
                  {
                    question: "What research areas are available?",
                    answer: "Research opportunities span across sciences, humanities, and social sciences. Areas include physics, mathematics, computer science, literature, history, economics, and more. We'll match you with mentors based on your interests and academic background."
                  },
                  {
                    question: "Will I receive a certificate or credit?",
                    answer: "Yes, all participants receive a certificate of completion from our program. While this is not formal university credit, it's a valuable addition to college applications and demonstrates your commitment to academic excellence."
                  },
                  {
                    question: "What is the application process?",
                    answer: "The application process includes submitting your academic records, a personal statement, and a brief interview. We review applications on a rolling basis, so early applications are encouraged. Decisions are typically made within 2-3 weeks of submission."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-2xl"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          <svg
                            className={`w-6 h-6 text-primary-600 transform transition-transform duration-300 ${
                              openQuestion === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-4">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a]">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-white mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Applications Open for Summer 2026
            </h2>
            <p className="text-lg md:text-lg lg:text-lg xl:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't miss this opportunity to experience the prestigious Oxford University environment. 
              Limited spots available - apply early to secure your place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg bg-[#B8A67A] hover:bg-[#9A8B6A]"
              >
                Apply Now
              </a>
              <Link 
                to="/FAQPage"
                className="inline-block text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg border-2 border-white hover:bg-white hover:text-[#0F2A44]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OxfordSummerProgram; 