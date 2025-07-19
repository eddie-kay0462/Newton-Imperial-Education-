import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Check your eligibility",
      description: "Ensure you meet the age, academic, and English proficiency requirements for your desired course."
    },
    {
      number: 2,
      title: "Application process",
      description: "Follow our easy online application process and take the first step toward an unforgettable experience."
    },
    {
      number: 3,
      title: "Secure your spot",
      description: "Pay the programme deposit to secure your place. We encourage early enrolment as places are limited and in high demand."
    },
    {
      number: 4,
      title: "Receive hands-on guidance",
      description: "Our team will then guide you through every step leading up to your programme's start date, including any required documentation and full payment."
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Steps */}
            <div>
              
              {/* Steps Grid */}
              <div className="grid grid-cols-2 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-white border-2 border-[#0F2A44] rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-[#0F2A44]">{step.number}</span>
                    </div>
                    
                    {/* Step Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <img 
                src="/landing_page/how_it_works.png" 
                alt="How It Works" 
                className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
              />
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