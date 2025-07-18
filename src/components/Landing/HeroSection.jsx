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

            {/* Right Side - Stats and CTA */}
            <aside className="space-y-8">
              {/* Trust Indicators - Now on top */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Trusted by Students Worldwide
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                                     <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2F5840' }}>
                         <span className="material-icons text-white text-2xl">description</span>
                       </div>
                       <div className="text-sm text-gray-600">Research Papers</div>
                     </div>
                     <div className="text-2xl font-bold text-gray-900">150+</div>
                   </div>
                  
                                     <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#83301C' }}>
                         <span className="material-icons text-white text-2xl">school</span>
                       </div>
                       <div className="text-sm text-gray-600">Research Mentors</div>
                     </div>
                     <div className="text-2xl font-bold text-gray-900">120+</div>
                   </div>
                  
                                     <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1F2212' }}>
                         <span className="material-icons text-white text-2xl">check_circle</span>
                       </div>
                       <div className="text-sm text-gray-600">Success Rate</div>
                     </div>
                     <div className="text-2xl font-bold text-gray-900">97%</div>
                   </div>
                </div>
              </div>

              {/* CTA Buttons - Now below stats */}
              <div className="space-y-4">
                <a 
                  href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base text-center block group"
                  style={{ backgroundColor: '#8A774A' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#8A774A'}
                >
                  <span className="flex items-center justify-center gap-2">
                    Apply Now
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a 
                  href="/#programs"
                  className="w-full border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-base text-center block hover:bg-primary-50 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Programs
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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