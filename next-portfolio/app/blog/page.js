import Link from 'next/link';

const posts = [
  {
    slug: 'designing-with-clarity',
    title: 'Designing with Clarity: 5 Principles for Better Interfaces',
    category: 'UI/UX',
    date: 'Mar 2026',
    excerpt: 'A practical guide to building interfaces that feel intuitive, readable, and trustworthy for every user.',
  },
  {
    slug: 'high-converting-landing-pages',
    title: 'How to Build a High-Converting Landing Page',
    category: 'Web Design',
    date: 'Feb 2026',
    excerpt: 'Best practices for layout, copy, and calls to action that help visitors become customers.',
  },
  {
    slug: 'mobile-first-product-design',
    title: 'Mobile-first Design Patterns for Modern Products',
    category: 'Productivity',
    date: 'Jan 2026',
    excerpt: 'Design patterns and interaction techniques for products that feel native and fast on phones.',
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="section blog-list">
        <div className="container section-head fade-up">
          <span className="section-label">Blog</span>
          <h2>Articles on design, product strategy, and UX thinking.</h2>
        </div>
        <div className="container blog-grid fade-up delay-1">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <span className="project-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="button secondary">
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
