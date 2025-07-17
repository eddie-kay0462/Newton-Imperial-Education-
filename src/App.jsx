import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {
  HeroSection,
  WhyChooseUs,
  VisionMission,
  OurPrograms,
  MentorsFrom,
  SuccessStories,
  HowItWorks,
  CallToAction
} from './components/Landing';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <VisionMission />
      <OurPrograms />
      <MentorsFrom />
      <SuccessStories />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App; 