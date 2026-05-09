const fs = require('fs');

// 1. Update style.css
const stylePath = 'css/style.css';
let styleContent = fs.readFileSync(stylePath, 'utf8');

const rootRegex = /:root\s*\{[\s\S]*?\}/;
const newRoot = `:root {
  --bg-primary:    #030014;
  --bg-secondary:  #090524;
  --bg-card:       rgba(20, 15, 50, 0.4);
  --accent:        #a855f7;
  --accent-2:      #06b6d4;
  --accent-3:      #ec4899;
  --text-primary:  #f8fafc;
  --text-secondary:#94a3b8;
  --text-muted:    #64748b;
  --border:        rgba(255, 255, 255, 0.08);
  --border-hover:  rgba(168, 85, 247, 0.45);
  --gradient:      linear-gradient(135deg, var(--accent), var(--accent-2));
  --gradient-2:    linear-gradient(135deg, var(--accent-2), var(--accent-3));
  --shadow-glow:   0 0 40px rgba(168, 85, 247, 0.25);
  --shadow-card:   0 8px 32px rgba(0, 0, 0, 0.4);
  --glass-bg:      rgba(15, 10, 35, 0.6);
  --glass-border:  1px solid rgba(255, 255, 255, 0.08);
  --radius: 20px;
  --radius-sm: 10px;
  --transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
}`;

styleContent = styleContent.replace(rootRegex, newRoot);

// Change shadows and background rgba values
styleContent = styleContent.replace(/rgba\(99,\s*102,\s*241/g, 'rgba(168, 85, 247'); // old primary to new primary
styleContent = styleContent.replace(/rgba\(14,\s*165,\s*233/g, 'rgba(6, 182, 212'); // old tertiary to new secondary
styleContent = styleContent.replace(/#2a85c8/g, 'var(--accent)');
styleContent = styleContent.replace(/#1a5fa0/g, 'var(--accent-2)');
styleContent = styleContent.replace(/background:\s*#f7fbff/g, 'background: rgba(255,255,255,0.03)');
styleContent = styleContent.replace(/background:\s*#edf6ff/g, 'background: rgba(255,255,255,0.06)');
styleContent = styleContent.replace(/border:\s*1\.5px\s*solid\s*var\(--border\)/g, 'border: 1px solid var(--border)'); // Fix input borders

fs.writeFileSync(stylePath, styleContent, 'utf8');

// 2. Update blog.css
const blogPath = 'css/blog.css';
let blogContent = fs.readFileSync(blogPath, 'utf8');
blogContent = blogContent.replace(/rgba\(42,\s*100,\s*160/g, 'rgba(168, 85, 247');
blogContent = blogContent.replace(/rgba\(42,\s*133,\s*200/g, 'rgba(6, 182, 212');
blogContent = blogContent.replace(/#1a2a3a/g, 'var(--bg-card)');
fs.writeFileSync(blogPath, blogContent, 'utf8');

// 3. Update index.html
const indexPath = 'index.html';
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Replace project inline colors
indexContent = indexContent.replace(/--card-color:\s*#4f46e5;/g, '--card-color: #8b5cf6;'); // indigo to purple
indexContent = indexContent.replace(/--card-color:\s*#059669;/g, '--card-color: #06b6d4;'); // emerald to cyan
indexContent = indexContent.replace(/--card-color:\s*#0284c7;/g, '--card-color: #3b82f6;'); // light blue to vibrant blue
indexContent = indexContent.replace(/--card-color:\s*#e11d48;/g, '--card-color: #ec4899;'); // crimson to pink
indexContent = indexContent.replace(/--card-color:\s*#d97706;/g, '--card-color: #f59e0b;'); // amber
indexContent = indexContent.replace(/--card-color:\s*#7c3aed;/g, '--card-color: #d946ef;'); // purple to fuchsia
indexContent = indexContent.replace(/--card-color:\s*#2a85c8;/g, '--card-color: #a855f7;');
indexContent = indexContent.replace(/--card-color:\s*#0f766e;/g, '--card-color: #14b8a6;');

// Replace blog inline colors
indexContent = indexContent.replace(/--blog-color:\s*#2a85c8;/g, '--blog-color: #8b5cf6;');
indexContent = indexContent.replace(/--blog-color:\s*#e8a020;/g, '--blog-color: #f59e0b;');
indexContent = indexContent.replace(/--blog-color:\s*#059669;/g, '--blog-color: #06b6d4;');
indexContent = indexContent.replace(/--blog-color:\s*#7c3aed;/g, '--blog-color: #ec4899;');

fs.writeFileSync(indexPath, indexContent, 'utf8');

console.log('Colors successfully updated to Holographic Violet theme!');
