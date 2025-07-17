import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {
  HeroSection,
  WhyChooseUs,
  VisionMission,
  OurPrograms,
  OurStudents,
  MentorsFrom,
  MentorInstitutions,
  SuccessStories,
  HowItWorks,
  CallToAction
} from './components/Landing';
import ResearchScholarPrograms from './components/ResearchScholarPrograms.jsx';
import UniversityPrepCourse from './components/UniversityPrepCourse.jsx';
import CareerExplorationPathways from './components/CareerExplorationPathways.jsx';
import LeadershipPersonalDevelopment from './components/LeadershipPersonalDevelopment.jsx';
import IntensivePrograms from './components/IntensivePrograms.jsx';
import SummerPrograms from './components/SummerPrograms.jsx';
import ApplicationForm from './components/ApplicationForm.jsx';

// Home page component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <VisionMission />
      <OurPrograms />
      <OurStudents />
      <MentorsFrom />
      <MentorInstitutions />
      <SuccessStories />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/research-scholar-programs" element={<ResearchScholarPrograms />} />
      <Route path="/university-prep-course" element={<UniversityPrepCourse />} />
      <Route path="/career-exploration-pathways" element={<CareerExplorationPathways />} />
      <Route path="/leadership-personal-development" element={<LeadershipPersonalDevelopment />} />
      <Route path="/intensive-programs" element={<IntensivePrograms />} />
      <Route path="/summer-programs" element={<SummerPrograms />} />
      <Route path="/apply" element={<ApplicationForm />} />
    </Routes>
  );
}

export default App; 