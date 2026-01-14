const frontendSkills = ["React", "TypeScript", "Component Libraries", "CSS Architecture"];
const qualitySkills = ["Accessibility (WCAG)", "Playwright Testing", "QA Background", "Scrum / Agile"];

const stats = [
  { value: "4+", label: "Years React Experience" },
  { value: "7", label: "Years in Tech" },
  { value: "MS", label: "Computer Science (HCI)" }
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">From curiosity to code</h2>
            <p>
              I started my tech journey as a business analyst and QA tester, writing test cases and 
              wondering what was happening when I saw errors in the browser. That curiosity led me 
              to teach myself to code, and eventually transition to frontend development.
            </p>
            <p>
              At Credit One Bank, I was part of the team transitioning from PHP to React. I built 
              reusable components, integrated them with Adobe Experience Manager, and served as 
              Scrum Master for the engineering team. I care deeply about accessibility and making 
              sure the interfaces I build work for everyone.
            </p>
            <p>
              I'm currently finishing my MS in Computer Science at Georgia Tech, focusing on 
              Human-Computer Interaction. I think a lot about how users interact with what we build, 
              but primarily, I want to be writing code and shipping features.
            </p>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  {frontendSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-category">
                <h4>Quality</h4>
                <ul>
                  {qualitySkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card glass-card">
              {stats.map((stat) => (
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
