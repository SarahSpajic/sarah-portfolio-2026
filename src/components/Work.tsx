const projects = [
  {
    id: 1,
    company: "Credit One Bank",
    role: "Frontend Developer",
    description: "Built and maintained a React component library for the enterprise website, enabling marketing teams to launch campaigns faster while maintaining brand consistency. Integrated React components into Adobe Experience Manager and implemented WCAG 2.1 accessibility standards with automated Playwright testing.",
    tags: ["React", "Component Library", "Adobe AEM", "WCAG"],
    duration: "2+ years",
    extra: "Scrum Master",
    featured: true,
    gradient: "gradient-1"
  },
  {
    id: 2,
    company: "The Shipping Store",
    role: "Label Templates Page",
    description: "Built a label templates page from scratch for an e-commerce platform. Added search functionality that users previously lacked, and created how-to videos and troubleshooting guides to reduce customer support load.",
    tags: ["React", "Freelance", "E-commerce"],
    duration: "2023 - 2025",
    featured: false,
    gradient: "gradient-2"
  },
  {
    id: 3,
    company: "Georgia Tech",
    role: "Graduate Research",
    description: "Pursuing a Master's in Computer Science with a Human-Computer Interaction specialization. Currently studying Digital Health Equity and Health Informatics, researching how users form mental models when switching between wearable devices.",
    tags: ["MS Computer Science", "HCI"],
    duration: "In Progress",
    featured: false,
    gradient: "gradient-3"
  }
];

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="section-container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Where I've made an impact</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className={`project-card ${project.featured ? 'project-featured' : ''}`}
            >
              <div className="project-image">
                <div className={`project-placeholder ${project.gradient}`}>
                  <span>{project.company}</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <h3>{project.role}</h3>
                <p>{project.description}</p>
                <div className="project-meta">
                  <span className="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {project.duration}
                  </span>
                  {project.extra && (
                    <span className="meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {project.extra}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
