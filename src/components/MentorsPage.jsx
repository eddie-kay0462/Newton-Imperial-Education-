import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CounterAnimation from './CounterAnimation.jsx';

const MentorsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const institutions = [
    {
      name: "Oxford University",
      logo: "/school_logos/oxford_logo.png",
      alt: "Oxford University Logo",
      description: "Founded in 1096, the world's second-oldest university",
      stats: "Ranked #1 in World University Rankings 2024"
    },
    {
      name: "University of Cambridge",
      logo: "/school_logos/cambridge_logo.png",
      alt: "Cambridge University Logo",
      description: "Established in 1209, one of the world's oldest universities",
      stats: "Ranked #2 in World University Rankings 2024"
    },
    {
      name: "Princeton University",
      logo: "/school_logos/princeton_logo.png",
      alt: "Princeton University Logo",
      description: "Founded in 1746, prestigious Ivy League institution",
      stats: "Ranked #1 in US News National Universities 2024"
    },
    {
      name: "Harvard University",
      logo: "/school_logos/harvard_logo.png",
      alt: "Harvard University Logo",
      description: "Established in 1636, America's oldest university",
      stats: "Ranked #2 in US News National Universities 2024"
    },
    {
      name: "Massachusetts Institute of Technology",
      logo: "/school_logos/mit_logo.png",
      alt: "MIT Logo",
      description: "Founded in 1861, world leader in science and technology",
      stats: "Ranked #1 in Engineering & Technology 2024"
    },
    {
      name: "Stanford University",
      logo: "/school_logos/stanford_logo.png",
      alt: "Stanford University Logo",
      description: "Founded in 1885, innovation hub in Silicon Valley",
      stats: "Ranked #3 in World University Rankings 2024"
    },
    {
      name: "Peking University",
      logo: "/school_logos/peking_logo.png",
      alt: "Peking University Logo",
      description: "Founded in 1898, China's premier comprehensive university",
      stats: "Ranked #1 in China University Rankings 2024"
    },
    {
      name: "Tsinghua University",
      logo: "/school_logos/tsinghua_logo.png",
      alt: "Tsinghua University Logo",
      description: "Founded in 1911, China's leading research university",
      stats: "Ranked #2 in China University Rankings 2024"
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(institutions.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentInstitutions = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return institutions.slice(startIndex, startIndex + itemsPerSlide);
  };

  const mentors = [
    {
      name: "Dr. Sarah Chen",
      institution: "Oxford University",
      field: "Computer Science",
      credentials: "PhD in Computer Science, Oxford University",
      achievements: "Published 25+ papers in top-tier conferences, Former Google Research Scientist",
      image: "/mentors/sarah-chen.jpg"
    },
    {
      name: "Dr. Michael Rodriguez",
      institution: "Cambridge University",
      field: "Physics",
      credentials: "PhD in Theoretical Physics, Cambridge University",
      achievements: "CERN Research Fellow, 15+ publications in Nature and Science",
      image: "/mentors/michael-rodriguez.jpg"
    },
    {
      name: "Dr. Emily Watson",
      institution: "Harvard University",
      field: "Economics",
      credentials: "PhD in Economics, Harvard University",
      achievements: "Former IMF Economist, Published in American Economic Review",
      image: "/mentors/emily-watson.jpg"
    },
    {
      name: "Dr. James Kim",
      institution: "MIT",
      field: "Engineering",
      credentials: "PhD in Mechanical Engineering, MIT",
      achievements: "NASA Research Fellow, 20+ patents, IEEE Fellow",
      image: "/mentors/james-kim.jpg"
    },
    {
      name: "Dr. Lisa Thompson",
      institution: "Stanford University",
      field: "Biology",
      credentials: "PhD in Molecular Biology, Stanford University",
      achievements: "NIH Grant Recipient, 30+ publications in Cell and Nature",
      image: "/mentors/lisa-thompson.jpg"
    },
    {
      name: "Dr. David Park",
      institution: "Princeton University",
      field: "Mathematics",
      credentials: "PhD in Mathematics, Princeton University",
      achievements: "Fields Medal Nominee, Clay Mathematics Institute Fellow",
      image: "/mentors/david-park.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Meet Our World-Class Mentors
            </h1>
            <p className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Learn from PhD candidates and professors from the world's most prestigious universities
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Stats */}
      <section className="py-16 lg:py-20 bg-gray-50 rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Our Mentors' Credentials
              </h2>
              <p className="text-lg md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Numbers that speak to the quality and expertise of our mentor network
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <CounterAnimation 
                  targetValue={120} 
                  suffix="+" 
                  duration={2000}
                  className="text-3xl lg:text-4xl font-bold text-[#0F2A44] mb-4"
                />
                <div className="text-lg text-gray-600 font-medium">PhD Mentors</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <CounterAnimation 
                  targetValue={500} 
                  suffix="+" 
                  duration={2000}
                  className="text-3xl lg:text-4xl font-bold text-[#0F2A44] mb-4"
                />
                <div className="text-lg text-gray-600 font-medium">Research Papers Published</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <CounterAnimation 
                  targetValue={50} 
                  suffix="+" 
                  duration={2000}
                  className="text-3xl lg:text-4xl font-bold text-[#0F2A44] mb-4"
                />
                <div className="text-lg text-gray-600 font-medium">Research Grants</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
                                    <CounterAnimation 
                      targetValue={100} 
                      suffix="%" 
                      duration={2000}
                      className="text-3xl lg:text-4xl font-bold text-[#0F2A44] mb-4"
                    />
                <div className="text-lg text-gray-600 font-medium">Complete Program Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-16 lg:py-20 bg-gray-50 rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Featured Mentors
              </h2>
              <p className="text-lg md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Meet some of our distinguished mentors who are actively guiding students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12">
              {mentors.map((mentor, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-white">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{mentor.name}</h3>
                    <p className="text-[#0F2A44] font-semibold mb-1">{mentor.field}</p>
                    <p className="text-gray-600 text-sm">{mentor.institution}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Credentials</h4>
                      <p className="text-gray-600 text-sm">{mentor.credentials}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                      <p className="text-gray-600 text-sm">{mentor.achievements}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="py-16 lg:py-20 bg-gray-50 rounded-3xl mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Our Partner Institutions
              </h2>
              <p className="text-lg md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We collaborate with the world's most prestigious universities
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-7xl mx-auto">
              {/* Responsive Institutions Grid/Carousel */}
              <div className="block md:hidden">
                {/* Mobile: Show only one card with chevrons */}
                <div className="flex justify-center items-center">
                  {/* Left Arrow */}
                  <button 
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white border-2 border-[#0F2A44] flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group mr-4"
                  >
                    <svg className="w-5 h-5 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group w-full max-w-xs">
                    <div className="text-center mb-6">
                      <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                        <img 
                          src={institutions[currentSlide].logo} 
                          alt={institutions[currentSlide].alt}
                          className="school-logo-img max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{institutions[currentSlide].name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{institutions[currentSlide].description}</p>
                      <p className="text-[#0F2A44] font-semibold text-sm">{institutions[currentSlide].stats}</p>
                    </div>
                  </div>
                  {/* Right Arrow */}
                  <button 
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white border-2 border-[#0F2A44] flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group ml-4"
                  >
                    <svg className="w-5 h-5 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                {/* Progress Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {institutions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide 
                          ? 'bg-[#B8A67A] w-4' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                {/* Desktop/Tablet: Show grid as before */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  {getCurrentInstitutions().map((institution, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                      <div className="text-center mb-6">
                        <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                          <img 
                            src={institution.logo} 
                            alt={institution.alt}
                            className="school-logo-img max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{institution.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{institution.description}</p>
                        <p className="text-[#0F2A44] font-semibold text-sm">{institution.stats}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Navigation Arrows */}
                <div className="flex justify-center items-center mt-12 space-x-8">
                  {/* Left Arrow */}
                  <button 
                    onClick={prevSlide}
                    className="w-16 h-16 rounded-full bg-white border-2 border-[#0F2A44] flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
                  >
                    <svg className="w-6 h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  {/* Progress Indicators */}
                  <div className="flex space-x-2">
                    {Array.from({ length: totalSlides }, (_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-[#B8A67A] w-4' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  {/* Right Arrow */}
                  <button 
                    onClick={nextSlide}
                    className="w-16 h-16 rounded-full bg-white border-2 border-[#0F2A44] flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
                  >
                    <svg className="w-6 h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Mentor Section */}
      <section className="py-16 lg:py-20 bg-gray-50 rounded-3xl mx-2 sm:mx-8 lg:mx-16 xl:mx-20 2xl:mx-28 overflow-x-hidden">
        <div className="w-full max-w-none mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-28 overflow-x-hidden box-border">
          <div className="max-w-screen-2xl mx-auto w-full box-border">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Become a Mentor
              </h2>
              <p className="text-lg md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join our network of distinguished mentors and help shape the next generation of researchers and scholars
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center w-full box-border">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Become a Mentor?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Share your expertise with motivated students worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Contribute to cutting-edge research projects</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Expand your professional network and collaborations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Make a lasting impact on students' academic careers</span>
                    </li>
                  </ul>
                </div>

                                 <div className="bg-white rounded-2xl p-8 shadow-sm">
                   <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                   <ul className="space-y-3">
                     <li className="flex items-start">
                       <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                         <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                         </svg>
                       </div>
                       <span className="text-gray-700">PhD or equivalent research experience</span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                         <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                         </svg>
                       </div>
                       <span className="text-gray-700">Strong publication record in your field</span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                         <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                         </svg>
                       </div>
                       <span className="text-gray-700">Experience in mentoring or teaching</span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                         <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                         </svg>
                       </div>
                       <span className="text-gray-700">Commitment to student development</span>
                     </li>
                   </ul>
                 </div>
              </div>

              {/* Right Side - Application Form */}
              <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Apply to Become a Mentor</h3>
                <p className="text-gray-600 mb-6">
                  To join our mentor network, please send your CV and personal details to our email address. We'll review your application and get back to you within 5-7 business days.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-[#0F2A44] rounded-xl p-4 sm:p-8 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">Email Your Application</h4>
                    <p className="text-gray-200 text-base mb-6">Send your CV and details to:</p>
                    <div className="flex justify-center">
                      <a 
                        href="mailto:hello@newtonimperial.education" 
                        className="inline-block bg-white text-[#0F2A44] font-semibold py-4 px-4 sm:px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 text-base text-center min-w-0 sm:min-w-[280px]"
                        style={{ wordBreak: 'break-all' }}
                      >
                        hello@newtonimperial.education
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 sm:p-8">
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">Please Include:</h4>
                    <ul className="space-y-3 text-base text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#0F2A44] rounded-full mr-4 mt-2.5 flex-shrink-0"></span>
                        <span>Your CV/Resume with research experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#0F2A44] rounded-full mr-4 mt-2.5 flex-shrink-0"></span>
                        <span>List of publications and research interests</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#0F2A44] rounded-full mr-4 mt-2.5 flex-shrink-0"></span>
                        <span>Mentoring/teaching experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#0F2A44] rounded-full mr-4 mt-2.5 flex-shrink-0"></span>
                        <span>Preferred subjects and availability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-[#0F2A44] rounded-full mr-4 mt-2.5 flex-shrink-0"></span>
                        <span>Brief statement of interest in mentoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a]">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-white mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Ready to Learn from the Best?
            </h2>
            <p className="text-lg md:text-lg lg:text-lg xl:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Join our programs and get mentored by world-class researchers from top universities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#0F2A44] bg-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg"
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
              >
                Apply Now
              </a>
              <Link 
                to="/"
                className="inline-block text-white border-2 border-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-[#0F2A44] text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentorsPage; 