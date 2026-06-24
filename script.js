/* =====================================================
   ASTHA DIAGNOSTIC & CONSULTATION CENTER
   Premium Website Script
   ===================================================== */

"use strict";

/* ── PRELOADER ─────────────────────────────────────── */
(function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  window.addEventListener("load", function () {
    setTimeout(function () {
      preloader.classList.add("done");
    }, 1800);
  });
})();

/* ── PARTICLES ─────────────────────────────────────── */
(function initParticles() {
  const container = document.getElementById("hero-particles");
  if (!container) return;

  const count = window.innerWidth < 640 ? 12 : 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * -20}s;
      opacity: ${Math.random() * 0.4 + 0.1};
    `;
    container.appendChild(p);
  }
})();

/* ── TYPED TEXT EFFECT ─────────────────────────────── */
(function initTypedText() {
  const el = document.getElementById("typed-text");
  if (!el) return;

  const phrases = [
    "Precision Care",
    "Expert Diagnosis",
    "Trusted Results",
    "Your Health Partner",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 1000);
})();

/* ── HEADER SCROLL BEHAVIOR ────────────────────────── */
(function initHeader() {
  const header = document.getElementById("site-header");
  const topBar = document.querySelector(".top-bar");
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    if (scrollY > 60) {
      header.classList.add("scrolled");
      if (topBar) topBar.style.display = "none";
    } else {
      header.classList.remove("scrolled");
      if (topBar) topBar.style.display = "";
    }

    lastScroll = scrollY;
  }, { passive: true });
})();

/* ── MOBILE NAVIGATION ─────────────────────────────── */
(function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (!toggle || !mobileNav) return;

  let overlay = null;

  function openNav() {
    mobileNav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";

    overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 998;
      background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);
    `;
    overlay.addEventListener("click", closeNav);
    document.body.appendChild(overlay);
  }

  function closeNav() {
    mobileNav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    if (overlay) { overlay.remove(); overlay = null; }
  }

  toggle.addEventListener("click", function () {
    if (mobileNav.classList.contains("open")) closeNav();
    else openNav();
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });
})();

/* ── SMOOTH ACTIVE NAV LINKS ───────────────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll("section[id], div[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  if (!navLinks.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === "#" + id);
        });
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach(function (section) { observer.observe(section); });
})();

/* ── SCROLL REVEAL ─────────────────────────────────── */
(function initReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -80px 0px", threshold: 0.1 });

  reveals.forEach(function (el) { observer.observe(el); });
})();

/* ── COUNTER ANIMATION ─────────────────────────────── */
(function initCounters() {
  const stats = document.querySelectorAll(".stat-value[data-count]");
  if (!stats.length) return;

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const suffix = el.textContent.replace(/[\d,]+/, "").trim();
    const duration = 2000;
    const step = duration / 60;
    let current = 0;
    const increment = target / (duration / 16);

    function update() {
      current = Math.min(current + increment, target);
      if (target >= 1000) {
        el.textContent = Math.floor(current).toLocaleString() + suffix;
      } else {
        el.textContent = Math.floor(current) + suffix;
      }
      if (current < target) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(function (el) { observer.observe(el); });
})();

/* ── BOOKING FORM ──────────────────────────────────── */
(function initBookingForm() {
  const form = document.getElementById("booking-form");
  const success = document.getElementById("booking-success");
  const successPhone = document.getElementById("success-phone");
  if (!form) return;

  // Set min date to today
  const dateInput = document.getElementById("appt-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("patient-name").value.trim();
    const phone = document.getElementById("patient-phone").value.trim();
    const service = document.getElementById("service-type").value;

    // Basic validation
    if (!name) {
      showFieldError("patient-name", "Please enter your full name.");
      return;
    }
    if (!phone || phone.length < 10) {
      showFieldError("patient-phone", "Please enter a valid phone number.");
      return;
    }
    if (!service) {
      showFieldError("service-type", "Please select a service.");
      return;
    }

    // Simulate submission
    const submitBtn = document.getElementById("booking-submit-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    setTimeout(function () {
      form.hidden = true;
      if (success) {
        success.hidden = false;
        if (successPhone) successPhone.textContent = phone;
      }
    }, 1200);
  });

  function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.style.borderColor = "#e11d48";
    field.style.boxShadow = "0 0 0 3px rgba(225,29,72,0.15)";
    field.focus();

    // Clear error on next input
    field.addEventListener("input", function resetError() {
      field.style.borderColor = "";
      field.style.boxShadow = "";
      field.removeEventListener("input", resetError);
    });
  }
})();

/* ── SCROLL TO TOP ─────────────────────────────────── */
(function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    btn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

/* ── FLOATING CTAs VISIBILITY ──────────────────────── */
(function initFloatingCTAs() {
  const ctas = document.getElementById("floating-ctas");
  if (!ctas) return;

  ctas.style.opacity = "0";
  ctas.style.transform = "translateY(20px)";
  ctas.style.transition = "opacity 0.4s ease, transform 0.4s ease";

  setTimeout(function () {
    ctas.style.opacity = "1";
    ctas.style.transform = "";
  }, 2500);
})();

/* ── SMOOTH SCROLL FOR ANCHORS ─────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();

      const headerHeight = document.getElementById("site-header")?.offsetHeight || 70;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    });
  });
})();

/* ── HEADER LOGO SCROLL TO TOP ─────────────────────── */
(function initLogoClick() {
  const logo = document.getElementById("logo-home");
  if (!logo) return;
  logo.addEventListener("click", function (e) {
    if (window.scrollY > 0) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
})();

/* ── SERVICE CARDS MICRO-INTERACTIONS ──────────────── */
(function initServiceCards() {
  document.querySelectorAll(".service-card").forEach(function (card) {
    card.addEventListener("mouseenter", function (e) {
      const glow = card.querySelector(".service-card-glow");
      if (!glow) return;
    });
  });
})();

/* ── PACKAGE CARD HOVER TILT ───────────────────────── */
(function initCardTilt() {
  if (window.matchMedia("(hover: none)").matches) return;

  document.querySelectorAll(".package-card, .testimonial-card, .doctor-card").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / rect.height) * 5;
      const tiltY = -(x / rect.width) * 5;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "";
    });
  });
})();

/* ── TESTIMONIAL AUTO SCROLL (MOBILE) ──────────────── */
(function initTestimonialSwipe() {
  const grid = document.querySelector(".testimonials-grid");
  if (!grid) return;

  let startX = 0;
  let isDragging = false;

  grid.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  grid.addEventListener("touchend", function (e) {
    if (!isDragging) return;
    isDragging = false;
  }, { passive: true });
})();

/* ── GOOGLE MAP IFRAME LAZY LOAD ───────────────────── */
(function initMapLazyLoad() {
  const mapContainer = document.getElementById("map-container");
  if (!mapContainer) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const iframe = mapContainer.querySelector("iframe");
        if (iframe && iframe.getAttribute("loading") === "lazy") {
          // iframe is already set with proper src, browser handles lazy loading
        }
        observer.unobserve(mapContainer);
      }
    });
  }, { rootMargin: "300px" });

  observer.observe(mapContainer);
})();

/* ── DOCTOR CARD AVAILABLE BADGE ───────────────────── */
(function initDoctorAvailability() {
  const today = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = dayNames[today.getDay()];
  const todayAbbr = todayName.substring(0, 3);

  // Simple indicator — we note today in the footer
  const dayEl = document.querySelector(".top-bar-item:last-child");
})();

/* ── LAZY LOAD IMAGES WITH FADE ────────────────────── */
(function initLazyImages() {
  const images = document.querySelectorAll("img[loading='lazy']");

  images.forEach(function (img) {
    img.style.transition = "opacity 0.5s ease";
    img.style.opacity = "0";

    if (img.complete && img.naturalHeight !== 0) {
      img.style.opacity = "1";
    } else {
      img.addEventListener("load", function () {
        img.style.opacity = "1";
      });
      img.addEventListener("error", function () {
        img.style.opacity = "0.5";
      });
    }
  });
})();

/* ── GALLERY LIGHTBOX ──────────────────────────────── */
(function initGalleryLightbox() {
  const items = document.querySelectorAll(".gallery-item");
  if (!items.length) return;

  function openLightbox(imgSrc, caption) {
    const lb = document.createElement("div");
    lb.style.cssText = `
      position: fixed; inset: 0; z-index: 9000;
      background: rgba(0,0,0,0.92);
      display: flex; align-items: center; justify-content: center;
      flex-direction: column; gap: 16px;
      cursor: zoom-out;
      animation: fade-in 0.2s ease;
    `;

    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.cssText = `
      max-width: 90vw; max-height: 80vh;
      border-radius: 12px;
      box-shadow: 0 20px 80px rgba(0,0,0,0.6);
      object-fit: contain;
    `;

    const cap = document.createElement("p");
    cap.textContent = caption;
    cap.style.cssText = "color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 500;";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✕";
    closeBtn.style.cssText = `
      position: absolute; top: 20px; right: 24px;
      font-size: 24px; color: white; background: none; border: none;
      cursor: pointer; opacity: 0.7; font-family: inherit;
    `;

    lb.appendChild(img);
    lb.appendChild(cap);
    lb.appendChild(closeBtn);
    document.body.appendChild(lb);

    function closeLb() { lb.remove(); document.body.style.overflow = ""; }
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target === closeBtn) closeLb(); });
    document.addEventListener("keydown", function esc(e) {
      if (e.key === "Escape") { closeLb(); document.removeEventListener("keydown", esc); }
    });
    document.body.style.overflow = "hidden";
  }

  items.forEach(function (item) {
    item.style.cursor = "zoom-in";
    item.addEventListener("click", function () {
      const img = item.querySelector("img");
      const caption = item.querySelector(".gallery-overlay span")?.textContent || "";
      if (img) openLightbox(img.src, caption);
    });
  });
})();

/* ── ANNOUNCE OPEN STATUS ──────────────────────────── */
(function announceOpenStatus() {
  const topBarItems = document.querySelectorAll(".top-bar-item");
  if (!topBarItems.length) return;

  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay(); // 0=Sun, 5=Fri, 6=Sat

  let isOpen = false;
  if (day !== 5) { // Not Friday
    isOpen = hour >= 8 && hour < 21;
  }

  // Find the hours item and add status
  topBarItems.forEach(function (item) {
    if (item.textContent.includes("AM")) {
      const badge = document.createElement("span");
      badge.style.cssText = `
        display: inline-flex; align-items: center;
        padding: 1px 8px; border-radius: 99px; font-size: 11px;
        font-weight: 700; margin-left: 6px;
        background: ${isOpen ? "rgba(22,163,74,0.2)" : "rgba(225,29,72,0.2)"};
        color: ${isOpen ? "#4ade80" : "#f87171"};
      `;
      badge.textContent = isOpen ? "OPEN NOW" : "CLOSED";
      item.appendChild(badge);
    }
  });
})();

/* ── LOG INIT ──────────────────────────────────────── */
console.log(
  "%c🏥 Astha Diagnostic & Consultation Center%c\n📍 44/2 Khanjahan Ali Road, Khulna\n📞 +8801721804103",
  "color:#00e5b0; font-size:16px; font-weight:bold; font-family:sans-serif",
  "color:#7a9baa; font-size:12px"
);
