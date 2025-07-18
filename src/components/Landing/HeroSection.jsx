import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
        {/* Hero Content */}
        <header className="pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-24 xl:gap-40 items-center max-w-screen-2xl mx-auto">
            {/* Left Side - Main Content */}
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 font-semibold text-sm">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Applications are Open for our upcoming cohorts
                </div>
                
                <h1 id="hero-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                  Research Opportunities
                  <br />
                  <span style={{ color: '#000000' }}>
                    with world's top 1% researchers
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl text-justify">
                  Connect with top-tier researchers from <span className="font-black uppercase">Cambridge</span>, <span className="font-black uppercase">Oxford</span>, <span className="font-black uppercase">MIT</span>, and <span className="font-black uppercase">Harvard</span>. 
                  Transform your academic journey with world-class mentorship and research opportunities.
                </p>
              </div>
            </div>

            {/* Right Side - CTA and Stats */}
            <aside className="space-y-10">
              {/* CTA Buttons */}
              <div className="space-y-4">
                <a 
                  href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base text-center block"
                  style={{ backgroundColor: '#8A774A' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#8A774A'}
                >
                  Apply Now
                </a>
                <a 
                  href="/#programs"
                  className="w-full border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-base text-center block hover:bg-primary-50"
                >
                  Explore Programs
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">Students Enrolled</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">120+</div>
                      <div className="text-sm text-gray-600">Research Mentors</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">97%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </header>

        {/* Hero Image Section */}
        <div className="relative pb-16 lg:pb-24">
          <div className="relative max-w-screen-2xl mx-auto">
                         <div className="relative rounded-3xl overflow-hidden shadow-lg">
               <img 
                 src="/landing_page/kids_in_classroom.png"
                 alt="Students engaged in learning at Newton Imperial Education"
                 className="w-full h-auto object-cover"
                 style={{ aspectRatio: '2.5/1', maxHeight: '500px' }}
               />
              
              {/* Subtle overlay for branding */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating achievement badges */}
            <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 shadow-xl hidden lg:block">
              <div className="text-center">
                <div className="text-xl font-bold mb-1 text-gray-900">Top 1%</div>
                <div className="text-xs text-gray-600 font-medium">Global Universities</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 shadow-xl hidden lg:block">
              <div className="text-center">
                <div className="text-xl font-bold mb-1 text-gray-900">100%</div>
                <div className="text-xs text-gray-600 font-medium">Scholarship Available</div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;