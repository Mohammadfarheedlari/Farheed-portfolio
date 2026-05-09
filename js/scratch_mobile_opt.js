const fs = require('fs');
const filepath = 'css/style.css';
let content = fs.readFileSync(filepath, 'utf-8');

// Show hero image on mobile but scale it
content = content.replace(
  /\.hero-image\s*{\s*display:\s*none;\s*}/g,
  `.hero-image {
    display: flex;
    justify-content: center;
    margin-left: 0;
    margin-top: 30px;
  }`
);

// Add width: 100% to buttons on mobile
content = content.replace(
  /\.hero-actions \.btn-primary,\s*\.hero-actions \.btn-secondary\s*{\s*width:\s*100%;\s*justify-content:\s*center;\s*}/g,
  `.hero-actions .btn-primary,
  .hero-actions .btn-secondary,
  .about-actions .btn-primary,
  .about-actions .btn-outline {
    width: 100%;
    justify-content: center;
  }`
);

// Add global mobile reset to prevent horizontal scroll at the very top or in body
if (!content.includes('max-width: 100vw;')) {
  content = content.replace(
    /body\s*{([^}]*)}/g,
    `body {$1 max-width: 100vw; overflow-x: hidden; }`
  );
}

// Adjust padding on small screens if not already
content = content.replace(/@media \(max-width: 600px\)\s*{\s*section\s*{\s*padding:\s*70px\s*5%;\s*}/g,
  `@media (max-width: 600px) {
  section { padding: 60px 5%; }`
);

// Ensure skills grid stacks properly on very small screens (<= 380px)
if (!content.includes('@media (max-width: 380px)')) {
  content += `\n
@media (max-width: 380px) {
  .skills-grid { grid-template-columns: 1fr; }
  .about-stats { flex-direction: column; align-items: stretch; text-align: center; }
  .stat-item { padding: 10px 0; border-bottom: 1px solid var(--border); }
  .stat-item:last-child { border-bottom: none; }
  .hero-title { font-size: 2.2rem; }
}
`;
}

// Fix navbar overflow specifically for long text on very small screens
if(!content.includes('.nav-logo { max-width: 60%;')) {
  content += `\n
@media (max-width: 480px) {
  .nav-logo { max-width: 60%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .logo-text { font-size: 1.3rem; }
}
`;
}

fs.writeFileSync(filepath, content, 'utf-8');
console.log('Mobile optimization applied.');
