/* ============================================
   FARHEED LARI PORTFOLIO — MAIN JS
   ============================================ */

/* ---- LOADER ---- */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 2000);
});

/* ---- MOBILE IMAGE FIX ---- */
function fixImages() {
  // Hero photo
  const heroPhoto = document.getElementById('heroPhoto');
  if (heroPhoto) {
    heroPhoto.onerror = function() {
      this.style.display = 'none';
      this.parentElement.style.background = 'var(--gradient)';
      const initials = document.createElement('span');
      initials.textContent = 'BJ';
      initials.style.cssText = 'font-family:var(--font-display);font-size:5rem;font-weight:800;color:rgba(255,255,255,0.9);display:flex;align-items:center;justify-content:center;width:100%;height:100%;';
      this.parentElement.appendChild(initials);
    };
    // Force reload on mobile to bypass cache issues
    const src = heroPhoto.src;
    heroPhoto.src = '';
    heroPhoto.src = src;
  }

  // About photo
  const aboutPhoto = document.getElementById('aboutPhoto');
  const aboutFallback = document.getElementById('aboutFallback');
  if (aboutPhoto && aboutFallback) {
    aboutPhoto.onerror = function() {
      this.style.display = 'none';
      aboutFallback.style.display = 'flex';
    };
    const src2 = aboutPhoto.src;
    aboutPhoto.src = '';
    aboutPhoto.src = src2;
  }
}
document.addEventListener('DOMContentLoaded', fixImages);

/* ---- NAVBAR SCROLL ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ---- HAMBURGER MENU ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });
}

/* ---- ACTIVE NAV LINK ON SCROLL ---- */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinkEls.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

/* ---- TYPED TEXT ---- */
const typedEl = document.getElementById('typedText');
const phrases = [
  'Frontend Developer',
  'Open Source Contributor',
  'Designer',
  'Content Writer',
  'Problem Solver'
];
let phraseIdx = 0, charIdx = 0, isDeleting = false;

function typeWriter() {
  if (!typedEl) return;
  const current = phrases[phraseIdx];

  if (!isDeleting) {
    typedEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      setTimeout(() => { isDeleting = true; typeWriter(); }, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeWriter, isDeleting ? 60 : 90);
}
typeWriter();

/* ---- PARTICLE CANVAS ---- */
const canvas = document.getElementById('particleCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.35 + 0.05
    };
  }

  // Fewer particles on mobile
  const count = window.innerWidth < 768 ? 30 : 70;
  for (let i = 0; i < count; i++) particles.push(createParticle());

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(42, 133, 200, ${p.opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

/* ---- REVEAL ON SCROLL (IntersectionObserver) ---- */
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ---- SKILL BAR ANIMATION ---- */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      if (fill) {
        fill.style.width = fill.dataset.width + '%';
      }
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-card').forEach(card => skillObserver.observe(card));

/* ---- STAT COUNTER ---- */
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = Math.ceil(target / 30);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current;
          if (current >= target) clearInterval(timer);
        }, 50);
      });
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) statObserver.observe(aboutStats);

/* ---- PROJECT FILTER ---- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeInCard 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Add CSS for filter animation
const filterStyle = document.createElement('style');
filterStyle.textContent = `
  @keyframes fadeInCard {
    from { opacity: 0; transform: translateY(15px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(filterStyle);

/* ---- BACK TO TOP ---- */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}