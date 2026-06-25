/* =====================================================
   ASTHA DIAGNOSTIC & CONSULTATION CENTER
   Premium Website Script — Top 1% Edition
   ===================================================== */

"use strict";

/* ── PRELOADER ─────────────────────────────────────── */
(function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  window.addEventListener("load", function () {
    setTimeout(function () {
      preloader.classList.add("done");
      // Remove from DOM after animation
      setTimeout(function () {
        preloader.remove();
      }, 600);
    }, 1800);
  });
})();

/* ── SCROLL PROGRESS BAR ──────────────────────────── */
(function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + "%";
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
})();

/* ── PARTICLES ─────────────────────────────────────── */
(function initParticles() {
  const container = document.getElementById("hero-particles");
  if (!container) return;

  const count = window.innerWidth < 640 ? 10 : 22;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${Math.random() * 18 + 12}s;
      animation-delay: ${Math.random() * -20}s;
      opacity: ${Math.random() * 0.3 + 0.1};
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

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 50 : 90;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 2400;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 1200);
})();

/* ── HEADER SCROLL BEHAVIOR ────────────────────────── */
(function initHeader() {
  const header = document.getElementById("site-header");
  const topBar = document.querySelector(".top-bar");
  if (!header) return;

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(function () {
      const scrollY = window.scrollY;

      if (scrollY > 60) {
        header.classList.add("scrolled");
        if (topBar) topBar.style.display = "none";
      } else {
        header.classList.remove("scrolled");
        if (topBar) topBar.style.display = "";
      }

      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ── MOBILE NAVIGATION ─────────────────────────────── */
(function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (!toggle || !mobileNav) return;

  let overlay = null;
  let startX = 0;

  function openNav() {
    mobileNav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";

    overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 998;
      background: rgba(0,0,0,0.65); backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      animation: fade-in 0.3s ease;
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

  // Close on link click
  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  // Swipe-to-close gesture
  mobileNav.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });

  mobileNav.addEventListener("touchend", function (e) {
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;
    // If swiped right more than 80px, close the nav
    if (diffX > 80) {
      closeNav();
    }
  }, { passive: true });
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
  }, { rootMargin: "0px 0px -60px 0px", threshold: 0.08 });

  reveals.forEach(function (el) { observer.observe(el); });
})();

/* ── COUNTER ANIMATION ─────────────────────────────── */
(function initCounters() {
  const stats = document.querySelectorAll(".stat-value[data-count]");
  if (!stats.length) return;

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const suffix = el.textContent.replace(/[\d,]+/, "").trim();
    const duration = 2200;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.floor(eased * target);

      if (target >= 1000) {
        el.textContent = current.toLocaleString() + suffix;
      } else {
        el.textContent = current + suffix;
      }
      if (progress < 1) requestAnimationFrame(update);
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

/* ── BUTTON RIPPLE EFFECT ──────────────────────────── */
(function initRipple() {
  document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);

      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 600);
    });
  });
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

  // Real-time validation
  const nameInput = document.getElementById("patient-name");
  const phoneInput = document.getElementById("patient-phone");

  if (nameInput) {
    nameInput.addEventListener("input", function () {
      if (nameInput.value.trim().length >= 2) {
        nameInput.classList.remove("invalid");
        nameInput.classList.add("valid");
      } else {
        nameInput.classList.remove("valid");
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      const val = phoneInput.value.trim().replace(/[^0-9+]/g, "");
      if (val.length >= 10) {
        phoneInput.classList.remove("invalid");
        phoneInput.classList.add("valid");
      } else {
        phoneInput.classList.remove("valid");
      }
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("patient-name").value.trim();
    const phone = document.getElementById("patient-phone").value.trim();
    const service = document.getElementById("service-type").value;

    // Validation
    if (!name || name.length < 2) {
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

    // Submit animation
    const submitBtn = document.getElementById("booking-submit-btn");
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite">
        <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="32" opacity="0.3"/>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-dasharray="16"/>
      </svg>
      Sending...
    `;

    // Add spin keyframe if not exists
    if (!document.getElementById("spin-style")) {
      const style = document.createElement("style");
      style.id = "spin-style";
      style.textContent = "@keyframes spin { to { transform: rotate(360deg); } }";
      document.head.appendChild(style);
    }

    setTimeout(function () {
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.style.animation = "fade-up 0.5s ease both";
        if (successPhone) successPhone.textContent = phone;
      }
    }, 1500);
  });

  function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.add("invalid");
    field.classList.remove("valid");
    field.focus();

    // Shake animation
    field.style.animation = "none";
    field.offsetHeight; // trigger reflow
    field.style.animation = "shake 0.4s ease";

    if (!document.getElementById("shake-style")) {
      const style = document.createElement("style");
      style.id = "shake-style";
      style.textContent = "@keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }";
      document.head.appendChild(style);
    }

    // Clear error on next input
    field.addEventListener("input", function resetError() {
      field.classList.remove("invalid");
      field.style.animation = "";
      field.removeEventListener("input", resetError);
    });
  }
})();

/* ── SCROLL TO TOP ─────────────────────────────────── */
(function initScrollTop() {
  const btn = document.getElementById("scroll-top");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    btn.classList.toggle("visible", window.scrollY > 500);
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
  ctas.style.transform = "translateY(24px)";
  ctas.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  setTimeout(function () {
    ctas.style.opacity = "1";
    ctas.style.transform = "";
  }, 2800);
})();

/* ── SMOOTH SCROLL FOR ANCHORS ─────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();

      const headerHeight = document.getElementById("site-header")?.offsetHeight || 70;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

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

/* ── HERO PARALLAX (Mouse Following) ──────────────── */
(function initHeroParallax() {
  if (window.matchMedia("(hover: none)").matches) return;
  if (window.innerWidth < 900) return;

  const heroVisual = document.getElementById("hero-visual");
  const hero = document.getElementById("hero");
  if (!heroVisual || !hero) return;

  hero.addEventListener("mousemove", function (e) {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    heroVisual.style.transform = `translate(${x * 12}px, ${y * 8}px)`;

    // Move floating cards in opposite direction for depth
    const cards = heroVisual.querySelectorAll(".floating-card");
    cards.forEach(function (card, i) {
      const factor = (i + 1) * 6;
      card.style.transform = card.style.transform || "";
      // We apply a slight additional translate
      card.style.marginLeft = (-x * factor) + "px";
      card.style.marginTop = (-y * factor) + "px";
    });
  });

  hero.addEventListener("mouseleave", function () {
    heroVisual.style.transform = "";
    heroVisual.querySelectorAll(".floating-card").forEach(function (card) {
      card.style.marginLeft = "";
      card.style.marginTop = "";
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
      const tiltX = (y / rect.height) * 4;
      const tiltY = -(x / rect.width) * 4;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "";
    });
  });
})();

/* ── GALLERY LIGHTBOX v2 ──────────────────────────── */
(function initGalleryLightbox() {
  const items = Array.from(document.querySelectorAll(".gallery-item"));
  if (!items.length) return;

  let currentIndex = 0;
  let lb = null;
  let lbImg = null;

  function openLightbox(index) {
    currentIndex = index;
    const item = items[index];
    const img = item.querySelector("img");
    const caption = item.querySelector(".gallery-overlay span")?.textContent || "";
    if (!img) return;

    lb = document.createElement("div");
    lb.style.cssText = `
      position: fixed; inset: 0; z-index: 9000;
      background: rgba(0,0,0,0.94);
      display: flex; align-items: center; justify-content: center;
      flex-direction: column; gap: 16px;
      cursor: zoom-out;
      animation: fade-in 0.25s ease;
    `;

    lbImg = document.createElement("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbImg.style.cssText = `
      max-width: 90vw; max-height: 78vh;
      border-radius: 16px;
      box-shadow: 0 24px 80px rgba(0,0,0,0.6);
      object-fit: contain;
      transition: opacity 0.3s ease;
    `;

    const cap = document.createElement("p");
    cap.textContent = caption;
    cap.style.cssText = "color: rgba(255,255,255,0.65); font-size: 14px; font-weight: 500; letter-spacing: 0.02em;";

    // Navigation arrows
    const prevBtn = createNavBtn("left");
    const nextBtn = createNavBtn("right");

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "✕";
    closeBtn.style.cssText = `
      position: absolute; top: 20px; right: 24px;
      font-size: 24px; color: white; background: rgba(255,255,255,0.1);
      border: none; cursor: pointer; font-family: inherit;
      width: 44px; height: 44px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.2s ease;
    `;
    closeBtn.addEventListener("mouseenter", function () { closeBtn.style.background = "rgba(255,255,255,0.2)"; });
    closeBtn.addEventListener("mouseleave", function () { closeBtn.style.background = "rgba(255,255,255,0.1)"; });

    // Counter
    const counter = document.createElement("p");
    counter.id = "lb-counter";
    counter.style.cssText = "color: rgba(255,255,255,0.4); font-size: 12px; font-weight: 500;";
    counter.textContent = `${index + 1} / ${items.length}`;

    lb.appendChild(prevBtn);
    lb.appendChild(lbImg);
    lb.appendChild(cap);
    lb.appendChild(counter);
    lb.appendChild(nextBtn);
    lb.appendChild(closeBtn);
    document.body.appendChild(lb);
    document.body.style.overflow = "hidden";

    function closeLb() { lb.remove(); document.body.style.overflow = ""; lb = null; }

    lb.addEventListener("click", function (e) {
      if (e.target === lb) closeLb();
    });
    closeBtn.addEventListener("click", closeLb);

    prevBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navigate(-1, cap, counter);
    });
    nextBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navigate(1, cap, counter);
    });

    // Keyboard navigation
    function handleKey(e) {
      if (e.key === "Escape") { closeLb(); document.removeEventListener("keydown", handleKey); }
      if (e.key === "ArrowLeft") navigate(-1, cap, counter);
      if (e.key === "ArrowRight") navigate(1, cap, counter);
    }
    document.addEventListener("keydown", handleKey);

    // Touch swipe on lightbox
    let touchStartX = 0;
    lb.addEventListener("touchstart", function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 60) {
        navigate(diff > 0 ? -1 : 1, cap, counter);
      }
    }, { passive: true });
  }

  function navigate(direction, cap, counter) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    const newItem = items[currentIndex];
    const newImg = newItem.querySelector("img");
    const newCaption = newItem.querySelector(".gallery-overlay span")?.textContent || "";

    if (lbImg && newImg) {
      lbImg.style.opacity = "0";
      setTimeout(function () {
        lbImg.src = newImg.src;
        lbImg.alt = newImg.alt;
        lbImg.style.opacity = "1";
        if (cap) cap.textContent = newCaption;
        if (counter) counter.textContent = `${currentIndex + 1} / ${items.length}`;
      }, 200);
    }
  }

  function createNavBtn(side) {
    const btn = document.createElement("button");
    btn.innerHTML = side === "left" ? "‹" : "›";
    btn.style.cssText = `
      position: absolute; top: 50%; ${side}: 20px;
      transform: translateY(-50%);
      font-size: 36px; color: white; background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.1);
      cursor: pointer; font-family: inherit;
      width: 52px; height: 52px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s ease; z-index: 1;
    `;
    btn.addEventListener("mouseenter", function () { btn.style.background = "rgba(255,255,255,0.15)"; });
    btn.addEventListener("mouseleave", function () { btn.style.background = "rgba(255,255,255,0.08)"; });
    return btn;
  }

  items.forEach(function (item, index) {
    item.style.cursor = "zoom-in";
    item.addEventListener("click", function () {
      openLightbox(index);
    });
  });
})();

/* ── IMAGE LAZY LOAD WITH FADE ────────────────────── */
(function initLazyImages() {
  const images = document.querySelectorAll("img[loading='lazy']");

  images.forEach(function (img) {
    img.style.transition = "opacity 0.6s ease, filter 0.6s ease";
    img.style.opacity = "0";
    img.style.filter = "blur(8px)";

    function onLoad() {
      img.style.opacity = "1";
      img.style.filter = "blur(0)";
    }

    if (img.complete && img.naturalHeight !== 0) {
      // Already loaded — apply immediately with slight delay for smoother feel
      setTimeout(onLoad, 100);
    } else {
      img.addEventListener("load", onLoad);
      img.addEventListener("error", function () {
        img.style.opacity = "0.5";
        img.style.filter = "blur(0)";
      });
    }
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
        padding: 2px 10px; border-radius: 99px; font-size: 10px;
        font-weight: 700; margin-left: 8px; letter-spacing: 0.05em;
        background: ${isOpen ? "rgba(22,163,74,0.15)" : "rgba(225,29,72,0.15)"};
        color: ${isOpen ? "#4ade80" : "#f87171"};
      `;
      badge.textContent = isOpen ? "OPEN NOW" : "CLOSED";
      item.appendChild(badge);
    }
  });
})();

/* ── SERVICE CARD GLOW FOLLOW ─────────────────────── */
(function initServiceCardGlow() {
  if (window.matchMedia("(hover: none)").matches) return;

  document.querySelectorAll(".service-card").forEach(function (card) {
    const glow = card.querySelector(".service-card-glow");
    if (!glow) return;

    card.addEventListener("mousemove", function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - 90;
      const y = e.clientY - rect.top - 90;
      glow.style.left = x + "px";
      glow.style.top = y + "px";
    });
  });
})();

/* ── GOOGLE MAP IFRAME LAZY LOAD ───────────────────── */
(function initMapLazyLoad() {
  const mapContainer = document.getElementById("map-container");
  if (!mapContainer) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        observer.unobserve(mapContainer);
      }
    });
  }, { rootMargin: "300px" });

  observer.observe(mapContainer);
})();

/* ── LOG INIT ──────────────────────────────────────── */
console.log(
  "%c🏥 Astha Diagnostic & Consultation Center%c\n📍 44/2 Khanjahan Ali Road, Khulna\n📞 +8801721804103\n✨ Premium Edition",
  "color:#00e5b0; font-size:16px; font-weight:bold; font-family:sans-serif",
  "color:#7a9baa; font-size:12px"
);
