import React, { useState, useEffect, useRef } from 'react';
import bgImage from "../../assets/background.png";

function Reveal({ children, delay = 0, className = '', variant = 'fade-up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getVariantStyle = () => {
    if (!isVisible) {
      switch (variant) {
        case 'scale-up':
          return 'opacity-0 scale-90 blur-md translate-y-8';
        case 'slide-left':
          return 'opacity-0 translate-x-12 blur-sm';
        case 'gold-line':
          return 'max-w-0 opacity-0';
        default:
          return 'opacity-0 translate-y-10 blur-sm';
      }
    }
    switch (variant) {
      case 'gold-line':
        return 'max-w-full opacity-100';
      default:
        return 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-none';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${getVariantStyle()} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [aboutSubTab, setAboutSubTab] = useState('about-us');
  const [nomineeName, setNomineeName] = useState('');
  const [nomineeCategory, setNomineeCategory] = useState('');
  const [submittedNomination, setSubmittedNomination] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socials = {
    facebook: "https://www.facebook.com/angazaawardskenya/",
    instagram: "https://www.instagram.com/angazaawards/",
    whatsapp: "https://whatsapp.com/channel/0029Vb4KRdNEVccCSqEfqK2p",
    x: "https://x.com/angaza_awards",
    youtube: "https://www.youtube.com/@AngazaAwardske",
    phone: "+254 707 045 440",
    email: "angazaawardskenya@gmail.com"
  };

  const navTabs = [
    { id: 'home', label: 'Home', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { id: 'about', label: 'About Foundation', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { id: 'events', label: 'Events', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )},
    { id: 'roadmap', label: 'Roadmap', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )},
    { id: 'categories', label: 'Categories', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )},
    { id: 'polls', label: 'Nominate & Polls', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { id: 'gallery', label: 'Gallery', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )}
  ];

  const angazaPrograms = [
    {
      title: "The Angaza Corporate & FMCG Excellence Awards",
      focus: "Market leadership, supply chain resilience, brand equity, and product sustainability across consumer goods.",
      scope: "Open to regional enterprises, manufacturers, and consumer brands."
    },
    {
      title: "The Angaza Tech & Digital Advancement Awards",
      focus: "Software innovations, fintech breakthroughs, AI deployments, and digital transformation initiatives.",
      scope: "Open to technology firms, startups, and corporate tech divisions."
    },
    {
      title: "The Angaza Visionary Leadership & C-Suite Honors",
      focus: "Executive stewardship, corporate governance, strategic growth, and workplace empowerment.",
      scope: "Open to CEOs, founders, executives, and senior business leaders."
    },
    {
      title: "The Angaza Women in Business & Entrepreneurship Awards",
      focus: "Breakthrough achievements by female executives, founders, and community-shaping enterprise leaders.",
      scope: "Open to women-led businesses, female founders, and corporate trailblazers."
    },
    {
      title: "The Angaza ESG & Sustainable Impact Awards",
      focus: "Environmental stewardship, social responsibility, ethical governance, and climate resilience frameworks.",
      scope: "Open to non-profits, corporate CSR programs, and sustainable enterprises."
    },
    {
      title: "The Angaza Public Sector & Service Excellence Awards",
      focus: "Operational transparency, public delivery innovation, consumer trust, and institutional integrity.",
      scope: "Open to public agencies, service providers, and utility institutions."
    }
  ];

  const categories = [
    { title: "Fast Moving Consumer Goods", icon: "🛒", code: "fmcg", desc: "Recognizing market reach, product excellence, and brand sustainability." },
    { title: "Digital & Tech Advancement", icon: "⚡", code: "tech", desc: "Honoring platforms driving technological disruption and digital adoption." },
    { title: "Service Delivery Excellence", icon: "🏛️", code: "service", desc: "Celebrating consumer trust, retention, and operational standards." },
    { title: "Visionary Leader of the Year", icon: "👑", code: "ceo", desc: "Spotlighting CEOs and founders shaping regional economic growth." }
  ];

  const upcomingEvents = [
    {
      date: "NOV 12, 2026",
      title: "Angaza Executive CEO Roundtable & Networking Breakfast",
      location: "Nairobi Villa Rosa Kempinski",
      desc: "An exclusive gathering of C-suite executives, policy makers, and corporate innovators focused on sustainable growth."
    },
    {
      date: "DEC 05, 2026",
      title: "Nominees Gala Unveiling & Red Carpet Reception",
      location: "Radisson Blu, Upper Hill",
      desc: "Formal disclosure of vetted candidates across all active awards tracks ahead of the public review panel."
    },
    {
      date: "JAN 28, 2027",
      title: "The 2026 Angaza Grand Gala Dinner & Awards Presentation",
      location: "Grand Ballroom, Nairobi",
      desc: "The annual celebration crowning category winners, industry pioneers, and corporate benchmark leaders."
    }
  ];

  const handleSubmitNomination = (e) => {
    e.preventDefault();
    if (nomineeName && nomineeCategory) {
      setSubmittedNomination(true);
      setTimeout(() => setSubmittedNomination(false), 4000);
      setNomineeName('');
      setNomineeCategory('');
    }
  };

  const aboutSidebarItems = [
  { id: 'about-us', label: 'About Us' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'faq', label: 'FAQ' },
  { id: 'staff', label: 'Staff' },
  { id: 'newsletter', label: 'Newsletter' },
  { id: 'contact', label: 'Contact' }
];

const [openFaqIndex, setOpenFaqIndex] = useState(0);

const toggleFaq = (index) => {
  setOpenFaqIndex(openFaqIndex === index ? null : index);
};

  return (
    <div className="min-h-screen bg-[#060606] text-gray-100 font-sans antialiased selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="bg-[#D4AF37] text-black text-[11px] font-mono font-bold py-1.5 px-4 text-center tracking-widest uppercase flex items-center justify-center gap-3">
        <span className="bg-black text-[#D4AF37] px-2 py-0.5 rounded text-[9px] uppercase font-sans font-extrabold animate-pulse">Live Intake</span>
        <span>2026 Nominations Window Open • Final Entry Deadline Closing Soon</span>
        <button onClick={() => setActiveTab('polls')} className="underline hover:text-white transition-colors">Nominate Now &rarr;</button>
      </div>

      {/* 2. DYNAMIC STICKY HEADER */}
      <header className={`sticky top-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-black/90 border-[#D4AF37]/30 backdrop-blur-xl py-3 shadow-2xl shadow-[#D4AF37]/5' 
          : 'bg-black/40 border-[#D4AF37]/10 backdrop-blur-md py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/*LOGO */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setActiveTab('home')}>
            <div className="w-12 h-12 rounded-full border border-[#D4AF37] relative bg-black flex items-center justify-center p-1 shadow-lg shadow-[#D4AF37]/10 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0.5 rounded-full border border-[#D4AF37]/30 pointer-events-none"></div>
              <div className="text-center font-serif font-black select-none leading-none">
                <span className="block text-[9px] text-[#D4AF37] tracking-tighter">ANGAZA</span>
                <span className="block text-[6px] text-[#D4AF37] tracking-[0.1em] mt-0.5">AWARDS</span>
              </div>
            </div>
            <div>
              <span className="block font-serif text-base font-bold bg-gradient-to-r from-white via-gray-200 to-[#D4AF37] bg-clip-text text-transparent uppercase tracking-wider">
                Angaza Awards
              </span>
              <span className="block text-[9px] text-gray-400 tracking-widest font-mono uppercase">
                Celebrating Excellence
              </span>
            </div>
          </div>

          {/* MAIN NAV (ICONS ONLY) */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                title={tab.label}
                aria-label={tab.label}
                className={`p-3 rounded-xl transition-all duration-300 relative group flex items-center justify-center ${
                  activeTab === tab.id 
                    ? 'text-black bg-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 scale-105' 
                    : 'text-gray-400 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-[#D4AF37] border border-[#D4AF37]/30 text-[9px] font-mono px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                  {tab.label}
                </span>
              </button>
            ))}
          </nav>
          
          {/* TOP RIGHT CTA */}
          <div className="hidden xl:block">
            <button 
              onClick={() => setActiveTab('polls')}
              className="px-4 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-md text-xs font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-lg shadow-[#D4AF37]/5 hover:scale-105 active:scale-95"
            >
              Submit Entry Kit
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE NAV STRIP (ICONS ONLY) */}
      <div className="lg:hidden flex bg-[#111] border-b border-[#D4AF37]/10 overflow-x-auto scrollbar-none py-2.5 px-4 space-x-3 justify-between">
        {navTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            title={tab.label}
            aria-label={tab.label}
            className={`p-2.5 rounded-lg transition-all flex items-center justify-center ${
              activeTab === tab.id ? 'bg-[#D4AF37] text-black scale-105' : 'bg-black text-gray-400 border border-gray-800'
            }`}
          >
            {tab.icon}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT AREA */}
      <main>
        {activeTab === 'home' && (
          <div className="space-y-24 py-12">
            
            {/* HERO SECTION CONTAINER */}
            <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 my-4">
              <div className="relative min-h-[75vh] flex items-center justify-center rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
            
                <div 
                  className="absolute inset-0 bg-cover bg-[center_30%] opacity-70 transition-all duration-700"
                  style={{
                    backgroundImage: `url(${bgImage})`, 
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-black/60 to-black/40" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-transparent to-black/70 pointer-events-none" />

                {/* HERO CONTENT */}
                <div className="relative z-10 text-center max-w-4xl mx-auto py-12 sm:py-20 px-6 space-y-6">
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/80 text-[#D4AF37] text-xs sm:text-sm font-mono tracking-widest uppercase backdrop-blur-md shadow-lg shadow-[#D4AF37]/10">
                      ✨ The Premier Brand Excellence Standard
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white uppercase leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                    Honoring Brands & Leaders <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-[#D4AF37] via-amber-200 to-[#D4AF37] bg-clip-text text-transparent">
                      Defining Excellence
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Independent, objective assessments celebrating market leadership, operational integrity, customer value  and social impact across sectors.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                    <button 
                      onClick={() => setActiveTab('polls')}
                      className="px-7 py-3.5 bg-[#D4AF37] hover:bg-[#b8962f] text-black font-mono font-bold text-xs uppercase tracking-widest rounded-lg shadow-xl shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95"
                    >
                      Submit Nomination Entry &rarr;
                    </button>
                    <button 
                      onClick={() => setActiveTab('about')}
                      className="px-7 py-3.5 bg-black/80 border border-gray-700 hover:border-[#D4AF37]/50 text-gray-200 font-mono font-bold text-xs uppercase tracking-widest rounded-lg backdrop-blur-md transition-all hover:-translate-y-1"
                    >
                      Explore Framework
                    </button>
                  </div>
                </div>

              </div>
            </section>

            <div className="max-w-7xl mx-auto px-4">
              <Reveal variant="gold-line">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent my-4 mx-auto"></div>
              </Reveal>
            </div>

            {/* CATEGORIES GRID */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">Nomination Tracks</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase">Featured Award Categories</h2>
                </div>
                <button 
                  onClick={() => setActiveTab('categories')}
                  className="text-xs font-mono text-[#D4AF37] hover:underline uppercase tracking-wider mt-2 md:mt-0 flex items-center gap-1 group"
                >
                  View All Tracks <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </button>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                  <Reveal key={i} variant="scale-up" delay={i * 150}>
                    <div className="bg-[#111112] border border-gray-800/80 p-6 rounded-xl hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between group h-full">
                      <div>
                        <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-300">{cat.icon}</div>
                        <h3 className="text-base font-bold text-white font-serif uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors">{cat.title}</h3>
                        <p className="text-xs text-gray-400 mt-2 leading-relaxed">{cat.desc}</p>
                      </div>
                      <button 
                        onClick={() => {
                          setNomineeCategory(cat.code);
                          setActiveTab('polls');
                        }}
                        className="mt-6 text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors text-left flex items-center gap-1"
                      >
                        Nominate in track <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </button>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* TRUST & VETTING PILLARS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal variant="scale-up">
                <div className="bg-[#111112] border border-[#D4AF37]/20 p-8 sm:p-12 rounded-2xl relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <Reveal delay={100}>
                      <div className="text-[#D4AF37] text-2xl mb-3">💎</div>
                      <h4 className="text-sm font-bold text-white uppercase font-serif tracking-wider">Brand Quality Research</h4>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        Analyzing market metrics independently to determine reputation, customer retention, and strategic delivery ecosystem capabilities.
                      </p>
                    </Reveal>

                    <Reveal delay={250}>
                      <div className="text-[#D4AF37] text-2xl mb-3">🤝</div>
                      <h4 className="text-sm font-bold text-white uppercase font-serif tracking-wider">Stakeholder Value</h4>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        Driving regional development blueprints by offering tailored recommendations and recognition benchmarks.
                      </p>
                    </Reveal>

                    <Reveal delay={400}>
                      <div className="text-[#D4AF37] text-2xl mb-3">👑</div>
                      <h4 className="text-sm font-bold text-white uppercase font-serif tracking-wider">Gala Celebration</h4>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        Bringing together the region's brightest industry luminaries to network, share milestones, and toast the final winners.
                      </p>
                    </Reveal>
                  </div>
                </div>
              </Reveal>
            </section>

            {/* HASHTAG FOOTER STRIP */}
            <div className="max-w-7xl mx-auto px-4">
              <Reveal variant="scale-up">
                <div className="bg-black/50 border border-dashed border-[#D4AF37]/20 p-4 rounded-xl flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#D4AF37] tracking-wider">
                  <span>#AngazaAwards</span>
                  <span className="text-gray-600">•</span>
                  <span>#CelebratingExcellence</span>
                  <span className="text-gray-600">•</span>
                  <span>#BringingLight</span>
                  <span className="text-gray-600">•</span>
                  <span>#BrandQualityExcellence</span>
                </div>
              </Reveal>
            </div>

          </div>
        )}

        {/* SUB-PAGES / OTHER TAB STATES */}
        {activeTab !== 'home' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Reveal variant="scale-up">
              <div className="bg-[#111112] rounded-2xl border border-[#D4AF37]/10 p-6 sm:p-10 min-h-[500px] shadow-2xl">
                
                {/* ----------------- EXTENSIVE ABOUT TAB ----------------- */}
                {activeTab === 'about' && (
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    
                    {/* BREADCRUMB */}
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-6">
                      <span className="hover:text-[#D4AF37] cursor-pointer" onClick={() => setActiveTab('home')}>Home</span>
                      <span>&gt;</span>
                      <span className="hover:text-[#D4AF37] cursor-pointer" onClick={() => setActiveTab('about')}>About</span>
                      <span>&gt;</span>
                      <span className="text-[#D4AF37]">
                        {aboutSidebarItems.find(item => item.id === aboutSubTab)?.label || 'About Us'}
                      </span>
                    </div>

                    {/* MAIN 2-COLUMN GRID (SIDEBAR LEFT + CONTENT RIGHT) */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                      
                      {/* LEFT SIDEBAR NAVIGATION */}
                      <div className="lg:col-span-1 space-y-0 shadow-2xl sticky top-24">
                        {/* BLACK HEADER BOX */}
                        <div className="bg-black border border-gray-700 p-4">
                          <h3 className="text-xl font-bold font-serif text-white tracking-wider uppercase">
                            ABOUT
                          </h3>
                        </div>

                        {/* STACKED MENU ITEMS */}
                        <div className="bg-[#111112] border-x border-b border-gray-800 divide-y divide-gray-800">
                          {aboutSidebarItems.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => setAboutSubTab(item.id)}
                              className={`w-full text-left px-5 py-3.5 text-sm font-semibold transition-all duration-200 block ${
                                aboutSubTab === item.id 
                                  ? 'bg-[#1e1e20] text-[#D4AF37] border-l-4 border-[#D4AF37] pl-4 font-bold' 
                                  : 'text-gray-300 hover:bg-black/50 hover:text-white'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* RIGHT CONTENT DISPLAY - DYNAMICALLY SWITCHES BASED ON STATE */}
                      <div className="lg:col-span-3 space-y-8 bg-[#111112] border border-gray-800 p-6 sm:p-10 rounded-xl min-h-[600px]">
                        
                        {/* 1. ABOUT US CONTENT */}
                        {aboutSubTab === 'about-us' && (
                          <div className="space-y-8 animate-fade-in">
                            <div className="border-b border-gray-800 pb-4">
                              <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                                About the <span className="text-[#D4AF37]">Angaza® Awards</span>
                              </h1>
                            </div>

                            <a
                                href="https://www.youtube.com/watch?v=pUmWvIjzIBo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-black group aspect-video flex items-center justify-center shadow-2xl block hover:border-[#D4AF37]/70 transition-all duration-300 cursor-pointer"
                              >
                                <div 
                                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"
                                  style={{ backgroundImage: `url(${bgImage})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                
                                <div className="relative z-10 flex flex-col items-center">
                                  <div className="w-16 h-12 sm:w-20 sm:h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300">
                                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[16px] border-l-white ml-1"></div>
                                  </div>
                                  <span className="text-xs font-mono text-gray-300 uppercase tracking-widest mt-3 bg-black/80 px-3 py-1 rounded border border-gray-700 group-hover:text-white transition-colors">
                                    Watch The Angaza Awards Story
                                  </span>
                                </div>
                              </a>

                            <div className="space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                                The <b>Angaza® Awards</b>are Africa’s premier business awards. They were created to honor and generate public recognition of the achievements and positive contributions of organizations and working professionals worldwide.
                              </p>
                              <div className="space-y-4 pt-2">
                                {angazaPrograms.map((prog, idx) => (
                                  <div key={idx} className="bg-black/60 border-l-4 border-[#D4AF37] p-4 rounded-r-lg border-y border-r border-gray-800 hover:border-gray-700 transition-colors">
                                    <h4 className="text-base font-bold text-white font-serif uppercase">{prog.title}</h4>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-1">{prog.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 2. CALENDAR CONTENT */}
                        {aboutSubTab === 'calendar' && (
                          <div className="space-y-8 animate-fade-in">
                            <div className="border-b border-gray-800 pb-4">
                              <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                                2026-2027 <span className="text-[#D4AF37]">Calendar</span>
                              </h1>
                            </div>
                            <div className="space-y-4">
                              <p className="text-gray-300 text-sm mb-6">Key dates for nominations, judging panels, and gala ceremonies.</p>
                              {upcomingEvents.map((evt, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row gap-4 p-5 bg-black/50 border border-gray-800 rounded-lg">
                                  <div className="sm:w-32 shrink-0">
                                    <span className="text-xs font-mono font-bold text-[#D4AF37] block">{evt.date}</span>
                                  </div>
                                  <div>
                                    <h4 className="text-base font-bold text-white font-serif uppercase">{evt.title}</h4>
                                    <p className="text-xs text-gray-400 mt-2">{evt.desc}</p>
                                    <p className="text-xs text-amber-100/60 font-mono mt-2">📍 {evt.location}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 3. FAQ INTERACTIVE ACCORDION (WRAPPED IN CONDITION) */}
                          {aboutSubTab === 'faq' && (
                            <div className="space-y-8 animate-fade-in">
                              <div className="border-b border-gray-800 pb-4">
                                <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                                  Frequently Asked <span className="text-[#D4AF37]">Questions</span>
                                </h1>
                              </div>

                              <div className="space-y-4">
                                {[
                                  {
                                    q: "Who is Angaza Awards?",
                                    a: "Angaza Awards is a premier platform dedicated to recognizing, honoring and celebrating outstanding excellence, creativity and impactful contributions across various industries."
                                  },
                                  {
                                    q: "Who is eligible to submit a nomination?",
                                    a: "Any brand, group or individual making an impact, whether physically or online and actively growing their talent is eligible within Kenya."
                                  },
                                  {
                                    q: "Are there entry fees?",
                                    a: "No, submitting a nomination is completely free. However, during the voting/election phase, each vote costs KES 10."
                                  },
                                  {
                                    q: "How are the winners selected?",
                                    a: "Winners are determined directly through the official public voting process during the election window."
                                  },
                                  {
                                    q: "What do winners receive?",
                                    a: "Category winners are officially crowned and presented with a prestigious Angaza Awards custom trophy at the grand ceremony, along with official brand recognition certificate assets."
                                  },
                                  {
                                    q: "What are the benefits of participating, competing and voting?",
                                    a: (
                                      <>
                                        <strong className="text-white block mb-1">For Nominees & Competitors:</strong> 
                                        Gain massive brand exposure, industry credibility, networking opportunities with corporate leaders and official validation of your growth and impact.
                                        <br /><br />
                                        <strong className="text-white block mb-1">For Voters & Supporters:</strong> 
                                        Directly influence recognition for your favorite creators, brands and rising talents, giving them the platform they deserve.
                                      </>
                                    )
                                  }
                                ].map((faq, index) => {
                                  const isOpen = openFaqIndex === index;
                                  return (
                                    <div 
                                      key={index} 
                                      className={`bg-black/50 border rounded-lg overflow-hidden transition-colors duration-300 ${
                                        isOpen ? 'border-[#D4AF37]/60' : 'border-gray-800 hover:border-gray-700'
                                      }`}
                                    >
                                      <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full text-left p-5 flex justify-between items-center gap-4 focus:outline-none"
                                      >
                                        <h4 className="text-[#D4AF37] font-bold text-base sm:text-lg">
                                          {faq.q}
                                        </h4>
                                        <span className={`text-[#D4AF37] font-bold text-xl transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                                          ▾
                                        </span>
                                      </button>

                                      {isOpen && (
                                        <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed border-t border-gray-800/60 pt-3 animate-fadeIn">
                                          {faq.a}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                        {/* 4. STAFF CONTENT */}
                        {aboutSubTab === 'staff' && (
                          <div className="space-y-8 animate-fade-in">
                            <div className="border-b border-gray-800 pb-4">
                              <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                                Our <span className="text-[#D4AF37]">Staff</span>
                              </h1>
                            </div>
                            <p className="text-gray-300 text-sm">Meet the dedicated team behind the Angaza Awards secretariat.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              {[
                                { name: "Theuri David", role: "Executive Director" },
                                { name: "Sir Isaac", role: "Head of Judging & Auditing" },
                                { name: "Cristine Mwangi", role: "Corporate Partnerships" },
                                { name: "Linda Wanjiru", role: "Events Coordinator" }
                              ].map((staff, idx) => (
                                <div key={idx} className="bg-black/50 border border-gray-800 p-6 rounded-lg text-center">
                                  <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 border border-[#D4AF37]/50 flex items-center justify-center text-xl">👤</div>
                                  <h4 className="text-white font-bold font-serif">{staff.name}</h4>
                                  <p className="text-[#D4AF37] text-xs font-mono mt-1">{staff.role}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 5. NEWSLETTER CONTENT */}
                        {aboutSubTab === 'newsletter' && (
                          <div className="space-y-8 animate-fade-in">
                            <div className="border-b border-gray-800 pb-4">
                              <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                                The <span className="text-[#D4AF37]">Newsletter</span>
                              </h1>
                            </div>
                            <div className="bg-black/50 border border-gray-800 p-8 rounded-xl max-w-xl">
                              <h3 className="text-xl font-bold text-white mb-2">Stay Ahead of Deadlines</h3>
                              <p className="text-gray-400 text-sm mb-6">Subscribe to receive immediate updates on submission extensions, judging announcements, and gala ticketing.</p>
                              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Corporate Email</label>
                                  <input type="email" className="w-full bg-black border border-gray-700 rounded p-3 text-sm text-white focus:border-[#D4AF37] outline-none" placeholder="name@company.com" />
                                </div>
                                <button type="submit" className="w-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest py-3 rounded hover:bg-white transition-colors">
                                  Subscribe Now
                                </button>
                              </form>
                            </div>
                          </div>
                        )}

                        {/* 6. CONTACT CONTENT */}
                        {aboutSubTab === 'contact' && (
                          <div className="space-y-8 animate-fade-in">
                            <div className="border-b border-gray-800 pb-4">
                              <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                                Get In <span className="text-[#D4AF37]">Touch</span>
                              </h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="space-y-6">
                                <p className="text-gray-300 text-sm">Have a question about the nomination process or looking for sponsorship opportunities? Our secretariat is ready to assist.</p>
                                
                                <div className="space-y-4">
                                  <div className="flex items-start gap-4">
                                    <span className="text-2xl">📍</span>
                                    <div>
                                      <h4 className="text-white font-bold text-sm">Headquarters</h4>
                                      <p className="text-gray-400 text-sm mt-1">Nairobi, Kenya<br/>Westlands</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-4">
                                    <span className="text-2xl">📞</span>
                                    <div>
                                      <h4 className="text-white font-bold text-sm">Phone</h4>
                                      <p className="text-gray-400 text-sm mt-1">{socials.phone}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start gap-4">
                                    <span className="text-2xl">✉️</span>
                                    <div>
                                      <h4 className="text-white font-bold text-sm">Email</h4>
                                      <a href={`mailto:${socials.email}`} className="text-[#D4AF37] hover:underline text-sm mt-1 block">{socials.email}</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="bg-black/50 border border-gray-800 p-6 rounded-lg">
                                <h3 className="text-white font-bold mb-4 font-serif uppercase">Send a Message</h3>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                  <input type="text" placeholder="Your Name" className="w-full bg-black border border-gray-700 rounded p-2.5 text-sm text-white focus:border-[#D4AF37] outline-none" />
                                  <input type="email" placeholder="Your Email" className="w-full bg-black border border-gray-700 rounded p-2.5 text-sm text-white focus:border-[#D4AF37] outline-none" />
                                  <textarea placeholder="How can we help?" rows="4" className="w-full bg-black border border-gray-700 rounded p-2.5 text-sm text-white focus:border-[#D4AF37] outline-none"></textarea>
                                  <button className="bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest py-2.5 px-6 rounded hover:bg-white transition-colors">
                                    Send Message
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        )}

                      </div>

                    </div>

                  </div>
                )}

                {/* EVENTS TAB */}
                {activeTab === 'events' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-800 pb-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold font-serif text-white uppercase tracking-wider">Official Events Calendar</h3>
                        <p className="text-xs text-gray-400 mt-1">Summit gatherings, red carpet galas, and key networking dates.</p>
                      </div>
                      <span className="hidden sm:inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase rounded-full">
                        2026/2027 Season
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                      {upcomingEvents.map((evt, idx) => (
                        <div key={idx} className="bg-black/60 border border-gray-800 hover:border-[#D4AF37]/50 p-6 rounded-xl transition-all duration-300 flex flex-col justify-between group">
                          <div>
                            <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded inline-block mb-3 border border-[#D4AF37]/20">
                              {evt.date}
                            </span>
                            <h4 className="text-base font-bold text-white font-serif uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors leading-snug">
                              {evt.title}
                            </h4>
                            <p className="text-xs text-amber-100/60 font-mono mt-2 flex items-center gap-1">
                              📍 {evt.location}
                            </p>
                            <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                              {evt.desc}
                            </p>
                          </div>
                          <button 
                            onClick={() => setActiveTab('polls')}
                            className="mt-6 w-full py-2.5 bg-zinc-900 group-hover:bg-[#D4AF37] text-gray-300 group-hover:text-black font-mono font-bold text-[10px] uppercase tracking-widest rounded transition-all border border-gray-800 group-hover:border-transparent"
                          >
                            Reserve Guest Pass &rarr;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ROADMAP TAB */}
                {activeTab === 'roadmap' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="text-xl font-bold font-serif text-white uppercase tracking-wider">Operational Roadmap</h3>
                      <p className="text-xs text-gray-400 mt-1">Key milestones scheduled across the current selection cycle.</p>
                    </div>
                    <div className="space-y-4">
                      {[
                        { step: "01", title: "Registration & Entry Kit Release", desc: "Organizations request criteria documentation and organize internal evidence components." },
                        { step: "02", title: "Public Intake & Vetting Windows", desc: "Independent gathering of public news logs, stakeholders metrics, and submission assessments." },
                        { step: "03", title: "Grand Awards Gala Dinner", desc: "Convening hundreds of leading professionals to announce verified winners in physical presence." }
                      ].map((item, index) => (
                        <div key={index} className="flex bg-black/40 border border-gray-800 rounded-xl p-5 items-start space-x-4 hover:border-[#D4AF37]/30 transition-colors">
                          <span className="font-mono text-xl font-black text-[#D4AF37] bg-[#D4AF37]/5 px-3 py-1 rounded border border-[#D4AF37]/20">
                            {item.step}
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-wide">{item.title}</h4>
                            <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CATEGORIES TAB */}
                {activeTab === 'categories' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="text-xl font-bold font-serif text-white uppercase tracking-wider">Award Categories & Tracks</h3>
                      <p className="text-xs text-gray-400 mt-1">Explore specialized tracks for corporate brands and individual leaders.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {categories.map((cat, i) => (
                        <div key={i} className="bg-black/50 border border-gray-800 p-6 rounded-xl hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between">
                          <div>
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="text-3xl p-2 bg-[#111] rounded-lg border border-gray-800">{cat.icon}</span>
                              <div>
                                <h4 className="text-base font-bold font-serif text-white uppercase">{cat.title}</h4>
                                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">Track Ref: {cat.code}</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed mt-2">{cat.desc}</p>
                          </div>
                          <div className="pt-6 border-t border-gray-900 mt-4 flex items-center justify-between">
                            <span className="text-[11px] text-gray-500 font-mono">Status: Intake Open</span>
                            <button
                              onClick={() => {
                                setNomineeCategory(cat.code);
                                setActiveTab('polls');
                              }}
                              className="px-4 py-2 bg-[#D4AF37] text-black font-mono font-bold text-[10px] uppercase tracking-widest rounded hover:bg-white transition-colors"
                            >
                              Nominate Now &rarr;
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* NOMINATE & POLLS TAB */}
                {activeTab === 'polls' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="text-xl font-bold font-serif text-white uppercase tracking-wider">Nomination Entry Form</h3>
                      <p className="text-xs text-gray-400 mt-1">Submit names for structural review in active award tracks.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                      <form onSubmit={handleSubmitNomination} className="lg:col-span-2 bg-black/60 border border-gray-800 p-6 rounded-xl space-y-4">
                        {submittedNomination && (
                          <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 p-3 rounded-lg text-xs font-medium">
                            ✓ Entry captured successfully. Vetting committee notified for verification.
                          </div>
                        )}
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Company / Leader Name</label>
                          <input 
                            type="text"
                            value={nomineeName}
                            onChange={(e) => setNomineeName(e.target.value)}
                            placeholder="e.g. Acme Corporation Group"
                            className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm focus:outline-none focus:border-[#D4AF37] text-white transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Target Category Track</label>
                          <select 
                            value={nomineeCategory}
                            onChange={(e) => setNomineeCategory(e.target.value)}
                            className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm focus:outline-none focus:border-[#D4AF37] text-white transition-colors"
                            required
                          >
                            <option value="">Select an entry segment...</option>
                            <option value="fmcg">Fast Moving Consumer Goods Track</option>
                            <option value="tech">Digital & Technology Advancement</option>
                            <option value="service">Service Delivery Excellence</option>
                            <option value="ceo">Visionary Corporate Leader of the Year</option>
                          </select>
                        </div>
                        <button 
                          type="submit"
                          className="w-full bg-[#D4AF37] hover:bg-[#b8962f] text-black text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg font-mono transition-all shadow-lg hover:scale-[1.01] active:scale-[0.99]"
                        >
                          Submit Formal Nomination &rarr;
                        </button>
                      </form>

                      <div className="bg-black/40 border border-[#D4AF37]/20 p-5 rounded-xl space-y-3">
                        <span className="text-[10px] uppercase bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2 py-0.5 rounded text-[#D4AF37] font-bold tracking-widest">
                          Polling Status
                        </span>
                        <h4 className="text-sm font-bold text-white uppercase font-serif">Secure Vetting Rules</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Conflict of interest clauses enforce severe disciplinary measures. Any judge displaying biased scoring patterns triggers express qualification review parameters.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* GALLERY TAB */}
                {activeTab === 'gallery' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="text-xl font-bold font-serif text-white uppercase tracking-wider">Media Highlights Showcase</h3>
                      <p className="text-xs text-gray-400 mt-1">Archived documentation and presentation captures.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="aspect-square bg-black border border-gray-800 rounded-xl relative overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col items-center justify-center hover:scale-[1.02]">
                          <span className="text-2xl opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300">📸</span>
                          <span className="text-[10px] font-mono text-gray-600 group-hover:text-gray-400 mt-2 block transition-colors">Capture_Node_0{item}.png</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </Reveal>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-900 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">Angaza Hope Foundation</h4>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Dedicated to celebrating business longevity, service delivery innovations and transparent regional acceleration programs.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">Connect Directly</h4>
            <div className="flex flex-wrap gap-2.5">
              {/* Facebook */}
              <a 
                href={socials.facebook} 
                target="_blank" 
                rel="noreferrer" 
                title="Facebook"
                aria-label="Facebook"
                className="bg-[#111] hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-gray-800 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href={socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                title="Instagram"
                aria-label="Instagram"
                className="bg-[#111] hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-gray-800 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a 
                href={socials.x} 
                target="_blank" 
                rel="noreferrer" 
                title="X / Twitter"
                aria-label="X / Twitter"
                className="bg-[#111] hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-gray-800 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href={socials.youtube} 
                target="_blank" 
                rel="noreferrer" 
                title="YouTube"
                aria-label="YouTube"
                className="bg-[#111] hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-gray-800 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href={socials.whatsapp} 
                target="_blank" 
                rel="noreferrer" 
                title="WhatsApp Channel"
                aria-label="WhatsApp Channel"
                className="bg-[#111] hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-gray-800 p-2.5 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-2 text-xs font-mono text-gray-400">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] font-sans">Contact Points</h4>
            <p className="block">📞 Central Line: {socials.phone}</p>
            <p className="block truncate">✉️ Primary Inbox: {socials.email}</p>
            <p className="text-[10px] text-gray-600 pt-2">© 2026 Angaza Foundation. All Rights Reserved.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}