# Angaza Unified Web Platform

> **A high-performance, full-stack digital ecosystem uniting the Angaza® Awards and the Angaza Hope Foundation.**

The **Angaza Unified Web Platform** brings together **Angaza® Awards**Africa's premier platform celebrating excellence across FMCG, Technology, Corporate Leadership, ESG, and Public Service and the **Angaza Hope Foundation**, driving youth leadership, education, and community empowerment across Africa.

The platform combines a **luxury-themed Single Page Application (SPA)** with a secure **Node.js/Express REST backend**, delivering:

*  Real-time public voting
*  Automated M-Pesa mobile transactions
*  Impact metrics and analytics
*  Secure authentication and authorization
*  Administrative governance
*  Award nominations and candidate vetting
*  Donations and foundation engagement

##  Technology Stack & Toolkit

###  Languages

<p align="left">
  <img src="https://skillicons.dev/icons?i=js,python,mysql,html,css" />
</p>

###  Frameworks & Libraries

<p align="left">
  <img src="https://skillicons.dev/icons?i=react,nodejs,express,tailwind" />
</p>

###  Developer Tools & Services

<p align="left">
  <img src="https://skillicons.dev/icons?i=vite,git,github,jwt" />
</p>

#  Project Structure

```text
angaza-awards/
│
├── client/                         # React Frontend Application (Vite)
│   ├── public/                     # Favicons, vector icons, and static assets
│   ├── src/
│   │   ├── assets/                 # Logos, hero images, and team photos
│   │   ├── components/             # Shared UI elements (Buttons, Modals, Inputs)
│   │   ├── features/
│   │   │   ├── awards/             # Voting cards, nomination forms, category views
│   │   │   └── foundation/         # Impact metrics, program cards, team grids
│   │   ├── hooks/                  # Custom React hooks (e.g., useAuth)
│   │   ├── layouts/                # MainLayout (Header, Foundation Top Bar, Footer)
│   │   ├── pages/                  # Home, AwardsHome, Dashboard, Login, NotFound
│   │   ├── services/               # Global Axios REST service instances
│   │   └── styles/                 # Global CSS and Tailwind directives
│   └── package.json
│
├── server/                         # Express REST Backend API
│   ├── src/
│   │   ├── config/                 # Environment variables, logger, and DB settings
│   │   ├── controllers/            # Auth, votes, payments, nominations
│   │   ├── middleware/             # JWT auth, validation, rate limiting, error handling
│   │   ├── models/                 # Relational data schemas and models
│   │   ├── routes/                 # RESTful API route definitions
│   │   └── utils/                  # Async handlers and response wrappers
│   └── package.json
│
├── scripts/                        # Utility and seeding scripts
│   ├── seed.py                     # Python database seed engine
│   └── requirements.txt
│
├── package.json                    # Root workspace package
└── README.md
```

---

#  Core Platform Modules & Technical Execution

##  1. Voting Portal

### Overview & Experience

A secure and transparent public voting system enabling verified audience participation across award categories.

Voters can:

* Browse nominee profiles
* Review evaluation criteria
* Cast votes
* Receive real-time UI feedback
* View dynamically updated vote counters

### Technical Execution

**Frontend**

* React 18 functional components
* `useState` for local ballot management
* Axios for asynchronous vote dispatching
* Tailwind CSS for category filters and candidate ranking cards

**Backend**

* Express REST controllers
* Strict vote validation pipelines
* `express-rate-limit` for IP-based protection
* JWT session verification
* Protection against automated ballot stuffing, script attacks, and abuse

**Database & Integrity**

Database operations run inside atomic SQL transactions:

```sql
BEGIN;
-- Vote operations
COMMIT;
```

When a vote is confirmed:

1. Candidate tally counts are incremented.
2. A single-use transaction record is generated.
3. The transaction can be used for post-event independent auditing.



#  2. Integrated Payment Method — Daraja API

### Overview & Experience

An automated mobile-money checkout engine powered by the **Safaricom M-Pesa Daraja API**.

Users can enter their phone number to receive an instant **M-Pesa STK Push** when:

* Purchasing gala tickets
* Funding voting packages
* Making donations

### Technical Execution

####  Authentication

The Express backend communicates with the Daraja OAuth 2.0 endpoint to generate short-lived access tokens using:

* Consumer Key
* Consumer Secret
* Axios
* Node.js native Crypto functionality

####  STK Push Generation

The backend generates a **Lipa Na M-Pesa Online / ProcessRequest** payload.

The password is generated using:

```text
BusinessShortCode + Passkey + Timestamp
```

The resulting value is Base64 encoded before being transmitted to Safaricom's API gateway.

####  Callback Reconciliation

Safaricom sends an asynchronous HTTP POST callback to:

```text
/api/v1/payments/callback
```

The Express callback handler:

1. Parses the JSON response.
2. Validates the `ResultCode`.
3. Updates the corresponding order status.
4. Marks successful transactions as `COMPLETED`.
5. Dispatches automated confirmation notifications.



#  3. Admin Dashboard

### Overview & Experience

A centralized governance command center providing:

* Real-time data visualization
* Candidate vetting workflows
* Financial payment audit logs
* Content management
* User access control

### Technical Execution

**Frontend**

React components render visualization suites using:

* SVG charts
* Lucide UI libraries
* Real-time filtering
* Nominee approval workflows
* Transaction lookups

**Backend & RBAC**

Routes are protected using custom **Role-Based Access Control (RBAC)** middleware.

Requests must contain a valid Bearer JWT with an appropriate claim such as:

```text
ADMIN
AUDITOR
```

**Data Processing**

SQL query abstractions provide:

* Server-side pagination
* Structured filtering
* Aggregation using `COUNT` and `SUM`
* Indexed queries
* Optimized dashboard payloads



#  4. Gallery & Events

### Overview & Experience

An interactive media archive and event scheduling hub featuring:

* High-resolution gala photography
* Video highlights
* Upcoming CEO Roundtables
* Interactive calendars
* Registration links
* RSVP tracking

### Technical Execution

####  Scroll Animations

React wrapper components use the native **Intersection Observer API** through components such as:

```text
Reveal.jsx
```

Animations include:

* `fade-up`
* `scale-up`
* `gold-line-expand`

####  Media Optimization

Image galleries use:

* Responsive `<picture>` elements
* Native `loading="lazy"`
* Optimized image delivery

This reduces initial DOM paint time and bandwidth usage on mobile networks.

####  Event Synchronization

JavaScript date utilities handle:

* Real-time relative dates
* Gala countdown timers
* Dynamic event status indicators


#  5. Getting Involved

### Overview & Experience

An engagement hub designed for:

* Volunteers
* Mentors
* Corporate sponsors
* Youth leaders
* Foundation partners

The platform provides role-based inquiry forms and partnership onboarding workflows.

### Technical Execution

**Form Architecture**

Multi-context React state controllers manage dynamic tabs for:

* Volunteer
* Mentor
* Sponsor

The interface switches between profiles without triggering route navigation.

**Serverless Form Routing**

Submission payloads are sent through **Web3Forms API** endpoints using asynchronous client requests.

Features include:

* Structured HTML contact packets
* Administrative email delivery
* Anti-spam validation



#  6. Donations

### Overview & Experience

A multi-tier financial support system allowing individuals and corporate donors to support:

* Community outreach programs
* Youth scholarships
* Leadership initiatives

The platform provides transparent allocation progress tracking.

### Technical Execution

**Checkout Integration**

Donations are processed through the **Daraja M-Pesa STK Push pipeline**.

**Impact Visualizers**

Custom React progress components calculate funding benchmarks in real time.

After successful Daraja webhook confirmation:

```text
Payment → Webhook → Database Update → Impact Percentage → UI
```



#  7. Nominations

### Overview & Experience

A structured candidate submission portal allowing organizations and individuals to nominate industry leaders.

The system supports:

* Multi-step profile building
* Document and evidence uploads
* Criteria validation
* Automated notification pipelines
* Vetting workflows

### Technical Execution

####  Multi-Step Form Wizard

The candidate submission process follows:

```text
Nominee Details
      ↓
Category Selection
      ↓
Impact Justification
      ↓
Document Uploads
```

####  Payload & File Processing

Express endpoints use **Multer** to process:

```text
multipart/form-data
```

Uploaded files are validated based on:

* PDF and image extensions
* File size
* MIME type

####  Data Sanitization

Incoming fields pass through **Express-Validator** to help prevent:

* Malicious scripts
* XSS vectors
* Invalid characters



#  8. Empowering Lives

### Overview & Experience

An interactive digital storytelling module highlighting:

* Foundation milestones
* Beneficiary success stories
* Scholarship statistics
* Community development projects
* Youth empowerment initiatives

### Technical Execution

####  Dynamic Counter Engine

As users scroll into statistical sections, custom React hooks trigger animated numerical counters based on real-world impact metrics.

####  REST Content Delivery

Beneficiary profiles and milestone cards are fetched dynamically from JSON REST endpoints, separating:

```text
Content → API → Presentation Layer
```

This keeps media and narrative content independent from the UI presentation logic.

---

#  Technical Summary Matrix

| Module                   | Core Frontend Tech            | Backend / API Tech             | Database & Security                    |
| ------------------------ | ----------------------------- | ------------------------------ | -------------------------------------- |
|  **Voting Portal**    | React 18, Tailwind CSS, Axios | Express REST API, Rate Limiter | Atomic SQL Transactions, JWT Auth      |
|  **Daraja Payments**   | React State, Axios            | Safaricom Daraja API, Webhooks | OAuth 2.0, Webhook Signature Check     |
|  **Admin Dashboard**  | React, SVG Data Charts        | Express RBAC Middleware        | Indexed SQL Aggregations, JWT Claims   |
|  **Gallery & Events** | Intersection Observer, Modals | Express Events API             | Responsive Image Compression           |
|  **Getting Involved**  | React Tabbed Forms            | Web3Forms API, Express Route   | Serverless Routing, Input Sanitization |
|  **Donations**         | React Impact Bars             | Daraja API STK Push            | Callback Verification, SQL Audit Logs  |
|  **Nominations**       | Multi-step Form Wizard        | Multer, Express-Validator      | Encrypted File Metadata Storage        |
|  **Empowering Lives**  | React, Animated Counters      | Express Stories API            | RESTful Impact Metrics JSON            |



#  Design System & Brand Tokens

## Color Palette

| Token Name               | Color Code | Visual Role                                |
| ------------------------ | ---------- | ------------------------------------------ |
| **Deep Background**      | `#060606`  | Primary luxury dark layout background      |
| **Surface Level 1**      | `#111112`  | Elevated cards, containers, and modals     |
| **Accent Gold**          | `#D4AF37`  | Awards primary accent, borders, and badges |
| **Foundation Highlight** | `#F97316`  | Foundation highlights and primary actions  |
| **Primary Text**         | `#F3F4F6`  | High-contrast headings and body text       |
| **Secondary Text**       | `#9CA3AF`  | Subtitles, labels, and technical metadata  |

## Typography

| Font                 | Usage                                       |
| -------------------- | ------------------------------------------- |
| **Playfair Display** | Award titles, headings, and luxury branding |
| **Inter**            | Main body UI, forms, and navigation         |
| **JetBrains Mono**   | Data metrics, timestamps, and status badges |



#  Security & Performance Architecture

###  Authentication & Authorization

Stateless JWT authentication with route middleware enforcing strict **Role-Based Access Control (RBAC)**.

###  Payment Security

Encrypted payload transmission with webhook signature validation for Safaricom Daraja M-Pesa endpoints.

###  Input Sanitization

Strict request parameter validation using **Express-Validator** across:

* Nomination forms
* Voting forms
* Contact forms

###  Rate Limiting

Automated IP and token-based rate limiting on sensitive API routes to reduce:

* Brute-force attacks
* Automated spam
* Vote manipulation
* Malicious traffic

###  Optimized Assets

Performance optimizations include:

* Code splitting
* Lazy loading
* GPU-accelerated CSS animations
* Native `IntersectionObserver` instances
* Responsive image loading



#  License

This project is **proprietary** and developed exclusively for **Angaza® Awards** and **Angaza Hope Foundation**.

> **All rights reserved.**



#  Developed By

## Angaza ICT Team

> Building Africa's premier digital platform for recognizing **excellence, innovation, leadership and social impact.**
