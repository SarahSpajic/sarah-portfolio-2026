import type { SiteVariant } from '../variants';

interface AboutProps {
  variant: SiteVariant;
}

export default function About({ variant }: AboutProps) {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">{variant.aboutHeadline}</h2>
            <p>{variant.aboutP1}</p>
            <p>{variant.aboutP2}</p>
            <p>{variant.aboutP3}</p>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Core Skills</h4>
                <ul>
                  {variant.frontendSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-category">
                <h4>{variant.domainSkillsLabel}</h4>
                <ul>
                  {variant.domainSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card glass-card">
              {variant.stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
