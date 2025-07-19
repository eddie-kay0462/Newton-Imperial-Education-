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
      question: "Who can apply for the programme?",
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
      question: "What is the time commitment?",
      answer: "Our programs typically require 6-10 hours per week over an 8-week period. This includes one-on-one mentoring sessions (usually 1-2 hours per week), independent research work, reading assignments, and writing your research paper. The schedule is flexible and can be adjusted to accommodate your school commitments and time zone."
    },
    {
      question: "What if I can't commit to these times?",
      answer: "We understand that students have varying schedules and commitments. Our programs are designed to be flexible. You can work with your mentor to establish a schedule that works for both of you. If you need to adjust your commitment level or take breaks during the program, please communicate with your learning coordinator who will help accommodate your needs."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes! Upon successful completion of your program, you will receive a certificate of completion from Newton Imperial Education. Additionally, many of our programs offer academic credit options through our partnership with UC San Diego Extended Studies, where you can earn 3 post-baccalaureate credits."
    },
    {
      question: "How do I apply?",
      answer: "The application process is straightforward: 1) Fill out our online application form, 2) Submit a brief statement of your research interests and academic goals, 3) Provide any relevant academic transcripts or references, 4) Complete a brief interview with our admissions team. Once accepted, you'll be matched with a mentor and can begin your research journey."
    },
    {
      question: "Can I work on a research topic of my choice?",
      answer: "Absolutely! In our Individual Research Program, you have the flexibility to choose your own research topic. Our mentors will work with you to refine your research question and develop a feasible project. For students who prefer more structure, we also offer Topic-Focused Programs with pre-designed research areas that have been curated based on popular demand."
    },
    {
      question: "What support is provided during the programme?",
      answer: "You'll receive comprehensive support throughout your program including: weekly one-on-one mentoring sessions, access to research resources and databases, writing and methodology guidance, peer collaboration opportunities, academic writing workshops, and ongoing support from our learning coordinators. Our goal is to ensure you have everything you need to succeed in your research project."
    },
    {
      question: "What's the difference between the Topic-Focused Research Program and the Individual Research Program?",
      answer: "The Topic-Focused Program offers pre-designed and pre-determined areas of research for students, while the Individual Research Program offers more flexibility in deciding your field and area of interest. The topics in the Topic-Focused Program are designed according to areas that were in high demand for the Individual Research Program, for which spots are extremely competitive. The Topic-Focused Program is ideal for students who want to interact and collaborate with other students while creating their own research paper."
    },
    {
      question: "What is the difference between the Individual Research Program and the Premium Research & Publication Program?",
      answer: "The Premium Research & Publication Program differs from the Individual Research Program in three key ways: 1) It includes publication support for your final research paper, 2) It has a longer duration to allow for more comprehensive research, and 3) It involves almost double the contact hours with your research mentor. This program is perfect for students who want to not only produce but also publish a high-quality research paper in their field of interest."
    },
    {
      question: "Will my research be published after the program?",
      answer: "For most programs, we don't guarantee publication, but we provide resources and guidance if you're interested in pursuing publication. However, our Premium Research & Publication Program is specifically designed to support students through the entire publishing process. We help students explore opportunities with undergraduate science journals, high school science journals, and relevant conferences. You can view published works by our students on our website."
    },
    {
      question: "Can I ask my research mentor for a letter of recommendation?",
      answer: "Yes, you can absolutely ask your mentor for a letter of recommendation! At the end of each program, mentors provide grades and evaluations for all students. Many mentors gain unique insights into their students' academic abilities and are often willing to write recommendation letters. However, like any academic mentor, they're not required to do so and will assess your performance during the program when making their decision."
    },
    {
      question: "Can we only do research in the areas listed?",
      answer: "Not at all! We have mentors across every major academic discipline. If there's a community of researchers working on a topic, we likely have mentors in that area. The list of academic topics on our website is meant to be a sample, not an exhaustive list. We encourage students to explore their specific interests, and we'll work to match you with an appropriate mentor."
    },
    {
      question: "What is the frequency of the programs?",
      answer: "Each program runs at least four times per year, with Spring, Summer, Fall, and Winter sessions. This ensures you can join a program that fits your academic calendar. You can find detailed information about specific dates and application deadlines on our website under the program schedules section."
    },
    {
      question: "How will the one-on-one sessions be scheduled?",
      answer: "Once you're accepted, our learning coordinator will connect you with your research mentor via email or another mutually agreed platform. You and your mentor will then coordinate directly to find a weekly meeting time that works for both of you over the program duration. Your mentor will send calendar invites with personal Zoom links for each session. If you encounter any scheduling issues, our learning coordinators are always available to help."
    },
    {
      question: "What if I want to change my research question late in the program?",
      answer: "If you want to change your research topic during the program, your mentor will work with you to assess whether it's feasible to address the new area in the remaining time. If possible, you'll develop a plan to execute the new research direction. If the change isn't feasible within the timeframe, you can either continue with your original topic or request a program extension. Our learning coordinators are available to help resolve any confusion or concerns."
    },
    {
      question: "How is the research topic chosen? Do I need to know what my topic is in advance?",
      answer: "You don't need to come in with a clearly defined research question, though some students do. We expect your research question to evolve and sharpen as you learn and work with your mentor. Your mentor will guide you toward the most fruitful research direction. Typically, students align on a research question by the end of week 4, which is then refined with your mentor. The remaining four weeks are spent creating a research proposal, first draft, and final research paper."
    },
    {
      question: "What is the academic partnership with UCSD Extended Studies? How do I know if I qualify?",
      answer: "University of California, San Diego Extended Studies offers 3 units of post-baccalaureate credit to students who successfully complete any of our Research Scholar Programs. During your program, you can choose to enroll in the credit program if you want. We'll guide you through the enrollment process, and you'll pay a processing fee to UCSD Extended Studies. Upon completing your program and submitting your final paper, you'll be eligible to receive your transcript and credit units."
    },
    {
      question: "Are there any payment terms I should be aware of?",
      answer: "Yes, we have specific terms and conditions for deposit payments. We offer flexible payment options including full payment upfront or installment plans. Additionally, we provide 100% scholarship opportunities for deserving students based on need and merit. Our financial aid team works with families to ensure that cost is not a barrier to accessing our programs. Please contact our admissions team for detailed information about payment plans and scholarship opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-48 pb-20 lg:pt-56 lg:pb-32 overflow-hidden"
        style={{
          backgroundImage: `url('/FAQ/faq_hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 w-full max-w-none mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md">
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
                <div key={index} className="bg-white border border-gray-200/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
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
                          className={`w-6 h-6 text-primary-600 transform transition-transform duration-200 ${
                            openQuestion === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {openQuestion === index && (
                    <div className="px-8 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
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
              Still Have Questions?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our team is here to help you with any additional questions about our programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://airtable.com/app1ohbxkdWuesC5E/shrntae0DXYXkCcDY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:shadow-lg text-white"
                style={{ backgroundColor: '#0F2A44' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#766542'}
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