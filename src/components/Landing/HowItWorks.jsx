import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Apply",
      description: "Submit your application and research interests through our streamlined process",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Match with Mentor",
      description: "Get paired with an expert researcher who matches your interests and goals",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Start Research",
      description: "Begin your research project with personalized guidance and support",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Present & Publish",
      description: "Share your findings with the community and get published in academic journals",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
              <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our streamlined process makes it easy to get started with your research journey
            </p>
          </div>

          <div className="relative">
            {/* Connecting lines container */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 z-0"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* Step circle */}
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    {step.icon}
                  </div>
                  
                  {/* Step content */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
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
                className="inline-block text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
                style={{ backgroundColor: '#8A774A' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#8A774A'}
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