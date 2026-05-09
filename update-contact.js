const fs = require('fs');
const indexPath = 'index.html';
let content = fs.readFileSync(indexPath, 'utf8');

// Replace Email
content = content.replace(/Farheedj2003@gmail\.com/g, 'mdfarheed813@gmail.com');

// Replace Phone
content = content.replace(/\+977\s*9765440828/g, '9818471478');
content = content.replace(/\+9779765440828/g, '9818471478');

// Replace Location
content = content.replace(/Sifal,\s*Kathmandu,\s*Nepal/g, 'Basantapur, Kathmandu, Nepal');

fs.writeFileSync(indexPath, content, 'utf8');
console.log('Contact info updated successfully!');
