import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full" style={{ backgroundColor: '#0F2A44' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & Social */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white leading-tight">NEWTON IMPERIAL</h2>
                <p className="text-sm font-medium text-white tracking-wider">EDUCATION</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                Empowering the next generation of researchers and scholars.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/newtonimperial.research"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/newtonimperial/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Overview</Link></li>
              <li><Link to="/research-scholar-programs" className="text-gray-300 hover:text-white transition-colors text-sm">Research Areas</Link></li>
              <li><Link to="/summer-programs" className="text-gray-300 hover:text-white transition-colors text-sm">Summer Programs</Link></li>
              <li><Link to="/university-prep-course" className="text-gray-300 hover:text-white transition-colors text-sm">University Prep</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm">Application Process</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/find-a-course" className="text-gray-300 hover:text-white transition-colors text-sm">Program Brochure</Link></li>
              <li><Link to="/FAQPage" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/#success-stories" className="text-gray-300 hover:text-white transition-colors text-sm">Scholar Stories</Link></li>
              <li><Link to="/mentors" className="text-gray-300 hover:text-white transition-colors text-sm">Mentors</Link></li>
              <li><a href="mailto:hello@newtonimperial.education" className="text-gray-300 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Locations</h3>
            <ul className="space-y-3">
              <li><Link to="/summer-programs/cambridge" className="text-gray-300 hover:text-white transition-colors text-sm">Cambridge</Link></li>
              <li><Link to="/summer-programs/oxford" className="text-gray-300 hover:text-white transition-colors text-sm">Oxford</Link></li>
              <li><Link to="/summer-programs" className="text-gray-300 hover:text-white transition-colors text-sm">Summer Experiences</Link></li>
              <li><Link to="/find-a-course" className="text-gray-300 hover:text-white transition-colors text-sm">Online Programs</Link></li>
              <li><Link to="/mentors" className="text-gray-300 hover:text-white transition-colors text-sm">Global Mentors</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Get program updates and research opportunities delivered to your inbox.
              </p>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  if (email) {
                    alert('Thank you for subscribing! We\'ll be in touch soon.');
                    e.target.reset();
                  }
                }}
                className="space-y-3"
              >
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  required
                  className="w-full px-4 py-2.5 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A56A] focus:border-transparent text-white placeholder-gray-300 text-sm"
                />
                <button 
                  type="submit"
                  className="w-full px-4 py-2.5 text-white rounded-lg transition-colors font-medium text-sm"
                  style={{ backgroundColor: '#C8A56A' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#B8956A'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#C8A56A'}
                >
                  Join now →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 text-sm text-gray-300">
              <span>hello@newtonimperial.education</span>
              <span className="hidden sm:inline">•</span>
              <span>+447842161769</span>
              <span className="hidden sm:inline">•</span>
              <span>Avebury Boulevard, MK9 3GE</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center md:justify-start gap-4 text-sm text-gray-400">
              <Link to="/FAQPage" className="hover:text-gray-200 transition-colors">Terms & Conditions</Link>
              <Link to="/FAQPage" className="hover:text-gray-200 transition-colors">Privacy Policy</Link>
              <Link to="/FAQPage" className="hover:text-gray-200 transition-colors">Cookie Policy</Link>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              Copyright © NIE Research Scholar Program 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 