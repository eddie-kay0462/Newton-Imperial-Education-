import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 border-t border-gray-200 p-0 m-0">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-4 2xl:px-2 py-8 sm:py-12">
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
            <ul className="space-y-1.5 sm:space-y-2 mt-4">
              <li className="flex gap-3 mt-2">
                <a
                  href="https://www.instagram.com/newtonimperial.research"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-[#E4405F] transition-colors text-xl"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/newtonimperial/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-[#0077B5] transition-colors text-xl"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                  </svg>
                </a>
              </li>
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
            <ul className="space-y-1.5 sm:space-y-2 mt-4">
              <li className="flex gap-3 mt-2">
                <a
                  href="https://www.instagram.com/newtonimperial.research"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-[#E4405F] transition-colors text-xl"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/newtonimperial/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-500 hover:text-[#0077B5] transition-colors text-xl"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                  </svg>
                </a>
              </li>
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

        {/* Copyright */}
        <div className="text-center pt-6 sm:pt-8 border-t border-gray-200/50">
          <p className="text-sm sm:text-base text-gray-600" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>© 2025 NIE Research Scholar Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 