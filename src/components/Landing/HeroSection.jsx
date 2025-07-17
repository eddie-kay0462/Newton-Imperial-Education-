import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-indigo-100/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900">
                Research Opportunities for{' '}
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Brilliant Students
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Join Newton Imperial Scholars and collaborate with top-tier researchers from global universities
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/#programs" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-center text-lg"
              >
                Explore Programs
              </a>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">500+ Students Enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">120+ Research Mentors</span>
              </div>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="/hero_image.png"
                alt="Newton Imperial Education Hero Illustration"
                className="w-full h-auto"
                style={{ 
                  mixBlendMode: 'screen',
                  filter: 'brightness(1.1) contrast(0.9)',
                  background: 'transparent'
                }}
              />
            </div>

            {/* Floating callout boxes */}
            <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl p-6 shadow-2xl" style={{ mixBlendMode: 'normal' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  120+
                </div>
                <div className="text-sm text-gray-700 font-medium">Research Mentors</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl p-6 shadow-2xl" style={{ mixBlendMode: 'normal' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  Top 1%
                </div>
                <div className="text-sm text-gray-700 font-medium">Academic Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;