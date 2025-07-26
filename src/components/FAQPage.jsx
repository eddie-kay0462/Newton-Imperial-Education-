import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Newton Imperial Education (NIE)?",
      answer: "Newton Imperial Education (NIE) is an educational platform offering online and in-person programs designed to help high school and college students prepare for university, explore career paths, and develop advanced skills. Our programs range from university preparation courses to subject-specific learning and research-focused mentorship with PhD candidates and leading academics from top universities like Oxford, Cambridge, MIT, Harvard, Stanford, Caltech, Imperial College, and more."
    },
    {
      question: "How do I know which program is right for me?",
      answer: "We offer a wide range of programs that cater to different needs, from university preparation to career exploration and subject-specific deep dives. If you're unsure which program is best suited to your needs, we recommend reviewing the program descriptions on our website. You can also contact our admissions team, who are happy to help guide you in choosing the right fit based on your goals, academic interests, and future aspirations."
    },
    {
      question: "How do I apply to a program?",
      answer: "To apply for a program, simply visit our application page, select the program you're interested in, and complete the online application form. Once your application is submitted, our team will review it and, if necessary, invite you to a competitive interview to assess your eligibility. If successful, you'll receive an admission offer."
    },
    {
      question: "What is the interview process like?",
      answer: "The interview is an essential part of the selection process, ensuring that the program is a good fit for both you and NIE. It will typically be a 30-minute online video interview, where you'll discuss your academic background, goals, and motivations for joining the program. The interviewer may also ask you to reflect on your interests and how the program aligns with your future ambitions."
    },
    {
      question: "How competitive is the application process?",
      answer: "While the application process is competitive, we're looking for motivated students who are passionate about learning and willing to challenge themselves. Our goal is to select students who will thrive in the program and gain the most from it. Keep in mind that your application, including your interview performance, will play a key role in our decision-making process."
    },
    {
      question: "What happens if I'm accepted into the program?",
      answer: "If you're accepted, you'll receive an official admission offer, which will include details about your program, payment options, and important dates. To secure your place, you'll need to accept the offer and make a 50% deposit of the total program fee. Once this is confirmed, you'll receive additional information on preparation materials and other key details to get ready for the program."
    },
    {
      question: "What is included in the program fee?",
      answer: "The program fee typically includes: Access to program materials (e.g., lessons, seminars, projects), mentorship and tutoring sessions (depending on the program). For in-person programs, it may also include accommodation, meals, and cultural activities. A detailed breakdown of the fees for each program is available on our website."
    },
    {
      question: "What payment options do you offer?",
      answer: "We offer a variety of payment options: 50% deposit required to confirm your place in the program, with the remaining 50% due one month before the program starts. We accept payments via credit card, bank transfer, or online payment systems. Payment plans are available upon request, allowing you to pay in installments."
    },
    {
      question: "Do I need to travel for the in-person summer programs?",
      answer: "Yes, our summer in-person programs are held in prestigious locations like Oxford and Cambridge. You will need to travel to these locations for the 2-week immersive experience. We will provide accommodation and meals (if included in your program) as well as information about transportation options to help with your planning."
    },
    {
      question: "What should I do to prepare before the program starts?",
      answer: "Once you've been admitted to the program, you will receive pre-program materials such as reading lists, study guides, or introductory videos. For online programs, ensure you have access to a reliable computer, internet connection, and any software that may be required. For in-person programs, we'll send you details about accommodation and a schedule to help you prepare for your time at Oxford or Cambridge."
    },
    {
      question: "Can I apply for multiple programs at once?",
      answer: "Yes! You can apply for multiple programs, but keep in mind that you can only participate in one program at a time. If you're accepted into more than one program, you will need to select the one that best aligns with your goals and schedule. You can contact our admissions team for guidance if you need assistance making a decision."
    },
    {
      question: "Are there any scholarships or financial aid available?",
      answer: "We offer a limited number of scholarships and financial aid options to students based on merit and need. We provide 100% scholarship opportunities for deserving students. Our financial aid team works with families to ensure that cost is not a barrier to accessing our programs. You can find more information about scholarships on our website or contact our team directly to discuss your eligibility."
    },
    {
      question: "What happens if I cannot attend after I've paid?",
      answer: "We understand that sometimes unforeseen circumstances arise. If you need to cancel or defer your program, please refer to our Refund Policy. Generally, deposits are non-refundable but can be applied to future programs if you need to reschedule. Please reach out to our team as soon as possible if you are unable to attend, and we will do our best to assist you."
    },
    {
      question: "Can I get a certificate after completing the program?",
      answer: "Yes, all participants will receive a certificate of completion upon successfully finishing the program. This certificate can be used for university applications, internships, or other academic and career opportunities. Some programs, especially the NIE Research Scholar Program, may also offer research credentials or opportunities to publish your work."
    },
    {
      question: "How can I stay connected with NIE after completing the program?",
      answer: "Once you've completed the program, we invite you to join our alumni network. As part of the NIE community, you'll have access to ongoing networking events, career advice, and mentorship opportunities. We also encourage you to stay engaged through our social media channels and newsletter."
    },
    {
      question: "Can parents be involved in the process?",
      answer: "Absolutely! We understand the importance of family involvement in educational decisions. Parents are welcome to attend the interview (if necessary) and can reach out to our team for guidance throughout the application process. Additionally, we provide updates on your child's progress and achievements during the program."
    },
    {
      question: "Who can apply for our programs?",
      answer: "Our programs are designed for ambitious students aged 14-18 who are passionate about research and academic excellence. We welcome students from all academic backgrounds and nationalities. Whether you're a high school student looking to explore research opportunities or preparing for university applications, our programs are tailored to meet your needs."
    },
    {
      question: "Do I need prior research experience?",
      answer: "No prior research experience is required! Our programs are designed to accommodate students at all levels, from complete beginners to those with some research background. Our expert mentors will guide you through every step of the research process, teaching you the necessary skills and methodologies along the way."
    },
    {
      question: "How are mentors selected?",
      answer: "Our mentors are carefully selected PhD candidates and professors from world-renowned universities including Oxford, Cambridge, Harvard, MIT, Stanford, and Princeton. They undergo a rigorous selection process based on their research expertise, teaching abilities, and commitment to student mentorship. Each mentor is matched with students based on research interests and academic goals."
    },
    {
      question: "What subjects are available?",
      answer: "We offer research opportunities across a wide range of subjects including but not limited to: STEM fields (Biology, Chemistry, Physics, Mathematics, Computer Science, Engineering), Social Sciences (Psychology, Economics, Political Science, Sociology), Humanities (Literature, History, Philosophy, Languages), and Business Studies. If you have a specific area of interest, we likely have a mentor who can guide you in that field."
    },
    {
      question: "What is the time commitment for research programs?",
      answer: "Our research programs typically require 6-10 hours per week over an 8-week period. This includes one-on-one mentoring sessions (usually 1-2 hours per week), independent research work, reading assignments, and writing your research paper. The schedule is flexible and can be adjusted to accommodate your school commitments and time zone."
    },
    {
      question: "Can I work on a research topic of my choice?",
      answer: "Absolutely! In our Individual Research Program, you have the flexibility to choose your own research topic. Our mentors will work with you to refine your research question and develop a feasible project. For students who prefer more structure, we also offer Topic-Focused Programs with pre-designed research areas that have been curated based on popular demand."
    },
    {
      question: "Will my research be published after the program?",
      answer: "For most programs, we don't guarantee publication, but we provide resources and guidance if you're interested in pursuing publication. However, our Premium Research & Publication Program is specifically designed to support students through the entire publishing process. We help students explore opportunities with undergraduate science journals, high school science journals, and relevant conferences."
    },
    {
      question: "Can I ask my research mentor for a letter of recommendation?",
      answer: "Yes, you can absolutely ask your mentor for a letter of recommendation! At the end of each program, mentors provide grades and evaluations for all students. Many mentors gain unique insights into their students' academic abilities and are often willing to write recommendation letters. However, like any academic mentor, they're not required to do so and will assess your performance during the program when making their decision."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-48 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#0F2A44] to-[#1e3a5f]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A44]/20 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our programs, application process, and what to expect
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-25">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-6 h-6 text-primary-600 transform transition-transform duration-300 ${
                            openQuestion === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-25">
        <div className="w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Have More Questions?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              If you couldn't find what you were looking for, feel free to contact us directly or schedule a call with our team. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:shadow-lg text-white"
                style={{ backgroundColor: '#0F2A44' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1A3659'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0F2A44'}
              >
                Apply Now
              </a>
              <a
                href="mailto:hello@newtonimperial.education"
                className="inline-flex items-center px-8 py-4 border-2 border-[#0F2A44] text-[#0F2A44] font-semibold rounded-full transition-all duration-300 hover:bg-[#0F2A44] hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage; 
