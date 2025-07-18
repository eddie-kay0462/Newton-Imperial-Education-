import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12">
        {/* Navigation Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Programs Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Overview</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Research Areas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Mentors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Application Process</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Program Brochure</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Scholar Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Application Process</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Program Director</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Admissions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Schedule Info Session</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-700 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap items-center gap-6 mb-8">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-primary-600 rounded-full mr-2"></div>
            <span className="text-gray-600">admissions@nieresearch.edu</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-primary-600 rounded-full mr-2"></div>
            <span className="text-gray-600">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-primary-600 rounded-full mr-2"></div>
            <span className="text-gray-600">Cambridge, MA 02139</span>
          </div>
        </div>

        {/* Stay Updated Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-4">Get program updates and research opportunities delivered to your inbox.</p>
          <div className="flex gap-3">
            <input 
              type="email" 
              placeholder="Kindly enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent bg-white/90"
            />
            <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">Follow our Educational Community</p>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="w-8 h-8 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors cursor-pointer"></div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200/50">
          <p className="text-gray-600">© 2025 NIE Research Scholar Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 