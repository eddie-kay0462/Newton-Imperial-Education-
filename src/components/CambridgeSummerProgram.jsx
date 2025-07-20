import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const CambridgeSummerProgram = () => {
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 sm:mb-8 drop-shadow-lg hero-title">
                  Cambridge Summer School Experience
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 hero-subtitle drop-shadow-md">
                  Immerse yourself in the historic halls of the University of Cambridge, where centuries of academic excellence meet cutting-edge research opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start sm:justify-center lg:justify-start">
                  <a 
                    href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white font-medium py-3 px-8 md:px-10 rounded-full transition-all duration-300 hover:shadow-lg text-base bg-[#BB945C] hover:bg-[#C8A56A] w-full sm:w-auto md:w-auto min-w-[120px] md:min-w-[140px] text-center text-button"
                  >
                    Apply
                  </a>
                  <a 
                    href="#faq-section"
                    className="inline-block text-white font-medium py-3 px-6 md:px-8 rounded-full transition-all duration-300 hover:shadow-lg text-base border-2 border-white hover:bg-white hover:text-[#0F2A44] w-full sm:w-auto md:w-auto min-w-[120px] md:min-w-[140px] text-center text-button"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/campuses/cambridge-campus-1.png" 
                  alt="Cambridge University Campus" 
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
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 text-heading">
                Program Overview
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto text-body">
                Experience the prestigious academic environment of Cambridge University through our comprehensive summer program
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 card-title">Duration</h3>
                <p className="text-gray-600 card-description">2-4 weeks intensive program with flexible scheduling options</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 card-title">Mentorship</h3>
                <p className="text-gray-600 card-description">Direct guidance from Cambridge PhD candidates and researchers</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 card-title">Research</h3>
                <p className="text-gray-600 card-description">Hands-on research projects with publication opportunities</p>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  A Legacy of Academic Excellence
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 1209, the University of Cambridge is one of the world's oldest and most prestigious universities. 
                  With over 800 years of academic tradition, Cambridge has produced 121 Nobel laureates and countless 
                  influential thinkers, scientists, and leaders.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our summer program gives you the unique opportunity to walk in the footsteps of great minds like Isaac Newton, 
                  Charles Darwin, and Stephen Hawking, while working on cutting-edge research projects.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0F2A44] mb-2">800+</div>
                    <div className="text-gray-600">Years of History</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0F2A44] mb-2">121</div>
                    <div className="text-gray-600">Nobel Laureates</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/school_logos/cambridge_logo.png" 
                  alt="Cambridge University Logo" 
                  className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[280px] xl:max-w-[320px] 2xl:max-w-md mx-auto"
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
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Campus Life & Experience
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Immerse yourself in the authentic Cambridge experience with accommodation, dining, and cultural activities
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">College Accommodation</h3>
                <p className="text-gray-600">Stay in historic college rooms with modern amenities</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#B8A67A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Formal Dining</h3>
                <p className="text-gray-600">Experience traditional formal hall dinners</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#B8A67A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">City Tours</h3>
                <p className="text-gray-600">Explore Cambridge's historic architecture and landmarks</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#B8A67A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Social Events</h3>
                <p className="text-gray-600">Connect with international students and mentors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iconic Cambridge Locations */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Iconic Cambridge Locations
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover the historic landmarks and research facilities that make Cambridge a center of academic excellence
              </p>
            </div>

            <div className="space-y-16 lg:space-y-20">
              {/* King's College Chapel */}
              <div className="space-y-8 lg:space-y-12 2xl:space-y-0">
                {/* Content - Side by side on 2xl+, vertical on smaller screens */}
                <div className="2xl:grid 2xl:grid-cols-2 2xl:gap-12 2xl:items-center">
                  <div className="text-center 2xl:text-left">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                      King's College Chapel
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto 2xl:max-w-none">
                      King's College Chapel is one of the most iconic buildings in Cambridge and a masterpiece of English Gothic architecture. 
                      Built between 1446 and 1515, this magnificent chapel features the world's largest fan vault ceiling and stunning stained glass windows 
                      that tell biblical stories through intricate artwork.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto 2xl:max-w-none">
                      The chapel is not only a place of worship but also a center for music and cultural events. The world-famous King's College Choir 
                      performs here regularly, and during your summer program, you'll have the opportunity to attend concerts and experience 
                      the incredible acoustics of this historic venue.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center 2xl:justify-start mb-8 lg:mb-12 2xl:mb-0">
                      <div className="flex items-center text-sm md:text-base text-gray-600">
                        <svg className="w-5 h-5 text-[#0F2A44] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Built 1446-1515</span>
                      </div>
                      <div className="flex items-center text-sm md:text-base text-gray-600">
                        <svg className="w-5 h-5 text-[#0F2A44] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        <span>Famous Choir</span>
                      </div>
                      <div className="flex items-center text-sm md:text-base text-gray-600">
                        <svg className="w-5 h-5 text-[#0F2A44] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Gothic Architecture</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image - Side by side on 2xl+, vertical on smaller screens */}
                  <div className="max-w-4xl mx-auto 2xl:max-w-none">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src="/cambridge_pics/kings_college_chapel_cambridge.jpg"
                        alt="King's College Chapel Cambridge"
                        className="w-full h-64 md:h-80 lg:h-96 2xl:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                        King's College Chapel
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cavendish Laboratory */}
              <div className="space-y-8 lg:space-y-12 2xl:space-y-0">
                {/* Content - Side by side on 2xl+, vertical on smaller screens */}
                <div className="2xl:grid 2xl:grid-cols-2 2xl:gap-12 2xl:items-center">
                  <div className="text-center 2xl:text-left">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                      Cavendish Laboratory
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto 2xl:max-w-none">
                      The Cavendish Laboratory is the Department of Physics at the University of Cambridge and one of the most prestigious 
                      physics research institutions in the world. Since its establishment in 1874, it has been the birthplace of numerous 
                      groundbreaking discoveries in physics.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto 2xl:max-w-none">
                      The laboratory has produced 30 Nobel Prize winners, including the discovery of the electron by J.J. Thomson, 
                      the structure of DNA by Watson and Crick, and the development of X-ray crystallography. During your summer program, 
                      you'll have the opportunity to learn about cutting-edge research being conducted in this historic facility.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center 2xl:justify-start mb-8 lg:mb-12 2xl:mb-0">
                      <div className="flex items-center text-sm md:text-base text-gray-600">
                        <svg className="w-5 h-5 text-[#0F2A44] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span>30 Nobel Prizes</span>
                      </div>
                      <div className="flex items-center text-sm md:text-base text-gray-600">
                        <svg className="w-5 h-5 text-[#0F2A44] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Est. 1874</span>
                      </div>
                      <div className="flex items-center text-sm md:text-base text-gray-600">
                        <svg className="w-5 h-5 text-[#0F2A44] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <span>Physics Research</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image - Side by side on 2xl+, vertical on smaller screens */}
                  <div className="max-w-4xl mx-auto 2xl:max-w-none">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src="/cambridge_pics/cavendish_lab_cambridge.jpg"
                        alt="Cavendish Laboratory Cambridge"
                        className="w-full h-64 md:h-80 lg:h-96 2xl:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                        Physics Department
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Senate House */}
              <div className="space-y-8 lg:space-y-12 2xl:space-y-0">
                {/* Content - Side by side on 2xl+, vertical on smaller screens */}
                <div className="2xl:grid 2xl:grid-cols-2 2xl:gap-12 2xl:items-center">
                  <div className="text-center 2xl:text-left">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                      Senate House
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto 2xl:max-w-none">
                      The Senate House is the administrative center of the University of Cambridge and one of its most iconic buildings. 
                      Built between 1722 and 1730, this magnificent neoclassical structure serves as the venue for important university 
                      ceremonies, including degree congregations and formal events.
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto 2xl:max-w-none">
                      With its grand architecture and rich history, the Senate House represents the academic excellence and tradition 
                      that Cambridge is renowned for. During your summer program, you'll have the opportunity to attend events in this 
                      historic building and experience the formal academic atmosphere that has inspired generations of scholars.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center 2xl:justify-start mb-8 lg:mb-12 2xl:mb-0">
                      <div className="flex items-center text-sm md:text-base text-gray-600">
                        <svg className="w-5 h-5 text-[#0F2A44] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Neoclassical Design</span>
                      </div>
                      <div className="flex items-center text-sm md:text-base text-gray-600">
                        <svg className="w-5 h-5 text-[#0F2A44] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Built 1722-1730</span>
                      </div>
                      <div className="flex items-center text-sm md:text-base text-gray-600">
                        <svg className="w-5 h-5 text-[#0F2A44] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>University Ceremonies</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image - Side by side on 2xl+, vertical on smaller screens */}
                  <div className="max-w-4xl mx-auto 2xl:max-w-none">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img 
                        src="/cambridge_pics/senate_house_cambridge.jpg"
                        alt="Senate House Cambridge"
                        className="w-full h-64 md:h-80 lg:h-96 2xl:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                        Administrative Center
                      </div>
                    </div>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about our Cambridge Summer Program
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "What are the program dates for Summer 2026?",
                    answer: "Our Cambridge Summer Program offers flexible 2-4 week sessions throughout July and August 2026. Specific dates will be confirmed upon acceptance, and we'll work with you to find the best schedule."
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
                      className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-2xl"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
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
                      <div className="px-8 pb-6">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Applications Open for Summer 2026
            </h2>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't miss this opportunity to experience the prestigious Cambridge University environment. 
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

export default CambridgeSummerProgram; 