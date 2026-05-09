const fs = require('fs');

const filepath = 'css/style.css';
let content = fs.readFileSync(filepath, 'utf-8');

// Replace light blue accent rgba(42, 133, 200, X) with new indigo accent rgba(99, 102, 241, X)
content = content.replace(/rgba\(\s*42\s*,\s*133\s*,\s*200\s*,\s*([0-9.]+)\s*\)/g, 'rgba(99, 102, 241, $1)');

// Replace darker blue rgba(42, 100, 160, X) with generic dark shadow/accent
content = content.replace(/rgba\(\s*42\s*,\s*100\s*,\s*160\s*,\s*([0-9.]+)\s*\)/g, 'rgba(0, 0, 0, $1)');

// Replace dark secondary blue rgba(26, 95, 160, X) with new purple accent rgba(168, 85, 247, X)
content = content.replace(/rgba\(\s*26\s*,\s*95\s*,\s*160\s*,\s*([0-9.]+)\s*\)/g, 'rgba(168, 85, 247, $1)');

// Replace orange accent rgba(232, 160, 32, X) with cyan accent rgba(14, 165, 233, X)
content = content.replace(/rgba\(\s*232\s*,\s*160\s*,\s*32\s*,\s*([0-9.]+)\s*\)/g, 'rgba(14, 165, 233, $1)');

// Replace light bg rgba(244, 248, 252, 0.96) with dark glass bg
content = content.replace(/rgba\(\s*244\s*,\s*248\s*,\s*252\s*,\s*0\.96\s*\)/g, 'rgba(10, 15, 24, 0.85)');

// Replace linear-gradient light colors with dark
content = content.replace(/linear-gradient\(135deg,\s*#ddeef8,\s*#c8e3f5\)/g, 'var(--gradient)');
content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.95\)/g, 'var(--glass-bg)');
content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.9\)/g, 'var(--text-primary)');
content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.5\)/g, 'rgba(255,255,255,0.05)');
content = content.replace(/background:\s*#fff/g, 'background: var(--bg-card)');
content = content.replace(/background:\s*#ffffff/g, 'background: var(--bg-card)');
content = content.replace(/color:\s*#fff/g, 'color: var(--text-primary)');

// Extra cleanups for user-friendly UI
// Add smooth scrolling to all elements, and better focus states
const extraCSS = `
/* User Friendly Focus States */
*:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}
`;
if (!content.includes('*:focus-visible')) {
  content += extraCSS;
}

fs.writeFileSync(filepath, content, 'utf-8');
console.log('CSS updated successfully.');
