# Summit Build Contractors - Corporate Website

A modern, professional, fully responsive, and production-ready corporate website for **Summit Build Contractors**, a premium general contracting and construction firm.

Built with **React**, **Vite**, **Tailwind CSS (v4)**, and **Lucide Icons**, this platform provides a high-fidelity user experience tailored for residential construction, commercial developments, remodeling, and property improvements.

---

## 🚀 Key Features

*   **16 Production-Ready Pages**: Detailed routing maps covering Home, About, Services, Projects, Project Details (dynamic routing), Service Areas, Financing, Reviews, Careers, Request an Estimate, Contact, Privacy Policy, and custom 404 handler.
*   **Premium Brand Identity**: Curated aesthetic utilizing a sophisticated Dark Navy (`#0F172A`), Construction Orange (`#F97316`), and Steel Gray (`#64748B`) layout with rounded cards, soft shadows, and clean typography.
*   **Fully Responsive Layout**: Seamless transition across smart-phones, tablets, laptops, and wide desktop screens. Visible `:focus-visible` accessibility highlights and semantic markup supporting WCAG standards.
*   **Asynchronous Interactive Forms**: Live fields validations for Estimate request blueprint uploads, Job applications, direct Messages, and customer Review postings, integrating custom simulated loading overlays and success/error blocks.
*   **Live Chat Simulation Widget**: Bottom-right floating interactive assistance box utilizing automated keyword responses to guide prospective clients to appropriate estimates.
*   **Local SEO Optimization**: Integrated custom SEO hook (`useSEO.js`) dynamically managing page titles, descriptions, and injecting `LocalBusiness` / `GeneralContractor` JSON-LD schema on navigation, coupled with compliant `robots.txt` and `sitemap.xml` mapping.

---

## 🛠️ Technology Stack & Dependencies

*   **Vite**: Next-generation rapid compiler and development environment.
*   **React (v19)**: Component-driven UI development library.
*   **React Router (v6)**: Declarative, dynamic client-side routing.
*   **Tailwind CSS (v4)**: Modern CSS-first atomic styling compilation.
*   **Lucide React**: Clean, high-contrast, scalable svg iconography.

---

## 📂 Project Directory Structure

```text
src/
├── assets/         # Brand logo vectors & graphics
├── components/     # Reusable layout and interactive elements
│   ├── Header.jsx        # Sticky navigation bar with mobile hamburger drawer
│   ├── TopBar.jsx        # Licensed & Insured emergency notification bar
│   ├── Footer.jsx        # Standard links with newsletter subscription
│   ├── LiveChat.jsx      # Automated interactive chat utility
│   ├── ServiceCard.jsx   # Professional service hover-panel
│   ├── ProjectCard.jsx   # Grid item linking to detailed dynamic profile
│   ├── TestimonialCard.jsx# Verified client star rating panel
│   ├── TeamCard.jsx      # Professional team leadership profile panel
│   ├── FAQAccordion.jsx  # Accessible FAQ disclosure accordion
│   ├── ProcessTimeline.jsx# Visual 10-step construction pipeline
│   ├── TrustBadge.jsx    # General contractor certifications list
│   ├── Statistics.jsx    # Historical counting metrics grid
│   ├── Breadcrumbs.jsx   # Accessible navigational trail
│   ├── CTASection.jsx    # Prominent high-contrast CTA buttons
│   ├── ScrollToTop.jsx   # Automatically resets window position on transition
│   └── FormStatusHelper.jsx# Standard loading spinner, success, and error boards
├── layouts/        # Page layout wrappers
│   └── RootLayout.jsx    # Integrates TopBar, Header, Footer, LiveChat, and ScrollToTop
├── pages/          # Individual full page components
│   ├── Home.jsx, About.jsx, Services.jsx
│   ├── Residential.jsx, Commercial.jsx, Remodeling.jsx
│   ├── Projects.jsx, ProjectDetails.jsx, ServiceAreas.jsx
│   ├── Financing.jsx, Reviews.jsx, Careers.jsx
│   ├── RequestEstimate.jsx, Contact.jsx
│   ├── PrivacyPolicy.jsx, NotFound.jsx
├── data/           # Structured mock databases
│   ├── servicesData.js, projectsData.js, reviewsData.js
│   ├── teamData.js, serviceAreasData.js, faqsData.js, careersData.js
├── hooks/          # Custom utility React hooks
│   └── useSEO.js         # Head tag title, description, and JSON-LD schema manager
└── services/       # Mock API handlers
    └── mockApiServices.js# Handles async latency and input validation simulation
```

---

## ⚠️ Placeholder Content & Verification Guide

This website contains several sample credentials, ratings, and policy statements. **All of these placeholders must be verified and replaced with real company data prior to launching on your production server.**

### 1. Contractor License & Insurance Disclaimers
*   **Files**: `src/components/Footer.jsx`, `src/components/TopBar.jsx`, `src/components/TrustBadge.jsx`, `src/pages/PrivacyPolicy.jsx`.
*   **Actions Needed**: Replace the placeholder license number `#GC1234567` and insurance amount `$2,000,000` with the company's verified state licensing details and current policy declarations.

### 2. Physical Images and Graphics
*   **Files**: All data objects under `src/data/` (especially `servicesData.js` and `projectsData.js`).
*   **Actions Needed**: Current images utilize premium high-resolution royalty-free Unsplash URLs. Replace these with actual photographs of Summit Build Contractors' physical machinery, finished jobsites, and active local crews.

### 3. Client Reviews and Testimonials
*   **File**: `src/data/reviewsData.js`.
*   **Actions Needed**: Replace current placeholder names (e.g., "Robert M.") and review comments with verified screenshots or verified texts of reviews received via Google Business, Houzz, or the Better Business Bureau.

### 4. Financing and Lending Terms
*   **File**: `src/pages/Financing.jsx`.
*   **Actions Needed**: Adjust the monthly payment table examples and partner lender statements to accurately match the parameters of your financing providers (such as Hearth, EnerBank, etc.).

### 5. Workmanship Warranty Terms
*   **Files**: `src/components/TrustBadge.jsx`, `src/data/faqsData.js`.
*   **Actions Needed**: Tailor all workmanship and structural coverage terms to perfectly copy the terms stated in Summit Build's physical corporate warranty certificates.

---

## 🔌 Integrating Future Backend Systems

The frontend forms and data models are designed to transition smoothly to dynamic REST/GraphQL API integrations.

### 1. Estimating Requests & Blueprint Uploads
*   **Target Integration**: Connect `src/components/EstimateForm.jsx` to an **Express.js / Node.js** endpoint.
*   **File Uploads**: Route files (PDFs, DWGs, images) from the upload input straight to an **AWS S3** bucket or **Cloudinary** folder using secure pre-signed upload URLs.
*   **CRM Sync**: Forward successful submissions straight to a CRM platform like **HubSpot**, **Salesforce**, or **Procore** using webhooks.

### 2. Contact Inquiries & Job Applications
*   **Target Integration**: Hook up `src/components/ContactForm.jsx` and `src/components/CareerForm.jsx` to an email relay API like **SendGrid**, **Mailgun**, or **Amazon SES** to send instant notifications directly to team inbox channels (`info@summitbuildcontractors.com`).

### 3. Live Map & Address Auto-Complete
*   **Target Integration**: Replace the interactive map container in `src/pages/Contact.jsx` and `src/pages/ServiceAreas.jsx` with active **Google Maps Javascript API** frames, and integrate the **Google Places Autocomplete API** inside form address boxes for seamless address validation.

### 4. Newsletter Signups
*   **Target Integration**: Link `src/components/Footer.jsx` directly to a **Mailchimp** or **Constant Contact** mailing list form.

---

## ⚙️ Development Instructions

### Initial Setup
Install standard packages and compilers:
```bash
npm install
```

### Run Dev Server
Launch Vite's development HMR engine:
```bash
npm run dev
```

### Production Build
Compile optimized bundles for server hosting (Vite generates output inside `dist/` directory):
```bash
npm run build
```

### Local Preview
Preview the compiled production bundle locally prior to upload:
```bash
npm run preview
```
# CI Test
