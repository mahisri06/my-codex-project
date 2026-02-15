const portfolioData = {
  name: 'Your Name',
  role: 'Product-Focused Developer',
  email: 'you@example.com',
  intro:
    'I build accessible, user-first digital products with a focus on clean code, performance, and practical impact.',
  about:
    "I'm a software professional with experience shipping production features across web products. I enjoy collaborating with teams, solving ambiguous problems, and turning ideas into polished, maintainable solutions.",
  experience: [
    {
      title: 'Senior Software Engineer · Example Company',
      date: '2022 — Present',
      bullets: [
        'Led development of core customer dashboard used by 50K+ users.',
        'Reduced page load time by 35% through performance optimization.',
        'Mentored junior engineers and established code review standards.'
      ]
    },
    {
      title: 'Software Engineer · Previous Company',
      date: '2019 — 2022',
      bullets: [
        'Built reusable UI component library to speed up release cycles.',
        'Integrated analytics to guide roadmap and feature decisions.',
        'Partnered with product and design on high-impact initiatives.'
      ]
    }
  ],
  projects: [
    {
      title: 'Project One',
      description:
        'End-to-end web app that improved internal workflow efficiency by automating repetitive tasks.',
      link: '#'
    },
    {
      title: 'Project Two',
      description:
        'Responsive customer portal with role-based access and real-time status updates.',
      link: '#'
    },
    {
      title: 'Project Three',
      description:
        'Data visualization dashboard that transformed analytics into actionable insights.',
      link: '#'
    }
  ],
  skills: [
    'JavaScript / TypeScript',
    'React / Next.js',
    'Node.js / APIs',
    'HTML / CSS / Accessibility',
    'Testing & CI/CD',
    'Cloud Deployment'
  ]
};

function renderNav() {
  return `
    <nav class="nav wrapper">
      <a class="logo" href="#top">${portfolioData.name}</a>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  `;
}

function renderExperienceItems() {
  return portfolioData.experience
    .map(
      (item) => `
      <article class="card">
        <header>
          <h3>${item.title}</h3>
          <p>${item.date}</p>
        </header>
        <ul>
          ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
        </ul>
      </article>
    `
    )
    .join('');
}

function renderProjectItems() {
  return portfolioData.projects
    .map(
      (project) => `
      <article class="project">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" aria-label="${project.title} link">View Project →</a>
      </article>
    `
    )
    .join('');
}

function renderSkillItems() {
  return portfolioData.skills.map((skill) => `<li>${skill}</li>`).join('');
}

function renderPortfolio() {
  const app = document.getElementById('app');
  const year = new Date().getFullYear();

  app.innerHTML = `
    <header class="hero" id="top">
      ${renderNav()}
      <section class="hero-content wrapper">
        <p class="kicker">Portfolio</p>
        <h1>Hi, I'm <span>${portfolioData.name}</span> — <br />${portfolioData.role}</h1>
        <p class="intro">${portfolioData.intro}</p>
        <div class="cta-group">
          <a class="btn btn-primary" href="#projects">View Projects</a>
          <a class="btn btn-ghost" href="resume.pdf" download>Download Resume</a>
        </div>
      </section>
    </header>

    <main>
      <section id="about" class="section wrapper">
        <h2>About Me</h2>
        <p>${portfolioData.about}</p>
      </section>

      <section id="experience" class="section wrapper">
        <h2>Experience</h2>
        ${renderExperienceItems()}
      </section>

      <section id="projects" class="section wrapper">
        <h2>Projects</h2>
        <div class="grid">
          ${renderProjectItems()}
        </div>
      </section>

      <section id="skills" class="section wrapper">
        <h2>Skills</h2>
        <ul class="skills">
          ${renderSkillItems()}
        </ul>
      </section>

      <section id="contact" class="section wrapper">
        <h2>Contact</h2>
        <p>
          Open to new opportunities and collaboration. Reach me at
          <a href="mailto:${portfolioData.email}">${portfolioData.email}</a>.
        </p>
      </section>
    </main>

    <footer class="footer">
      <p>© ${year} ${portfolioData.name}. All rights reserved.</p>
    </footer>
  `;
}

renderPortfolio();
