/* ============================================
   FARHEED LARI — JUNIOR DEVELOPER CHATBOT
   Pure HTML/CSS/JS — No API needed
   ============================================ */

const responses = {
  who: {
    keywords: ['who','yourself','about you','introduce','name','tell me'],
    answer: "Hi! I'm Mohammad Farheed Lari 👋 — a passionate Junior Web Developer from Kathmandu, Nepal. I have 1+ year of experience building modern web applications using HTML, CSS, JavaScript, React, Node.js and more. I'm also pursuing my BCA degree. What would you like to know? 😊"
  },
  experience: {
    keywords: ['experience','work','job','career','history','background','worked'],
    answer: "Farheed has 1+ year of development experience:\n\n💻 Web Content Writer — KPO Pvt. Ltd. (Nov 2023–Oct 2024)\n🎨 Graphics Designer & Content Writer — Softvista Creations (Nov 2024–Apr 2025)\n👔 HR Assistant — Hamro Job Pvt. Ltd. (May 2025–Present)\n\nAlongside his professional work, he has built 5+ projects using modern web technologies! 🚀"
  },
  skills: {
    keywords: ['skill','skills','good at','expertise','technology','stack','tech','what can','know','language'],
    answer: "Farheed's technical skills:\n\n🌐 HTML5 — 90%\n🎨 CSS3 — 88%\n⚡ JavaScript — 80%\n⚛️ React — 70%\n🟢 Node.js — 75%\n🍃 MongoDB — 70%\n🐙 Git & GitHub — 80%\n🐘 PHP — 85%\n\nHe loves building clean, responsive and modern web apps! 💪"
  },
  projects: {
    keywords: ['project','projects','built','made','portfolio','work','website','app','application'],
    answer: "Farheed has built some great projects:\n\n🛒 E-Commerce Website — PHP\n🌾 Agriculture Website — React, Node.js, MongoDB\n🌤 Weather App — JavaScript, API, CSS\n💝 Valentine Website — HTML, CSS, JavaScript\n\nCheck out the Projects section on this page to see them live! 👆"
  },
  hire: {
    keywords: ['hire','hiring','recruit','work with','collaborate','available','opportunity','freelance','internship'],
    answer: "Farheed is open to exciting opportunities! 🚀\n\nHe is available for:\n✅ Junior Developer roles\n✅ Freelance web development\n✅ Internships\n✅ Remote or on-site work\n\nReach him at mdfarheed813@gmail.com or use the Contact form on this page! 📧"
  },
  contact: {
    keywords: ['contact','email','phone','reach','message','call','touch','connect'],
    answer: "You can reach Farheed here:\n\n📧 Email: mdfarheed813@gmail.com\n📞 Phone: +977 9818471478\n📍 Location: Basantapur, Kathmandu, Nepal\n\nOr scroll down to the Contact section and fill out the form directly! 😊"
  },
  education: {
    keywords: ['education','study','college','degree','university','qualification','academic','bca','bachelor','school'],
    answer: "Farheed's educational background:\n\n🎓 BCA (Bachelor of Computer Application) — Running\nEverest College, Thapathali | Tribhuvan University\n\n📚 Higher Secondary (Management)\nViswa Niketan Ma,Vi\n\n📚 SEE\nSanti Nikunja Ma.Vi"
  },
  cv: {
    keywords: ['cv','resume','download','pdf','document'],
    answer: "You can download Farheed's CV directly! 📄\n\nClick the <a href='Basant_Joshi_CV.pdf' download style='color:#2a85c8;font-weight:600;'>Download CV</a> button in the About section above ⬆️"
  },
  location: {
    keywords: ['location','where','city','country','nepal','kathmandu','based','live','from'],
    answer: "Farheed is based in Basantapur, Kathmandu, Nepal 📍\n\nHe is open to both remote and on-site opportunities!"
  },
  linkedin: {
    keywords: ['linkedin','social','profile','connect','network','facebook','github'],
    answer: "Connect with Farheed on social media! 🔗\n\n💼 <a href='https://www.linkedin.com/in/farheed-lari-98b970408?utm_source=share_via&utm_content=profile&utm_medium=member_ios' target='_blank' style='color:#2a85c8;font-weight:600;'>LinkedIn</a>\n🐙 <a href='https://github.com/B0bby19' target='_blank' style='color:#2a85c8;font-weight:600;'>GitHub</a>\n📘 <a href='https://www.facebook.com/share/1D8Kx13vEj/' target='_blank' style='color:#2a85c8;font-weight:600;'>Facebook</a>"
  },
  greeting: {
    keywords: ['hi','hello','hey','good morning','good evening','howdy','sup','namaste','hii','helo'],
    answer: "Hello! 👋 Welcome to Mohammad Farheed Lari's portfolio! I'm his virtual assistant. Ask me about his skills, projects, experience, or how to hire him! 😊"
  },
  thanks: {
    keywords: ['thank','thanks','thankyou','great','awesome','nice','cool','perfect','good'],
    answer: "You're welcome! 😊 Feel free to ask anything else about Basant. I'm always here to help!"
  },
  bye: {
    keywords: ['bye','goodbye','see you','later','take care','cya'],
    answer: "Goodbye! 👋 Feel free to come back anytime. Don't forget to check the Contact section if you'd like to work with Basant!"
  },
  salary: {
    keywords: ['salary','pay','rate','cost','charge','fee','budget'],
    answer: "For salary or rate details, it's best to discuss directly with Farheed! 💬\n\n📧 Email: mdfarheed813@gmail.com\n📞 Phone: +977 9818471478\n\nHe's flexible and open to discussion! 😊"
  },
  react: {
    keywords: ['react','reactjs','frontend','front end','component','jsx'],
    answer: "Yes! Farheed knows React ⚛️ — he has built projects using React including an Agriculture platform with React + Node.js + MongoDB. He's comfortable with components, hooks, and state management!"
  },
  nodejs: {
    keywords: ['node','nodejs','backend','back end','server','api','express'],
    answer: "Farheed works with Node.js on the backend 🟢 — he has built full-stack applications using Node.js + Express + MongoDB. He can build REST APIs and handle server-side logic!"
  }
};

const defaultReplies = [
  "I'm not sure about that! Try asking about Farheed's skills, projects, experience, or how to contact him 😊",
  "Hmm, I didn't quite catch that! Use the suggestion buttons below or ask me about Farheed's work 👇",
  "Great question! For more details contact Basant directly at mdfarheed813@gmail.com 📧"
];

// ---- DOM ----
const toggleBtn   = document.getElementById('chatbot-toggle');
const chatBox     = document.getElementById('chatbot-box');
const closeBtn    = document.getElementById('chatbot-close');
const messagesEl  = document.getElementById('chatbot-messages');
const inputEl     = document.getElementById('chatbot-input');
const sendBtn     = document.getElementById('chatbot-send');
const chatIcon    = document.getElementById('chat-icon');
const closeIcon   = document.getElementById('close-icon');
const notify      = document.querySelector('.chat-notify');
const suggestions = document.querySelectorAll('.suggestion-btn');

let isOpen = false;
let defaultIndex = 0;

function openChat() {
  isOpen = true;
  chatBox.style.display = 'flex';
  chatIcon.style.display = 'none';
  closeIcon.style.display = 'inline';
  if (notify) notify.style.display = 'none';
  if (messagesEl.children.length === 0) {
    setTimeout(() => botTyping("Hello! 👋 I'm Farheed's virtual assistant. Ask me about his skills, projects, experience, or how to hire him as a Junior Developer! 🚀"), 400);
  }
  setTimeout(() => inputEl.focus(), 300);
}

function closeChat() {
  isOpen = false;
  chatBox.style.display = 'none';
  chatIcon.style.display = 'inline';
  closeIcon.style.display = 'none';
}

toggleBtn.addEventListener('click', () => isOpen ? closeChat() : openChat());
closeBtn.addEventListener('click', closeChat);

suggestions.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.key;
    addMessage(btn.textContent.trim(), 'user');
    setTimeout(() => {
      if (responses[key]) botTyping(responses[key].answer);
    }, 500);
  });
});

sendBtn.addEventListener('click', handleSend);
inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSend();
});

function handleSend() {
  const text = inputEl.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  inputEl.value = '';
  setTimeout(() => botReply(text), 600);
}

function botReply(text) {
  const lower = text.toLowerCase();
  for (const key in responses) {
    const r = responses[key];
    if (r.keywords.some(kw => lower.includes(kw))) {
      botTyping(r.answer);
      return;
    }
  }
  botTyping(defaultReplies[defaultIndex % defaultReplies.length]);
  defaultIndex++;
}

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('msg', sender);
  msg.innerHTML = text.replace(/\n/g, '<br>');
  messagesEl.appendChild(msg);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function botTyping(text) {
  const typing = document.createElement('div');
  typing.classList.add('msg', 'bot', 'typing-dots');
  typing.innerHTML = '<span></span><span></span><span></span>';
  messagesEl.appendChild(typing);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  setTimeout(() => {
    typing.remove();
    addMessage(text, 'bot');
  }, 900);
}