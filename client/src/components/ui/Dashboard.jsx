import React, { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [nomineeName, setNomineeName] = useState('');
  const [nomineeCategory, setNomineeCategory] = useState('');
  const [submittedNomination, setSubmittedNomination] = useState(false);

  const socials = {
    facebook: "https://www.facebook.com/angazaawardskenya/",
    instagram: "https://www.instagram.com/angazaawards/",
    whatsapp: "https://whatsapp.com/channel/0029Vb4KRdNEVccCSqEfqK2p",
    x: "https://x.com/angaza_awards",
    youtube: "https://www.youtube.com/@AngazaAwardske",
    phone: "+254 707 045 440",
    email: "angazaawardskenya@gmail.com"
  };

  const handlesSubmitNomination = (e) => {
    e.preventDefault();
    if (nomineeName && nomineeCategory) {
      setSubmittedNomination(true);
      setTimeout(() => setSubmittedNomination(false), 4000);
      setNomineeName('');
      setNomineeCategory('');
    }
  };

  return (
    <div className="min-h-screen bg-[#060606] text-gray-100 font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      
      {/* TOP HEADER & BRAND MOTIF BAR */}
      <div className="bg-black/60 border-b border-[#D4AF37]/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
          
          {/* LOGO BADGE REPLICATED FROM screenshot-2026-07-03_11-37-01_2.png */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] relative bg-black flex items-center justify-center p-1 shadow-xl shadow-[#D4AF37]/10 shrink-0">
              <div className="absolute inset-0.5 rounded-full border border-[#D4AF37]/30 pointer-events-none"></div>
              <div className="absolute top-0.5 text-[#D4AF37] text-[7px] tracking-tight">★ ★ ★</div>
              <div className="text-center font-serif font-black select-none leading-none">
                <span className="block text-[11px] text-[#D4AF37] tracking-tighter">ANGAZA</span>
                <span className="block text-[7px] text-[#D4AF37] tracking-[0.15em] mt-0.5">AWARDS</span>
              </div>
              <div className="absolute bottom-0.5 text-[#D4AF37] text-[7px] tracking-tight">★ ★ ★</div>
            </div>
            <div>
              <span className="block font-serif text-lg font-bold bg-gradient-to-r from-white via-gray-200 to-[#D4AF37] bg-clip-text text-transparent uppercase tracking-wider">
                Angaza Awards
              </span>
              <span className="block text-[10px] text-gray-400 tracking-widest font-mono uppercase">
                Celebrating Excellence & Innovation
              </span>
            </div>
          </div>

          {/* MAIN HORIZONTAL NAVIGATION LINKS */}
          <nav className="hidden md:flex space-x-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Foundation' },
              { id: 'events', label: 'Events & Slogans' },
              { id: 'polls', label: 'Nominate & Polls' },
              { id: 'gallery', label: 'Media Gallery' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'text-black bg-[#D4AF37] shadow-md shadow-[#D4AF37]/20' 
                    : 'text-gray-400 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          
          {/* QUICK TOP CALL-TO-ACTION LINK */}
          <div className="hidden lg:block">
            <button 
              onClick={() => setActiveTab('polls')}
              className="px-5 py-2.5 border border-[#D4AF37] text-[#D4AF37] rounded-md text-xs font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-lg shadow-[#D4AF37]/5"
            >
              Submit Entry Kit
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE TAB DRAWER STRIP */}
      <div className="md:hidden flex bg-[#111] border-b border-[#D4AF37]/10 overflow-x-auto scrollbar-none py-3 px-4 space-x-2">
        {[
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About' },
          { id: 'events', label: 'Events' },
          { id: 'polls', label: 'Polls' },
          { id: 'gallery', label: 'Gallery' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
              activeTab === tab.id ? 'bg-[#D4AF37] text-black' : 'bg-black text-gray-400 border border-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* PRIMARY CONTENT DISPLAY CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* INTERACTIVE TAB STATE SWITCHER PLATFORM */}
        <div className="bg-[#111112] rounded-2xl border border-[#D4AF37]/10 p-6 sm:p-8 min-h-[500px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          {/* HOME EXPERIENCE SECTION */}
          {activeTab === 'home' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center max-w-3xl mx-auto space-y-4 py-6">
                <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-mono font-bold block">
                  The Premier Recognition Standard
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white uppercase">
                  Honoring the Brands and Leaders Defining Excellence
                </h2>
                <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto my-4"></div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  Established to conduct independent, objective assessments across sectors, celebrating high levels of leadership, consumer value, and social impact.
                </p>
              </div>

              {/* CORE HIGHLIGHT CARDS CONTAINER */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-black/40 border border-[#D4AF37]/10 p-6 rounded-xl hover:border-[#D4AF37]/40 transition-all duration-300">
                  <div className="text-[#D4AF37] text-2xl mb-3">💎</div>
                  <h4 className="text-sm uppercase font-bold tracking-wider text-white">Brand Quality Research</h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Analyzing market metrics independently to determine reputation, customer retention, and strategic delivery ecosystem capabilities.
                  </p>
                </div>
                <div className="bg-black/40 border border-[#D4AF37]/10 p-6 rounded-xl hover:border-[#D4AF37]/40 transition-all duration-300">
                  <div className="text-[#D4AF37] text-2xl mb-3">🤝</div>
                  <h4 className="text-sm uppercase font-bold tracking-wider text-white">Stakeholder Value</h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Driving regional development blueprints by offering tailored recommendations and recognition benchmarks for emerging platforms.
                  </p>
                </div>
                <div className="bg-black/40 border border-[#D4AF37]/10 p-6 rounded-xl hover:border-[#D4AF37]/40 transition-all duration-300">
                  <div className="text-[#D4AF37] text-2xl mb-3">👑</div>
                  <h4 className="text-sm uppercase font-bold tracking-wider text-white">Gala Celebration Dinner</h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Bringing together the region's brightest industry luminaries to network, share milestones, and toast the final winners.
                  </p>
                </div>
              </div>

              {/* INTEGRATED BRAND HASHTAG TAGLINE FOOTER CONTAINER */}
              <div className="bg-black/50 border border-dashed border-[#D4AF37]/20 p-4 rounded-xl flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#D4AF37] tracking-wider">
                <span>#AngazaAwards</span>
                <span className="text-gray-600">•</span>
                <span>#CelebratingExcellence</span>
                <span className="text-gray-600">•</span>
                <span>#BringingLight</span>
                <span className="text-gray-600">•</span>
                <span>#BrandQualityExcellence</span>
              </div>
            </div>
          )}

          {/* ABOUT FOUNDATION NARRATIVE SECTION */}
          {activeTab === 'about' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-gray-800 pb-4">
                <h3 className="text-xl font-bold font-serif text-white uppercase tracking-wider">Vision, Mission & Goals</h3>
                <p className="text-xs text-gray-400 mt-1">Understanding our core transparency evaluation standard.</p>
              </div>
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed max-w-4xl">
                <p>
                  The organization stands committed to highlighting businesses, startup enterprises, firms, and individual leaders making monumental contributions across standard economic sectors. We ensure transparency by allowing independent reviews to reflect pure consumer viewpoints.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-black p-5 rounded-xl border border-gray-800">
                    <span className="block font-bold text-[#D4AF37] text-xs uppercase tracking-widest mb-2">Our Core Value Baseline</span>
                    <p className="text-xs text-gray-400">
                      Promoting job creation, integrity, equality, professionalism, and community inclusiveness within the expanding market sphere.
                    </p>
                  </div>
                  <div className="bg-black p-5 rounded-xl border border-gray-800">
                    <span className="block font-bold text-[#D4AF37] text-xs uppercase tracking-widest mb-2">The Vetting System Structure</span>
                    <p className="text-xs text-gray-400">
                      Evaluated directly by an independent committee of judges based on business sustainability, diversification, and public feedback logs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EVENTS & CALENDAR VIEW SECTION */}
          {activeTab === 'events' && (
            <div className="space-y-6 animate-fadeIn">
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
                  <div key={index} className="flex bg-black/40 border border-gray-800 rounded-xl p-5 items-start space-x-4">
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

          {/* NOMINATE AND POLLS COMPONENT SECTION */}
          {activeTab === 'polls' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-gray-800 pb-4">
                <h3 className="text-xl font-bold font-serif text-white uppercase tracking-wider">Nomination Entry Form</h3>
                <p className="text-xs text-gray-400 mt-1">Submit names for structural review in active award tracks.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* INTERACTIVE FORM PLATFORM */}
                <form onSubmit={handlesSubmitNomination} className="lg:col-span-2 bg-black/60 border border-gray-800 p-6 rounded-xl space-y-4">
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
                    className="w-full bg-[#D4AF37] hover:bg-[#b8962f] text-black text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg font-mono transition-colors shadow-lg"
                  >
                    Submit Formal Nomination &rarr;
                  </button>
                </form>

                {/* SIDE STATS DISCLOSURE CARD */}
                <div className="bg-black/40 border border-[#D4AF37]/20 p-5 rounded-xl space-y-3">
                  <span className="text-[10px] uppercase bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2 py-0.5 rounded text-[#D4AF37] font-bold tracking-widest">
                    Polling Status
                  </span>
                  <h4 className="text-sm font-bold text-white uppercase font-serif">Secure Vetting Rules</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Conflict of interest clauses enforce severe disciplinary measures. Any judge displaying biased scoring patterns triggers express qualification review parameters instantly.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* MEDIA ASSETS AND CAPTURES GALLERY SECTION */}
          {activeTab === 'gallery' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-gray-800 pb-4">
                <h3 className="text-xl font-bold font-serif text-white uppercase tracking-wider">Media Highlights Showcase</h3>
                <p className="text-xs text-gray-400 mt-1">Archived documentation and presentation captures.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square bg-black border border-gray-800 rounded-xl relative overflow-hidden group hover:border-[#D4AF37]/40 transition-colors flex flex-col items-center justify-center">
                    <span className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity">📸</span>
                    <span className="text-[10px] font-mono text-gray-600 mt-2 block">Capture_Node_0{item}.png</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* RICH STICKY FOOTER CAPTURING ALL SOCIAL HANDLES */}
      <footer className="bg-black border-t border-gray-900 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* COL 1: MOTIF TAGLINE */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">Angaza Foundation Portal</h4>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Dedicated to celebrating business longevity, service delivery innovations, and transparent regional acceleration programs.
            </p>
          </div>

          {/* COL 2: OFFICIAL SOCIAL PLATFORM LINKS */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">Connect Directly</h4>
            <div className="flex flex-wrap gap-2">
              <a href={socials.facebook} target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-[#D4AF37] hover:text-black border border-gray-800 px-3 py-1.5 rounded text-xs font-mono transition-all">Facebook</a>
              <a href={socials.instagram} target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-[#D4AF37] hover:text-black border border-gray-800 px-3 py-1.5 rounded text-xs font-mono transition-all">Instagram</a>
              <a href={socials.x} target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-[#D4AF37] hover:text-black border border-gray-800 px-3 py-1.5 rounded text-xs font-mono transition-all">X / Twitter</a>
              <a href={socials.youtube} target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-[#D4AF37] hover:text-black border border-gray-800 px-3 py-1.5 rounded text-xs font-mono transition-all">YouTube</a>
              <a href={socials.whatsapp} target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-[#D4AF37] hover:text-black border border-gray-800 px-3 py-1.5 rounded text-xs font-mono transition-all">WhatsApp Channel</a>
            </div>
          </div>

          {/* COL 3: CHANNELS META CONTACT LOGS */}
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