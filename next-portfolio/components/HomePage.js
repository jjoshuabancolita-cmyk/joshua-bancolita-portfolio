'use client';

import ThemeToggle from './ThemeToggle';

const caseStudies = [
  {
    title: 'Aurora Commerce',
    category: 'eCommerce Redesign',
    result: '28% higher checkout completion and 45% faster product discovery.',
    description: 'A complete storefront refresh for a fashion brand that improved usability, visual hierarchy, and mobile checkout flow.',
    image: 'aurora-commerce.svg',
  },
  {
    title: 'Nimbus Analytics',
    category: 'SaaS Dashboard',
    result: 'Reduced time-to-insight by 35% for enterprise users.',
    description: 'A data-rich analytics platform with clear dashboards, accessible filters, and fast onboarding.',
    image: 'nimbus-dashboard.svg',
  },
  {
    title: 'Luma Studio',
    category: 'Marketing Website',
    result: '24% more lead submissions and stronger brand storytelling.',
    description: 'A creative agency website with polished case study sections, service pages, and distinct visual identity.',
    image: 'luma-studio.svg',
  },
  {
    title: 'Pulse Web App',
    category: 'Productivity Tool',
    result: 'Improved user adoption through clearer onboarding and faster task completion.',
    description: 'A productivity dashboard with streamlined workflows, natural feedback, and clean reporting.',
    image: 'pulse-web-app.svg',
  },
];

const testimonials = [
  {
    quote: 'Joshua turned our vague product vision into a beautifully structured website that our customers love. His design sense is exceptional.',
    name: 'Claire Alvarez',
    role: 'Founder, Aura Retail',
  },
  {
    quote: 'The interface felt instantly familiar while still looking original. The team loved how smooth the user flow became.',
    name: 'Mika Santos',
    role: 'Product Lead, Nimbus Software',
  },
  {
    quote: 'Excellent communication, quick iterations, and a clean final delivery. I recommend Joshua for any product or brand redesign.',
    name: 'Alden Cruz',
    role: 'Creative Director, Luma Studio',
  },
];

const blogPosts = [
  {
    slug: 'designing-with-clarity',
    title: 'Designing with Clarity: 5 Principles for Better Interfaces',
    category: 'UI/UX',
    date: 'Mar 2026',
  },
  {
    slug: 'high-converting-landing-pages',
    title: 'How to Build a High-Converting Landing Page',
    category: 'Web Design',
    date: 'Feb 2026',
  },
  {
    slug: 'mobile-first-product-design',
    title: 'Mobile-first Design Patterns for Modern Products',
    category: 'Productivity',
    date: 'Jan 2026',
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand">Joshua<span>Portfolio</span></a>
          <nav className="nav-menu" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#blog">Blog</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <p className="eyebrow">Hello, I’m Joshua</p>
            <h1>Designing polished digital experiences for ambitious brands.</h1>
            <p className="hero-text">I build websites, dashboards, and product interfaces with strong usability, high conversion, and refined visual systems.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">See Case Studies</a>
              <a className="button secondary" href="#contact">Let’s Talk</a>
            </div>
          </div>
          <div className="hero-visual fade-up delay-1">
            <div className="hero-card">
              <div className="hero-badge">Case Study Highlight</div>
              <h2>A better checkout experience</h2>
              <p>Designed a product flow that feels faster, more intuitive, and less overwhelming for first-time buyers.</p>
              <div className="hero-stats">
                <div>
                  <strong>28%</strong>
                  <span>Conversion uplift</span>
                </div>
                <div>
                  <strong>3 weeks</strong>
                  <span>Design sprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container section-head fade-up">
          <span className="section-label">About Me</span>
          <h2>I help teams turn ideas into clean, usable digital products.</h2>
        </div>
        <div className="container about-grid">
          <div className="about-copy fade-up delay-1">
            <p>With a focus on user-centered design, I create websites and interfaces that are both attractive and easy to navigate.</p>
            <ul className="stats-list">
              <li>
                <strong>Design strategy</strong>
                Crafting visuals that support product goals and user behavior.
              </li>
              <li>
                <strong>Responsive execution</strong>
                Building layouts that work seamlessly on mobile, tablet, and desktop.
              </li>
              <li>
                <strong>Performance-first</strong>
                Designing for fast load times and focused interaction.
              </li>
            </ul>
          </div>
          <div className="about-cards fade-up delay-2">
            <article className="feature-card">
              <h3>Visual systems</h3>
              <p>Typography, spacing, and color systems that keep interfaces consistent and memorable.</p>
            </article>
            <article className="feature-card">
              <h3>Interaction design</h3>
              <p>Microinteractions and transitions that make the product feel responsive and polished.</p>
            </article>
            <article className="feature-card">
              <h3>User empathy</h3>
              <p>Design decisions rooted in real user needs and meaningful product outcomes.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="container section-head fade-up">
          <span className="section-label">Work</span>
          <h2>Recent case studies with measurable results.</h2>
        </div>
        <div className="container project-grid fade-up delay-1">
          {caseStudies.map((caseStudy, index) => (
            <article key={caseStudy.title} className={`project-card delay-${index + 1}`}>
              <img src={`/images/${caseStudy.image}`} alt={`${caseStudy.title} screenshot`} className="project-image" />
              <span className="project-category">{caseStudy.category}</span>
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.description}</p>
              <p className="project-result">{caseStudy.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials" id="testimonials">
        <div className="container section-head fade-up">
          <span className="section-label">Testimonials</span>
          <h2>What clients say about working together.</h2>
        </div>
        <div className="container testimonial-grid fade-up delay-1">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section blog" id="blog">
        <div className="container section-head fade-up">
          <span className="section-label">Blog</span>
          <h2>Insights on design, product thinking, and UX strategy.</h2>
        </div>
        <div className="container blog-grid fade-up delay-1">
          {blogPosts.map((post) => (
            <article key={post.title} className="blog-card">
              <span className="project-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p className="blog-meta">{post.date}</p>
              <a className="button secondary" href={`/blog/${post.slug}`}>
                Read Article
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section resume" id="resume">
        <div className="container section-head fade-up">
          <span className="section-label">Resume</span>
          <h2>Download my full experience and skills guide.</h2>
        </div>
        <div className="container resume-cta fade-up delay-1">
          <div>
            <p>Get a printable resume with experience, skills, and project highlights for hiring managers and collaborators.</p>
            <a className="button primary" href="/Joshua_Resume.pdf" download="Joshua_Bancolita_CV.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container section-head fade-up">
          <span className="section-label">Contact</span>
          <h2>Let’s work together on your next project.</h2>
        </div>
        <div className="container contact-grid fade-up delay-1">
          <div className="contact-copy">
            <p>If you have a website, product, or brand experience to build, I’m ready to help.</p>
            <div className="contact-info">
              <div>
                <strong>Email</strong>
                <p>hello@joshuaportfolio.dev</p>
              </div>
              <div>
                <strong>LinkedIn</strong>
                <p>linkedin.com/in/joshua-ux</p>
              </div>
              <div>
                <strong>Location</strong>
                <p>Manila, Philippines</p>
              </div>
            </div>
          </div>
          <form className="contact-form" action="https://formspree.io/f/yourFormId" method="POST">
            <input type="hidden" name="_subject" value="New contact from portfolio" />
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell me about your project" required />
            </label>
            <button type="submit" className="button primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner fade-up delay-2">
          <p>© 2026 Joshua Portfolio. Built with Next.js, responsive design, and thoughtful interaction.</p>
        </div>
      </footer>
    </main>
  );
}
