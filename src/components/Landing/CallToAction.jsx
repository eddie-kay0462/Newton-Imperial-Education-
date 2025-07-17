import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          START YOUR JOURNEY TODAY
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have transformed their academic future through our research programs.
        </p>
        <Link 
          to="/apply"
          className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction; 