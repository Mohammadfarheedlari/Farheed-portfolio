const fs = require('fs');

const cssPath = 'css/style.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

// The regex matches from /* ---- FOOTER ---- */ to the start of /* ---- BACK TO TOP ---- */
const footerRegex = /\/\* ---- FOOTER ---- \*\/[\s\S]*?(?=\/\* ---- BACK TO TOP ---- \*\/)/;

const newFooterCSS = `/* ---- FOOTER ---- */
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 60px 5% 30px;
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}
.footer-brand .footer-logo {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 16px;
  display: block;
}
.footer-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.8;
  margin-bottom: 24px;
  max-width: 320px;
}
.footer-socials {
  display: flex;
  gap: 12px;
}
.footer-socials a {
  width: 38px; height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-muted);
  font-size: 0.9rem;
  text-decoration: none;
  transition: all var(--transition);
  background: rgba(255,255,255,0.02);
}
.footer-socials a:hover {
  background: var(--gradient);
  border-color: transparent;
  color: var(--text-primary);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
}
.footer-links-col h3, .footer-contact-col h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
}
.footer-links-col ul, .footer-contact-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-links-col ul li {
  margin-bottom: 12px;
}
.footer-links-col ul li a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all var(--transition);
  display: inline-block;
}
.footer-links-col ul li a:hover {
  color: var(--accent);
  transform: translateX(4px);
}
.footer-contact-col ul li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 16px;
}
.footer-contact-col ul li i {
  color: var(--accent);
  font-size: 1.1rem;
}
.footer-contact-col ul li a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition);
}
.footer-contact-col ul li a:hover {
  color: var(--accent);
}
.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-copy, .footer-credit {
  font-size: 0.85rem;
  color: var(--text-muted);
}
@media (max-width: 768px) {
  .footer-top { grid-template-columns: 1fr; gap: 30px; }
  .footer-bottom { flex-direction: column; text-align: center; justify-content: center; }
}

`;

if (footerRegex.test(cssContent)) {
  cssContent = cssContent.replace(footerRegex, newFooterCSS);
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log("Replaced footer CSS");
} else {
  console.log("Could not find footer section");
}
