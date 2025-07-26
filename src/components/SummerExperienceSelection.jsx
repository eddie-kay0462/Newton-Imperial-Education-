import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const SummerExperienceSelection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              Summer 2026 Experiences
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-6 md:mb-8">
              Choose your immersive summer experience at one of the world's most prestigious universities. 
              Engage with cutting-edge research, learn from renowned academics, and experience life at Oxford or Cambridge.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Select Your Summer Destination
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Both programs offer world-class academic experiences, historic settings, and 
              unparalleled opportunities for personal and intellectual growth.
            </p>
          </div>

          {/* University Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
            
            {/* Cambridge Card */}
            <div className="group h-full">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                  <img 
                    src="/cambridge_pics/kings_college_chapel_cambridge.jpg"
                    alt="King's College Chapel, Cambridge"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  
                  {/* University Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md">
                    <img 
                      src="/school_logos/cambridge_logo.png" 
                      alt="Cambridge Logo" 
                      className="h-6 w-auto"
                    />
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      University of Cambridge
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      Founded 1209 • England
                    </p>
                  </div>
                </div>

                {/* Content - Flex grow to push button to bottom */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                      Cambridge Summer Experience
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Experience academic excellence in the historic city of Cambridge. Engage with world-renowned 
                      faculty, explore cutting-edge research, and walk in the footsteps of Newton, Darwin, and Hawking.
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#B8A67A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Historic college environments and traditions
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#B8A67A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Access to world-class libraries and laboratories
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#B8A67A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Mentorship from Cambridge researchers
                      </div>
                    </div>
                  </div>

                  {/* CTA Button - Always at bottom */}
                  <Link
                    to="/summer-programs/cambridge"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#0F2A44] hover:bg-[#1a3a5a] text-white font-medium rounded-lg transition-all duration-300 group/btn"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Oxford Card */}
            <div className="group h-full">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                  <img 
                    src="/oxford_pics/bodleian_library1.jpg"
                    alt="Bodleian Library, Oxford"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  
                  {/* University Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md">
                    <img 
                      src="/school_logos/oxford_logo.png" 
                      alt="Oxford Logo" 
                      className="h-6 w-auto"
                    />
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      University of Oxford
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      Founded 1096 • England
                    </p>
                  </div>
                </div>

                {/* Content - Flex grow to push button to bottom */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                      Oxford Summer Experience
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Immerse yourself in the oldest English-speaking university in the world. Join a legacy of 
                      scholarship that includes 28 UK Prime Ministers, literary giants, and Nobel laureates.
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#B8A67A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Tutorial system with world-leading academics
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#B8A67A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Medieval architecture and modern facilities
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#B8A67A] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Collegiate tradition and academic excellence
                      </div>
                    </div>
                  </div>

                  {/* CTA Button - Always at bottom */}
                  <Link
                    to="/summer-programs/oxford"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#0F2A44] hover:bg-[#1a3a5a] text-white font-medium rounded-lg transition-all duration-300 group/btn"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 md:mt-20 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Not sure which program is right for you?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Both programs offer exceptional academic experiences. Consider your research interests, 
                preferred learning style, and the unique culture of each institution to make your choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/FAQPage"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 hover:text-[#0F2A44] hover:border-[#0F2A44] font-medium rounded-lg transition-all duration-300"
                >
                  View FAQs
                </Link>
                <a
                  href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#B8A67A] hover:bg-[#C8A56A] text-white font-medium rounded-lg transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SummerExperienceSelection;