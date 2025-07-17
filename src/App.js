import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import SuccessStories from './components/SuccessStories';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <SuccessStories />
      <HowItWorks />
      <CallToAction />
    </div>
  );
}

export default App; 