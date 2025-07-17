import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import VisionMission from './components/VisionMission.jsx';
import OurPrograms from './components/OurPrograms.jsx';
import MentorsFrom from './components/MentorsFrom.jsx';
import SuccessStories from './components/SuccessStories.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';

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