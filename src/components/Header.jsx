import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();
  const dropdownRefs = useRef({});
  const hoverTimeouts = useRef({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setMobileDropdowns({});
  };

  const handleDropdownHover = (dropdownName) => {
    // Clear any existing timeout
    if (hoverTimeouts.current[dropdownName]) {
      clearTimeout(hoverTimeouts.current[dropdownName]);
    }
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = (dropdownName) => {
    // Add a small delay before hiding
    hoverTimeouts.current[dropdownName] = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleMobileDropdownToggle = (dropdownName) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown].contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(hoverTimeouts.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  // Helper function to check if a link is active
  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Helper function to get link classes
  const getLinkClasses = (path, isMobile = false, hasDropdown = false) => {
    const baseClasses = isMobile 
      ? "block px-4 py-3 font-medium transition-all duration-300 text-base rounded-lg"
      : "font-medium transition-all duration-300 text-base relative py-2";
    
    const activeClasses = isMobile
      ? "text-primary-600 bg-primary-50 border-l-4 border-primary-600"
      : "text-primary-600";
    
    const inactiveClasses = isMobile
      ? "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
      : "text-gray-600 hover:text-primary-600";
    
    const underlineClasses = !isMobile && !hasDropdown
      ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
      : "";
    
    const activeUnderlineClasses = !isMobile && !hasDropdown && isActiveLink(path)
      ? "after:w-full"
      : "after:w-0";

    const dropdownClasses = hasDropdown && !isMobile
      ? "flex items-center space-x-1 cursor-pointer"
      : "";

    return `${baseClasses} ${isActiveLink(path) ? activeClasses : inactiveClasses} ${underlineClasses} ${activeUnderlineClasses} ${dropdownClasses}`;
  };

  const programsDropdownItems = [
    { 
      name: 'Research Scholar Programs', 
      path: '/research-scholar-programs',
      description: 'Work with PhD candidates from top universities',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      name: 'University Prep Course', 
      path: '/university-prep-course',
      description: 'Comprehensive preparation for university success',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      name: 'Career Exploration Pathways', 
      path: '/career-exploration-pathways',
      description: 'Discover your passion and academic future',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    { 
      name: 'Leadership & Personal Development', 
      path: '/leadership-personal-development',
      description: 'Build essential leadership and personal skills',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      name: 'Intensive Programs', 
      path: '/intensive-programs',
      description: 'Accelerated learning for rapid advancement',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: 'Summer Programs', 
      path: '/summer-programs',
      description: 'Engaging summer learning experiences',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
  ];

  const aboutDropdownItems = [
    { 
      name: 'Vision & Mission', 
      path: '/#vision-mission',
      description: 'Our commitment to educational excellence',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    { 
      name: 'Our Mentors', 
      path: '/#mentors',
      description: 'World-class researchers and academics',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      name: 'Success Stories', 
      path: '/#success-stories',
      description: 'Student achievements and testimonials',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    { 
      name: 'How It Works', 
      path: '/#how-it-works',
      description: 'Our streamlined learning process',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
  ];

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
              <Link to="/" className={getLinkClasses('/')}>
                Home
              </Link>
              
              {/* About Dropdown */}
              <div 
                className="relative" 
                ref={el => dropdownRefs.current.about = el}
                onMouseEnter={() => handleDropdownHover('about')}
                onMouseLeave={() => handleDropdownLeave('about')}
              >
                <button className={getLinkClasses('/#about', false, true)}>
                  <span>About</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[640px] bg-white rounded-2xl shadow-xl border border-gray-200 py-6 z-50 backdrop-blur-sm">
                    <div className="px-6 py-2">
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">About Us</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 px-6">
                      {aboutDropdownItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.path}
                          className="flex items-start p-4 text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 transition-all duration-200 group rounded-xl"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl mr-3 group-hover:bg-primary-100 group-hover:text-primary-600 transition-all duration-200">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Programs Dropdown */}
              <div 
                className="relative" 
                ref={el => dropdownRefs.current.programs = el}
                onMouseEnter={() => handleDropdownHover('programs')}
                onMouseLeave={() => handleDropdownLeave('programs')}
              >
                <button className={getLinkClasses('/#programs', false, true)}>
                  <span>Programs</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'programs' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'programs' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[960px] bg-white rounded-2xl shadow-xl border border-gray-200 py-6 z-50 backdrop-blur-sm">
                    <div className="px-6 py-2">
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Our Programs</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4 px-6">
                      {programsDropdownItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="flex items-start p-4 text-gray-700 hover:text-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 transition-all duration-200 group rounded-xl"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl mr-3 group-hover:bg-primary-100 group-hover:text-primary-600 transition-all duration-200">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/#our-students" className={getLinkClasses('/#our-students')}>
                Our Students
              </a>
              <a href="/#contact" className={getLinkClasses('/#contact')}>
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a 
                href="/#faqs" 
                className="text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 text-base px-4 py-2 rounded-lg hover:bg-gray-50 relative after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 after:w-0 hover:after:w-3/4"
              >
                FAQs
              </a>
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 text-base shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
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
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2 transition-colors duration-200"
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
                className={getLinkClasses('/', true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile About Dropdown */}
              <div>
                <button
                  onClick={() => handleMobileDropdownToggle('about')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-300 text-base"
                >
                  <span>About</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns.about ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileDropdowns.about && (
                  <div className="ml-4 mt-2 space-y-1">
                    {aboutDropdownItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.path}
                        className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg text-sm font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Programs Dropdown */}
              <div>
                <button
                  onClick={() => handleMobileDropdownToggle('programs')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-300 text-base"
                >
                  <span>Programs</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns.programs ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileDropdowns.programs && (
                  <div className="ml-4 mt-2 space-y-1">
                    {programsDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg text-sm font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/#our-students"
                className={getLinkClasses('/#our-students', true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Students
              </a>
              <a
                href="/#contact"
                className={getLinkClasses('/#contact', true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-4 py-3 border-t border-gray-200 mt-2">
                <a 
                  href="/#faqs"
                  className="block px-0 py-2 text-gray-600 hover:text-primary-600 font-medium transition-colors duration-300 text-base mb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </a>
                <a 
                  href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-white font-semibold py-3 px-5 rounded-lg transition-all duration-300 text-center text-base shadow-sm hover:shadow-md"
                  style={{ backgroundColor: '#1A365D', borderColor: '#1A365D' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0F2A44'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1A365D'}
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