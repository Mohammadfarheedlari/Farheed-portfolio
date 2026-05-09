const fs = require('fs');

const filepath = 'css/style.css';
let content = fs.readFileSync(filepath, 'utf-8');

// Mobile navbar background
content = content.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.98\);/g, 'background: rgba(15, 20, 30, 0.98);');

// Chatbot fixes
content = content.replace(/#chatbot-box\s*{\s*[\s\S]*?background:\s*var\(--bg-card\)fff;/g, (match) => match.replace('var(--bg-card)fff', 'var(--bg-card)'));
content = content.replace(/#chatbot-messages\s*{\s*[\s\S]*?background:\s*#f8fafc;/g, (match) => match.replace('#f8fafc', 'var(--bg-secondary)'));
content = content.replace(/\.msg\.bot\s*{\s*[\s\S]*?background:\s*white;/g, (match) => match.replace('white', 'var(--bg-card)'));
content = content.replace(/\.msg\.bot\s*{\s*[\s\S]*?color:\s*#1e293b;/g, (match) => match.replace('#1e293b', 'var(--text-primary)'));
content = content.replace(/#chatbot-suggestions\s*{\s*[\s\S]*?background:\s*#f8fafc;/g, (match) => match.replace('#f8fafc', 'var(--bg-secondary)'));
content = content.replace(/\.suggestion-btn\s*{\s*[\s\S]*?background:\s*white;/g, (match) => match.replace('white', 'var(--bg-card)'));
content = content.replace(/\.suggestion-btn\s*{\s*[\s\S]*?color:\s*#334155;/g, (match) => match.replace('#334155', 'var(--text-secondary)'));
content = content.replace(/#chatbot-input-area\s*{\s*[\s\S]*?background:\s*white;/g, (match) => match.replace('white', 'var(--bg-secondary)'));
content = content.replace(/#chatbot-input\s*{\s*[\s\S]*?color:\s*#1e293b;/g, (match) => match.replace('#1e293b', 'var(--text-primary)'));

// Input form fixes
const extraFormCSS = `
/* User Friendly Form Styles */
input, textarea {
  background: var(--bg-secondary) !important;
  color: var(--text-primary) !important;
  border: 1px solid var(--border) !important;
  border-radius: var(--radius-sm) !important;
}
input:focus, textarea:focus {
  border-color: var(--accent) !important;
  outline: none;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}
`;
if (!content.includes('User Friendly Form Styles')) {
  content += extraFormCSS;
}

fs.writeFileSync(filepath, content, 'utf-8');
console.log('Chatbot and mobile CSS updated successfully.');
