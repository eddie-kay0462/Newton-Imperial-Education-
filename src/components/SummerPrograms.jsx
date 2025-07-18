import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const SummerPrograms = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const program = {
    title: "Summer In-Person Program",
    duration: "2 weeks",
    price: "£9,000",
    status: "(Future Program)",
    overview: "This in-person program will take place during the summer in prestigious locations like **CAMBRIDGE** and **OXFORD**, offering a mix of academic workshops and cultural engagement. Experience world-class education in historic settings while building lifelong connections with peers from around the globe.",
    format: "Hands-on workshops in **OXFORD** and **CAMBRIDGE** historical laboratories and libraries, academic seminars, cultural excursions, and networking with university faculty.",
    highlights: [
      "Experience life on the best university campus.",
      "Build a network with fellow students from around the world.",
              "Participate in exclusive lectures and activities at **CAMBRIDGE** and **OXFORD**."
    ]
  };

  const activities = [
    {
      title: "Historical Laboratories",
      description: "Hands-on workshops in Oxford and Cambridge's world-renowned historical laboratories",
      icon: "🔬"
    },
    {
      title: "Academic Libraries",
      description: "Access to prestigious libraries with centuries of academic knowledge and resources",
      icon: "📚"
    },
    {
      title: "Cultural Excursions",
      description: "Explore the rich history and culture of Cambridge and Oxford beyond academics",
      icon: "🏛️"
    },
    {
      title: "Faculty Networking",
      description: "Connect with leading university faculty and researchers in intimate settings",
      icon: "👥"
    },
    {
      title: "Academic Seminars",
      description: "Participate in exclusive academic seminars led by world-class professors",
      icon: "🎓"
    },
    {
      title: "Campus Life",
      description: "Experience authentic university life in historic Cambridge and Oxford settings",
      icon: "🏫"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Summer In-Person Programs
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Immersive summer learning experiences at prestigious <span className="font-black uppercase">Cambridge</span> and <span className="font-black uppercase">Oxford</span> locations
            </p>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Program Overview
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              An exclusive opportunity to experience academic excellence in historic <span className="font-black uppercase">Cambridge</span> and <span className="font-black uppercase">Oxford</span>
            </p>
          </div>

          {/* Program Details Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {program.duration}
                  </div>
                  <div className="flex items-center text-primary-600 font-semibold">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    {program.price}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4 italic">
                  {program.status}
                </p>
                <p className="text-gray-700 mb-6">
                  {program.overview}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Format:</h4>
                  <p className="text-gray-700">{program.format}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Program Highlights:</h4>
                <ul className="space-y-3">
                  {program.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Express Interest
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Program Activities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in world-class academic experiences at Cambridge and Oxford
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience <span className="font-black uppercase">Cambridge</span> and <span className="font-black uppercase">Oxford</span>?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join this exclusive summer program and immerse yourself in centuries of academic excellence
          </p>
          <a 
            href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SummerPrograms; 