import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="w-full max-w-none mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium text-gray-500 leading-tight tracking-wider uppercase">Newton Imperial</span>
                  <span className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">Education</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-base">
                Home
              </Link>
              <a href="/#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-base">
                About
              </a>
              <a href="/#programs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-base">
                Programs
              </a>
              <a href="/#our-students" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-base">
                Our Students
              </a>
              <a href="/#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-base">
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a 
                href="/#faqs" 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-base px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                FAQs
              </a>
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 text-base shadow-sm"
                style={{ backgroundColor: '#1A365D', borderColor: '#1A365D' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0F2A44'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1A365D'}
              >
                Apply Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
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
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="/#about"
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#programs"
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Programs
              </a>
              <a
                href="/#our-students"
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Students
              </a>
              <a
                href="/#contact"
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-4 py-3">
                <a 
                  href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-white font-semibold py-3 px-5 rounded-lg transition-colors text-center text-base"
                  style={{ backgroundColor: '#3D6BA8', borderColor: '#3D6BA8' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#2A5A98'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#3D6BA8'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 