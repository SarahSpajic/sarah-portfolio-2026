const frontendSkills = ["React", "TypeScript", "Component Libraries", "CSS Architecture"];
const healthcareSkills = ["Health Informatics", "Digital Health Equity", "WCAG Accessibility", "User Research"];

const stats = [
  { value: "4+", label: "Years React Experience" },
  { value: "HCI", label: "Specialization" },
  { value: "MS", label: "Computer Science" }
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Frontend skills meet healthcare focus</h2>
            <p>
              I started my tech journey as a business analyst and QA tester. That curiosity 
              about what happens under the hood led me to teach myself to code and transition 
              to frontend development, where I spent years building accessible component 
              libraries and user-centered interfaces.
            </p>
            <p>
              Now I am combining that technical foundation with a focus on healthcare. 
              At Georgia Tech, I am studying Human-Computer Interaction with coursework 
              in Digital Health Equity and Health Informatics. I believe good interface 
              design can genuinely improve health outcomes, whether that means helping 
              a patient understand their data or making an appointment flow less frustrating.
            </p>
            <p>
              I am looking for opportunities to apply my frontend expertise to healthcare 
              technology, where accessibility and user-centered design are not just nice 
              to have but essential.
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
                <h4>Healthcare + UX</h4>
                <ul>
                  {healthcareSkills.map((skill) => (
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
