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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Research Scholar Programs
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Immerse yourself in cutting-edge research with world-class mentors from top universities
            </p>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="py-16 bg-gray-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Research Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the program that best fits your academic goals and research interests
            </p>
          </div>

          {/* Program Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(programs).map(([key, program]) => (
              <button
                key={key}
                onClick={() => setSelectedProgram(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedProgram === key
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {program.title}
              </button>
            ))}
          </div>

          {/* Program Details */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200/30 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentProgram.title}
                </h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {currentProgram.duration}
                  </div>
                  <div className="flex items-center text-primary-600 font-semibold">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    {currentProgram.price}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  {currentProgram.overview}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Format:</h4>
                  <p className="text-gray-700">{currentProgram.format}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Program Highlights:</h4>
                <ul className="space-y-3">
                  {currentProgram.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Apply for {currentProgram.title}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore cutting-edge research opportunities across diverse fields
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white border border-gray-200/30 rounded-lg p-6 hover:shadow-md transition-shadow shadow-sm">
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Research Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their academic careers through our research programs
          </p>
          <a 
            href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
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