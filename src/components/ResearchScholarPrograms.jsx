import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const ResearchScholarPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState('scholar');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = {
    scholar: {
      title: "The Newton Scholar",
      duration: "12 weeks",
      price: "$3,900",
      overview: "The Newton Scholar is a 12-week intensive program, where you will work with PhD candidates and researchers from top universities like **OXFORD**, **CAMBRIDGE**, **MIT**, and **HARVARD**. This program is perfect for students who want to gain a deeper understanding of academic research.",
      format: "Weekly mentorship sessions, research tasks, and project presentations.",
      highlights: [
        "Conduct research in your field of interest.",
        "Learn research methodologies directly from leading academics.",
        "Present your findings and receive feedback from experts."
      ]
    },
    fellow: {
      title: "The Newton Fellow",
      duration: "15 weeks",
      price: "$5,000",
      overview: "The Newton Fellow is a 15-week program that provides extended mentorship and deeper involvement in advanced research projects. This program offers an opportunity to collaborate with researchers at the forefront of global innovation.",
      format: "In-depth research collaboration, weekly meetings, academic discussions, and project feedback.",
      highlights: [
        "Work on high-impact research topics with world-renowned scholars.",
        "Receive personalized guidance from PhD candidates and researchers.",
        "Develop advanced academic and research skills."
      ]
    },
    scientist: {
      title: "The Newton Scientist",
      duration: "20 weeks",
      price: "$8,000",
      overview: "The Newton Scientist is a 20-week program designed for students who want to immerse themselves fully in academic research. As a Newton Scientist, you will be involved in groundbreaking projects, collaborating with PhD candidates and researchers from the top universities in the world.",
      format: "Intensive research immersion, regular feedback sessions, and project development.",
      highlights: [
        "Work on cutting-edge projects alongside leading experts in your field.",
        "Present your research findings at academic conferences or publication opportunities.",
        "Gain invaluable experience that will set you apart in your academic and professional pursuits."
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 3rem)' }}>
              Research Scholar Programs
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto px-4" style={{ fontSize: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
              Immerse yourself in cutting-edge research with world-class mentors from top universities
            </p>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 rounded-2xl sm:rounded-3xl mx-2 sm:mx-6 lg:mx-16 xl:mx-20 2xl:px-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
              Choose Your Research Journey
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>
              Select the program that best fits your academic goals and research interests
            </p>
          </div>

          {/* Program Tabs - Mobile Optimized */}
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

          {/* Program Details - Mobile Optimized */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 items-start">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}>
                  {currentProgram.title}
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>{currentProgram.duration}</span>
                  </div>
                  <div className="flex items-center text-primary-600 font-semibold">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>{currentProgram.price}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 lg:mb-6 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>
                  {currentProgram.overview}
                </p>
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Format:</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>{currentProgram.format}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Program Highlights:</h4>
                <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  {currentProgram.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-primary-700 transition-colors text-xs sm:text-sm md:text-base w-full sm:w-auto"
                style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}
              >
                Apply for {currentProgram.title}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas - Mobile Optimized */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 rounded-2xl sm:rounded-3xl mx-2 sm:mx-6 lg:mx-16 xl:mx-20 2xl:px-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
              Research Areas
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>
              Explore cutting-edge research opportunities across diverse fields
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Artificial Intelligence & Machine Learning",
                description: "Develop AI systems, explore neural networks, and advance machine learning algorithms",
                icon: "🤖"
              },
              {
                title: "Biomedical Research",
                description: "Investigate disease mechanisms, develop treatments, and explore personalized medicine",
                icon: "🧬"
              },
              {
                title: "Environmental Science",
                description: "Study climate change, renewable energy, and sustainable development solutions",
                icon: "🌍"
              },
              {
                title: "Quantum Computing",
                description: "Explore quantum mechanics applications in computing and cryptography",
                icon: "⚛️"
              },
              {
                title: "Social Sciences",
                description: "Analyze human behavior, social structures, and policy implications",
                icon: "👥"
              },
              {
                title: "Economics & Finance",
                description: "Study market dynamics, financial systems, and economic policy",
                icon: "📊"
              }
            ].map((area, index) => (
              <div key={index} className="bg-white border border-gray-200/30 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow shadow-sm">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{area.icon}</div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>{area.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 lg:py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
            Ready to Start Your Research Journey?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.25rem)' }}>
            Join hundreds of students who have transformed their academic careers through our research programs
          </p>
          <a 
            href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-600 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition-colors text-xs sm:text-sm md:text-base w-full sm:w-auto"
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

export default ResearchScholarPrograms; 