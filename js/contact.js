/* ============================================
   BASANT JOSHI PORTFOLIO — CONTACT FORM JS
   Uses EmailJS to send messages to your Gmail
   ============================================

   SETUP INSTRUCTIONS (One-Time):
   1. Go to https://www.emailjs.com/ and create a FREE account
   2. Click "Add New Service" → Choose Gmail → Connect your basantjoshi5682@gmail.com
   3. Note your SERVICE ID (e.g., "service_xxxxxxx")
   4. Go to "Email Templates" → Create New Template
      - Template name: portfolio_contact
      - Subject:  New Portfolio Message from {{from_name}}
      - Body:
          Name: {{from_name}}
          Email: {{from_email}}
          Subject: {{subject}}
          Message: {{message}}
   5. Note your TEMPLATE ID (e.g., "template_xxxxxxx")
   6. Go to "Account" → API Keys → copy your PUBLIC KEY
   7. Replace the 3 values below:
   ============================================ */

const EMAILJS_SERVICE_ID  = 'service_ima4gg5';    // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_suzi75i';   // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = '4AlXOk1nKlsxZEsbS';    // e.g. 'abcDEFghiJKL789'

// Load EmailJS SDK dynamically
(function loadEmailJS() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  script.onload = () => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('EmailJS loaded ✓');
  };
  document.head.appendChild(script);
})();

// ---- FORM ELEMENTS ----
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const btnText    = submitBtn ? submitBtn.querySelector('.btn-text')   : null;
const btnLoader  = submitBtn ? submitBtn.querySelector('.btn-loader') : null;
const successEl  = document.getElementById('formSuccess');
const failEl     = document.getElementById('formFail');

// ---- VALIDATION ----
function validateField(id, errorId, message, extraCheck) {
  const field = document.getElementById(id);
  const errEl = document.getElementById(errorId);
  if (!field || !errEl) return true;
  const val = field.value.trim();
  if (!val || (extraCheck && !extraCheck(val))) {
    errEl.textContent = message;
    field.style.borderColor = '#ff4d6d';
    return false;
  }
  errEl.textContent = '';
  field.style.borderColor = '';
  return true;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateAll() {
  const n = validateField('name',    'nameError',    'Please enter your name.');
  const e = validateField('email',   'emailError',   'Please enter a valid email.', isValidEmail);
  const s = validateField('subject', 'subjectError', 'Please enter a subject.');
  const m = validateField('message', 'messageError', 'Please write your message.');
  return n && e && s && m;
}

// Live validation
['name','email','subject','message'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', () => {
      const errEl = document.getElementById(id + 'Error');
      if (errEl) errEl.textContent = '';
      el.style.borderColor = '';
    });
    el.addEventListener('blur', () => {
      if (id === 'email') validateField('email', 'emailError', 'Please enter a valid email.', isValidEmail);
      else validateField(id, id + 'Error', `Please fill in this field.`);
    });
  }
});

// ---- SUBMIT HANDLER ----
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    // UI: loading state
    submitBtn.disabled = true;
    if (btnText)   btnText.style.display   = 'none';
    if (btnLoader) btnLoader.style.display = 'inline-flex';
    if (successEl) successEl.classList.remove('show');
    if (failEl)    failEl.classList.remove('show');

    const templateParams = {
      from_name : document.getElementById('name').value.trim(),
      from_email: document.getElementById('email').value.trim(),
      subject   : document.getElementById('subject').value.trim(),
      message   : document.getElementById('message').value.trim(),
      to_name   : 'Basant Joshi',
      to_email  : 'basantjoshi5682@gmail.com',
    };

    try {
      // Check if EmailJS is configured
      if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        // Demo mode — simulate success for testing
        await fakeSend();
        showSuccess();
      } else {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
        showSuccess();
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      showFail();
    } finally {
      submitBtn.disabled = false;
      if (btnText)   btnText.style.display   = 'inline-flex';
      if (btnLoader) btnLoader.style.display = 'none';
    }
  });
}

function fakeSend() {
  return new Promise(resolve => setTimeout(resolve, 1500));
}

function showSuccess() {
  form.reset();
  if (successEl) {
    successEl.classList.add('show');
    setTimeout(() => successEl.classList.remove('show'), 6000);
  }
  triggerConfetti();
}

function showFail() {
  if (failEl) {
    failEl.classList.add('show');
    setTimeout(() => failEl.classList.remove('show'), 6000);
  }
}

// ---- MINI CONFETTI ----
function triggerConfetti() {
  const colors = ['#2a85c8', '#1a5fa0', '#e8a020', '#10b981', '#ff4d6d'];
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const dot = document.createElement('div');
      dot.style.cssText = `
        position:fixed;
        width:${Math.random()*8+4}px;
        height:${Math.random()*8+4}px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        border-radius:50%;
        top:${Math.random()*40+30}%;
        left:${Math.random()*60+20}%;
        pointer-events:none;
        z-index:9999;
        animation: confettiFall ${Math.random()*1.5+0.8}s ease forwards;
      `;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 2000);
    }, i * 40);
  }

  if (!document.getElementById('confettiStyle')) {
    const style = document.createElement('style');
    style.id = 'confettiStyle';
    style.textContent = `
      @keyframes confettiFall {
        0%   { transform: translate(0,0) rotate(0deg); opacity:1; }
        100% { transform: translate(${Math.random()>0.5?'':'- '}${Math.random()*100+50}px, ${Math.random()*200+100}px) rotate(${Math.random()*720}deg); opacity:0; }
      }
    `;
    document.head.appendChild(style);
  }
}

// ---- CHAR COUNTER FOR TEXTAREA ----
const textarea = document.getElementById('message');
if (textarea) {
  const counter = document.createElement('span');
  counter.style.cssText = 'font-size:0.72rem;color:var(--text-muted);display:block;text-align:right;margin-top:4px;';
  counter.textContent = '0 / 1000';
  textarea.parentElement.appendChild(counter);
  textarea.addEventListener('input', () => {
    const len = textarea.value.length;
    counter.textContent = `${len} / 1000`;
    if (len > 900) counter.style.color = '#f59e0b';
    else counter.style.color = 'var(--text-muted)';
    if (len > 1000) textarea.value = textarea.value.substring(0, 1000);
  });
}