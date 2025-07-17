import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Apply",
      description: "Submit your application and research interests"
    },
    {
      number: 2,
      title: "Match with Mentor",
      description: "Get paired with an expert researcher"
    },
    {
      number: 3,
      title: "Start Research",
      description: "Begin your research project with guidance"
    },
    {
      number: 4,
      title: "Present & Publish",
      description: "Share your findings and get published"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
        </div>

        <div className="relative">
          {/* Connecting lines container */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Step circle */}
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <span className="text-primary-700 font-bold text-xl">{step.number}</span>
                </div>
                
                {/* Step content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 