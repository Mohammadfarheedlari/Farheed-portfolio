const fs = require('fs');

// 1. Append animations to animations.css
const animPath = 'css/animations.css';
let animContent = fs.readFileSync(animPath, 'utf8');

const newAnimations = `
/* ---- PHOTO ANIMATIONS ---- */
@keyframes blobMorph {
  0%   { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50%  { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}

@keyframes floatWrapper {
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

.avatar-photo {
  animation: blobMorph 8s ease-in-out infinite alternate !important;
}

.image-wrapper {
  animation: floatWrapper 6s ease-in-out infinite;
}

.about-img-card {
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.5s ease;
}

.about-img-card:hover {
  transform: translateY(-10px) scale(1.02) rotate(1deg);
  box-shadow: 0 25px 50px rgba(168, 85, 247, 0.25), 0 0 40px rgba(6, 182, 212, 0.2) !important;
}

.about-real-photo {
  transition: transform 0.5s ease;
}

.about-img-card:hover .about-real-photo {
  transform: scale(1.05);
}
`;

if (!animContent.includes('blobMorph')) {
  fs.writeFileSync(animPath, animContent + newAnimations, 'utf8');
}

// 2. We need to make sure .about-img-card has overflow: hidden so the image scale zoom works cleanly.
const stylePath = 'css/style.css';
let styleContent = fs.readFileSync(stylePath, 'utf8');

styleContent = styleContent.replace(
  /\.about-img-card\s*\{[^}]*\}/,
  `.about-img-card {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
}`
);

fs.writeFileSync(stylePath, styleContent, 'utf8');
console.log('Photo animations added successfully.');
