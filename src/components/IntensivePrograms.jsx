import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const IntensivePrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState('intense');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = {
    intense: {
      title: 'Newton Intense',
      subtitle: 'Weekend Intense',
      duration: 'Weekend Program',
      price: '£1,500',
      overview:
        'An intense weekend program where students receive comprehensive mentorship over Saturday and Sunday. Each day includes 6 hours of focused learning with expert mentors.',
      format: '6 hours of intensive mentorship on Saturday and Sunday',
      highlights: [
        '12 hours of intensive mentorship over the weekend',
        'Personalized learning with expert mentors',
        'Perfect for students with busy weekday schedules',
        'Accelerated skill development in a short timeframe'
      ],
      whatsIncluded: [
        '12 hours of mentorship',
        'Personalized curriculum',
        'Access to online learning platform',
        'Certificate of completion'
      ]
    },
    sprint: {
      title: 'Newton Sprint',
      subtitle: '2 Week Program',
      duration: '2 weeks',
      price: '£2,000',
      overview:
        'A comprehensive 2-week group program where students meet for 2 hours every weekday. Students present their project on the final day and receive dedicated one-on-one mentorship sessions.',
      format: '2 hours daily (weekdays) + 2 timed 30-minute mentor meetings',
      highlights: [
        '20 hours of group learning over 2 weeks',
        'Two dedicated 30-minute one-on-one mentor sessions',
        'Collaborative learning with peer group',
        'Final project presentation on the last day'
      ],
      whatsIncluded: [
        '20 hours of group learning',
        'Mentor sessions',
        'Peer collaboration',
        'Certificate of completion'
      ]
    },
    premium: {
      title: 'Newton Sprint Premium',
      subtitle: '2 Week Premium',
      duration: '2 weeks',
      price: '£3,000',
      overview:
        'An exclusive individual program where students meet daily with a mentor for 2 weeks. This premium experience culminates in a final presentation, offering the most personalized learning experience.',
      format: 'Daily individual mentorship sessions for 2 weeks',
      highlights: [
        'Daily one-on-one mentorship for 2 weeks',
        'Completely personalized curriculum',
        'Individual attention and tailored learning path',
        'Final project presentation and assessment'
      ],
      whatsIncluded: [
        'Daily one-on-one mentorship',
        'Personalized curriculum',
        'Final project presentation',
        'Certificate of completion'
      ]
    }
  };

  const currentProgram = programs[selectedProgram];

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      {/* Hero Section */}
      <section
        className="relative text-white py-8 sm:py-12 lg:py-16 xl:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4 lg:mb-6 hero-title">
              Intensive Programs
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto px-4 hero-subtitle">
              Accelerated learning programs for rapid academic advancement and skill development
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
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}>Choose Your Intensive Program</h2>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
                {Object.entries(programs).map(([key, program]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedProgram(key)}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all text-xs sm:text-sm md:text-base w-full sm:w-auto ${
                      selectedProgram === key
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
                    }`}
                    style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}
                  >
                    {program.title}
                  </button>
                ))}
              </div>
              <div className="prose max-w-none">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}>{currentProgram.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-primary-600 font-semibold mb-2 sm:mb-3" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>{currentProgram.subtitle}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>{currentProgram.duration}</span>
                  </div>
                  <div className="flex items-center text-primary-600 font-semibold">
                    <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>{currentProgram.price}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>{currentProgram.overview}</p>
                <div className="mb-3 sm:mb-4">
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Format:</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>{currentProgram.format}</p>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Program Highlights:</h4>
                <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-6">
                  {currentProgram.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-25 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Ready to Accelerate Your Learning?</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>
                    Join our intensive programs and fast-track your academic success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-xs sm:text-sm md:text-base w-full sm:w-auto text-center"
                      style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}
                    >
                      Enroll Now - {currentProgram.price}
                    </a>
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
                    <div className="font-medium text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.6vw, 1rem)' }}>{currentProgram.duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Investment</span>
                    <div className="font-medium text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.6vw, 1rem)' }}>{currentProgram.price}</div>
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
                  {currentProgram.whatsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                <h4 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Contact Us</h4>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                  <p style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>Program Support</p>
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

export default IntensivePrograms; 