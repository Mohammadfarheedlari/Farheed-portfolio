const fs = require('fs');
let content = fs.readFileSync('css/style.css', 'utf8');

// Fix html width and overflow
content = content.replace(/html\s*\{\s*scroll-behavior:\s*smooth;\s*font-size:\s*16px;\s*\}/, `html {\r\n  scroll-behavior: smooth;\r\n  font-size: 16px;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n}`);

// Fix media queries for mobile
content = content.replace(/@media \(max-width: 480px\) \{[\s\S]*?\}\s*@media \(max-width: 380px\) \{[\s\S]*?\}\s*@media \(max-width: 480px\) \{[\s\S]*?\}/g, `@media (max-width: 480px) {
  .skills-grid { grid-template-columns: 1fr; }
  .about-stats { flex-direction: column; align-items: stretch; text-align: center; gap: 16px; }
  .stat-divider { display: none; }
  .stat-item { padding: 10px 0; border-bottom: 1px solid var(--border); }
  .stat-item:last-child { border-bottom: none; }
  .hero {
    min-height: unset;
    padding-bottom: 80px;
  }
  .hero-title { font-size: clamp(2rem, 8vw, 3rem); }
  .section-title { font-size: clamp(1.8rem, 6vw, 2.5rem); }
  .about-heading { font-size: clamp(1.4rem, 5vw, 1.8rem); }
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
  .hero-actions .btn-primary,
  .hero-actions .btn-secondary,
  .about-actions .btn-primary,
  .about-actions .btn-outline {
    width: 100%;
    justify-content: center;
  }
  .hero-socials { margin-bottom: 16px; justify-content: center; }
  .scroll-indicator {
    display: flex;
    position: relative;
    bottom: unset;
    left: unset;
    transform: none;
    margin: 0 auto;
  }
  .about-actions { flex-direction: column; align-items: center; width: 100%; }
  .image-wrapper { width: 200px; height: 200px; }
  #chatbot-box { width: 300px; right: -10px; }
  .nav-logo { max-width: 60%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .logo-text { font-size: 1.3rem; }
}`);

// Fix hero font size desktop
content = content.replace(/clamp\(2\.8rem, 5\.5vw, 4\.5rem\)/, "clamp(2rem, 5.5vw, 4.5rem)");

fs.writeFileSync('css/style.css', content);
console.log("Done");
