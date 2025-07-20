import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const SummerPrograms = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const program = {
    title: "Summer In-Person Program",
    duration: "2 weeks",
    price: "£9,000",
    status: "(Future Program)",
    overview: "This in-person program will take place during the summer in prestigious locations like **CAMBRIDGE** and **OXFORD**, offering a mix of academic workshops and cultural engagement. Experience world-class education in historic settings while building lifelong connections with peers from around the globe.",
    format: "Hands-on workshops in **OXFORD** and **CAMBRIDGE** historical laboratories and libraries, academic seminars, cultural excursions, and networking with university faculty.",
    highlights: [
      "Experience life on the best university campus.",
      "Build a network with fellow students from around the world.",
      "Participate in exclusive lectures and activities at **CAMBRIDGE** and **OXFORD**."
    ]
  };

  const activities = [
    {
      title: "Historical Laboratories",
      description: "Hands-on workshops in Oxford and Cambridge's world-renowned historical laboratories",
      icon: "🔬"
    },
    {
      title: "Academic Libraries",
      description: "Access to prestigious libraries with centuries of academic knowledge and resources",
      icon: "📚"
    },
    {
      title: "Cultural Excursions",
      description: "Explore the rich history and culture of Cambridge and Oxford beyond academics",
      icon: "🏛️"
    },
    {
      title: "Faculty Networking",
      description: "Connect with leading university faculty and researchers in intimate settings",
      icon: "👥"
    },
    {
      title: "Academic Seminars",
      description: "Participate in exclusive academic seminars led by world-class professors",
      icon: "🎓"
    },
    {
      title: "Campus Life",
      description: "Experience authentic university life in historic Cambridge and Oxford settings",
      icon: "🏫"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative text-white py-8 sm:py-12 lg:py-16 xl:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 3rem)' }}>
              Summer Programs
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto px-4" style={{ fontSize: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
              Immersive summer learning experiences at prestigious <span className="font-black uppercase">Cambridge</span> and <span className="font-black uppercase">Oxford</span> locations
            </p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
              Program Overview
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>
              An exclusive opportunity to experience academic excellence in historic <span className="font-black uppercase">Cambridge</span> and <span className="font-black uppercase">Oxford</span>
            </p>
          </div>

          {/* Program Details Card */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200/30 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)' }}>
                  {program.title}
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>{program.duration}</span>
                  </div>
                  <div className="flex items-center text-primary-600 font-semibold">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>{program.price}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 lg:mb-4 italic" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 0.875rem)' }}>
                  {program.status}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 lg:mb-6 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>
                  {program.overview}
                </p>
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Format:</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>{program.format}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm md:text-base" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>Program Highlights:</h4>
                <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  {program.highlights.map((highlight, index) => (
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
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
                <a 
                  href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#766542] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-full hover:bg-[#8a7a5a] transition-colors text-sm sm:text-base lg:text-lg w-full sm:w-auto lg:w-auto flex-shrink-0"
                  style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}
                >
                  Apply Now
                </a>
                <a 
                  href="/summer-programs"
                  className="inline-block bg-transparent border-2 border-[#0F2A44] text-[#0F2A44] font-semibold py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8 rounded-full hover:bg-[#0F2A44] hover:text-white transition-colors text-sm sm:text-base lg:text-lg w-full sm:w-auto lg:w-auto flex-shrink-0"
                  style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Activities */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
              Program Activities
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>
              Immerse yourself in world-class academic experiences at Cambridge and Oxford
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200/30 hover:shadow-md transition-shadow">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">{activity.icon}</div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.125rem)' }}>
                  {activity.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}>
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
            Ready to Experience <span className="font-black uppercase">Cambridge</span> and <span className="font-black uppercase">Oxford</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.25rem)' }}>
            Join this exclusive summer program and immerse yourself in centuries of academic excellence
          </p>
          <a 
            href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#766542] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 lg:px-10 rounded-full hover:bg-[#8a7a5a] transition-colors text-sm sm:text-base lg:text-lg w-full sm:w-auto"
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

export default SummerPrograms; 