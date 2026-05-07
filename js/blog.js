// ============================================
//  BLOG DATA — Basant Joshi Portfolio
// ============================================

const blogPosts = {

  blog1: {
    color: '#2a85c8',
    icon: 'fas fa-globe',
    category: 'Portfolio',
    date: 'May 2026',
    readTime: '5 min read',
    title: 'How I Made My Portfolio Website from Scratch',
    content: `
      <p>Building my own portfolio was one of the most exciting — and most frustrating — projects I've ever worked on. I had seen so many impressive developer portfolios online and thought: <em>I want something like that.</em> But I had no idea where to actually begin.</p>

      <h2>Starting with a Rough Idea</h2>
      <p>I started by collecting inspiration from other portfolios I admired. I took screenshots, noted down what I liked — the smooth animations, the clean layouts, the way some sites felt alive when you scrolled. I didn't have Figma skills at the time, so I literally sketched the layout on paper before writing a single line of code.</p>
      <p>My goal was simple: a site that shows who I am, what I can do, and how to reach me — without being boring.</p>

      <h2>Choosing Pure HTML, CSS & JavaScript</h2>
      <p>I decided not to use any framework. I wanted to write everything myself so I could truly understand it. Some people said "just use React" but for a portfolio, vanilla JavaScript is more than enough — and it loads much faster too.</p>
      <ul>
        <li>HTML for structure and content</li>
        <li>CSS for all the styling, animations, and responsive layout</li>
        <li>JavaScript for interactivity — the typed text effect, scroll animations, project filters, and the chatbot</li>
      </ul>

      <h2>The Part That Took the Longest</h2>
      <p>Honestly? The CSS. Getting everything to look right on mobile was a challenge. I must have rewritten the navbar 4 or 5 times before I was happy with it. The hero section with the floating orbs, the gradient text, the skill bars that animate on scroll — all of that took days of tweaking.</p>

      <h2>What I'm Most Proud Of</h2>
      <p>The chatbot widget. I built a custom chatbot that answers questions about me — my skills, projects, location, even lets you download my CV. It uses zero external APIs, it's all pure JavaScript logic. Small thing, but it makes the site feel personal and interactive.</p>
      <p>If you're a developer thinking about building your own portfolio — just start. It doesn't have to be perfect on day one. Mine definitely wasn't. But the process of building it taught me more than any tutorial ever did.</p>
    `
  },

  blog2: {
    color: '#e8a020',
    icon: 'fas fa-flag',
    category: 'Nepal Tech',
    date: 'April 2026',
    readTime: '4 min read',
    title: 'How I Registered a .com.np Domain & Deployed My Site',
    content: `
      <p>Getting your own <strong>.com.np</strong> domain as a developer in Nepal is one of the best things you can do for your personal brand. It shows professionalism and it's uniquely yours. Here's exactly how I did it — including the parts no one tells you about.</p>

      <h2>Step 1 — Find a .com.np Registrar</h2>
      <p>Unlike .com or .io domains, .com.np domains are managed specifically for Nepal. I registered mine through Mercantile (one of the most common registrars in Nepal). There are other providers too — just search for ".com.np domain registration Nepal" and compare prices.</p>
      <ul>
        <li>You'll need to create an account on the registrar's website</li>
        <li>Search for your desired domain name</li>
        <li>Some .com.np domains require identity verification (citizenship copy or similar)</li>
        <li>The annual cost is very affordable — much cheaper than .com</li>
      </ul>

      <h2>Step 2 — Hosting Your Site</h2>
      <p>Since my portfolio is a static website (just HTML, CSS, JS — no backend server), I didn't need expensive hosting. I used <strong>GitHub Pages</strong> which is completely free. You push your code to a GitHub repository, enable Pages in settings, and your site is live within minutes.</p>
      <div class="modal-code">
# Push your code to GitHub
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
      </div>

      <h2>Step 3 — Connecting Your Domain</h2>
      <p>This is where most beginners get stuck. After your site is live on GitHub Pages (at something like <em>yourusername.github.io</em>), you need to point your .com.np domain to it. You do this through DNS settings in your registrar's control panel.</p>
      <ul>
        <li>Add a CNAME record pointing to your GitHub Pages URL</li>
        <li>In GitHub Pages settings, add your custom domain</li>
        <li>Wait for DNS propagation — this can take a few hours up to 48 hours</li>
        <li>Enable "Enforce HTTPS" in GitHub Pages once it's connected</li>
      </ul>
      <p>Once everything propagates, your site is live at your own custom .com.np address. That moment when it first loads with your real domain — genuinely exciting. Worth every step of the process.</p>
    `
  },

  blog3: {
    color: '#059669',
    icon: 'fas fa-road',
    category: 'Journey',
    date: 'March 2026',
    readTime: '6 min read',
    title: 'One Year of Learning to Code — My Honest Journey',
    content: `
      <p>A year ago, I didn't know what a <code>div</code> was. Today I've built 8+ projects, have my own domain, and am actively looking for opportunities as a developer. This is my honest story — the highs, the lows, and everything in between.</p>

      <h2>How It All Started</h2>
      <p>I'm from Kathmandu, Nepal. I didn't come from a computer science background — I just became curious. I remember watching a YouTube video where someone built a website in an hour and thinking: <em>How is that even possible?</em> That curiosity became an obsession.</p>
      <p>I started with freeCodeCamp. HTML first, then CSS. I made ugly pages and thought they were beautiful. Then JavaScript hit me like a wall.</p>

      <h2>The First 3 Months — Confusion is Normal</h2>
      <p>The hardest part of learning to code is that you don't know what you don't know. I'd follow tutorials perfectly and then try to build something on my own and completely freeze. This is called "tutorial hell" — and I was deep in it.</p>
      <p>The thing that helped me break out was building small, real things. A to-do app. A weather app using an API. A simple calculator. Each small project taught me something tutorials couldn't.</p>

      <h2>Months 4–8 — Things Started Clicking</h2>
      <p>I moved into PHP and MySQL, then jumped into React and the MERN stack. I built bigger projects — an e-commerce site, a news portal, eventually a full Trekking Management System for my final project. Making mistakes in real projects is the best teacher there is.</p>
      <ul>
        <li>I broke databases and learned how to fix them</li>
        <li>I deployed broken code and learned about environments</li>
        <li>I wrote terrible CSS and learned about responsive design the hard way</li>
      </ul>

      <h2>What I'd Tell Myself a Year Ago</h2>
      <p>Stop waiting until you "know enough" to build something. You never will feel ready — just start building and learn as you go. Google is not cheating, it's how real developers work. And most importantly: being from Nepal doesn't limit you. The internet is the same everywhere. The opportunity is the same.</p>
      <p>If you're just starting out, keep going. The confusion you feel right now is exactly what everyone feels. It does get better. And the day things start clicking — there's no feeling like it.</p>
    `
  },

  blog4: {
    color: '#7c3aed',
    icon: 'fab fa-github',
    category: 'Tutorial',
    date: 'February 2026',
    readTime: '4 min read',
    title: 'How to Upload Your Code to GitHub — Beginner\'s Guide',
    content: `
      <p>When I first started coding, I had no idea what GitHub was. I was just saving files on my desktop. Then I lost some code and wished I had backed it up. GitHub is the solution — and once you learn it, you'll wonder how you ever coded without it.</p>

      <h2>What is GitHub?</h2>
      <p>GitHub is like Google Drive for your code. It stores your project online, keeps a history of every change you've ever made, and lets you easily share your work with others (or with future employers). Every professional developer uses it.</p>

      <h2>Step 1 — Create a GitHub Account</h2>
      <p>Go to <strong>github.com</strong> and create a free account. Choose a professional username — this becomes part of your developer identity. Mine is <strong>B0bby19</strong>.</p>

      <h2>Step 2 — Install Git on Your Computer</h2>
      <p>Git is the tool that talks to GitHub. Download it from <strong>git-scm.com</strong> and install it. Then open your terminal (Command Prompt or Git Bash on Windows) and set it up:</p>
      <div class="modal-code">
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
      </div>

      <h2>Step 3 — Create a New Repository on GitHub</h2>
      <p>A repository (or "repo") is a folder for your project on GitHub. Click the green <strong>New</strong> button on your GitHub dashboard, give it a name, and click Create. Don't initialize with a README if you already have code locally.</p>

      <h2>Step 4 — Push Your Code</h2>
      <p>Open a terminal inside your project folder and run these commands:</p>
      <div class="modal-code">
git init
git add .
git commit -m "My first commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
      </div>
      <ul>
        <li><strong>git init</strong> — starts tracking this folder with git</li>
        <li><strong>git add .</strong> — stages all your files for saving</li>
        <li><strong>git commit -m "..."</strong> — saves a snapshot with a message</li>
        <li><strong>git push</strong> — uploads your code to GitHub</li>
      </ul>

      <h2>After That — Saving Future Changes</h2>
      <p>Every time you make changes to your project and want to save them to GitHub, you only need 3 commands:</p>
      <div class="modal-code">
git add .
git commit -m "Describe what you changed"
git push
      </div>
      <p>That's it! Your code is now safely backed up online and visible on your GitHub profile. Recruiters and other developers will be able to see what you've built. It's one of the most important habits to build early in your developer journey.</p>
    `
  }

};

// ============================================
//  OPEN / CLOSE MODAL
// ============================================

function openBlog(id) {
  const post = blogPosts[id];
  if (!post) return;

  const modal = document.getElementById('blogModal');
  const body = document.getElementById('modalBody');

  body.innerHTML = `
    <div class="modal-banner" style="background: linear-gradient(135deg, ${post.color}, rgba(0,0,0,0.4));">
      <i class="${post.icon}"></i>
    </div>
    <span class="modal-tag">${post.category}</span>
    <h1>${post.title}</h1>
    <div class="modal-meta">
      <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
      <span><i class="far fa-clock"></i> ${post.readTime}</span>
      <span><i class="fas fa-user"></i> Basant Joshi</span>
    </div>
    ${post.content}
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Scroll modal to top
  document.querySelector('.blog-modal-inner').scrollTop = 0;
}

function closeBlog() {
  const modal = document.getElementById('blogModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('blogModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBlog();
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBlog();
  });
});