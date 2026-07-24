import { notFound } from 'next/navigation';

const posts = [
  {
    slug: 'designing-with-clarity',
    title: 'Designing with Clarity: 5 Principles for Better Interfaces',
    category: 'UI/UX',
    date: 'Mar 2026',
    body: `Designing with clarity means removing distractions, simplifying page structure, and using typography to guide readers.

Good design helps users understand what matters first, where to click next, and why a product is useful.

Use consistent spacing, clear labels, and thoughtful contrast to create digital experiences that feel easy for every user.`,
  },
  {
    slug: 'high-converting-landing-pages',
    title: 'How to Build a High-Converting Landing Page',
    category: 'Web Design',
    date: 'Feb 2026',
    body: `A strong landing page starts with a clear headline, a supportive value proposition, and a single primary action.

Combine focused imagery, concise benefits, and confidence signals like testimonials or client logos.

Keep forms short, use whitespace to separate sections, and make it simple to take the next step.`,
  },
  {
    slug: 'mobile-first-product-design',
    title: 'Mobile-first Design Patterns for Modern Products',
    category: 'Productivity',
    date: 'Jan 2026',
    body: `Designing mobile-first means planning interactions for touch, smaller screens, and fast access.

Prioritize essential actions, minimize text input, and ensure navigation is visible but not overwhelming.

Good mobile products feel responsive, easy to scan, and focused on the user’s goal in every moment.`,
  },
];

export default function PostPage({ params }) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <main>
      <section className="section blog-detail">
        <div className="container section-head fade-up">
          <span className="section-label">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="blog-meta">{post.date}</p>
        </div>
        <div className="container blog-article fade-up delay-1">
          {post.body.split('\n\n').map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
