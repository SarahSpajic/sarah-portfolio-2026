const techStack = ['Next.js 14', 'React', 'TypeScript', 'Sanity CMS', 'Responsive Design', 'SEO Optimization', 'SSG', 'Netlify'];

const highlights = [
  'Designed the full visual identity and page layouts in Figma before translating to responsive front-end code',
  'Built high-performing, statically generated landing pages optimized for SEO and fast load times',
  'Implemented a headless CMS (Sanity) with structured content schemas, giving the client full editorial control without developer dependency',
  'Created reusable design components and templates forming a scalable design system for future pages',
  'Set up draft-mode preview with live queries so editors see changes in real time before publishing',
  'Optimized for cross-browser compatibility, accessibility, and responsive design across all device sizes',
];

export default function TSSProject({ onBack }: { onBack: () => void }) {
  return (
    <section className="project-detail">
      <div className="section-container">
        <button className="project-back" onClick={onBack}>← Back to portfolio</button>

        <div className="project-detail-header">
          <span className="section-label">Project</span>
          <h1 className="project-detail-title">High-Performance Business Website & Landing Pages</h1>
          <p className="project-detail-client">The Shipping Store</p>
        </div>

        <p className="project-detail-description">
          Designed and developed a conversion-focused business website from concept through deployment.
          Owned the full workflow: Figma design, responsive front-end build (Next.js, React, TypeScript),
          CMS integration (Sanity), and performance optimization. Built with statically generated
          landing pages, SEO best practices, and a scalable design system for ongoing content updates.
        </p>

        <div className="project-detail-section">
          <h2>What I did</h2>
          <ul className="project-detail-highlights">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail-tech">
          {techStack.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
