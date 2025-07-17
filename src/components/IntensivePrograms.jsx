import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IntensivePrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState('intense');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const programs = {
    intense: {
      title: "Newton Intense",
      subtitle: "Weekend Intense",
      price: "£1,500",
      overview: "An intense weekend program designed for students who want maximum learning in a short time frame. Students receive dedicated mentorship over the weekend with focused, intensive sessions.",
      format: "Saturday and Sunday sessions, 6 hours each day with your dedicated mentor.",
      highlights: [
        "12 total hours of intensive mentorship over the weekend",
        "Personalized one-on-one learning experience",
        "Focused skill development in your chosen area",
        "Flexible weekend schedule for busy students"
      ]
    },
    sprint: {
      title: "Newton Sprint",
      subtitle: "2 Week Program",
      price: "£2,000",
      overview: "A collaborative 2-week program where students work in groups while receiving individual mentorship. Perfect for students who thrive in group settings and want to develop teamwork skills alongside academic growth.",
      format: "Group sessions for 2 hours every weekday for 2 weeks, plus individual mentor meetings.",
      highlights: [
        "20 hours of group learning sessions over 2 weeks",
        "2 timed 30-minute one-on-one meetings with your mentor",
        "Collaborative project development with peers",
        "Final project presentation on the last day"
      ]
    },
    premium: {
      title: "Newton Sprint Premium",
      subtitle: "2 Week Premium",
      price: "£3,000",
      overview: "The ultimate intensive learning experience with daily individual mentorship. This premium program provides personalized attention and accelerated learning for students who want maximum impact in minimum time.",
      format: "Individual daily meetings with your mentor for 2 weeks, culminating in a final presentation.",
      highlights: [
        "Daily one-on-one mentorship sessions for 2 weeks",
        "Completely personalized learning experience",
        "Accelerated skill development and knowledge acquisition",
        "Final project presentation to showcase your achievements"
      ]
    }
  };

  const currentProgram = programs[selectedProgram];

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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">⚡</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Intensive Programs
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Accelerated learning programs for rapid skill development and academic advancement
            </p>
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Fast-Track Learning</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Expert Mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Program Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Programs</h3>
              <div className="space-y-2">
                {Object.entries(programs).map(([key, program]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedProgram(key)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedProgram === key
                        ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium">{program.title}</div>
                    <div className="text-sm text-gray-500">{program.subtitle} • {program.price}</div>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-primary-700">Program Brochure</a></li>
                  <li><a href="#" className="hover:text-primary-700">Sample Schedule</a></li>
                  <li><a href="#" className="hover:text-primary-700">Mentor Profiles</a></li>
                  <li><a href="#" className="hover:text-primary-700">FAQ</a></li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                <div className="text-sm text-gray-600">
                  <p>Intensive Programs Team</p>
                  <p>Email: intensive@newton.edu</p>
                  <p>Phone: +44 (0) 20 7123 4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentProgram.title}
                </h1>
                <div className="flex items-center space-x-4 text-lg mb-2">
                  <span className="text-primary-600 font-semibold">{currentProgram.subtitle}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-primary-600 font-semibold">{currentProgram.price}</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {currentProgram.overview}
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">Format</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {currentProgram.format}
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mb-3">Program Highlights</h2>
                <ul className="space-y-2 mb-8">
                  {currentProgram.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Fast-Track Your Learning?</h3>
                  <p className="text-gray-600 mb-4">
                    Join our intensive programs and accelerate your academic journey with expert mentorship and focused learning.
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                      Apply Now
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors">
                      Download Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Comparison */}
            <div className="mt-8 bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Newton Intense</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Newton Sprint</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-900">Newton Sprint Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">Duration</td>
                      <td className="py-3 px-4 text-center text-gray-600">Weekend</td>
                      <td className="py-3 px-4 text-center text-gray-600">2 weeks</td>
                      <td className="py-3 px-4 text-center text-gray-600">2 weeks</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">Format</td>
                      <td className="py-3 px-4 text-center text-gray-600">Individual</td>
                      <td className="py-3 px-4 text-center text-gray-600">Group</td>
                      <td className="py-3 px-4 text-center text-gray-600">Individual</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">Total Hours</td>
                      <td className="py-3 px-4 text-center text-gray-600">12 hours</td>
                      <td className="py-3 px-4 text-center text-gray-600">20 hours + mentorship</td>
                      <td className="py-3 px-4 text-center text-gray-600">Daily sessions</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">Price</td>
                      <td className="py-3 px-4 text-center font-semibold text-primary-600">£1,500</td>
                      <td className="py-3 px-4 text-center font-semibold text-primary-600">£2,000</td>
                      <td className="py-3 px-4 text-center font-semibold text-primary-600">£3,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Best For</td>
                      <td className="py-3 px-4 text-center text-gray-600">Busy schedules</td>
                      <td className="py-3 px-4 text-center text-gray-600">Team learning</td>
                      <td className="py-3 px-4 text-center text-gray-600">Maximum impact</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Newton Imperial Education. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default IntensivePrograms; 