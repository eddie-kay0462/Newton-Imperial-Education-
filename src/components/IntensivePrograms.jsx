import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const IntensivePrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState('intense');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = {
    intense: {
      title: "Newton Intense",
      subtitle: "Weekend Intense",
      duration: "Weekend Program",
      price: "£1,500",
      overview: "An intense weekend program where students receive comprehensive mentorship over Saturday and Sunday. Each day includes 6 hours of focused learning with expert mentors.",
      format: "6 hours of intensive mentorship on Saturday and Sunday",
      highlights: [
        "12 hours of intensive mentorship over the weekend",
        "Personalized learning with expert mentors",
        "Perfect for students with busy weekday schedules",
        "Accelerated skill development in a short timeframe"
      ]
    },
    sprint: {
      title: "Newton Sprint",
      subtitle: "2 Week Program",
      duration: "2 weeks",
      price: "£2,000",
      overview: "A comprehensive 2-week group program where students meet for 2 hours every weekday. Students present their project on the final day and receive dedicated one-on-one mentorship sessions.",
      format: "2 hours daily (weekdays) + 2 timed 30-minute mentor meetings",
      highlights: [
        "20 hours of group learning over 2 weeks",
        "Two dedicated 30-minute one-on-one mentor sessions",
        "Collaborative learning with peer group",
        "Final project presentation on the last day"
      ]
    },
    premium: {
      title: "Newton Sprint Premium",
      subtitle: "2 Week Premium",
      duration: "2 weeks",
      price: "£3,000",
      overview: "An exclusive individual program where students meet daily with a mentor for 2 weeks. This premium experience culminates in a final presentation, offering the most personalized learning experience.",
      format: "Daily individual mentorship sessions for 2 weeks",
      highlights: [
        "Daily one-on-one mentorship for 2 weeks",
        "Completely personalized curriculum",
        "Individual attention and tailored learning path",
        "Final project presentation and assessment"
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
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
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
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentProgram.title}
                </h3>
                <p className="text-lg text-primary-600 font-semibold mb-4">
                  {currentProgram.subtitle}
                </p>
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
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
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