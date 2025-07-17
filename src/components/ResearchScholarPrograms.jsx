import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ResearchScholarPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState('scholar');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const programs = {
    scholar: {
      title: "The Newton Scholar",
      duration: "12 weeks",
      price: "$3,900",
      overview: "The Newton Scholar is a 12-week intensive program, where you will work with PhD candidates and researchers from top universities like Oxford, Cambridge, MIT, and Harvard. This program is perfect for students who want to gain a deeper understanding of academic research.",
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🔬</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Research Scholar Programs
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Work with PhD candidates and researchers from top universities like Oxford, Cambridge, MIT, and Harvard
            </p>
            <div className="flex items-center justify-center space-x-6 text-lg">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
                <span>Research Excellence</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
                    <div className="text-sm text-gray-500">{program.duration} • {program.price}</div>
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-primary-700">Brochure</a></li>
                  <li><a href="#" className="hover:text-primary-700">Sample Schedule</a></li>
                  <li><a href="#" className="hover:text-primary-700">Application Process</a></li>
                  <li><a href="#" className="hover:text-primary-700">FAQ</a></li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                <div className="text-sm text-gray-600">
                  <p>Program Support</p>
                  <p>Email: support@newton.edu</p>
                  <p>Phone: +1 (555) 123-4567</p>
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
                <div className="flex items-center space-x-4 text-lg">
                  <span className="text-primary-600 font-semibold">{currentProgram.duration}</span>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Begin Your Research Journey?</h3>
                  <p className="text-gray-600 mb-4">
                    Join our research community and work alongside world-class academics from top universities.
                  </p>
                  <div className="flex space-x-4">
                    <Link 
                      to="/apply" 
                      className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                      Apply Now
                    </Link>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form Section */}
            <div className="mt-8 bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Stay Updated</h2>
              <p className="text-gray-600 mb-6">
                Get the latest information about our programs and application deadlines.
              </p>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Program Interest</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="scholar">The Newton Scholar</option>
                    <option value="fellow">The Newton Fellow</option>
                    <option value="scientist">The Newton Scientist</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 NIE Research Scholar Program. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResearchScholarPrograms; 