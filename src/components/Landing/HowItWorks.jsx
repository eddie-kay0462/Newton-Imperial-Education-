import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Apply"
    },
    {
      number: 2,
      title: "Match with Mentor"
    },
    {
      number: 3,
      title: "Start Research"
    },
    {
      number: 4,
      title: "Present & Publish"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gray-25">
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our streamlined process makes it easy to get started with your research journey
            </p>
          </div>

          {/* Horizontal Timeline Design */}
          <div className="relative max-w-7xl mx-auto">
            {/* Horizontal Timeline Container */}
            <div className="relative">
              {/* Horizontal connecting line */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 z-0"></div>
              
              {/* Horizontal Timeline Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
                    {/* Step Number Circle */}
                    <div className="inline-flex items-center justify-center relative mb-8">
                      {/* Step Number Circle */}
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300" style={{ backgroundColor: '#0F2A44' }}>
                        <span className="text-2xl lg:text-3xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="bg-white rounded-2xl p-8 lg:p-10 hover:shadow-md transition-all duration-300 flex flex-col justify-center min-h-[120px] lg:min-h-[140px]">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#0F2A44] leading-tight" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 lg:p-16">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Ready to Start Your Research Journey?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of students who have already begun their path to academic excellence
              </p>
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg"
                style={{ backgroundColor: '#0F2A44' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0F2A44'}
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 