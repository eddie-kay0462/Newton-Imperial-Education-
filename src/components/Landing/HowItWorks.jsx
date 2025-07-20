import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Check your eligibility",
      description: "Ensure you meet the age, academic, and English proficiency requirements for your desired course.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      )
    },
    {
      number: 2,
      title: "Application process",
      description: "Follow our easy online application process and take the first step toward an unforgettable experience.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      )
    },
    {
      number: 3,
      title: "Secure your spot",
      description: "Pay the programme deposit to secure your place. We encourage early enrolment as places are limited and in high demand.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      number: 4,
      title: "Receive hands-on guidance",
      description: "Our team will then guide you through every step leading up to your programme's start date, including any required documentation and full payment.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24" style={{ backgroundColor: '#F0F4F9' }}>
      <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)' }}>
              How It Works
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1rem)' }}>
              Our streamlined process makes it easy to get started with your research journey
            </p>
          </div>

          {/* Vertical Stepper */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical dotted line */}
              <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-0.5 border-l-2 border-dotted border-gray-600"></div>
              
              {/* Steps */}
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                    {/* Step Number */}
                    <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 lg:mr-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F2A44', border: '2px solid #0F2A44' }}>
                        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Step Card */}
                    <div className="flex-1 bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <div className="bg-[#0F2A44] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Ready to Start Your Research Journey?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of students who have already begun their path to academic excellence
              </p>
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base lg:text-lg"
                style={{ backgroundColor: '#766542' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#8a7a5a'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#766542'}
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