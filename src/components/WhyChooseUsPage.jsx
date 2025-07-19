import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CounterAnimation from './CounterAnimation.jsx';

const WhyChooseUsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const institutions = [
    {
      name: "Oxford University",
      logo: "/school_logos/oxford_logo.png",
      alt: "Oxford University Logo"
    },
    {
      name: "University of Cambridge",
      logo: "/school_logos/cambridge_logo.png",
      alt: "Cambridge University Logo"
    },
    {
      name: "Princeton University",
      logo: "/school_logos/princeton_logo.png",
      alt: "Princeton University Logo"
    },
    {
      name: "Harvard University",
      logo: "/school_logos/harvard_logo.png",
      alt: "Harvard University Logo"
    },
    {
      name: "Massachusetts Institute of Technology",
      logo: "/school_logos/mit_logo.jpg",
      alt: "MIT Logo"
    },
    {
      name: "Stanford University",
      logo: "/school_logos/stanford_logo.png",
      alt: "Stanford University Logo"
    }
  ];

  const itemsPerSlide = 4;
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
  const reasons = [
    {
      icon: (
        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-md border border-amber-200">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </div>
      ),
      title: "World-Class Faculty & Mentors",
      description: "Our mentors are PhD candidates and professors from the world's top universities including Harvard, MIT, Oxford, Cambridge, Stanford, and Princeton. They bring cutting-edge research experience and academic excellence directly to your learning journey.",
      details: [
        "Direct mentorship from Ivy League researchers",
        "Access to cutting-edge research methodologies",
        "Personalized academic guidance",
        "Industry connections and networking opportunities"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-md border border-amber-200">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      ),
      title: "Real Research & Publication Opportunities",
      description: "Unlike traditional education programs, we provide genuine research opportunities that can lead to academic publications. Our students work on meaningful projects that contribute to their field of study.",
      details: [
        "Opportunities to publish in peer-reviewed journals",
        "Hands-on research experience",
        "Original research projects",
        "Conference presentation opportunities"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-md border border-amber-200">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      title: "Accelerated Learning Programs",
      description: "Our intensive programs are designed to fast-track your academic growth. We focus on efficiency and effectiveness, helping you achieve more in less time while maintaining the highest quality standards.",
      details: [
        "Condensed but comprehensive curriculum",
        "Flexible scheduling options",
        "Accelerated skill development",
        "Rapid academic advancement"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-md border border-amber-200">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      ),
      title: "Global Community & Network",
      description: "Join a diverse community of ambitious students from around the world. Build lasting relationships, collaborate on projects, and create a network that will support your entire career.",
      details: [
        "International student community",
        "Collaborative learning environment",
        "Peer-to-peer learning opportunities",
        "Lifelong professional network"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-md border border-amber-200">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      title: "Proven Track Record",
              description: "With a 100% program completion rate and hundreds of satisfied students, our programs have consistently delivered exceptional results. Our graduates go on to attend top universities and pursue successful careers.",
      details: [
                  "100% program completion rate",
        "High university acceptance rates",
        "Strong alumni network",
        "Measurable academic improvements"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shadow-md border border-amber-200">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        </div>
      ),
      title: "Scholarship & Financial Support",
      description: "We believe financial constraints shouldn't limit academic potential. Our comprehensive scholarship program ensures that deserving students can access our programs regardless of their economic background.",
      details: [
        "100% scholarship opportunities available",
        "Need-based financial aid",
        "Merit-based scholarships",
        "Flexible payment plans"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 bg-gray-900 overflow-hidden"
        style={{
          backgroundImage: `url('/why_nie/oxford_cambridge_campus.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg px-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.5rem, 5vw, 4rem)' }}>
              Why Choose Newton Imperial Education?
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md px-4" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
              Discover the comprehensive reasons why students and parents worldwide trust us with their academic future
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Section - Where Our Mentors Are From */}
      <section className="py-16 lg:py-20 bg-gray-25">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-primary-700 font-semibold text-sm mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                World-Class Mentors
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Where Our Mentors Are From
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Learn from PhD candidates and researchers from the world's most prestigious universities
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-7xl mx-auto mb-12">
              {/* University Logos Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                {getCurrentInstitutions().map((institution, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center justify-center group transition-all duration-300 hover:shadow-md">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center flex-shrink-0 mb-4">
                      <img 
                        src={institution.logo} 
                        alt={institution.alt}
                        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-sm lg:text-base font-bold text-gray-900 uppercase text-center">
                      {institution.name}
                    </h3>
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

                         {/* Credibility Stats */}
             <div className="bg-white rounded-2xl p-8 lg:p-12">
               <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-center">
                 <div className="group">
                   <CounterAnimation 
                     targetValue={120} 
                     suffix="+" 
                     duration={2000}
                     className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                   />
                   <div className="text-lg text-gray-600 font-medium">PhD Mentors</div>
                 </div>

                 <div className="group">
                   <CounterAnimation 
                     targetValue={100} 
                     suffix="%" 
                     duration={2000}
                     className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                   />
                   <div className="text-lg text-gray-600 font-medium">Complete Program Success</div>
                 </div>

                 <div className="group">
                   <CounterAnimation 
                     targetValue={6} 
                     suffix="" 
                     duration={2000}
                     className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                   />
                   <div className="text-lg text-gray-600 font-medium">Top Universities</div>
                 </div>
               </div>
             </div>

            {/* Trust Building Quote */}
            <div className="text-center mt-12">
              <blockquote className="text-xl lg:text-2xl font-medium text-gray-700 italic max-w-4xl mx-auto">
                "Access to world-class mentorship from <span className="font-black uppercase not-italic">Oxford</span> and <span className="font-black uppercase not-italic">Cambridge</span> researchers - 
                the same caliber of expertise that has shaped centuries of academic excellence."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Gain Section */}
      <section className="py-16 lg:py-24 bg-gray-25">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                What You Will Gain
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your academic journey with comprehensive skills and opportunities that prepare you for future success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white border border-[#B8A67A] rounded-2xl p-6 text-center group hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">University Readiness</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Prepare for university life by developing academic and personal skills essential for higher education success.
                </p>
              </div>

              <div className="bg-white border border-[#B8A67A] rounded-2xl p-6 text-center group hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Research Skills</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Participate in high-level research with top scholars from renowned universities worldwide.
                </p>
              </div>

              <div className="bg-white border border-[#B8A67A] rounded-2xl p-6 text-center group hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Clarity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Explore your academic and career interests while building connections with researchers and professionals.
                </p>
              </div>

              <div className="bg-white border border-[#B8A67A] rounded-2xl p-6 text-center group hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Network</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Join a community of ambitious students from all over the world and build lasting connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 lg:py-24 bg-gray-25">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Essential Resources for Success
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At NIE, we provide you with comprehensive resources and tools necessary to succeed academically and in your future career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-[#B8A67A] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">University Admissions Guide</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive advice on university applications, personal statements, and interview preparation to maximize your admission chances.
                </p>
              </div>

              <div className="bg-white border border-[#B8A67A] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Research and Writing Tools</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access guides and tutorials on writing academic papers, conducting research, and navigating the publishing process.
                </p>
              </div>

              <div className="bg-white border border-[#B8A67A] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scholarship and Financial Aid</h3>
                <p className="text-gray-600 leading-relaxed">
                  Information on scholarships, grants, and funding opportunities for international students pursuing higher education.
                </p>
              </div>

              <div className="bg-white border border-[#B8A67A] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Study Tools</h3>
                <p className="text-gray-600 leading-relaxed">
                  Time management tools, study techniques, and tips for staying focused and productive throughout your academic journey.
                </p>
              </div>

              <div className="bg-white border border-[#B8A67A] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Student Mentorship</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access to a global network of mentors and former students to help guide you through your academic and career path.
                </p>
              </div>

              <div className="bg-white border border-[#B8A67A] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resource Hub</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive collection of educational materials, templates, and resources to support your academic success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Reasons Section */}
      <section className="py-20 lg:py-32 bg-gray-25">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid gap-16 lg:gap-20">
              {reasons.map((reason, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {reason.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {reason.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 lg:p-16">
                      <div className="flex items-center justify-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-20 lg:py-32">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Academic Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              Join hundreds of students who have already started their path to academic excellence with Newton Imperial Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Apply Now
              </a>
              <Link
                to="/#our-programs"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-primary-600"
              >
                Learn More About Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WhyChooseUsPage; 