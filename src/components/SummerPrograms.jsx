import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SummerPrograms = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Newton Imperial Education</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary-700 font-medium transition-colors">
                Home
              </Link>
              <a href="/#about" className="text-gray-700 hover:text-primary-700 font-medium transition-colors">
                About
              </a>
              <a href="/#programs" className="text-gray-700 hover:text-primary-700 font-medium transition-colors">
                Programs
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-primary-700 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary-700 focus:outline-none focus:text-primary-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <a
                  href="/#about"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/#programs"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Programs
                </a>
                <a
                  href="/#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">☀️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Summer Programs
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Experience prestigious university life at Cambridge and Oxford with our immersive summer programs
            </p>
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Cambridge & Oxford</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <span>Cultural Immersion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Program Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Summer In-Person Program
                </h1>
                <div className="flex items-center space-x-4 text-lg mb-2">
                  <span className="text-primary-600 font-semibold">2 weeks</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-primary-600 font-semibold">£9,000</span>
                  <span className="text-gray-400">•</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">Coming Soon</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Program Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  This in-person program will take place during the summer in prestigious locations like Cambridge and Oxford, 
                  offering a mix of academic workshops and cultural engagement. Experience the rich history and academic excellence 
                  of these world-renowned institutions while building lasting connections with fellow students from around the globe.
                </p>

                <div className="bg-primary-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Program Format</h3>
                  <p className="text-primary-800">
                    Hands-on workshops in Oxford and Cambridge historical laboratories and libraries, academic seminars, 
                    cultural excursions, and networking with university faculty.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Highlights</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Authentic University Experience</h4>
                      <p className="text-gray-600">Experience life on the best university campus and immerse yourself in centuries of academic tradition.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Network Building</h4>
                      <p className="text-gray-600">Build a network with fellow students from around the world and create lifelong international connections.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Exclusive Academic Access</h4>
                      <p className="text-gray-600">Participate in exclusive lectures and activities at Cambridge and Oxford with world-class faculty.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready for an Unforgettable Summer?</h3>
                  <p className="text-gray-600 mb-6">
                    Join us for an extraordinary summer experience at the world's most prestigious universities. 
                    This program is currently in development and will be available soon.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      Join Waitlist
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
                      Download Information
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Program Details & Contact */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Details</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="text-sm text-gray-500">Duration</span>
                    <div className="font-medium">2 weeks</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <div>
                    <span className="text-sm text-gray-500">Investment</span>
                    <div className="font-medium">£9,000</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <div>
                    <span className="text-sm text-gray-500">Location</span>
                    <div className="font-medium">Cambridge & Oxford</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z" />
                  </svg>
                  <div>
                    <span className="text-sm text-gray-500">Status</span>
                    <div className="font-medium text-orange-600">Coming Soon</div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Program Includes</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Campus accommodation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Historical lab access
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cultural excursions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Faculty networking
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Program certificate
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
                <div className="text-sm text-gray-600">
                  <p>Summer Programs Team</p>
                  <p>Email: summer@newton.edu</p>
                  <p>Phone: +44 (0) 1223 123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Newton Imperial Education. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SummerPrograms; 