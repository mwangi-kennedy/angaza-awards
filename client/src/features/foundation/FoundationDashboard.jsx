import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../components/common/Reveal';
import logo from '../../assets/foundation-logo.png';
import theuriPhoto from '../../assets/team/theuri-david.jpg';
import lydiaPhoto from '../../assets/team/lydia-sharon.jpg';
import purityPhoto from '../../assets/team/purity-njeri.jpg';
import lucyPhoto from '../../assets/team/lucy-nyambura.jpg';
import isaacPhoto from '../../assets/team/isaac-gakuo.jpg';
import kennedyPhoto from '../../assets/team/kennedy-mwangi.jpg';
import heroImage from '../../assets/hero-image.jpg';
import CharityImage from '../../assets/Charity.jpg';
import CommunityImage from '../../assets/Community Outreach.jpg';
import MentorshipImage from '../../assets/Mentorship.jpg';
import PWDImage from '../../assets/PWD.jpg';
import HandoverImage from '../../assets/Handover.jpg';
import YouthImage from '../../assets/Youth.jpg';


const ORANGE = '#F2751A';
const ORANGE_LIGHT = '#FFA65C';
const YELLOW = '#FFD84D';

const contact = {
  phone: '+254 707 045 440',
  email: 'angazahope.org@gmail.com',
  website: 'www.angazahope.org',
};

const MPESA_DETAILS = {
  type: 'paybill',
  paybillNumber: '247247',
  accountNumber: '1920187029611',
  accountName: 'ANGAZA HOPE FOUNDATION'
};

const navTabs = [
  { id: 'home', label: 'Home', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )},
  { id: 'about', label: 'About Us', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )},
  { id: 'programmes', label: 'Programmes', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  )},
  { id: 'contact', label: 'Contact Us', icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )},
];

const coreValues = [
  {
    title: 'Empowerment',
    desc: 'Enabling community members to harness their own potential and skills.',
    icon: '🌱',
  },
  {
    title: 'Inclusivity & Equity',
    desc: 'Ensuring all people, including marginalized groups, are included in opportunities.',
    icon: '🤝',
  },
  {
    title: 'Compassion & Service',
    desc: 'Supporting others with empathy and genuine care.',
    icon: '💛',
  },
  {
    title: 'Integrity',
    desc: 'Operating transparently and ethically in all activities.',
    icon: '🤲',
  },
];

const NEXT_EVENT = {
  name: 'Angaza Hope Foundation Charity Event',
  dateISO: '2026-08-29T09:00:00',
  location: 'Zimmerman, Carwash 44',
};

const pastEvents = [
  { title: 'Community Outreach Day', photo: CommunityImage },
  { title: 'Youth Fellowship Cohort', photo: YouthImage },
  { title: 'Grants Handover Ceremony', photo: HandoverImage },
  { title: 'Angaza Hope Foundation Charity Event', photo: CharityImage },
  { title: 'Mentorship Drive', photo: MentorshipImage },
  { title: 'PWD Appreciation Day', photo: PWDImage },
];

const whatWeDo = [
  {
    title: 'Community Empowerment',
    desc: 'Facilitating workshops and mentorship, and supporting livelihood initiatives at the grassroots level.',
  },
  {
    title: 'Social Outreach & Support',
    desc: 'Connecting people with resources and raising awareness on key issues affecting underserved communities.',
  },
  {
    title: 'Recognition & Celebration of Excellence',
    desc: 'Highlighting community achievements and inspiring others through the Angaza Awards.',
    link: '/awards',
  },
];

const team = [
  { name: 'Theuri David', role: 'Chief Executive Officer', photo: theuriPhoto },
  { name: 'Lydia Sharon', role: 'Chief Operations Officer / Finance', photo: lydiaPhoto },
  { name: 'Purity Njeri', role: 'Director, Communications', photo: purityPhoto },
  { name: 'Lucy Nyambura', role: 'Director, Marketing', photo: lucyPhoto },
  { name: 'Isaac Gakuo', role: 'Director, Events & Logistics', photo: isaacPhoto },
  { name: 'Kennedy Mwangi', role: 'Head of ICT', photo: kennedyPhoto, transform: 'scale(1.6) translateY(10%)', },];
  
  const testimonials = [
    {
    quote:
      'The warmth, gifts, and genuine care Angaza Hope Foundation brought to our kids wasn\'t just for a day, it renewed their hope. The impact on their spirit is felt long after the event.',
      name: 'Matron',
    role: 'Matron, Baraka Children\'s Home, Nyeri',
  },
    {
    quote:
      'Winning Media House of the Year through the Angaza Awards gave Githima TV unprecedented visibility, new commercial partnerships, and the confidence to push our broadcasting boundaries even further.',
    name: 'Githima TV',
    role: 'Media House of the Year, Angaza Awards',
  },
  {
  quote:
    'What stood out was how the Foundation listened first. Working together was smooth because they tailored their outreach and resources to fit our exact program needs.',
  name: 'Operations Manager',
  role: 'Teach2Give',
},
];

const programmes = [
  {
    title: 'Angaza Awards',
    tag: 'Flagship Programme',
    description:
      "Africa's premier business recognition platform, honoring excellence across FMCG, Technology, Corporate Leadership, ESG and Public Service.",
    link: '/awards',
    internal: true,
  },
  {
    title: 'Community Empowerment Workshops',
    tag: 'Empowerment',
    description:
      'Skills workshops and one-on-one mentorship supporting livelihood initiatives in underserved communities.',
  },
  {
    title: 'Social Outreach & Support',
    tag: 'Outreach',
    description:
      'Connecting vulnerable populations with resources, services and information, while raising public awareness on key issues.',
  },
  {
    title: 'Recognition & Celebration Circles',
    tag: 'Recognition',
    description:
      'Local celebration events that highlight community achievements and inspire wider participation, feeding into the Angaza Awards.',
  },
];

function Avatar({ member }) {
  return (
    // overflow-hidden keeps the zoomed photo inside the circular border
    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#f97316] relative flex items-center justify-center">
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover"
        // Applies custom transform per member (if provided)
        style={{
          transform: member.transform || 'none',
        }}
      />
    </div>
  );
}
function TeamCard({ member, orangeColor }) {
  return (
    <div className="group h-60 w-f [perspective:1000px]">
      
      {/* Flip Container */}
      <div className="relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
        
        {/* ================= FRONT SIDE (Image Only) ================= */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#111112] border border-gray-800 overflow-hidden [backface-visibility:hidden]">
          <img
            src={member.photo}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ transform: member.transform || 'none' }}
          />
          <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] text-gray-300 font-mono flex items-center gap-1 border border-white/10">
            <span>Hover</span>
            <span className="text-orange-400">↻</span>
          </div>
        </div>

        {/* ================= BACK SIDE (Name & Title) ================= */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#111112] border border-orange-500/30 p-4 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="w-10 h-10 rounded-full border border-orange-500/20 mb-3 flex items-center justify-center bg-orange-500/10">
            <span className="text-orange-500 text-sm font-bold">★</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-white mb-2">{member.name}</h3>
          <p 
            className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 bg-orange-500/10 rounded-full border border-orange-500/20"
            style={{ color: orangeColor }}
          >
            {member.role}
          </p>
        </div>

      </div>
    </div>
  );
}

export default function FoundationDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [aboutSubTab, setAboutSubTab] = useState('overview');
  const [programSubTab, setProgramSubTab] = useState('programmes');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerSubmitting, setPartnerSubmitting] = useState(false);

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', interest: '' });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerSubmitting, setVolunteerSubmitting] = useState(false);
  const [volunteerError, setVolunteerError] = useState('');

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });
    const [copiedField, setCopiedField] = useState('');

    const handleCopy = (value, field) => {
      navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 1500);
    };
    
  useEffect(() => {
    const target = new Date(NEXT_EVENT.dateISO).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        isPast: false,
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);


  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleVolunteerSubmit = async (e) => {
  e.preventDefault();
  if (!volunteerForm.name || !volunteerForm.email) return;
  setVolunteerSubmitting(true);
  setVolunteerError('');
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'New Volunteer Interest — Angaza Hope Foundation',
        from_name: volunteerForm.name,
        name: volunteerForm.name,
        email: volunteerForm.email,
        interest: volunteerForm.interest || 'Not specified',
      }),
    });
    const data = await res.json();
    if (data.success) {
      setVolunteerSubmitted(true);
      setVolunteerForm({ name: '', email: '', interest: '' });
    } else {
      setVolunteerError('Something went wrong. Please try again or email us directly.');
    }
  } catch (err) {
    setVolunteerError('Could not send right now. Please try again or email us directly.');
  } finally {
    setVolunteerSubmitting(false);
  }
};

const handleContactSubmit = async (e) => {
  e.preventDefault();
  setContactSubmitting(true);
  setContactError('');

  const formData = new FormData();
  formData.append("access_key", WEB3FORMS_ACCESS_KEY || '');
  formData.append("name", contactForm.name);
  formData.append("email", contactForm.email);
  formData.append("message", contactForm.message);
  formData.append("subject", "New General Inquiry - Angaza Foundation");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    if (data.success) {
      setContactSubmitted(true);
      setContactForm({ name: '', email: '', message: '' });
    } else {
      setContactError(data.message || 'Submission failed. Please try again.');
    }
  } catch (err) {
    setContactError('Network error. Please check your connection.');
  } finally {
    setContactSubmitting(false);
  }
};
  return (
    <div className="w-full min-h-screen bg-[#0B0B0C] text-white font-sans overflow-x-hidden">

      {/* ANNOUNCEMENT BAR */}
{countdown.isPast ? (
  <div
    className="w-full text-black text-[11px] sm:text-xs font-mono uppercase tracking-widest text-center py-2.5 px-4 relative z-50 shadow-md border-b border-black/10"
    style={{ backgroundColor: ORANGE }}
  >
    Empower &middot; Inspire &middot; Transform &mdash;{' '}
    <Link to="/awards" className="underline hover:opacity-70 transition-opacity font-bold">
      See the Angaza Awards &rarr;
    </Link>
  </div>
) : (
  <div
    className="w-full text-black font-mono py-2.5 px-4 relative z-50 shadow-lg border-b border-black/10 overflow-hidden"
    style={{ backgroundColor: ORANGE }}
  >
    {/* LEFT END: CHARITY MOTIF (GIVE HOPE) */}
    <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 items-center gap-2 opacity-85">
      <div className="w-8 h-8 rounded-full bg-black/10 border border-black/20 flex items-center justify-center shadow-inner">
        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-black/80">
        Give Hope
      </span>
    </div>

    {/* CENTER CONTENT */}
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs">
      
      {/* EVENT DETAILS */}
      <div className="flex items-center gap-2 font-bold tracking-wide">
        <span className="bg-black text-white text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-sans shadow-sm">
          Next Event
        </span>
        <span className="font-serif font-bold text-sm sm:text-base text-black">
          {NEXT_EVENT.name}
        </span>
        <span className="hidden md:inline text-black/40">•</span>
        <span className="hidden md:inline text-black/80 font-medium">
          {new Date(NEXT_EVENT.dateISO).toLocaleDateString('en-KE', {
            month: 'short',
            day: 'numeric',
          })}
          {' · '}
          {NEXT_EVENT.location}
        </span>
      </div>

      {/* COUNTDOWN TIMER */}
      <div className="flex items-center gap-1.5 font-bold tracking-wider bg-black/90 text-white px-3 py-1 rounded-lg shadow-md border border-black">
        <span>{String(countdown.days).padStart(2, '0')}<span className="text-[9px] text-zinc-400 font-normal mr-0.5">d</span></span>
        <span className="text-amber-400">:</span>
        <span>{String(countdown.hours).padStart(2, '0')}<span className="text-[9px] text-zinc-400 font-normal mr-0.5">h</span></span>
        <span className="text-amber-400">:</span>
        <span>{String(countdown.minutes).padStart(2, '0')}<span className="text-[9px] text-zinc-400 font-normal mr-0.5">m</span></span>
        <span className="text-amber-400">:</span>
        <span style={{ color: ORANGE_LIGHT }}>{String(countdown.seconds).padStart(2, '0')}<span className="text-[9px] text-zinc-400 font-normal">s</span></span>
      </div>

      {/* DONATE BUTTON */}
      <button
        onClick={() => {
          setActiveTab('programmes');
          setProgramSubTab('donate');
        }}
        className="bg-black hover:bg-zinc-800 text-white px-3.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all transform hover:scale-105 flex items-center gap-1 shadow-md"
      >
        <span>Donate</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

    </div>

    {/* RIGHT END: CHARITY MOTIF (TRANSFORM LIVES) */}
    <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 items-center gap-2 opacity-85">
      <span className="text-[10px] font-bold uppercase tracking-widest text-black/80">
        Transform
      </span>
      <div className="w-8 h-8 rounded-full bg-black/10 border border-black/20 flex items-center justify-center shadow-inner">
        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
    </div>
  </div>
)}

      {/* STICKY HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl py-3 shadow-2xl'
            : 'bg-black/40 backdrop-blur-md py-5'
        }`}
        style={{ borderColor: isScrolled ? `${ORANGE}4d` : `${ORANGE}1a` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LOGO */}
          <button
            className="flex items-center space-x-3 group"
            onClick={() => setActiveTab('home')}
          >
            <img
              src={logo}
              alt="Angaza Hope Foundation logo"
              className="w-12 h-12 rounded-full object-cover shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg"
              style={{ boxShadow: `0 0 0 1px ${ORANGE}` }}
            />
            <div className="text-left">
              <span
                className="block font-serif text-base font-bold bg-gradient-to-r from-white via-gray-200 uppercase tracking-wider bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, #fff, #e5e7eb, ${ORANGE_LIGHT})` }}
              >
                Angaza Hope Foundation
              </span>
              <span className="block text-[9px] text-gray-400 tracking-widest font-mono uppercase">
                Empower &middot; Inspire &middot; Transform
              </span>
            </div>
          </button>

          {/* NAV */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                title={tab.label}
                className={`px-3 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${
                  activeTab === tab.id ? 'text-black scale-105 shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                style={activeTab === tab.id ? { backgroundColor: ORANGE } : {}}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
            <Link
              to="/awards"
              className="ml-2 px-4 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-colors"
              style={{ borderColor: `${ORANGE}66`, color: ORANGE_LIGHT }}
            >
              Angaza Awards
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden p-2" style={{ color: ORANGE }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2 flex flex-col space-y-1 border-t mt-4" style={{ borderColor: `${ORANGE}1a` }}>
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setMenuOpen(false); }}
                className={`px-2 py-2.5 rounded-lg text-sm font-mono uppercase tracking-wider text-left flex items-center gap-2 ${
                  activeTab === tab.id ? 'text-black' : 'text-gray-300'
                }`}
                style={activeTab === tab.id ? { backgroundColor: ORANGE } : {}}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
            <Link
              to="/awards"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-2.5 rounded-lg border text-sm font-bold uppercase tracking-wider text-center"
              style={{ borderColor: `${ORANGE}66`, color: ORANGE_LIGHT }}
            >
              Angaza Awards
            </Link>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 min-h-[60vh]">

        {/* ============ HOME ============ */}
        {activeTab === 'home' && (
          <Reveal variant="fade-up">
            <div className="space-y-24">
              {/* HERO */}
              <section className="relative pt-4 pb-6">
                <div
                  className="absolute -top-10 -right-10 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
                  style={{ backgroundColor: `${ORANGE}1a` }}
                />
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* LEFT: copy */}
                  <div>
                    <span
                      className="inline-block text-xs font-mono uppercase tracking-[0.3em] mb-6"
                      style={{ color: ORANGE_LIGHT }}
                    >
                      Empower &middot; Inspire &middot; Transform
                    </span>
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                      Holistic empowerment.{' '}
                      <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: `linear-gradient(90deg, ${ORANGE}, ${YELLOW})` }}
                      >
                        Lasting hope.
                      </span>
                    </h1>
                    <p className="mt-6 max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed">
                      Angaza Hope Foundation is a community-based charitable organization dedicated to
                      holistic empowerment and positive social impact. We work at the grassroots level
                      with underserved and vulnerable populations to uplift livelihoods, spread hope 
                      and foster inclusive development.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                      <button
                        onClick={() => setActiveTab('about')}
                        className="px-6 py-3.5 rounded-xl text-black text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                        style={{ backgroundColor: ORANGE }}
                      >
                        About the Foundation
                      </button>
                      <button
                        onClick={() => { setActiveTab('programmes'); setProgramSubTab('get-involved'); }}
                        className="px-6 py-3.5 rounded-xl border text-sm font-bold uppercase tracking-wider hover:bg-white/5 transition-colors"
                        style={{ borderColor: `${ORANGE}66`, color: ORANGE_LIGHT }}
                      >
                        Get Involved
                      </button>
                    </div>
                  </div>
 
                  {/* RIGHT: framed photo */}
                  <Reveal variant="scale-up" delay={150}>
                    <div className="relative max-w-sm mx-auto lg:max-w-none">
                      {/* soft ambient glow behind the frame */}
                      <div
                        className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-40 pointer-events-none"
                        style={{ backgroundColor: `${ORANGE}40` }}
                      />
                      <div
                        className="relative rounded-3xl overflow-hidden border shadow-2xl"
                        style={{ borderColor: `${ORANGE}4d`, boxShadow: `0 25px 60px -15px ${ORANGE}33` }}
                      >
                        <img
                          src={heroImage}
                          alt="Angaza Hope Foundation award presentation moment"
                          className="w-full h-auto object-cover aspect-[3/4]"
                        />
                        {/* gradient caption overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <span
                            className="text-[10px] font-mono uppercase tracking-widest"
                            style={{ color: ORANGE_LIGHT }}
                          >
                            Moments of Recognition
                          </span>
                          <p className="text-sm text-white font-semibold mt-1">
                            Celebrating excellence at the Angaza Awards
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </section>

              {/* WHAT WE DO */}
              <section>
                <Reveal variant="gold-line"><div className="h-px w-16 mb-6" style={{ backgroundColor: ORANGE }} /></Reveal>
                <h2 className="font-serif text-3xl font-bold mb-10">What We Do</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {whatWeDo.map((item, idx) => {
                    const card = (
                      <div className="h-full bg-[#111112] border border-gray-800 rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300" style={{ borderColor: '#27272a' }}>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-serif text-lg font-bold" style={{ color: ORANGE_LIGHT }}>{item.title}</h3>
                          {item.link && (
                            <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500 border border-gray-700 rounded-full px-2 py-0.5 shrink-0 ml-2">
                              Visit &rarr;
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    );
                    return (
                      <Reveal key={item.title} variant="scale-up" delay={idx * 100}>
                        {item.link ? (
                          <Link to={item.link} className="block h-full">{card}</Link>
                        ) : (
                          card
                        )}
                      </Reveal>
                    );
                  })}
                </div>
              </section>

              {/* EVENTS & GALLERY */}
          <section id="events-gallery" className="scroll-mt-10">
            <Reveal variant="gold-line">
              <div className="h-px w-16 mb-6" style={{ backgroundColor: ORANGE }} />
            </Reveal>
            <h2 className="font-serif text-3xl font-bold mb-10">Events &amp; Gallery</h2>

            {/* COUNTDOWN CARD */}
            <Reveal variant="fade-up">
              <div
                className="rounded-3xl p-8 sm:p-10 mb-10"
                style={{
                  background: `linear-gradient(120deg, ${ORANGE}1f, transparent)`,
                  border: `1px solid ${ORANGE}33`,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest"
                      style={{ color: ORANGE_LIGHT }}
                    >
                      {countdown.isPast ? 'Happening Now' : 'Next Charity Event'}
                    </span>
                    <h3 className="font-serif text-2xl font-bold mt-2">{NEXT_EVENT.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {new Date(NEXT_EVENT.dateISO).toLocaleDateString('en-KE', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                      {' · '}
                      {NEXT_EVENT.location}
                    </p>
                  </div>

                  {!countdown.isPast && (
                    <div className="flex gap-3">
                      {[
                        { value: countdown.days, label: 'Days' },
                        { value: countdown.hours, label: 'Hrs' },
                        { value: countdown.minutes, label: 'Min' },
                        { value: countdown.seconds, label: 'Sec' },
                      ].map((unit) => (
                        <div
                          key={unit.label}
                          className="text-center bg-black/50 border border-gray-800 rounded-xl px-4 py-3 min-w-[64px]"
                        >
                          <div
                            className="font-serif text-2xl font-bold"
                            style={{ color: ORANGE_LIGHT }}
                          >
                            {String(unit.value).padStart(2, '0')}
                          </div>
                          <div className="text-[9px] font-mono uppercase tracking-widest text-gray-500 mt-1">
                            {unit.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      setActiveTab('programmes');
                      setProgramSubTab('donate');
                    }}
                    className="px-5 py-3 rounded-xl text-black text-xs font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform"
                    style={{ backgroundColor: ORANGE }}
                  >
                    I Want to Attend
                  </button>
                </div>
              </div>
            </Reveal>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pastEvents.map((event, idx) => {
          const isFeatured = idx === 0;

          return (
            <Reveal
              key={event.title || idx}
              variant="scale-up"
              delay={idx * 60}
              className={isFeatured ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <div
                className={`group relative rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950 transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer flex flex-col justify-end ${
                  isFeatured ? "min-h-[360px] sm:min-h-[420px]" : "min-h-[220px]"
                }`}
              >
                {/* Background Image / Placeholder */}
                {event.photo ? (
                  <img
                    src={event.photo}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border border-dashed"
                      style={{ borderColor: `${ORANGE}50`, backgroundColor: `${ORANGE}10` }}
                    >
                      <svg
                        className="w-5 h-5"
                        style={{ color: ORANGE_LIGHT }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 6h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                        />
                      </svg>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      Pending Event Media
                    </span>
                  </div>
                )}

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Hover Arrow Badge */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                  <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                    <svg
                      className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10"
                      style={{ color: ORANGE_LIGHT }}
                    >
                      {isFeatured ? 'Featured Event' : 'Gallery'}
                    </span>
                  </div>

                  <h4
                    className={`font-serif font-bold text-white group-hover:text-amber-200 transition-colors ${
                      isFeatured ? "text-xl sm:text-2xl" : "text-base"
                    }`}
                  >
                    {event.title}
                  </h4>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>

              {/* FLAGSHIP PROGRAM CALLOUT */}
              <Reveal variant="fade-up">
                <section
                  className="rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
                  style={{ background: `linear-gradient(120deg, ${ORANGE}1f, transparent)`, border: `1px solid ${ORANGE}33` }}
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: ORANGE_LIGHT }}>
                      Flagship Programme
                    </span>
                    <h3 className="font-serif text-2xl font-bold mt-2">The Angaza Awards</h3>
                    <p className="text-sm text-gray-400 mt-2 max-w-lg">
                      Our recognition platform celebrating business excellence across the region,
                      explore this year's categories and nominees.
                    </p>
                  </div>
                  <Link
                    to="/awards"
                    className="shrink-0 px-6 py-3.5 rounded-xl text-black text-sm font-bold uppercase tracking-wider hover:scale-[1.02] transition-transform"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Visit Angaza Awards &rarr;
                  </Link>
                </section>
              </Reveal>

              {/* TESTIMONIALS */}
              <section>
                <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: ORANGE_LIGHT }}>
                  Voices
                </span>
                <h2 className="font-serif text-3xl font-bold mt-3 mb-10">Testimonials</h2>
                <div className="grid lg:grid-cols-3 gap-6">
                  {testimonials.map((t, idx) => (
                    <Reveal key={t.name} variant="fade-up" delay={idx * 100}>
                      <div className="h-full bg-[#111112] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
                        <p className="text-sm text-gray-300 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                        <div className="mt-6 pt-4 border-t border-gray-800">
                          <p className="text-sm font-bold text-white">{t.name}</p>
                          <p className="text-xs text-gray-500">{t.role}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>

              {/* CTA BANNER */}
              <Reveal variant="fade-up">
                <section
                  className="rounded-3xl p-10 text-center"
                  style={{ background: `linear-gradient(120deg, ${ORANGE}, #c95d0f)` }}
                >
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black">
                    Help Us Empower Lives &amp; Build Hope for the Future
                  </h2>
                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => { setActiveTab('programmes'); setProgramSubTab('donate'); }}
                      className="px-6 py-3.5 rounded-xl bg-black text-white text-sm font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors"
                    >
                      Donate
                    </button>
                    <button
                      onClick={() => { setActiveTab('programmes'); setProgramSubTab('volunteer'); }}
                      className="px-6 py-3.5 rounded-xl border-2 border-black text-black text-sm font-bold uppercase tracking-wider hover:bg-black/10 transition-colors"
                    >
                      Volunteer
                    </button>
                  </div>
                </section>
              </Reveal>
            </div>
          </Reveal>
        )}

        {/* ============ ABOUT US ============ */}
        {activeTab === 'about' && (
          <Reveal variant="fade-up">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: ORANGE_LIGHT }}>
                Who We Are
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-3 mb-8">About Angaza Hope Foundation</h1>

              {/* SUB NAV */}
              <div className="flex gap-2 border-b border-gray-800 mb-10">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'team', label: 'Our Team' },
                ].map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setAboutSubTab(sub.id)}
                    className={`px-4 py-3 text-xs font-mono uppercase tracking-wider border-b-2 transition-colors ${
                      aboutSubTab === sub.id ? 'text-white' : 'text-gray-500 border-transparent hover:text-gray-300'
                    }`}
                    style={aboutSubTab === sub.id ? { borderColor: ORANGE } : {}}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>

              {aboutSubTab === 'overview' && (
                <div className="space-y-16">
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                      <p className="text-gray-400 leading-relaxed">
                        Angaza Hope Foundation is a community-based charitable organization dedicated
                        to holistic empowerment and positive social impact. The Foundation works at
                        the grassroots level with underserved and vulnerable populations to uplift
                        livelihoods, spread hope, and foster inclusive development.
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: ORANGE_LIGHT }}>Mission</span>
                        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                          To provide holistic empowerment that positively impacts livelihoods and
                          society, enabling individuals and communities to overcome barriers, access
                          opportunities and realize their full potential.
                        </p>
                      </div>
                      <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: ORANGE_LIGHT }}>Vision</span>
                        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                          A society where every person,regardless of background or
                          circumstance, lives with hope, dignity and meaningful opportunities
                          to grow, contribute and thrive.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-8">Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {coreValues.map((val) => (
                        <div key={val.title} className="bg-[#111112] border border-gray-800 rounded-2xl p-6">
                          <span className="text-2xl">{val.icon}</span>
                          <h3 className="font-serif text-base font-bold mt-3 mb-2">{val.title}</h3>
                          <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-8">What Angaza Hope Foundation Does</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {whatWeDo.map((item) => {
                        const card = (
                          <div className="border rounded-2xl p-6 h-full" style={{ borderColor: `${ORANGE}33` }}>
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-serif text-base font-bold" style={{ color: ORANGE_LIGHT }}>{item.title}</h3>
                              {item.link && (
                                <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500 border border-gray-700 rounded-full px-2 py-0.5 shrink-0 ml-2">
                                  Visit &rarr;
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                          </div>
                        );
                        return item.link ? (
                          <Link key={item.title} to={item.link} className="block h-full hover:-translate-y-1 transition-transform duration-300">
                            {card}
                          </Link>
                        ) : (
                          <div key={item.title}>{card}</div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {aboutSubTab === 'team' && (
                <div>
                  <p className="text-gray-400 max-w-2xl mb-10">
                    Meet the team behind the success, the board and executive leadership
                    guiding Angaza Hope Foundation's work across our programmes.
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member) => (
                      <TeamCard key={member.name} member={member} orangeColor={ORANGE_LIGHT} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        )}

        {/* ============ PROGRAMMES ============ */}
        {activeTab === 'programmes' && (
          <Reveal variant="fade-up">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: ORANGE_LIGHT }}>
                Our Work
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-3 mb-8">Programmes</h1>

              {/* SUB NAV */}
              <div className="flex flex-wrap gap-2 border-b border-gray-800 mb-10">
                {[
                  { id: 'programmes', label: 'Our Programmes' },
                  { id: 'get-involved', label: 'Get Involved' },
                  { id: 'volunteer', label: 'Volunteer' },
                  { id: 'donate', label: 'Donate' },
                ].map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setProgramSubTab(sub.id)}
                    className={`px-4 py-3 text-xs font-mono uppercase tracking-wider border-b-2 transition-colors ${
                      programSubTab === sub.id ? 'text-white' : 'text-gray-500 border-transparent hover:text-gray-300'
                    }`}
                    style={programSubTab === sub.id ? { borderColor: ORANGE } : {}}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>

              {programSubTab === 'programmes' && (
                <div className="grid sm:grid-cols-2 gap-6">
                  {programmes.map((program) => {
                    const inner = (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: ORANGE_LIGHT }}>
                            {program.tag}
                          </span>
                          {program.internal && (
                            <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500 border border-gray-700 rounded-full px-2 py-0.5">
                              Visit site &rarr;
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif text-xl font-bold text-white mb-2">{program.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{program.description}</p>
                      </>
                    );
                    return program.internal ? (
                      <Link
                        key={program.title}
                        to={program.link}
                        className="group block h-full bg-[#111112] border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${ORANGE}80`)}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1f2937')}
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div key={program.title} className="h-full bg-[#111112] border border-gray-800 rounded-2xl p-6">
                        {inner}
                      </div>
                    );
                  })}
                </div>
              )}

              {programSubTab === 'get-involved' && (
  <>
    {/* THREE CARDS GRID */}
    <div className="grid lg:grid-cols-3 gap-6">
      
      {/* CARD 1: PARTNER WITH US */}
      <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group shadow-lg">
        <div>
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110"
            style={{ backgroundColor: `${ORANGE}15`, borderColor: `${ORANGE}40`, color: ORANGE_LIGHT }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span 
            className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border"
            style={{ backgroundColor: `${ORANGE}10`, borderColor: `${ORANGE}30`, color: ORANGE_LIGHT }}
          >
            Institutional &amp; CSR
          </span>
          <h3 className="font-serif text-xl font-bold mt-4 mb-3 text-white group-hover:text-amber-200 transition-colors">
            Partner With Us
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Corporates, NGOs, and institutions can sponsor high-impact categories at the Angaza Awards or co-host community empowerment programs.
          </p>
        </div>

        <button
          onClick={() => setIsPartnerModalOpen(true)}
          className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-700 text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all flex items-center justify-center gap-2 group/btn"
        >
          <span>Initiate Partnership</span>
          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* CARD 2: ATTEND AN EVENT */}
<div className="bg-[#111112] border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group shadow-lg">
  <div>
    <div 
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110"
      style={{ backgroundColor: `${ORANGE}15`, borderColor: `${ORANGE}40`, color: ORANGE_LIGHT }}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    <span 
      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border"
      style={{ backgroundColor: `${ORANGE}10`, borderColor: `${ORANGE}30`, color: ORANGE_LIGHT }}
    >
      Gatherings &amp; Galas
    </span>
    <h3 className="font-serif text-xl font-bold mt-4 mb-3 text-white group-hover:text-amber-200 transition-colors">
      Attend an Event
    </h3>
    <p className="text-sm text-gray-400 leading-relaxed mb-6">
      Join our CEO roundtables, community outreach initiatives, and annual awards galas to see our transformational work first-hand.
    </p>
  </div>

  <button
    onClick={() => {
      const el = document.getElementById('events-gallery');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If on another tab, switch to home first then scroll
        setActiveTab('home');
        setTimeout(() => {
          document.getElementById('events-gallery')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }}
    className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-700 text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all flex items-center justify-center gap-2 group/btn"
  >
    <span>View Events &amp; Calendar</span>
    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>
</div>

      {/* CARD 3: SPREAD THE WORD */}
<div className="bg-[#111112] border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group shadow-lg">
  <div>
    <div 
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110"
      style={{ backgroundColor: `${ORANGE}15`, borderColor: `${ORANGE}40`, color: ORANGE_LIGHT }}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    </div>
    <span 
      className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border"
      style={{ backgroundColor: `${ORANGE}10`, borderColor: `${ORANGE}30`, color: ORANGE_LIGHT }}
    >
      Advocacy &amp; Outreach
    </span>
    <h3 className="font-serif text-xl font-bold mt-4 mb-3 text-white group-hover:text-amber-200 transition-colors">
      Spread the Word
    </h3>
    <p className="text-sm text-gray-400 leading-relaxed mb-6">
      Awareness drives lasting impact. Share our mission with your network or amplify our social channels to advocate for youth empowerment.
    </p>
  </div>

  <button
    onClick={() => setIsShareModalOpen(true)}
    className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-700 text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all flex items-center justify-center gap-2 group/btn"
  >
    <span>Share &amp; Advocate</span>
    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  </button>
</div>

    </div>

    {/* PARTNERSHIP INQUIRY MODAL (POSITIONED OUTSIDE GRID) */}
    {isPartnerModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div className="bg-[#111112] border border-zinc-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          
          {/* Close Button */}
          <button
            onClick={() => { setIsPartnerModalOpen(false); setPartnerSubmitted(false); }}
            className="absolute top-5 right-5 text-zinc-400 hover:text-white w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-colors"
          >
            ✕
          </button>

          {!partnerSubmitted ? (
            <>
              <div className="mb-6">
                <span 
                  className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border"
                  style={{ backgroundColor: `${ORANGE}10`, borderColor: `${ORANGE}30`, color: ORANGE_LIGHT }}
                >
                  Institutional &amp; CSR
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-3">Partner with Angaza</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Co-host initiatives, sponsor Angaza Awards categories, or align your corporate social responsibility.
                </p>
              </div>

              <form
  onSubmit={async (e) => {
    e.preventDefault();
    
    // Check if the key exists before attempting send
    if (!WEB3FORMS_ACCESS_KEY) {
      alert("Missing Web3Forms key. Check your .env file and restart the Vite server.");
      return;
    }

    setPartnerSubmitting(true);
    const formData = new FormData(e.target);
    formData.append("subject", "New Institutional Partnership Request - Angaza");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setPartnerSubmitted(true);
      } else {
        alert(`Submission failed: ${data.message}`);
      }
    } catch (err) {
      alert("An error occurred. Check your connection.");
    } finally {
      setPartnerSubmitting(false);
    }
  }}
  className="space-y-4"
>
  {/* HIDDEN ACCESS KEY FIELD */}
  <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY || ''} />

  <div>
    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
      Organization / Company Name *
    </label>
    <input
      type="text"
      name="organization"
      required
      placeholder="e.g. Acme Foundation / Safaricom PLC"
      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
    />
  </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full Name"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    Partnership Scope *
                  </label>
                  <select
                    name="partnership_type"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Angaza Awards Category Sponsor">Angaza Awards Category Sponsor</option>
                    <option value="Community Outreach Co-Hosting">Community Outreach Co-Hosting</option>
                    <option value="Corporate Social Responsibility (CSR)">Corporate Social Responsibility (CSR)</option>
                    <option value="In-Kind / Logistics Support">In-Kind / Logistics Support</option>
                    <option value="Other Partnership">Other Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    Proposal / Details *
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    required
                    placeholder="Briefly describe your organization's goals or proposed collaboration..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={partnerSubmitting}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 font-sans"
                  style={{ backgroundColor: ORANGE }}
                >
                  {partnerSubmitting ? 'Submitting...' : 'Send Partnership Proposal'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border"
                style={{ backgroundColor: `${ORANGE}15`, borderColor: `${ORANGE}40`, color: ORANGE_LIGHT }}
              >
                ✓
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Proposal Received!</h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed mb-6">
                Thank you for reaching out to Angaza Hope Foundation. Our executive team will review your proposal and respond via email shortly.
              </p>
              <button
                onClick={() => { setIsPartnerModalOpen(false); setPartnerSubmitted(false); }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    )}
    {/* SHARE & ADVOCATE MODAL */}
{isShareModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
    <div className="bg-[#111112] border border-zinc-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
      
      {/* Close Button */}
      <button
        onClick={() => { setIsShareModalOpen(false); setCopiedLink(false); }}
        className="absolute top-5 right-5 text-zinc-400 hover:text-white w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-colors"
      >
        ✕
      </button>

      <div className="mb-6">
        <span 
          className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border"
          style={{ backgroundColor: `${ORANGE}10`, borderColor: `${ORANGE}30`, color: ORANGE_LIGHT }}
        >
          Advocacy &amp; Community
        </span>
        <h3 className="font-serif text-2xl font-bold text-white mt-3">Amplify Our Mission</h3>
        <p className="text-xs text-zinc-400 mt-1">
          Help Angaza Hope Foundation reach more leaders and sponsors by sharing our platform.
        </p>
      </div>

      {/* QUICK SOCIAL SHARE BUTTONS */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent("Empowering communities & inspiring leaders with Angaza Hope Foundation: " + window.location.href)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-950/20 text-zinc-200 hover:text-white transition-all text-xs font-semibold"
        >
          <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm font-bold">WA</span>
          <span>WhatsApp</span>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-sky-500/50 hover:bg-sky-950/20 text-zinc-200 hover:text-white transition-all text-xs font-semibold"
        >
          <span className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center text-sm font-bold">in</span>
          <span>LinkedIn</span>
        </a>

        {/* X / Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Check out Angaza Hope Foundation")}&url=${encodeURIComponent(window.location.href)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-500/50 hover:bg-zinc-800/50 text-zinc-200 hover:text-white transition-all text-xs font-semibold"
        >
          <span className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center text-sm font-bold">𝕏</span>
          <span>X / Twitter</span>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-blue-950/20 text-zinc-200 hover:text-white transition-all text-xs font-semibold"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-bold">fb</span>
          <span>Facebook</span>
        </a>
      </div>

      {/* COPY LINK BAR */}
      <div>
        <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
          Or Copy Direct Link
        </label>
        <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl p-1.5">
          <input
            type="text"
            readOnly
            value={window.location.href}
            className="bg-transparent w-full text-xs text-zinc-300 px-3 focus:outline-none font-mono truncate"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopiedLink(true);
              setTimeout(() => setCopiedLink(false), 3000);
            }}
            className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-black shrink-0 transition-all"
            style={{ backgroundColor: copiedLink ? '#10b981' : ORANGE }}
          >
            {copiedLink ? 'Copied! ✓' : 'Copy'}
          </button>
        </div>
      </div>

    </div>
  </div>
)}
  </>
)}

              {programSubTab === 'volunteer' && (
  <div className="w-full max-w-6xl">
    {/* Header */}
    <div className="max-w-xl mb-8">
      <h3 className="font-serif text-2xl font-bold mb-3">Volunteer With Us</h3>
      <p className="text-sm text-gray-400 leading-relaxed">
        Tell us a little about yourself and where you'd like to help, our team will
        follow up with current volunteer opportunities that fit.
      </p>
    </div>

    {/* 2-Column Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Column: Volunteer Form */}
      <div className="lg:col-span-7">
        <form onSubmit={handleVolunteerSubmit} className="bg-[#111112] border border-gray-800 p-6 rounded-2xl space-y-4">
          {volunteerSubmitted && (
            <div className="rounded-lg px-4 py-3 text-sm" style={{ backgroundColor: `${ORANGE}1f`, color: ORANGE_LIGHT, border: `1px solid ${ORANGE}4d` }}>
              Thank you. We've received your interest and will be in touch.
            </div>
          )}
          {volunteerError && (
            <div className="rounded-lg px-4 py-3 text-sm bg-red-500/10 text-red-400 border border-red-500/30">
              {volunteerError}
            </div>
          )}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
            <input
              type="text"
              value={volunteerForm.name}
              onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
              className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
              onFocus={(e) => (e.target.style.borderColor = ORANGE)}
              onBlur={(e) => (e.target.style.borderColor = '#1f2937')}
              placeholder="Jane Doe"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
            <input
              type="email"
              value={volunteerForm.email}
              onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
              className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
              onFocus={(e) => (e.target.style.borderColor = ORANGE)}
              onBlur={(e) => (e.target.style.borderColor = '#1f2937')}
              placeholder="jane@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Area of Interest</label>
            <input
              type="text"
              value={volunteerForm.interest}
              onChange={(e) => setVolunteerForm({ ...volunteerForm, interest: e.target.value })}
              className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
              onFocus={(e) => (e.target.style.borderColor = ORANGE)}
              onBlur={(e) => (e.target.style.borderColor = '#1f2937')}
              placeholder="e.g. Community outreach, Events, ICT support"
            />
          </div>
          <button
            type="submit"
            disabled={volunteerSubmitting}
            className="w-full py-3.5 rounded-xl text-black text-sm font-bold uppercase tracking-wider hover:scale-[1.01] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{ backgroundColor: ORANGE }}
          >
            {volunteerSubmitting ? 'Sending...' : 'Submit Interest'}
          </button>
        </form>
      </div>

      {/* Right Column: Volunteer Value Highlights & Process */}
      <div className="lg:col-span-5 space-y-6">
        
        {/* Why Volunteer Card */}
        <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
            Why Join Our Volunteer Network
          </span>
          
          <div className="space-y-4 pt-1">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: ORANGE }} />
              <div>
                <h4 className="text-xs font-bold text-white">Direct Community Impact</h4>
                <p className="text-[11px] text-gray-400 leading-normal mt-0.5">
                  Work on local projects that directly empower youth and community initiatives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: ORANGE }} />
              <div>
                <h4 className="text-xs font-bold text-white">Skill & Leadership Growth</h4>
                <p className="text-[11px] text-gray-400 leading-normal mt-0.5">
                  Gain hands-on experience in mentorship, event management, ICT, or outreach.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: ORANGE }} />
              <div>
                <h4 className="text-xs font-bold text-white">Flexible Schedules</h4>
                <p className="text-[11px] text-gray-400 leading-normal mt-0.5">
                  Whether remote, hybrid, or on-site, we align opportunities with your availability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Card */}
        <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
            What Happens Next?
          </span>
          <p className="text-xs text-gray-400 leading-relaxed">
            After receiving your submission, our coordination team reviews your area of interest and reaches out via email within 48 hours to discuss active openings.
          </p>
        </div>

      </div>

    </div>
  </div>
)}

              {programSubTab === 'donate' && (
              <div className="w-full max-w-6xl">
                {/* Header */}
                <div className="max-w-xl mb-8">
                  <h3 className="font-serif text-2xl font-bold mb-3">Support Our Work</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Every contribution helps us extend empowerment programmes to more communities.
                    Give directly via M-Pesa below, instant online checkout is coming soon.
                  </p>
                </div>

                {/* 2-Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: M-Pesa Payment Box */}
                  <div className="lg:col-span-7">
                    <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                          M
                        </span>
                        <span className="text-sm font-bold text-white">Give via M-Pesa</span>
                      </div>

                      {MPESA_DETAILS.type === 'paybill' ? (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between bg-black/50 border border-gray-800 rounded-xl px-4 py-3">
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
                                Business No. (Paybill)
                              </span>
                              <span className="text-lg font-serif font-bold text-white">
                                {MPESA_DETAILS.paybillNumber}
                              </span>
                            </div>
                            <button
                              onClick={() => handleCopy(MPESA_DETAILS.paybillNumber, 'paybill')}
                              className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg border hover:bg-white/5 transition-colors"
                              style={{ borderColor: `${ORANGE}66`, color: ORANGE_LIGHT }}
                            >
                              {copiedField === 'paybill' ? 'Copied!' : 'Copy'}
                            </button>
                          </div>

                          <div className="flex items-center justify-between bg-black/50 border border-gray-800 rounded-xl px-4 py-3">
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
                                Account No.
                              </span>
                              <span className="text-lg font-serif font-bold text-white">
                                {MPESA_DETAILS.accountNumber}
                              </span>
                            </div>
                            <button
                              onClick={() => handleCopy(MPESA_DETAILS.accountNumber, 'account')}
                              className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg border hover:bg-white/5 transition-colors"
                              style={{ borderColor: `${ORANGE}66`, color: ORANGE_LIGHT }}
                            >
                              {copiedField === 'account' ? 'Copied!' : 'Copy'}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between bg-black/50 border border-gray-800 rounded-xl px-4 py-3">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
                              Till Number
                            </span>
                            <span className="text-lg font-serif font-bold text-white">
                              {MPESA_DETAILS.tillNumber}
                            </span>
                          </div>
                          <button
                            onClick={() => handleCopy(MPESA_DETAILS.tillNumber, 'till')}
                            className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-lg border hover:bg-white/5 transition-colors"
                            style={{ borderColor: `${ORANGE}66`, color: ORANGE_LIGHT }}
                          >
                            {copiedField === 'till' ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      )}

                      <div className="pt-4 border-t border-gray-800">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-2">
                          How to pay
                        </span>
                        <ol className="text-xs text-gray-400 leading-relaxed space-y-1 list-decimal list-inside">
                          <li>Go to M-Pesa on your phone &rarr; Lipa na M-Pesa</li>
                          {MPESA_DETAILS.type === 'paybill' ? (
                            <>
                              <li>Select Pay Bill</li>
                              <li>
                                Enter Business No. <strong className="text-gray-300">{MPESA_DETAILS.paybillNumber}</strong>
                              </li>
                              <li>
                                Enter Account No. <strong className="text-gray-300">{MPESA_DETAILS.accountNumber}</strong>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>Select Buy Goods and Services</li>
                              <li>
                                Enter Till Number <strong className="text-gray-300">{MPESA_DETAILS.tillNumber}</strong>
                              </li>
                            </>
                          )}
                          <li>Enter the amount you'd like to give and confirm with your PIN</li>
                        </ol>
                      </div>

                      <p className="text-[11px] text-gray-500 pt-2 border-t border-gray-800">
                        Registered to: {MPESA_DETAILS.accountName}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Social Proof, Trust Badges & Contact */}
                  <div className="lg:col-span-5 space-y-6">
                    
                    {/* Impact & Trust Card */}
                    <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6 space-y-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
                        Why Your Donation Matters
                      </span>
                      <div className="grid grid-cols-2 gap-3 py-1">
                        <div className="bg-black/40 border border-gray-800/80 rounded-xl p-3">
                          <span className="text-xl font-bold block" style={{ color: ORANGE_LIGHT }}>100%</span>
                          <span className="text-[11px] text-gray-400 leading-tight block mt-0.5">Direct Program Support</span>
                        </div>
                        <div className="bg-black/40 border border-gray-800/80 rounded-xl p-3">
                          <span className="text-xl font-bold block" style={{ color: ORANGE_LIGHT }}>Instant</span>
                          <span className="text-[11px] text-gray-400 leading-tight block mt-0.5">Verification & Receipt</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 italic leading-relaxed border-l-2 pl-3 py-1" style={{ borderColor: ORANGE }}>
                        "Your support directly enables targeted empowerment initiatives across our active community programmes."
                      </p>
                    </div>

                    {/* Direct Inquiries & Contact Card */}
                    <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6 space-y-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
                        Prefer to talk it through?
                      </span>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Phone</span>
                          <span className="text-white font-medium">{contact.phone}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Email</span>
                          <span className="text-white font-medium">{contact.email}</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => setActiveTab('contact')}
                        className="w-full mt-2 px-6 py-3.5 rounded-xl text-black text-sm font-bold uppercase tracking-wider hover:scale-[1.01] transition-transform"
                        style={{ backgroundColor: ORANGE }}
                      >
                        Contact Us to Give
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            )}
            </div>
          </Reveal>
        )}

        {/* ============ CONTACT US ============ */}
        {activeTab === 'contact' && (
          <Reveal variant="fade-up">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: ORANGE_LIGHT }}>
                Reach Us
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-3 mb-10">Contact Us</h1>

              <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: ORANGE_LIGHT }}>Phone</span>
                    <p className="mt-2 text-sm text-gray-300">📞 {contact?.phone || '+254 707 045 440'}</p>
                  </div>
                  <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: ORANGE_LIGHT }}>Email</span>
                    <p className="mt-2 text-sm text-gray-300 break-all">✉️ {contact?.email || 'angazahope.org@gmail.com'}</p>
                  </div>
                  <div className="bg-[#111112] border border-gray-800 rounded-2xl p-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: ORANGE_LIGHT }}>Website</span>
                    <p className="mt-2 text-sm text-gray-300">🌐 {contact?.website || 'www.angazahope.org'}</p>
                  </div>
                  <div className="rounded-2xl p-6 border" style={{ borderColor: `${ORANGE}33` }}>
                    <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: ORANGE_LIGHT }}>Angaza Awards Enquiries</span>
                    <p className="mt-2 text-sm text-gray-300">
                      For nomination or event questions specifically, visit{' '}
                      <Link to="/awards" className="underline" style={{ color: ORANGE_LIGHT }}>
                        the Angaza Awards page
                      </Link>.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleContactSubmit} className="bg-black/60 border border-gray-800 p-6 rounded-xl space-y-4 h-fit">
                  {contactSubmitted && (
                  <div className="rounded-lg px-4 py-3 text-sm" style={{ backgroundColor: `${ORANGE}1f`, color: ORANGE_LIGHT, border: `1px solid ${ORANGE}4d` }}>
                    Message sent &mdash; thank you. We'll get back to you shortly.
                  </div>
                )}
                {contactError && (
                  <div className="rounded-lg px-4 py-3 text-sm bg-red-500/10 text-red-400 border border-red-500/30">
                    {contactError}
                  </div>
                )}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-[#111112] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none"
                      onFocus={(e) => (e.target.style.borderColor = ORANGE)}
                      onBlur={(e) => (e.target.style.borderColor = '#1f2937')}
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-[#111112] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none"
                      onFocus={(e) => (e.target.style.borderColor = ORANGE)}
                      onBlur={(e) => (e.target.style.borderColor = '#1f2937')}
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">Message</label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      rows={5}
                      className="w-full bg-[#111112] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none resize-none"
                      onFocus={(e) => (e.target.style.borderColor = ORANGE)}
                      onBlur={(e) => (e.target.style.borderColor = '#1f2937')}
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <button
                      type="submit"
                      disabled={contactSubmitting}
                      className="w-full py-3.5 rounded-lg text-black text-sm font-bold uppercase tracking-wider hover:scale-[1.01] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                      style={{ backgroundColor: ORANGE }}
                    >
                      {contactSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
              </div>
            </div>
          </Reveal>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="w-8 h-8 rounded-full" />
              <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
                Angaza Hope Foundation
              </h4>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Dedicated to celebrating business longevity, service delivery innovations and
              transparent regional acceleration programs, including the Angaza Awards.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest" style={{ color: ORANGE }}>Quick Links</h4>
            <div className="flex flex-col gap-2 text-xs text-gray-400">
              <button onClick={() => setActiveTab('about')} className="text-left hover:text-white transition-colors">About Us</button>
              <button onClick={() => setActiveTab('programmes')} className="text-left hover:text-white transition-colors">Programmes</button>
              <Link to="/awards" className="hover:text-white transition-colors">Angaza Awards</Link>
              <button onClick={() => setActiveTab('contact')} className="text-left hover:text-white transition-colors">Contact Us</button>
            </div>
          </div>

          <div className="space-y-2 text-xs font-mono text-gray-400">
            <h4 className="text-xs uppercase font-bold tracking-widest font-sans" style={{ color: ORANGE }}>Contact Points</h4>
            <p className="block">📞 {contact.phone}</p>
            <p className="block truncate">✉️ {contact.email}</p>
            <p className="block">🌐 {contact.website}</p>
            <p className="text-[10px] text-gray-600 pt-2">© 2026 Angaza Hope Foundation. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
