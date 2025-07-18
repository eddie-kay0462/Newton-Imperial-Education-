import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const IntensivePrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState('weekly');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = {
    weekly: {
      title: "Weekly Program",
      duration: "12 weeks",
      price: "$600",
      overview: "This 12-week intensive program offers weekly mentorship sessions designed to accelerate your academic growth and prepare you for university success.",
      format: "Weekly 1-hour sessions with expert mentors",
      highlights: [
        "Personalized mentorship from top university researchers",
        "Structured learning path with clear milestones",
        "Weekly assignments and progress tracking",
        "Access to exclusive academic resources"
      ]
    },
    monthly: {
      title: "Monthly Program",
      duration: "3 months",
      price: "$1,200",
      overview: "A comprehensive 3-month program with monthly deep-dive sessions, perfect for students who want intensive learning with more flexibility.",
      format: "Monthly 2-hour intensive sessions plus continuous support",
      highlights: [
        "Monthly intensive workshops with industry experts",
        "Flexible scheduling to fit your academic calendar",
        "Project-based learning with real-world applications",
        "Peer collaboration and networking opportunities"
      ]
    },
    custom: {
      title: "Custom Program",
      duration: "Flexible",
      price: "Contact for pricing",
      overview: "Tailored program designed specifically for your unique academic goals and timeline. Work with our team to create your perfect learning experience.",
      format: "Customized schedule and format based on your needs",
      highlights: [
        "Completely personalized curriculum",
        "Flexible timing and duration",
        "One-on-one mentorship options",
        "Specialized focus areas available"
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Intensive Programs
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Accelerated learning programs for rapid academic advancement and skill development
            </p>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Intensive Program
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the program format that best fits your schedule and learning goals
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
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {program.title}
              </button>
            ))}
          </div>

          {/* Program Details */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
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
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Accelerate Your Learning?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our intensive programs and fast-track your academic success
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

export default IntensivePrograms; 