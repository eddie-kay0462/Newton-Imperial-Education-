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
  HowItWorks
} from './components/Landing';
import ResearchScholarPrograms from './components/ResearchScholarPrograms.jsx';
import UniversityPrepCourse from './components/UniversityPrepCourse.jsx';
import CareerExplorationPathways from './components/CareerExplorationPathways.jsx';
import LeadershipPersonalDevelopment from './components/LeadershipPersonalDevelopment.jsx';
import IntensivePrograms from './components/IntensivePrograms.jsx';
import SummerPrograms from './components/SummerPrograms.jsx';
import WhyChooseUsPage from './components/WhyChooseUsPage.jsx';
import FAQPage from './components/FAQPage.jsx';
import WhoShouldJoin from './components/WhoShouldJoin.jsx';


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
      <MentorInstitutions />
      <MentorsFrom />
      <SuccessStories />
      <HowItWorks />
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
      <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
      <Route path="/FAQPage" element={<FAQPage />} />
      <Route path="/who-should-join" element={<WhoShouldJoin />} />

    </Routes>
  );
}

export default App; 