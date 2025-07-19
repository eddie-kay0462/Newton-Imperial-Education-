import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CounterAnimation from './CounterAnimation.jsx';

const MentorsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const institutions = [
    {
      name: "Oxford University",
      logo: "/school_logos/oxford_logo.png",
      alt: "Oxford University Logo",
      description: "Founded in 1096, the world's second-oldest university",
      stats: "Ranked #1 in World University Rankings 2024"
    },
    {
      name: "University of Cambridge",
      logo: "/school_logos/cambridge_logo.png",
      alt: "Cambridge University Logo",
      description: "Established in 1209, one of the world's oldest universities",
      stats: "Ranked #2 in World University Rankings 2024"
    },
    {
      name: "Princeton University",
      logo: "/school_logos/princeton_logo.png",
      alt: "Princeton University Logo",
      description: "Founded in 1746, prestigious Ivy League institution",
      stats: "Ranked #1 in US News National Universities 2024"
    },
    {
      name: "Harvard University",
      logo: "/school_logos/harvard_logo.png",
      alt: "Harvard University Logo",
      description: "Established in 1636, America's oldest university",
      stats: "Ranked #2 in US News National Universities 2024"
    },
    {
      name: "Massachusetts Institute of Technology",
      logo: "/school_logos/mit_logo.jpg",
      alt: "MIT Logo",
      description: "Founded in 1861, world leader in science and technology",
      stats: "Ranked #1 in Engineering & Technology 2024"
    },
    {
      name: "Stanford University",
      logo: "/school_logos/stanford_logo.png",
      alt: "Stanford University Logo",
      description: "Founded in 1885, innovation hub in Silicon Valley",
      stats: "Ranked #3 in World University Rankings 2024"
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(institutions.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentInstitutions = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return institutions.slice(startIndex, startIndex + itemsPerSlide);
  };

  const mentors = [
    {
      name: "Dr. Sarah Chen",
      institution: "Oxford University",
      field: "Computer Science",
      credentials: "PhD in Computer Science, Oxford University",
      achievements: "Published 25+ papers in top-tier conferences, Former Google Research Scientist",
      image: "/mentors/sarah-chen.jpg"
    },
    {
      name: "Dr. Michael Rodriguez",
      institution: "Cambridge University",
      field: "Physics",
      credentials: "PhD in Theoretical Physics, Cambridge University",
      achievements: "CERN Research Fellow, 15+ publications in Nature and Science",
      image: "/mentors/michael-rodriguez.jpg"
    },
    {
      name: "Dr. Emily Watson",
      institution: "Harvard University",
      field: "Economics",
      credentials: "PhD in Economics, Harvard University",
      achievements: "Former IMF Economist, Published in American Economic Review",
      image: "/mentors/emily-watson.jpg"
    },
    {
      name: "Dr. James Kim",
      institution: "MIT",
      field: "Engineering",
      credentials: "PhD in Mechanical Engineering, MIT",
      achievements: "NASA Research Fellow, 20+ patents, IEEE Fellow",
      image: "/mentors/james-kim.jpg"
    },
    {
      name: "Dr. Lisa Thompson",
      institution: "Stanford University",
      field: "Biology",
      credentials: "PhD in Molecular Biology, Stanford University",
      achievements: "NIH Grant Recipient, 30+ publications in Cell and Nature",
      image: "/mentors/lisa-thompson.jpg"
    },
    {
      name: "Dr. David Park",
      institution: "Princeton University",
      field: "Mathematics",
      credentials: "PhD in Mathematics, Princeton University",
      achievements: "Fields Medal Nominee, Clay Mathematics Institute Fellow",
      image: "/mentors/david-park.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Meet Our World-Class Mentors
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Learn from PhD candidates and professors from the world's most prestigious universities
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Stats */}
      <section className="py-16 lg:py-20 bg-gray-25">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Our Mentors' Credentials
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Numbers that speak to the quality and expertise of our mentor network
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <CounterAnimation 
                  targetValue={120} 
                  suffix="+" 
                  duration={2000}
                  className="text-4xl lg:text-5xl font-bold text-[#0F2A44] mb-4"
                />
                <div className="text-lg text-gray-600 font-medium">PhD Mentors</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <CounterAnimation 
                  targetValue={500} 
                  suffix="+" 
                  duration={2000}
                  className="text-4xl lg:text-5xl font-bold text-[#0F2A44] mb-4"
                />
                <div className="text-lg text-gray-600 font-medium">Research Papers Published</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <CounterAnimation 
                  targetValue={50} 
                  suffix="+" 
                  duration={2000}
                  className="text-4xl lg:text-5xl font-bold text-[#0F2A44] mb-4"
                />
                <div className="text-lg text-gray-600 font-medium">Research Grants</div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
                                    <CounterAnimation 
                      targetValue={100} 
                      suffix="%" 
                      duration={2000}
                      className="text-4xl lg:text-5xl font-bold text-[#0F2A44] mb-4"
                    />
                <div className="text-lg text-gray-600 font-medium">Complete Program Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Featured Mentors
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Meet some of our distinguished mentors who are actively guiding students
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {mentors.map((mentor, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                    <p className="text-[#0F2A44] font-semibold mb-1">{mentor.field}</p>
                    <p className="text-gray-600 text-sm">{mentor.institution}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Credentials</h4>
                      <p className="text-gray-600 text-sm">{mentor.credentials}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                      <p className="text-gray-600 text-sm">{mentor.achievements}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="py-16 lg:py-20 bg-gray-25">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                Our Partner Institutions
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We collaborate with the world's most prestigious universities
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-7xl mx-auto">
              {/* Institutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {getCurrentInstitutions().map((institution, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <div className="text-center mb-6">
                      <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                        <img 
                          src={institution.logo} 
                          alt={institution.alt}
                          className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{institution.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{institution.description}</p>
                      <p className="text-[#0F2A44] font-semibold text-sm">{institution.stats}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center items-center mt-12 space-x-8">
                {/* Left Arrow */}
                <button 
                  onClick={prevSlide}
                  className="w-16 h-16 rounded-full bg-white border-2 border-[#0F2A44] flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Progress Indicators */}
                <div className="flex space-x-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-[#B8A67A] w-4' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button 
                  onClick={nextSlide}
                  className="w-16 h-16 rounded-full bg-white border-2 border-[#0F2A44] flex items-center justify-center hover:bg-[#0F2A44] hover:shadow-md transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 text-[#0F2A44] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a]">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Ready to Learn from the Best?
            </h2>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Join our programs and get mentored by world-class researchers from top universities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#0F2A44] bg-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg"
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
              >
                Apply Now
              </a>
              <Link 
                to="/"
                className="inline-block text-white border-2 border-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-[#0F2A44] text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentorsPage; 