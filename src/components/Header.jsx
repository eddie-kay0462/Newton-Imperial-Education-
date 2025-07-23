import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    format: '',
    pathway: '',
    subject: ''
  });
  const [dropdownStates, setDropdownStates] = useState({
    format: false,
    pathway: false,
    subject: false
  });
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRefs = useRef({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setMobileDropdowns({});
  };

  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleMobileDropdownToggle = (dropdownName) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };

  // Improved hover handlers with delay
  const handleMouseEnter = (dropdownName) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = (dropdownName) => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay to prevent accidental closing
    setHoverTimeout(timeout);
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

  // Close search modal dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchModalOpen && !event.target.closest('.dropdown-container')) {
        setDropdownStates({
          format: false,
          pathway: false,
          subject: false
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchModalOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      // Re-enable scrolling if component unmounts while modal is open
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isSearchModalOpen) {
        closeSearchModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isSearchModalOpen]);


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
      ? "flex items-center space-x-1 cursor-pointer min-w-0"
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

  // Search modal data
  const teachingFormats = [
    { label: 'Online', value: 'online' },
    { label: 'In Person', value: 'in_person' },
  ];

  const pathways = [
    'Research Scholar Programs',
    'Intensive Programs',
    'Leadership and Personal Development',
    'University Prep Course',
    'Career Exploration and University Pathways',
  ];

  const subjects = [
    'Engineering', 'Medicine', 'Mathematics', 'Artificial Intelligence (AI)', 'Biotechnology',
    'Biology', 'Chemistry', 'Coding', 'Computer Science', 'Economics', 'Education',
    'Sociology', 'International Relations', 'Law', 'English Literature', 'Philosophy',
    'Architecture', 'Philosophy, Politics, and Economics (PPE)', 'Psychology',
    'Political Science', 'International Development'
  ];

  // Search modal handlers
  const openSearchModal = () => {
    setIsSearchModalOpen(true);
    setActiveDropdown(null);
    // Disable background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
    setSearchFilters({
      format: '',
      pathway: '',
      subject: ''
    });
    setDropdownStates({
      format: false,
      pathway: false,
      subject: false
    });
    // Re-enable background scrolling
    document.body.style.overflow = 'unset';
  };

  const toggleDropdown = (type) => {
    setDropdownStates(prev => {
      // Close all dropdowns first
      const newState = {
        format: false,
        pathway: false,
        subject: false
      };
      // Then toggle the selected one
      newState[type] = !prev[type];
      return newState;
    });
  };

  const handleSearchFilterChange = (filterType, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    // Close the dropdown after selection
    setDropdownStates(prev => ({
      ...prev,
      [filterType]: false
    }));
  };

  const handleSearchSubmit = () => {
    const params = new URLSearchParams();
    
    if (searchFilters.format) {
      params.set('formats', searchFilters.format);
    }
    if (searchFilters.pathway) {
      params.set('pathways', searchFilters.pathway);
    }
    if (searchFilters.subject) {
      params.set('subjects', searchFilters.subject);
    }

    const queryString = params.toString();
    navigate(`/find-a-course${queryString ? `?${queryString}` : ''}`);
    closeSearchModal();
  };

  const hasActiveFilters = searchFilters.format || searchFilters.pathway || searchFilters.subject;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center h-20 sm:h-24 md:h-28">
            {/* Mobile Layout */}
            <div className="lg:hidden flex items-center justify-between w-full">
              {/* Logo - Left */}
              <div className="flex items-center ml-2">
                <Link to="/" className="flex items-center">
                  {/* Text Only */}
                  <div className="flex flex-col justify-center text-center">
                    <span className="text-xs font-medium text-gray-500 leading-tight uppercase" style={{ fontSize: 'clamp(0.625rem, 1vw, 0.75rem)', fontFamily: 'Nocturne Serif, Georgia, serif' }}>Newton Imperial</span>
                    <span className="text-sm font-semibold text-gray-900 leading-tight" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', fontFamily: 'Georgia, serif' }}>Education</span>
                  </div>
                </Link>
              </div>

              {/* Right side buttons */}
              <div className="flex items-center space-x-2 mr-2">
                {/* Search button */}
                <button
                  onClick={openSearchModal}
                  className="text-gray-600 hover:text-primary-600 transition-all duration-300 p-2 rounded-lg hover:bg-gray-50"
                  aria-label="Search courses"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {/* Mobile menu button with circle */}
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 w-9 h-9 flex items-center justify-center transition-colors duration-200 border border-gray-300 rounded-full hover:border-gray-400"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop Logo */}
            <div className="hidden lg:flex items-center ml-2 lg:ml-4 xl:ml-6">
              <Link to="/" className="flex items-center">
                <div className="flex items-center space-x-3">
                  {/* Text */}
                  <div className="flex flex-col justify-center text-center">
                    <span className="text-sm font-medium text-gray-500 leading-tight uppercase text-caption" style={{ fontSize: 'clamp(0.75rem, 1.3vw, 0.875rem)', fontFamily: 'Nocturne Serif, Georgia, serif' }}>Newton Imperial</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-gray-900 leading-tight text-heading" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontFamily: ' Georgia, serif' }}>Education</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
              <Link to="/" className={getLinkClasses('/')}>
                Home
              </Link>
              
              {/* About Dropdown */}
              <div 
                className="relative" 
                ref={el => dropdownRefs.current.about = el}
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={() => handleMouseLeave('about')}
              >
                <button 
                  className={getLinkClasses('/#about', false, true)}
                >
                  <span className="flex-shrink-0">About</span>
                  <svg 
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-500 ease-in-out ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[600px] lg:w-[680px] bg-gray-25 rounded-2xl shadow-lg border border-gray-200/30 py-8 z-50 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-200">
                    {/* Invisible gap filler to prevent hover issues */}
                    <div className="absolute -top-3 left-0 right-0 h-3"></div>
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
                onMouseEnter={() => handleMouseEnter('programs')}
                onMouseLeave={() => handleMouseLeave('programs')}
              >
                <button 
                  className={getLinkClasses('/#programs', false, true)}
                >
                  <span className="flex-shrink-0">Programs</span>
                  <svg 
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-500 ease-in-out ${activeDropdown === 'programs' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'programs' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[800px] lg:w-[900px] xl:w-[980px] 2xl:w-[1100px] bg-gray-25 rounded-2xl shadow-lg border border-gray-200/30 py-8 z-50 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-200">
                    {/* Invisible gap filler to prevent hover issues */}
                    <div className="absolute -top-3 left-0 right-0 h-3"></div>
                    <div className="px-8 py-2">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        Our Programs
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 px-8">
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



              {/* Summer Experiences Dropdown */}
              <div 
                className="relative" 
                ref={el => dropdownRefs.current.summerExperiences = el}
                onMouseEnter={() => handleMouseEnter('summerExperiences')}
                onMouseLeave={() => handleMouseLeave('summerExperiences')}
              >
                <button 
                  className={getLinkClasses('/summer-programs', false, true)}
                >
                  <span className="flex-shrink-0">Summer Experiences</span>
                  <svg 
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-500 ease-in-out ${activeDropdown === 'summerExperiences' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'summerExperiences' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[500px] lg:w-[600px] bg-gray-25 rounded-2xl shadow-lg border border-gray-200/30 py-8 z-50 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-200">
                    {/* Invisible gap filler to prevent hover issues */}
                    <div className="absolute -top-3 left-0 right-0 h-3"></div>
                    <div className="px-8 py-2">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        Summer 2026 Experiences
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4 px-8">
                      <Link
                        to="/summer-programs/cambridge"
                        className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/campuses/cambridge-campus.jpg)' }}>
                          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                          <div className="absolute top-4 left-4">
                            <h4 className="text-xl font-bold text-white mb-1">Cambridge</h4>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                      
                      <Link
                        to="/summer-programs/oxford"
                        className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/campuses/oxford-campus.jpg)' }}>
                          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                          <div className="absolute top-4 left-4">
                            <h4 className="text-xl font-bold text-white mb-1">Oxford</h4>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Students Dropdown */}
              <div 
                className="relative"
                ref={el => dropdownRefs.current.students = el}
                onMouseEnter={() => handleMouseEnter('students')}
                onMouseLeave={() => handleMouseLeave('students')}
              >
                <button 
                  className={getLinkClasses('/#students', false, true)}
                >
                  <span className="flex-shrink-0">Students</span>
                  <svg 
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-500 ease-in-out ${activeDropdown === 'students' ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === 'students' && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[680px] bg-gray-25 rounded-2xl shadow-lg border border-gray-200/30 py-8 z-50 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-200">
                    {/* Invisible gap filler to prevent hover issues */}
                    <div className="absolute -top-3 left-0 right-0 h-3"></div>
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

            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              <button
                onClick={openSearchModal}
                className="text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 px-3 xl:px-4 py-2 rounded-lg hover:bg-gray-50"
                aria-label="Search courses"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link 
                to="/FAQPage" 
                className="hidden xl:block text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 px-3 xl:px-4 py-2 rounded-lg hover:bg-gray-50 relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 xl:after:left-4 xl:after:right-4 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 after:w-0 hover:after:w-3/4"
                style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
              >
                FAQs
              </Link>
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium py-3 xl:py-3.5 px-6 xl:px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg text-button"
                style={{ backgroundColor: '#BB945C', borderColor: '#BB945C', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#C8A56A'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#BB945C'}
              >
                Apply Now
              </a>
            </div>


          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-200">
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

              {/* Mobile Summer Experiences Dropdown */}
              <div>
                <button
                  onClick={() => handleMobileDropdownToggle('summerExperiences')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-300 text-base"
                >
                  <span>Summer Experiences</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns.summerExperiences ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileDropdowns.summerExperiences && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      to="/summer-programs/cambridge"
                      className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg text-sm font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Cambridge Summer Program
                    </Link>
                    <Link
                      to="/summer-programs/oxford"
                      className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg text-sm font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Oxford Summer Program
                    </Link>
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

              <div className="px-4 py-3 border-t border-gray-200 mt-2">
                <button
                  onClick={() => {
                    openSearchModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 px-0 py-2 text-gray-600 hover:text-primary-600 font-medium transition-colors duration-300 text-base mb-3 w-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search Courses</span>
                </button>
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
                  className="block w-full text-white font-medium py-3 px-6 rounded-full transition-all duration-300 text-center text-base shadow-sm hover:shadow-lg text-button"
                  style={{ backgroundColor: '#BB945C', borderColor: '#BB945C' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#C8A56A'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#BB945C'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Search Modal */}
        {isSearchModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4"
            onClick={closeSearchModal}
          >
            <div 
              className="bg-white rounded-2xl shadow-xl w-full max-w-4xl mx-auto max-h-[90vh] overflow-visible"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-4 sm:px-6 py-4 flex items-center justify-between border-b border-gray-100">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">Find the best course for you:</h2>
                <button
                  onClick={closeSearchModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 ml-2 flex-shrink-0"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="px-4 sm:px-6 py-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
                  
                  {/* Teaching Format Dropdown */}
                  <div className="relative dropdown-container lg:flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2 lg:hidden">Teaching Format</label>
                                          <button
                        onClick={() => toggleDropdown('format')}
                        className="w-full px-4 py-3 bg-gray-100 lg:bg-white border lg:border-2 border-gray-300 lg:border-gray-200 rounded-xl lg:rounded-lg text-gray-700 hover:bg-gray-50 lg:hover:border-gray-300 transition-all duration-200 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <span className="text-sm lg:text-base">{searchFilters.format ? teachingFormats.find(f => f.value === searchFilters.format)?.label : 'All Formats'}</span>
                      <svg 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${dropdownStates.format ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {dropdownStates.format && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-[110]">
                        <button
                          onClick={() => handleSearchFilterChange('format', '')}
                          className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg text-sm ${
                            !searchFilters.format ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'
                          }`}
                        >
                          All Formats
                        </button>
                        {teachingFormats.map((format) => (
                          <button
                            key={format.value}
                            onClick={() => handleSearchFilterChange('format', format.value)}
                            className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200 last:rounded-b-lg text-sm ${
                              searchFilters.format === format.value ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'
                            }`}
                          >
                            {format.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Pathways Dropdown */}
                  <div className="relative dropdown-container lg:flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2 lg:hidden">Pathway</label>
                    <button
                      onClick={() => toggleDropdown('pathway')}
                      className="w-full px-4 py-3 bg-gray-100 lg:bg-white border lg:border-2 border-gray-300 lg:border-gray-200 rounded-xl lg:rounded-lg text-gray-700 hover:bg-gray-50 lg:hover:border-gray-300 transition-all duration-200 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <span className="truncate text-sm lg:text-base">{searchFilters.pathway || 'All Pathways'}</span>
                      <svg 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-2 ${dropdownStates.pathway ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {dropdownStates.pathway && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-[110] max-h-48 overflow-y-auto">
                        <button
                          onClick={() => handleSearchFilterChange('pathway', '')}
                          className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg text-sm ${
                            !searchFilters.pathway ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'
                          }`}
                        >
                          All Pathways
                        </button>
                        {pathways.map((pathway) => (
                          <button
                            key={pathway}
                            onClick={() => handleSearchFilterChange('pathway', pathway)}
                            className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200 text-sm last:rounded-b-lg ${
                              searchFilters.pathway === pathway ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'
                            }`}
                          >
                            {pathway}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Subjects Dropdown */}
                  <div className="relative dropdown-container lg:flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2 lg:hidden">Subject</label>
                    <button
                      onClick={() => toggleDropdown('subject')}
                      className="w-full px-4 py-3 bg-gray-100 lg:bg-white border lg:border-2 border-gray-300 lg:border-gray-200 rounded-xl lg:rounded-lg text-gray-700 hover:bg-gray-50 lg:hover:border-gray-300 transition-all duration-200 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <span className="truncate text-sm lg:text-base">{searchFilters.subject || 'All Subjects'}</span>
                      <svg 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-2 ${dropdownStates.subject ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {dropdownStates.subject && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-[110] max-h-48 overflow-y-auto">
                        <button
                          onClick={() => handleSearchFilterChange('subject', '')}
                          className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg text-sm ${
                            !searchFilters.subject ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'
                          }`}
                        >
                          All Subjects
                        </button>
                        {subjects.map((subject) => (
                          <button
                            key={subject}
                            onClick={() => handleSearchFilterChange('subject', subject)}
                            className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200 text-sm last:rounded-b-lg ${
                              searchFilters.subject === subject ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'
                            }`}
                          >
                            {subject}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 lg:pt-0 lg:flex-shrink-0">
                    <button
                      onClick={handleSearchSubmit}
                      className="w-full lg:w-auto px-6 lg:px-8 py-3 font-medium rounded-lg lg:rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm hover:shadow-md lg:border-2"
                      style={{ 
                        backgroundColor: '#1A3659',
                        borderColor: '#1A3659',
                        color: 'white'
                      }}
                      onMouseEnter={(e) => {
                        if (window.innerWidth >= 1024) {
                          e.target.style.backgroundColor = 'white';
                          e.target.style.color = '#1A3659';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (window.innerWidth >= 1024) {
                          e.target.style.backgroundColor = '#1A3659';
                          e.target.style.color = 'white';
                        }
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 