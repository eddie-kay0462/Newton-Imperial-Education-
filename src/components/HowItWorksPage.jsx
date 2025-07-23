import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const HowItWorksPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      number: 1,
      title: "Choose Your Program",
      subtitle: "Explore Our Programs",
      description: "Start by browsing through our variety of online and in-person programs. Whether you're interested in university preparation, specific subjects like AI or Engineering, or want to dive into one of our NIE Research Scholar Programs, we have something to suit your goals.",
      details: [
        {
          type: "University Prep",
          description: "Focused on building the essential skills for university success."
        },
        {
          type: "Subject-Specific Courses",
          description: "Including subjects like Coding, Medicine, Economics, and more."
        },
        {
          type: "Research Programs",
          description: "Work 1-on-1 with PhD candidates and top researchers."
        }
      ],
      note: "If you're unsure which program best fits your needs, feel free to reach out to our team for guidance or attend one of our program info sessions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Submit Your Application",
      subtitle: "Complete the Application Form",
      description: "Once you've chosen your program, fill out the online application form. Be sure to include:",
      requirements: [
        "Your personal information (name, contact details)",
        "Your academic background (current school/college and grades)",
        "Your program of interest"
      ],
      note: "You will also need to answer a few questions related to your academic interests and goals to help us understand your motivation and suitability for the program.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Competitive Interview",
      subtitle: "Prepare for the Interview",
      description: "After reviewing your application, our admissions team will invite you for a competitive interview. The interview is an essential part of the selection process, as we want to ensure that you're a good fit for the program and that the program meets your needs.",
      details: [
        {
          type: "Interview Format",
          description: "The interview will be conducted online via video call. Expect to discuss your goals, interests, and why you want to pursue the program."
        },
        {
          type: "Preparation Tips",
          description: "Review the program details, reflect on your academic interests, and be ready to ask questions about how the program can help you achieve your goals."
        }
      ],
      whatHappensNext: "Following the interview, you will receive feedback on your application. If successful, you will be extended an admission offer to join your chosen program.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Admission Offer & Acceptance",
      subtitle: "Review Your Offer",
      description: "If you've been selected for the program, we'll send you an official admission offer. The offer will include details such as:",
      requirements: [
        "The program start date",
        "Program fees and payment options",
        "Terms and conditions of the program"
      ],
      acceptingOffer: {
        title: "Accepting the Offer",
        description: "To secure your spot, you'll need to accept the offer and make a 50% deposit of the total program fee."
      },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 5,
      title: "Payment",
      subtitle: "Pay the Deposit",
      description: "Once you've accepted your offer, you'll need to pay a 50% deposit to confirm your place in the program. This deposit is a part of the total fee and is required to finalize your enrollment. The remaining balance is due prior to the program start date.",
      paymentDetails: [
        {
          type: "Payment Methods",
          description: "We accept various payment methods, including credit card, bank transfer, and online payment systems."
        },
        {
          type: "Payment Plan", 
          description: "If needed, we offer payment plans to make the process easier. Contact our admissions team for more details."
        }
      ],
      finalPayment: {
        title: "Final Payment",
        description: "The remaining 50% balance is due one month before the program start date. You'll receive a reminder with instructions on how to pay the final balance."
      },
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 text-heading text-white" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
              How It Works
            </h1>
            <p className="text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto">
              At Newton Imperial Education (NIE), we want to make the process of enrolling in our programs as simple and transparent as possible. Here's a step-by-step guide to help you understand how everything works, from choosing the right program to preparing for your first day.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 bg-gray-25">
        {/* Steps Section */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
              <div className="flex items-start space-x-6 mb-8">
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#0F2A44] rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                
                {/* Step Header */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
                    Step {step.number}: {step.title}
                  </h2>
                  <h3 className="text-xl font-semibold text-[#0F2A44] mb-4">
                    {step.subtitle}
                  </h3>
                </div>
                
                {/* Icon */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-primary-100 rounded-xl items-center justify-center">
                  <div className="text-primary-600">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {step.description}
                </p>

                {/* Requirements/Details Lists */}
                {step.requirements && (
                  <ul className="space-y-3">
                    {step.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Program Details */}
                {step.details && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{detail.type}</h4>
                        <p className="text-gray-600 text-sm">{detail.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Payment Details */}
                {step.paymentDetails && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {step.paymentDetails.map((payment, payIndex) => (
                      <div key={payIndex} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{payment.type}</h4>
                        <p className="text-gray-600 text-sm">{payment.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Accepting Offer */}
                {step.acceptingOffer && (
                  <div className="bg-primary-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{step.acceptingOffer.title}</h4>
                    <p className="text-gray-700">{step.acceptingOffer.description}</p>
                  </div>
                )}

                {/* Final Payment */}
                {step.finalPayment && (
                  <div className="bg-primary-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{step.finalPayment.title}</h4>
                    <p className="text-gray-700">{step.finalPayment.description}</p>
                  </div>
                )}

                {/* What Happens Next */}
                {step.whatHappensNext && (
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What Happens Next</h4>
                    <p className="text-gray-700">{step.whatHappensNext}</p>
                  </div>
                )}

                {/* Note */}
                {step.note && (
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                    <p className="text-gray-700 italic">{step.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 lg:mt-24">
          <div className="bg-[#0F2A44] text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Nocturne Serif, Georgia, serif', fontWeight: 200, fontStyle: 'normal' }}>
              Ready to Begin Your Journey?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your application today and join thousands of students who have transformed their academic futures with Newton Imperial Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#0F2A44] font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
              >
                Start Application
              </a>
              <Link 
                to="/#programs"
                className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-colors"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage; 