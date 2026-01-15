const projects = [
  {
    id: 1,
    company: "Georgia Tech",
    role: "Digital Health Research",
    description: "Pursuing an MS in Computer Science with a Human-Computer Interaction specialization. Studying Digital Health Equity and Health Informatics, researching how users form mental models when interacting with health technology and wearable devices.",
    tags: ["Health Informatics", "Digital Health Equity", "HCI", "User Research"],
    duration: "In Progress",
    featured: true,
    gradient: "gradient-1"
  },
  {
    id: 2,
    company: "Credit One Bank",
    role: "Frontend Developer",
    description: "Built and maintained a React component library for the enterprise website. Implemented WCAG 2.1 accessibility standards with automated Playwright testing. These skills in accessible, scalable UI systems directly translate to healthcare applications where usability is critical.",
    tags: ["React", "Accessibility", "Component Library", "Scrum Master"],
    duration: "2+ years",
    featured: false,
    gradient: "gradient-2"
  },
  {
    id: 3,
    company: "The Shipping Store",
    role: "Frontend Developer",
    description: "Built a label templates page from scratch, adding search functionality and creating self-service troubleshooting resources. Focused on reducing friction and improving user experience for non-technical users.",
    tags: ["React", "UX Improvement", "User Documentation"],
    duration: "2023 - 2025",
    featured: false,
    gradient: "gradient-3"
  }
];

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="section-container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Building toward healthcare</h2>
        
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
