# 🏥 Astha Diagnostic & Consultation Center — Official Website

> A premium, fully responsive, industry-standard website built for **Astha Diagnostic & Consultation Center**, Khulna, Bangladesh.

---

## 🌐 Live Business Info

| Field | Details |
|---|---|
| **Business Name** | Astha Diagnostic & Consultation Center |
| **Address** | 44/2 Khanjahan Ali Road, Khulna, Bangladesh |
| **Phone** | +8801721804103 |
| **Google Maps** | [View Location](https://maps.app.goo.gl/AY9aMCy7uZGnvpGD9) |
| **Facebook Page** | [Astha Diagnostic](https://www.facebook.com/people/Astha-diagnostic-and-consultion-senter/100076582106263/?mibextid=ZbWKwL) |
| **Google Rating** | ⭐ 4.1 / 5 (19 Reviews) |
| **Hours** | Saturday – Thursday: 8:00 AM – 9:00 PM |

---

## 📋 Project Overview

A complete, production-ready static website for a diagnostic center and consultation clinic in Khulna. The design follows modern healthcare industry standards — clean, trustworthy, and optimized for patient conversions. Built entirely with **vanilla HTML, CSS, and JavaScript** — no frameworks, no npm, zero dependencies.

### Design Philosophy
- **Trust-first** — Medical websites must establish credibility at first glance
- **Conversion-focused** — Multiple CTAs, WhatsApp integration, and a booking form at every turn
- **Mobile-first** — Fully optimized across all screen sizes (320px → 4K)
- **Performance** — No JS libraries, lazy-loaded images, minimal render-blocking resources

---

## ✨ Features

### 🎨 UI & Design
- Animated branded preloader
- Full-screen hero with particle system, animated background orbs, and typed rotating text
- Glassmorphism floating trust cards on hero image
- Scroll-reveal animations on every section (IntersectionObserver)
- CSS custom property design token system (colors, spacing, shadows, radii)
- Premium gradient palette — Deep Teal `#0d7a8a` + Electric Cyan `#00e5b0`
- Google Fonts: **Outfit** (headings) + **Inter** (body text)
- Animated number counters (count up on scroll into view)
- Card tilt micro-interactions (desktop hover)
- Gallery lightbox (click any image to zoom)

### 📄 Page Sections

| # | Section | Description |
|---|---|---|
| 1 | **Top Bar** | Address, hours, phone, Facebook — with live Open/Closed badge |
| 2 | **Header** | Sticky nav, scroll-aware blur, professional SVG medical cross logo |
| 3 | **Hero** | Full-screen landing with typed text, WhatsApp + Appointment CTAs, key stats |
| 4 | **Trust Strip** | 5 credibility stats in dark glassmorphism band |
| 5 | **About** | Center story, 6 highlights, Google rating badge, map + call CTAs |
| 6 | **Services** | 9 service cards with hover glow effects and book links |
| 7 | **Doctors** | 4 specialist cards with image hover + book now overlay |
| 8 | **Packages** | 4 health packages with BDT pricing (৳800 – ৳3,500) |
| 9 | **Why Choose Us** | 4 USP points with animated icons |
| 10 | **Gallery** | 4-image grid with click-to-zoom lightbox |
| 11 | **Testimonials** | 4 Google review cards, 4.1★ aggregate display |
| 12 | **Booking Form** | Full appointment form with validation + success state |
| 13 | **Map & Contact** | Google Maps embed + address, phone, Facebook, WhatsApp cards |
| 14 | **Footer** | 4-column footer with social links + Signal Studio credit |
| 15 | **Floating CTAs** | Always-visible WhatsApp + Call buttons |
| 16 | **Scroll To Top** | Animated back-to-top button |

---

## 📱 Responsive Breakpoints

| Breakpoint | Devices Targeted |
|---|---|
| `≤ 1100px` | Tablets, small laptops |
| `≤ 900px` | iPad, large phones |
| `≤ 640px` | Mobile phones |
| `≤ 420px` | Small phones (iPhone SE, Galaxy A series) |

**Additional media queries:**
- `@media (hover: none)` — Touch-device UX: doctor overlays and gallery captions always visible
- `@media (prefers-reduced-motion)` — Disables all animations for accessibility

---

## 🗂️ Project Structure

```
Diagnostic-Center-main/
├── index.html                       # Main HTML — all 15+ sections
├── style.css                        # Complete stylesheet (~2300 lines)
├── script.js                        # All JS interactions (~300 lines)
├── README.md                        # This file
└── assets/
    └── images/
        ├── astha-hero.png               # Hero section image
        ├── astha-lab.png                # About section / Lab gallery
        ├── astha-doctor.png             # Why Choose Us section
        ├── astha-ultrasound.png         # Gallery — Ultrasound suite
        ├── astha-gallery-waiting.png    # Gallery — Waiting area
        ├── astha-gallery-ecg.png        # Gallery — ECG / Cardiac suite
        ├── dr-rahman.png                # Doctor card 1
        ├── dr-karim.png                 # Doctor card 2
        ├── dr-nazneen.png               # Doctor card 3
        └── dr-hasan.png                 # Doctor card 4
```

---

## 🚀 Running Locally

This is a **pure static site** — no build step required.

### Option 1 — VS Code Live Server *(Recommended)*
1. Open the project folder in **VS Code**
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Automatically opens at `http://127.0.0.1:5500`

### Option 2 — Node.js
```bash
npx serve .
# Serves at http://localhost:3000
```

### Option 3 — Python
```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
# Serves at http://localhost:8080
```

### Option 4 — Direct File
Double-click `index.html` to open in any browser.
> ⚠️ The Google Maps iframe requires a server (not `file://`) to render correctly.

---

## 🎨 Design System

### Color Palette

| CSS Variable | Hex Value | Usage |
|---|---|---|
| `--primary` | `#0d7a8a` | Primary buttons, active nav, links |
| `--primary-dark` | `#095e6d` | Hover/pressed states |
| `--primary-light` | `#1aa3b8` | Card borders on hover |
| `--accent` | `#00e5b0` | Highlights, badges, CTA accents |
| `--dark-bg` | `#071d27` | Hero, footer, testimonials background |
| `--dark-surface` | `#0c2d3d` | Cards on dark backgrounds |
| `--dark-card` | `#0f3547` | Package cards |
| `--surface-0` | `#ffffff` | Primary white background |
| `--surface-1` | `#f8fcfd` | Alternating light sections |
| `--text-primary` | `#0a1f2d` | All headings |
| `--text-secondary` | `#3d6070` | Body paragraphs |
| `--text-muted` | `#7a9baa` | Labels, meta text |

### Typography

| Font | Role | Weights Used |
|---|---|---|
| **Outfit** | All headings, logo, display text | 400, 500, 600, 700, 800, 900 |
| **Inter** | Body text, UI elements, forms | 300, 400, 500, 600, 700, 800 |

### Spacing & Layout
```css
--max-width:   1220px   /* Container max width */
--section-gap: 100px    /* Section vertical padding (desktop) */
--radius-sm:   8px
--radius-md:   16px
--radius-lg:   24px
--radius-xl:   32px
--radius-full: 9999px   /* Pills / circles */
```

---

## 🔧 Customization Guide

### Update Business Information
All business data is in `index.html`. Use **Find & Replace** (`Ctrl+H`) to update:

| Search For | Replace With |
|---|---|
| `+8801721804103` | New phone number |
| `44/2 Khanjahan Ali Road, Khulna` | New address |
| `Sat–Thu: 8:00 AM – 9:00 PM` | New hours |
| `https://maps.app.goo.gl/AY9aMCy7uZGnvpGD9` | New Maps link |

### Update Open/Closed Status Logic
In `script.js`, find `announceOpenStatus()`:
```js
// Adjust hours (24h format) and closed days
isOpen = hour >= 8 && hour < 21;  // 8:00 AM to 9:00 PM
if (day !== 5) { ... }            // day 5 = Friday (currently closed)
```

### Update Health Packages & Prices
Find the `id="packages"` section in `index.html`. Each package is a `.package-card` — update the `.price-amount` and `.package-features` list items.

### Add More Services
Find `id="services"` in `index.html`. Copy any `.service-card` div and customize the icon emoji, `<h3>`, and `<p>` content.

### Retheme Colors
All colors live in `:root {}` at the very top of `style.css`. Changing `--primary` and `--accent` will cascade across the entire site instantly.

---

## 📈 SEO Implementation

| Feature | Status |
|---|---|
| Descriptive `<title>` with Khulna keywords | ✅ |
| Meta `description` (160 chars, local keywords) | ✅ |
| Meta `keywords` | ✅ |
| `<link rel="canonical">` | ✅ |
| Open Graph meta tags | ✅ |
| JSON-LD Structured Data (`MedicalClinic` + `DiagnosticLab`) | ✅ |
| Aggregate Rating in Schema | ✅ (4.1/5, 19 reviews) |
| Opening Hours in Schema | ✅ |
| Semantic HTML5 elements | ✅ |
| Descriptive `alt` on all images | ✅ |
| `loading="lazy"` on below-fold images | ✅ |
| Single `<h1>` per page | ✅ |
| Proper heading hierarchy (h1→h2→h3) | ✅ |

---

## ♿ Accessibility

- `aria-label` on all icon-only buttons and links
- `aria-expanded` state on mobile nav toggle
- `role="dialog"` on mobile navigation panel
- `Escape` key closes the mobile nav
- Minimum **44px tap targets** on all interactive elements (Apple/Google HIG)
- `prefers-reduced-motion` — disables all animations when user prefers it
- Sufficient color contrast ratios (WCAG 2.1 AA compliant)
- Keyboard-navigable throughout

---

## ⚡ JavaScript Modules

| Function | Description |
|---|---|
| `initPreloader()` | Branded loading screen, auto-dismisses after 1.8s |
| `initParticles()` | Floating dot particles in hero background |
| `initTypedText()` | Rotating text phrases in hero heading |
| `initHeader()` | Sticky header with scroll detection |
| `initMobileNav()` | Drawer nav with backdrop overlay |
| `initActiveNav()` | Highlights nav link for current section |
| `initReveal()` | IntersectionObserver scroll-reveal for all `.reveal` elements |
| `initCounters()` | Animates stat numbers counting up on scroll |
| `initBookingForm()` | Form validation + success state |
| `initScrollTop()` | Show/hide + click handler for scroll-to-top button |
| `initFloatingCTAs()` | Fade-in floating WhatsApp/Call buttons |
| `initGalleryLightbox()` | Click-to-zoom lightbox for gallery images |
| `announceOpenStatus()` | Adds live OPEN/CLOSED badge to top bar |
| `initLazyImages()` | Fade-in effect as images load |

---

## 📦 Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic document structure |
| **CSS3** (Vanilla) | All styling, animations, transitions, layout |
| **JavaScript ES6+** (Vanilla) | All interactivity and dynamic behavior |
| **CSS Custom Properties** | Site-wide design token system |
| **CSS Grid** | Page section layouts |
| **CSS Flexbox** | Component-level alignment |
| **IntersectionObserver API** | Scroll-reveal + counter animations |
| **Google Fonts API** | Outfit + Inter typefaces |
| **Google Maps Embed** | Interactive location map |

> **Zero npm packages. Zero frameworks. Zero build tools. Pure web standards.**

---

## 📸 Image Credits

Images were AI-generated for demonstration purposes.
> **Before going live:** Replace all images in `assets/images/` with real photographs of the Astha Diagnostic & Consultation Center facility, staff, and equipment.

Recommended image sizes:
- Hero: `1200 × 800px`
- About / Gallery: `900 × 600px`
- Doctor cards: `400 × 500px` (portrait orientation)

---

## 🏢 Developed By

**Signal Studio**
*Professional web design & development for businesses in Bangladesh.*

---

## 📄 License

This website was custom-built for **Astha Diagnostic & Consultation Center**, Khulna.
All rights reserved © 2024. Unauthorized copying, redistribution, or resale is prohibited.
