#  Angaza Awards Web Platform

A luxury, high-performance web dashboard built for the **Angaza® Awards** Africa's premier platform celebrating excellence across **FMCG, Technology, Corporate Leadership, ESG and Public Service** sectors.

The platform is a modern **Single Page Application (SPA)** built with **React** and **Tailwind CSS**, featuring smooth animations, responsive layouts, interactive navigation, and an elegant luxury-inspired design system.

---

## Features

-  Modern Single Page Application (SPA)
-  Luxury dark & gold themed UI
-  Mobile-first responsive design
-  Scroll-triggered reveal animations
-  Sticky glassmorphism navigation
-  Dynamic tab-based navigation
- About portal with nested sidebar navigation
-  Interactive FAQ accordion
-  Event calendar
-  Newsletter subscription form
-  Contact hub with inquiry form
-  Hero banner with call-to-action buttons
-  Awards category showcase
-  Optimized performance with lightweight components

---

#  Technology Stack

| Layer | Technology | Purpose |
|--------|------------|---------|
| Frontend | React 18+ | Component-based UI |
| Styling | Tailwind CSS | Utility-first styling |
| Animations | Intersection Observer API | Scroll reveal animations |
| Icons | Inline SVG + Emoji | Lightweight iconography |
| Build Tool | Vite | Fast development & production builds |

---

#  Project Structure

```text
angaza-awards/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── background.png
│   │
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   └── Reveal.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── tailwind.config.js
└── README.md
```

---

# ⚙ Core Components

## Dashboard.jsx

The primary application container responsible for:

- Global application state
- Navigation management
- Page rendering
- Sticky header behavior
- Responsive layouts
- Section switching

### State Management

| State | Description |
|--------|-------------|
| `activeTab` | Controls the active page |
| `aboutSubTab` | Controls About portal navigation |
| `openFaqIndex` | Tracks expanded FAQ item |
| `isScrolled` | Toggles sticky glass navigation |

---

## Reveal.jsx

A reusable animation wrapper powered by the native **Intersection Observer API**.

### Supported Animations

- Fade Up
- Scale Up
- Slide Left
- Gold Line Expansion

### Props

| Prop | Type | Description |
|------|------|-------------|
| `variant` | string | Animation style |
| `delay` | number | Animation delay |
| `className` | string | Additional styling |

---

#  Platform Overview

##  Announcement Bar

- Live nomination updates
- Direct nomination CTA
- Event notifications

---

##  Dynamic Navigation

- Sticky navigation
- Glassmorphism effects
- Smooth transitions
- Mobile horizontal navigation

---

##  Home

Includes:

- Hero Banner
- CTA Buttons
- Awards Overview
- Featured Categories
- Trust & Evaluation Framework

---

##  Award Categories

The platform showcases multiple award tracks including:

- FMCG
- Technology
- Corporate Leadership
- ESG
- Public Service
- Service Delivery

---

#  About Portal

The About section features a dedicated sidebar navigation with dynamic content.

## About Us

- Organization overview
- Mission & vision
- Promotional media
- Category highlights

---

## Event Calendar

Displays upcoming activities such as:

- CEO Roundtables
- Nomination Launches
- Gala Events
- Awards Ceremony

---

## FAQ

Interactive accordion covering:

- Eligibility
- Voting process
- Nomination requirements
- Evaluation standards
- Award benefits

---

## Team & Governance

Information about:

- Executive Committee
- Research Team
- Vetting Panel
- Independent Audit Team

---

## Newsletter

Email subscription form allowing visitors to receive updates about:

- Nominations
- Events
- Winners
- Announcements

---

## Contact

Dedicated contact hub featuring:

- Phone
- WhatsApp
- Email
- Office Location
- Contact Form

---

#  Design System

## Color Palette

| Element | Color |
|----------|--------|
| Background | `#060606` |
| Surface | `#111112` |
| Accent Gold | `#D4AF37` |
| Primary Text | `#F3F4F6` |
| Secondary Text | `#9CA3AF` |
| Borders | `rgba(212,175,55,0.2)` |

---

## Typography

- **Playfair Display** – Headings
- **Inter** – Body text
- **JetBrains Mono** – Technical text

---

# ⚡ Getting Started

## Prerequisites

- Node.js v18+
- npm or Yarn

---

## Installation

Clone the repository.

```bash
git clone https://github.com/your-username/angaza-awards-dashboard.git
```

Navigate into the project.

```bash
cd angaza-awards-dashboard
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

Build for production.

```bash
npm run build
```

Preview the production build.

```bash
npm run preview
```

---

# ⚙ Tailwind Configuration

Ensure Tailwind scans your source files.

```javascript
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },

  plugins: [],
};
```

---

#  Roadmap

- [ ] Live Public Voting System
- [ ] M-Pesa Payment Integration
- [ ] Mobile Money API Support
- [ ] Nomination Submission Portal
- [ ] Document Uploads
- [ ] Candidate Search & Filters
- [ ] Admin Dashboard
- [ ] Analytics & Reporting
- [ ] User Authentication
- [ ] CMS Integration
- [ ] Multi-language Support
- [ ] Dark/Light Theme Toggle

---


3. Commit your changes.

```bash
git commit -m "Add awesome feature"
```

4. Push your branch.

```bash
git push origin feature/my-feature
```

5. Open a Pull Request.

---

#  License

This project is proprietary and developed for the **Angaza® Awards**.

Unauthorized reproduction, distribution, or commercial use is prohibited unless explicitly approved by the project owners.

---

#  Developed By

**Angaza Awards Technology Team**

Building Africa's premier digital platform for recognizing excellence, innovation, leadership and impact.

---

##  Vision

To deliver a world-class digital experience that celebrates outstanding organizations, leaders, and innovators while providing a transparent, engaging, and trusted awards platform for Africa.
