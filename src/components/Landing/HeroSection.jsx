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
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
        {/* Hero Content */}
        <header className="pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-40 items-center max-w-screen-2xl mx-auto">
            {/* Left Side - Main Content */}
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 font-semibold text-sm animate-pulse hover:animate-none transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></span>
                  Applications are Open for our upcoming cohorts
                </div>
                
                <h1 id="hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.75rem, 5vw, 4rem)' }}>
                  Research Opportunities
                  <br />
                  <span style={{ color: '#000000' }}>
                    with world's top 1% researchers
                  </span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)' }}>
                  Connect with top-tier researchers from <span className="font-black uppercase">Cambridge</span>, <span className="font-black uppercase">Oxford</span>, <span className="font-black uppercase">MIT</span>, and <span className="font-black uppercase">Harvard</span>. 
                  Transform your academic journey with world-class mentorship and research opportunities.
                </p>
              </div>
            </div>

            {/* Right Side - Stats and CTA */}
            <aside className="space-y-8">
              {/* Trust Indicators - Now on top */}
              <div ref={statsRef} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-100">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)' }}>
                    Trusted by Students Worldwide
                  </h3>
                </div>
                
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#0F2A44] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm sm:text-base text-gray-700 font-medium" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Research Papers</div>
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0F2A44]" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)' }}>{researchPapers}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#0F2A44] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm sm:text-base text-gray-700 font-medium" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Research Mentors</div>
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0F2A44]" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)' }}>{researchMentors}</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#0F2A44] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm sm:text-base text-gray-700 font-medium" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Complete Program Success</div>
                    </div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0F2A44]" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)' }}>{successRate}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Now below stats */}
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-500 ease-in-out hover:shadow-lg text-center block group relative overflow-hidden"
                  style={{ 
                    backgroundColor: '#0F2A44', 
                    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                    background: 'linear-gradient(135deg, #0F2A44 0%, #0F2A44 100%)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #766542 0%, #8B7355 100%)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #0F2A44 0%, #0F2A44 100%)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Apply Now
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="/#programs"
                  className="w-full border-2 border-gray-300 hover:border-[#0F2A44] text-gray-700 hover:text-[#0F2A44] font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:shadow-lg text-center block hover:bg-gray-50 group"
                  style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Programs
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </aside>
          </div>
        </header>

        {/* Hero Image Section */}
        <div className="relative pb-16 lg:pb-24">
          <div className="relative max-w-screen-2xl mx-auto">
                         <div className="relative rounded-3xl overflow-hidden shadow-sm">
               <img 
                 src="/landing_page/kids_in_classroom.png"
                 alt="Students engaged in learning at Newton Imperial Education"
                 className="w-full h-auto object-cover"
                 style={{ 
                   aspectRatio: '2.2/1', 
                   maxHeight: '600px',
                   objectPosition: 'center 20%'
                 }}
               />
              
              {/* Subtle overlay for branding */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating achievement badges */}
            <div className="absolute -top-8 -left-8 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a] rounded-3xl p-6 shadow-lg hidden lg:block transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-white">Top 1%</div>
                <div className="text-sm text-white/90 font-medium">Global Universities</div>
                <div className="w-12 h-1 bg-[#B8A67A] rounded-full mx-auto mt-3"></div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#B8A67A] to-[#C4B28A] rounded-3xl p-6 shadow-lg hidden lg:block transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-white">100%</div>
                <div className="text-sm text-white/90 font-medium">Scholarship Available</div>
                <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mt-3"></div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;