import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 border-t border-gray-200 section-container">
      <div className="max-w-none mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-4 2xl:px-2 py-8 sm:py-12 wide-container">
        {/* Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8">
          {/* Programs Column */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>Programs</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Overview</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Research Areas</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Mentors</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Application Process</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>Resources</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Program Brochure</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>FAQ</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Scholar Stories</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Application Process</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>Contact</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Program Director</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Admissions</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Schedule Info Session</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-primary-700 transition-colors" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Support</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center">
            <span className="text-sm sm:text-base text-gray-600" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>hello@newtonimperial.education</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm sm:text-base text-gray-600" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>+44 7999 846221</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm sm:text-base text-gray-600" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Cambridge, MA 02139</span>
          </div>
        </div>

        {/* Stay Updated Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20 shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.125rem)' }}>Stay Updated</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Get program updates and research opportunities delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Kindly enter your email" 
              className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent bg-white/90 text-sm sm:text-base"
              style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
            />
            <button className="px-4 sm:px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-semibold text-sm sm:text-base" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-gray-600 mb-4" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Follow our Educational Community</p>
          <div className="flex justify-center space-x-3 sm:space-x-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors cursor-pointer"></div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 sm:pt-8 border-t border-gray-200/50">
          <p className="text-sm sm:text-base text-gray-600" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>© 2025 NIE Research Scholar Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 