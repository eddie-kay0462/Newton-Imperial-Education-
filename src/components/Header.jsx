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
      : "font-medium transition-all duration-300 text-base relative py-2 flex items-center";
    
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
      name: 'Summer In-Person Programs', 
      path: '/summer-programs',
      description: 'Immersive summer experiences at Cambridge and Oxford',
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
    { 
      name: 'FAQ', 
      path: '/FAQPage',
      description: 'Frequently asked questions',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  const studentsDropdownItems = [
    { 
      name: 'Our Students', 
      path: '/#our-students',
      description: 'Who should join our programs',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
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
      name: 'Student Testimonials', 
      path: '/#testimonials',
      description: 'Hear from our amazing students',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    { 
      name: 'Alumni Network', 
      path: '/#alumni',
      description: 'Connect with our global alumni community',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center h-20 sm:h-24 md:h-28">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-medium text-gray-500 leading-tight tracking-wider uppercase" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>Newton Imperial</span>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>Education</span>
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
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[680px] bg-gray-25 rounded-2xl shadow-lg border border-gray-200/30 py-8 z-50 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="px-8 py-2">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        About Us
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3 px-8">
                      {aboutDropdownItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.path}
                          className="flex items-start p-4 text-gray-700 hover:text-primary-600 bg-white hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 transition-all duration-300 group rounded-xl hover:shadow-md hover:scale-102 transform shadow-sm"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mr-4 group-hover:from-primary-100 group-hover:to-primary-200 group-hover:text-primary-600 transition-all duration-300 shadow-sm">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-1">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 group-hover:text-gray-600 leading-relaxed">
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
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[980px] bg-gray-25 rounded-2xl shadow-lg border border-gray-200/30 py-8 z-50 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="px-8 py-2">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        Our Programs
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-3 px-8">
                      {programsDropdownItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="flex items-start p-4 text-gray-700 hover:text-primary-600 bg-white hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 transition-all duration-300 group rounded-xl hover:shadow-md hover:scale-102 transform shadow-sm"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mr-4 group-hover:from-primary-100 group-hover:to-primary-200 group-hover:text-primary-600 transition-all duration-300 shadow-sm">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-1">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 group-hover:text-gray-600 leading-relaxed">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Students Dropdown */}
              <div 
                className="relative"
                ref={el => dropdownRefs.current.students = el}
                onMouseEnter={() => handleDropdownHover('students')}
                onMouseLeave={() => handleDropdownLeave('students')}
              >
                <button className={getLinkClasses('/#students', false, true)}>
                  <span>Students</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'students' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'students' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[680px] bg-gray-25 rounded-2xl shadow-lg border border-gray-200/30 py-8 z-50 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="px-8 py-2">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        Students
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3 px-8">
                      {studentsDropdownItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.path}
                          className="flex items-start p-4 text-gray-700 hover:text-primary-600 bg-white hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 transition-all duration-300 group rounded-xl hover:shadow-md hover:scale-102 transform shadow-sm"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mr-4 group-hover:from-primary-100 group-hover:to-primary-200 group-hover:text-primary-600 transition-all duration-300 shadow-sm">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-1">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 group-hover:text-gray-600 leading-relaxed">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <a href="/#contact" className={getLinkClasses('/#contact')}>
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              <Link 
                to="/FAQPage" 
                className="text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 px-3 xl:px-4 py-2 rounded-lg hover:bg-gray-50 relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 xl:after:left-4 xl:after:right-4 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 after:w-0 hover:after:w-3/4"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
              >
                FAQs
              </Link>
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold py-3 xl:py-3.5 px-6 xl:px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg"
                style={{ backgroundColor: '#0F2A44', borderColor: '#0F2A44', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0F2A44'}
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

              {/* Mobile Students Dropdown */}
              <div>
                <button
                  onClick={() => handleMobileDropdownToggle('students')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-300 text-base"
                >
                  <span>Students</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns.students ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileDropdowns.students && (
                  <div className="ml-4 mt-2 space-y-1">
                    {studentsDropdownItems.map((item, index) => (
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
              <a
                href="/#contact"
                className={getLinkClasses('/#contact', true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-4 py-3 border-t border-gray-200 mt-2">
                <Link 
                  to="/FAQPage"
                  className="block px-0 py-2 text-gray-600 hover:text-primary-600 font-medium transition-colors duration-300 text-base mb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
                <a 
                  href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 text-center text-base shadow-sm hover:shadow-lg"
                  style={{ backgroundColor: '#0F2A44', borderColor: '#0F2A44' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#0F2A44'}
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