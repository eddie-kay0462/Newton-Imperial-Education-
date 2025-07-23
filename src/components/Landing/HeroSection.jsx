import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [researchPapers, setResearchPapers] = useState('150+');
  const [researchMentors, setResearchMentors] = useState('120+');
  const [successRate, setSuccessRate] = useState('100%');
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Counter animation function
  const animateCounter = (start, end, duration, setter, suffix = '') => {
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      
      setter(current + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Start animations with slight delays for better effect
            setTimeout(() => animateCounter(0, 150, 2000, setResearchPapers, '+'), 200);
            setTimeout(() => animateCounter(0, 120, 2000, setResearchMentors, '+'), 400);
            setTimeout(() => animateCounter(0, 100, 2000, setSuccessRate, '%'), 600);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="bg-white relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Container matching header layout exactly */}
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="relative z-10">
            {/* Hero Content - Adding left margin to match logo positioning */}
            <header className="pt-8 sm:pt-12 lg:pt-16 xl:pt-20 2xl:pt-24 pb-8 sm:pb-12 lg:pb-16 ml-2 lg:ml-4 xl:ml-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
                {/* Left Side - Main Content */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                  <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-green-50 border border-green-200 rounded-full text-green-700 font-semibold text-xs sm:text-sm animate-pulse hover:animate-none transition-all duration-300 hover:scale-105 hover:shadow-md">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></span>
                    Applications are open for our upcoming cohorts
                  </div>
                  
                  <h1 id="hero-heading" className="font-hero font-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight text-gray-900 hero-title" style={{ fontFamily: 'Nocturne Serif, Georgia, serif'}}>
                    Research Opportunities
                    <br />
                    <span className="text-gray-900" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
                      with world's top 1% researchers
                    </span>
                  </h1>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-gray-600 max-w-2xl hero-subtitle" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>
                    <span className="font-semibold" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>Newton Imperial Education</span> (<span className="italic" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>NIE</span>) connects you with top-tier researchers from <span className="tracking-wide" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>Cambridge</span>, <span className="tracking-wide" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>Oxford</span>, <span className="tracking-wide" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>MIT</span>, and <span className="tracking-wide" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>Harvard</span>. 
                    Transform your academic journey with world-class mentorship and research opportunities.
                  </p>
                </div>

                {/* Right Side - Stats and CTA */}
                <aside className="space-y-6 sm:space-y-8">
                  {/* Trust Indicators */}
                  <div ref={statsRef} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
                    <div className="text-center mb-4 sm:mb-6">
                      <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-2" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
                        Trusted by Students Worldwide
                      </h3>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4 lg:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 bg-[#0F2A44] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="text-xs sm:text-sm lg:text-sm text-gray-700 font-medium stat-label" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>Research Papers</div>
                        </div>
                        <div className="text-base sm:text-lg lg:text-lg xl:text-xl font-semibold text-[#0F2A44] stat-number" style={{ fontWeight: 200 }}>{researchPapers}</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 bg-[#0F2A44] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="text-xs sm:text-sm lg:text-sm text-gray-700 font-medium stat-label" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>Research Mentors</div>
                        </div>
                        <div className="text-base sm:text-lg lg:text-lg xl:text-xl font-semibold text-[#0F2A44] stat-number" style={{ fontWeight: 200 }}>{researchMentors}</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 bg-[#0F2A44] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3 lg:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="text-xs sm:text-sm lg:text-sm text-gray-700 font-medium stat-label" style={{ fontFamily: 'Circular Std, Arial, sans-serif' }}>Complete Program Success</div>
                        </div>
                        <div className="text-base sm:text-lg lg:text-lg xl:text-xl font-semibold text-[#0F2A44] stat-number" style={{ fontWeight: 200 }}>{successRate}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 sm:space-y-4">
                    <a 
                      href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#0F2A44] text-white hover:bg-[#1a3659] hover:shadow-lg focus:bg-[#1a3659] focus:ring-4 focus:ring-[#0F2A44]/20 active:bg-[#0a1e35] active:scale-[0.98] font-medium py-3 sm:py-3 lg:py-3 px-6 sm:px-6 lg:px-8 rounded-full transition-all duration-300 ease-in-out text-center block group relative overflow-hidden text-sm sm:text-sm lg:text-base"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Apply Now
                        <svg className="w-3 h-3 sm:w-3 sm:h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </a>
                    <a 
                      href="/#programs"
                      className="w-full bg-transparent border-2 border-gray-300 text-gray-700 hover:border-[#0F2A44] hover:text-[#0F2A44] hover:bg-[#0F2A44]/5 hover:shadow-md focus:border-[#0F2A44] focus:text-[#0F2A44] focus:bg-[#0F2A44]/5 focus:ring-4 focus:ring-[#0F2A44]/10 active:border-[#1a3659] active:text-[#1a3659] active:bg-[#0F2A44]/10 active:scale-[0.98] font-medium py-3 sm:py-3 lg:py-3 px-6 sm:px-6 lg:px-8 rounded-full transition-all duration-300 ease-in-out text-center block group text-sm sm:text-sm lg:text-base"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Explore Programs
                        <svg className="w-3 h-3 sm:w-3 sm:h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </aside>
              </div>
            </header>

            {/* Hero Image Section - Matching header alignment */}
            <div className="relative pb-8 sm:pb-12 lg:pb-16 xl:pb-20 ml-2 lg:ml-4 xl:ml-6">
              <div className="relative">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
                  <img 
                    src="/landing_page/kids_in_classroom.jpg"
                    alt="Students engaged in learning at Newton Imperial Education"
                    className="w-full h-auto object-cover"
                    style={{ 
                      aspectRatio: '3/1', 
                      maxHeight: '700px',
                      objectPosition: 'center 20%'
                    }}
                  />
                  
                  {/* Subtle overlay for branding */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;