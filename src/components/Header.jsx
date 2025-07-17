import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Newton Imperial Education</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
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
            <a href="/#our-students" className="text-gray-700 hover:text-primary-700 font-medium transition-colors">
              Our Students
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-primary-700 font-medium transition-colors">
              Contact
            </a>
            <Link 
              to="/apply" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Apply Now
            </Link>
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
                href="/#our-students"
                className="block px-3 py-2 text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Students
              </a>
              <a
                href="/#contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary-700 hover:bg-gray-50 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Link 
                  to="/apply"
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 