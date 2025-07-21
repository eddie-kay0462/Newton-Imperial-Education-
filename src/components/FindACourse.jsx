import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const teachingFormats = [
  { label: 'Online', value: 'online' },
  { label: 'In Person', value: 'in_person' },
];

const pathways = [
  'Research Scholar Programs',
  'Intensive Programs',
  'Leadership and Personal Development',
  'University Prep Course',
  'Career Exploration and University Pathways',
];

// For demo, assign each subject a random teaching format and pathway
const subjectData = [
  {
    name: 'Engineering',
    overview: 'Engineering is the application of science and math to solve problems and create solutions. It covers fields such as electrical, mechanical, civil, and chemical engineering. Students learn how to design and build systems, structures, and machines.',
    formats: ['online', 'in_person'],
    pathways: ['Research Scholar Programs', 'Intensive Programs'],
  },
  {
    name: 'Medicine',
    overview: 'Medicine involves the study of human health, diseases, and treatments. Students explore anatomy, physiology, pharmacology, and clinical skills necessary for diagnosing and treating patients.',
    formats: ['in_person'],
    pathways: ['Research Scholar Programs'],
  },
  {
    name: 'Mathematics',
    overview: 'Mathematics covers topics such as algebra, calculus, geometry, and statistics. Students develop problem-solving and analytical skills, which are fundamental for careers in engineering, physics, data science, and economics.',
    formats: ['online'],
    pathways: ['Intensive Programs', 'University Prep Course'],
  },
  {
    name: 'Artificial Intelligence (AI)',
    overview: 'AI focuses on creating intelligent machines that can simulate human behavior, including machine learning, neural networks, and robotics. Students learn to design algorithms, systems, and applications for AI technologies.',
    formats: ['online', 'in_person'],
    pathways: ['Intensive Programs', 'Career Exploration and University Pathways'],
  },
  {
    name: 'Biotechnology',
    overview: 'Biotechnology combines biology and technology to develop products and processes that improve lives. Students study genetic engineering, pharmaceuticals, and agricultural innovations.',
    formats: ['in_person'],
    pathways: ['Research Scholar Programs', 'Leadership and Personal Development'],
  },
  {
    name: 'Biology',
    overview: 'Biology is the study of living organisms, including their structure, function, evolution, and ecology. Topics include cellular biology, genetics, and evolution.',
    formats: ['online'],
    pathways: ['Research Scholar Programs', 'University Prep Course'],
  },
  {
    name: 'Chemistry',
    overview: 'Chemistry studies the composition, structure, and properties of matter. It helps students understand chemical reactions, molecular structures, and materials science.',
    formats: ['in_person'],
    pathways: ['Intensive Programs'],
  },
  {
    name: 'Coding',
    overview: 'Coding teaches students how to write software programs, develop websites, and build applications. Topics include programming languages (e.g., Python, JavaScript), algorithms, and data structures.',
    formats: ['online'],
    pathways: ['Career Exploration and University Pathways'],
  },
  {
    name: 'Computer Science',
    overview: 'Computer Science covers a wide range of topics such as software development, databases, algorithms, and systems engineering. It provides students with a foundation for building technology solutions.',
    formats: ['online', 'in_person'],
    pathways: ['Intensive Programs', 'University Prep Course'],
  },
  {
    name: 'Economics',
    overview: 'Economics studies the production, distribution, and consumption of goods and services. Topics include microeconomics, macroeconomics, market analysis, and economic policy.',
    formats: ['online'],
    pathways: ['Career Exploration and University Pathways'],
  },
  {
    name: 'Education',
    overview: 'Education studies the theory and practice of teaching and learning. Topics include pedagogy, curriculum development, educational psychology, and classroom management.',
    formats: ['in_person'],
    pathways: ['Leadership and Personal Development'],
  },
  {
    name: 'Sociology',
    overview: 'Sociology is the study of society, social behavior, institutions, and structures. Students learn how societies are organized, and explore issues such as inequality, culture, and social change.',
    formats: ['online'],
    pathways: ['Career Exploration and University Pathways'],
  },
  {
    name: 'International Relations',
    overview: 'International Relations focuses on the relationships between countries, including diplomacy, international conflict, global governance, and international organizations.',
    formats: ['in_person'],
    pathways: ['Leadership and Personal Development', 'Career Exploration and University Pathways'],
  },
  {
    name: 'Law',
    overview: 'Law studies the legal system, including civil, criminal, constitutional, and international law. Students explore legal theory, case law, and the application of laws to real-world situations.',
    formats: ['online'],
    pathways: ['University Prep Course'],
  },
  {
    name: 'English Literature',
    overview: 'English Literature involves the study of classic and contemporary literature, from poetry to novels. Students analyze themes, styles, and historical contexts of literary works.',
    formats: ['in_person'],
    pathways: ['Leadership and Personal Development'],
  },
  {
    name: 'Philosophy',
    overview: 'Philosophy explores fundamental questions about existence, knowledge, ethics, and reason. Students study key philosophers and philosophical movements that have shaped human thought.',
    formats: ['online'],
    pathways: ['Career Exploration and University Pathways'],
  },
  {
    name: 'Architecture',
    overview: 'Architecture involves the design and construction of buildings and other physical structures. Students explore architectural history, design principles, and the integration of engineering and aesthetics.',
    formats: ['in_person'],
    pathways: ['Intensive Programs'],
  },
  {
    name: 'Philosophy, Politics, and Economics (PPE)',
    overview: 'PPE is an interdisciplinary program that combines the study of philosophy, political science, and economics. It provides students with the tools to analyze political systems, economic theories, and ethical questions.',
    formats: ['online', 'in_person'],
    pathways: ['Career Exploration and University Pathways', 'University Prep Course'],
  },
  {
    name: 'Psychology',
    overview: 'Psychology is the study of human behavior and the mind. Students explore cognitive processes, mental health, emotions, and developmental psychology.',
    formats: ['online'],
    pathways: ['Leadership and Personal Development'],
  },
  {
    name: 'Political Science',
    overview: 'Political Science examines government structures, political behavior, and public policy. Students analyze how political systems operate and influence societies on a national and global scale.',
    formats: ['in_person'],
    pathways: ['Career Exploration and University Pathways'],
  },
  {
    name: 'International Development',
    overview: 'International Development focuses on global development, poverty alleviation, and sustainable development practices. Students explore issues such as human rights, international aid, and economic development.',
    formats: ['online', 'in_person'],
    pathways: ['Career Exploration and University Pathways'],
  },
];

const FindACourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedPathways, setSelectedPathways] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filtering logic
  const filteredSubjects = subjectData.filter((subject) => {
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const matchesName = subject.name.toLowerCase().includes(query);
      const matchesOverview = subject.overview.toLowerCase().includes(query);
      if (!matchesName && !matchesOverview) {
        return false;
      }
    }
    
    // Teaching format filter
    if (selectedFormats.length > 0 && !subject.formats.some(f => selectedFormats.includes(f))) {
      return false;
    }
    // Pathway filter
    if (selectedPathways.length > 0 && !subject.pathways.some(p => selectedPathways.includes(p))) {
      return false;
    }
    // Subject filter
    if (selectedSubjects.length > 0 && !selectedSubjects.includes(subject.name)) {
      return false;
    }
    return true;
  });

  // Handlers
  const handleFormatChange = (value) => {
    setSelectedFormats((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  const handlePathwayChange = (value) => {
    setSelectedPathways((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  const handleSubjectChange = (value) => {
    setSelectedSubjects((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setSelectedFormats([]);
    setSelectedPathways([]);
    setSelectedSubjects([]);
    setSearchQuery('');
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const activeFiltersCount = selectedFormats.length + selectedPathways.length + selectedSubjects.length + (searchQuery.trim() ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-[#0F2A44] to-[#1a3a5a]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Find a Course</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mb-6 md:mb-8">
            Explore our diverse range of courses and discover the perfect fit for your academic journey. Search by name or description, and use filters to narrow your results.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses by name or description..."
                className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 text-sm sm:text-base bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#B8A67A] focus:border-[#B8A67A] outline-none transition-all duration-200 placeholder-gray-500"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-8 md:py-12 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          
          {/* Mobile Filter Toggle Button */}
          <div className="block lg:hidden mb-4 sm:mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Active Search and Results Count */}
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
              {searchQuery && (
                <div className="flex items-center bg-[#0F2A44] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <span className="mr-1 sm:mr-2">Search: "{searchQuery}"</span>
                  <button
                    onClick={clearSearch}
                    className="hover:bg-white hover:bg-opacity-20 rounded-full p-0.5 transition-colors duration-200"
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            
            <div className="text-sm text-gray-600">
              Showing {filteredSubjects.length} course{filteredSubjects.length !== 1 ? 's' : ''}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="ml-4 text-[#0F2A44] hover:underline font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
            
            {/* Filter Sidebar */}
            <aside className={`
              w-full lg:w-80 xl:w-96 bg-gray-50 rounded-xl lg:rounded-2xl shadow-sm lg:shadow-md p-4 sm:p-5 lg:p-6
              ${showFilters ? 'block' : 'hidden'} lg:block
              lg:sticky lg:top-24 lg:h-fit lg:z-10
            `}>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Filter Courses</h2>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-[#0F2A44] hover:underline font-medium lg:hidden"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Teaching Format Filter */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3">Teaching Format</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {teachingFormats.map((format) => (
                    <li key={format.value} className="flex items-center">
                      <input
                        type="checkbox"
                        id={format.value}
                        className="sr-only peer"
                        checked={selectedFormats.includes(format.value)}
                        onChange={() => handleFormatChange(format.value)}
                      />
                      <span
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-400 rounded-sm mr-3 flex items-center justify-center peer-checked:bg-[#0F2A44] peer-checked:border-[#0F2A44] transition-colors duration-150 cursor-pointer"
                        tabIndex={0}
                        role="checkbox"
                        aria-checked={selectedFormats.includes(format.value)}
                        onClick={() => handleFormatChange(format.value)}
                        onKeyDown={e => { if (e.key === ' ' || e.key === 'Enter') handleFormatChange(format.value); }}
                      >
                        {selectedFormats.includes(format.value) && (
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 16 16">
                            <path d="M4 8l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <label htmlFor={format.value} className="text-gray-700 select-none cursor-pointer text-sm sm:text-base">
                        {format.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pathways Filter */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3">Pathways</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {pathways.map((path) => (
                    <li key={path} className="flex items-start">
                      <input
                        type="checkbox"
                        id={path}
                        className="sr-only peer"
                        checked={selectedPathways.includes(path)}
                        onChange={() => handlePathwayChange(path)}
                      />
                      <span
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-400 rounded-sm mr-3 mt-0.5 flex items-center justify-center peer-checked:bg-[#0F2A44] peer-checked:border-[#0F2A44] transition-colors duration-150 cursor-pointer shrink-0"
                        tabIndex={0}
                        role="checkbox"
                        aria-checked={selectedPathways.includes(path)}
                        onClick={() => handlePathwayChange(path)}
                        onKeyDown={e => { if (e.key === ' ' || e.key === 'Enter') handlePathwayChange(path); }}
                      >
                        {selectedPathways.includes(path) && (
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 16 16">
                            <path d="M4 8l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <label htmlFor={path} className="text-gray-700 select-none cursor-pointer text-sm sm:text-base leading-tight">
                        {path}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subjects Filter */}
              <div>
                <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3">Subjects</h3>
                <ul className="space-y-2 sm:space-y-3 max-h-48 sm:max-h-60 lg:max-h-72 overflow-y-auto pr-2">
                  {subjectData.map((subject) => (
                    <li key={subject.name} className="flex items-start">
                      <input
                        type="checkbox"
                        id={subject.name}
                        className="sr-only peer"
                        checked={selectedSubjects.includes(subject.name)}
                        onChange={() => handleSubjectChange(subject.name)}
                      />
                      <span
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-400 rounded-sm mr-3 mt-0.5 flex items-center justify-center peer-checked:bg-[#0F2A44] peer-checked:border-[#0F2A44] transition-colors duration-150 cursor-pointer shrink-0"
                        tabIndex={0}
                        role="checkbox"
                        aria-checked={selectedSubjects.includes(subject.name)}
                        onClick={() => handleSubjectChange(subject.name)}
                        onKeyDown={e => { if (e.key === ' ' || e.key === 'Enter') handleSubjectChange(subject.name); }}
                      >
                        {selectedSubjects.includes(subject.name) && (
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 16 16">
                            <path d="M4 8l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <label htmlFor={subject.name} className="text-gray-700 select-none cursor-pointer text-sm sm:text-base leading-tight">
                        {subject.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Courses Grid */}
            <main className="flex-1 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {filteredSubjects.length === 0 ? (
                  <div className="col-span-full text-center text-gray-500 py-12 sm:py-16 md:py-20">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p className="text-lg sm:text-xl font-medium mb-2">
                      {searchQuery ? `No courses found for "${searchQuery}"` : 'No courses match your filters'}
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">
                      {searchQuery ? 'Try searching with different keywords or adjust your filters' : 'Try adjusting your filter criteria to see more results'}
                    </p>
                  </div>
                ) : (
                  filteredSubjects.map((subject) => (
                    <div key={subject.name} className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-4 sm:p-5 lg:p-6 flex flex-col">
                      <div className="flex items-start mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3 sm:mr-4 shrink-0">
                          {/* Academic book icon */}
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight mb-1">
                            {subject.name}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-xs sm:text-sm lg:text-base mb-4 sm:mb-5 flex-1 leading-relaxed">
                        {subject.overview}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                        <span className="inline-block bg-[#0F2A44] text-white text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full whitespace-nowrap">
                          Subject
                        </span>
                        {subject.formats.map((format) => (
                          <span key={format} className="inline-block bg-[#B8A67A] text-white text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full whitespace-nowrap">
                            {teachingFormats.find(f => f.value === format)?.label || format}
                          </span>
                        ))}
                        {subject.pathways.slice(0, 2).map((path) => (
                          <span key={path} className="inline-block bg-[#E5E7EB] text-[#0F2A44] text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full border border-[#B8A67A] whitespace-nowrap">
                            {path.length > 20 ? `${path.substring(0, 20)}...` : path}
                          </span>
                        ))}
                        {subject.pathways.length > 2 && (
                          <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full whitespace-nowrap">
                            +{subject.pathways.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FindACourse;