import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Statistics */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-lg text-gray-600">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">75+</div>
                <div className="text-lg text-gray-600">Research Papers</div>
              </div>
            </div>
          </div>

          {/* Right side - Call to Action */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Are You the Next Newton Scholar?
            </h2>
            
            <p className="text-xl text-gray-600">
              Applications are open for Fall 2025 Cohort.
            </p>
            
            <div className="pt-4">
              <button className="btn-primary text-lg px-8 py-4">
                Start Your Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 