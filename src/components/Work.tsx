import { useState } from 'react';

interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 'credit-one-web',
    company: 'Credit One Bank',
    role: 'Web Developer',
    duration: 'May 2021 \u2013 Sept 2023',
    location: 'Las Vegas, NV',
    summary:
      'Developed web pages and components for enterprise applications while serving as Scrum Master, guiding Agile methodologies across the full software development lifecycle.',
    highlights: [
      'Built web pages and components using JavaScript, React, TypeScript, HTML, and CSS following Agile engineering practices including CI, TDD, and DevOps',
      'Served as Scrum Master \u2014 facilitated daily stand-ups, sprint planning, reviews, and retrospectives to ensure successful sprint completions',
      'Optimized testing procedures with Playwright, reducing manual work and aligning with Agile methodologies',
      'Collaborated with UX designers to transform visual concepts into functional, accessible web experiences',
      'Managed version control and team-based development using Git (Bitbucket, GitLab, GitHub)',
      'Tracked sprint objectives, burndown charts, and project statuses in Jira for clear monitoring and continuous improvement',
    ],
    skills: ['JavaScript', 'React', 'TypeScript', 'Playwright', 'Scrum Master', 'Git', 'Jira', 'Accessibility', 'CI/CD'],
  },
  {
    id: 'freelance',
    company: 'The Shipping Store',
    role: 'Freelance Web Developer',
    duration: 'Sept 2023 \u2013 Jan 2025',
    location: 'Remote',
    summary:
      'Created a user-friendly web experience for a shipping company, improving the label design process and boosting customer satisfaction through responsive design and self-service documentation.',
    highlights: [
      'Built a responsive website compatible across browsers with optimized loading speeds, guaranteeing a smooth creation-to-print process',
      'Designed versatile label templates using Microsoft Word, Canva, Adobe Photoshop, and Illustrator',
      'Produced detailed user guides enabling customers to create labels independently and efficiently',
      'Focused on reducing friction and improving UX for non-technical users',
    ],
    skills: ['Web Development', 'Responsive Design', 'Adobe Suite', 'Canva', 'UX Writing', 'User Documentation'],
  },
  {
    id: 'credit-one-ba',
    company: 'Credit One Bank',
    role: 'Business Analyst',
    duration: 'Apr 2018 \u2013 Jan 2021',
    location: 'Las Vegas, NV',
    summary:
      'Led a year-long SaaS implementation of Quavo to streamline the fraud reporting process, managing UAT from test scenario development through defect resolution across cross-functional teams.',
    highlights: [
      'Drove SaaS implementation of Quavo, significantly reducing the time for customers to report fraud and enhancing user satisfaction',
      'Developed and implemented extensive test scenarios and cases for User Acceptance Testing following Agile practices',
      'Collaborated with developers, QA experts, and project management teams on detailed defect analysis, replication, and documentation',
      'Allocated and clarified roles within the UAT team, improving team clarity and efficiency',
      'Partnered with stakeholders to pinpoint process inefficiencies and devise practical solutions',
    ],
    skills: ['Business Analysis', 'UAT', 'SaaS Implementation', 'Defect Triage', 'Process Improvement', 'Stakeholder Management', 'Agile'],
  },
  {
    id: 'mgm-ea',
    company: 'MGM Resorts International',
    role: 'Executive Assistant',
    duration: 'June 2012 \u2013 Oct 2014',
    location: 'Las Vegas, NV',
    summary:
      'Provided executive-level support to two Vice Presidents within the IT department, managing administrative operations for nearly 150 employees across two departments.',
    highlights: [
      'Managed travel logistics for employees and contractors across two departments totaling nearly 150 people',
      'Prepared expense reports and provided administrative support to IT Global Development and Business Solutions departments',
      'Developed and maintained productive relationships with project owners, IT developers, vendors, and stakeholders',
      'Coordinated onboarding for new hires, including logon service requests, equipment setup, and department orientation',
      'Maintained executive schedules for two Vice Presidents',
    ],
    skills: ['Executive Support', 'Stakeholder Relations', 'Travel Coordination', 'Onboarding', 'IT Operations'],
  },
  {
    id: 'mgm-mirage',
    company: 'MGM Resorts (The Mirage)',
    role: 'Assistant to the President',
    duration: 'Dec 2010 \u2013 June 2012',
    location: 'Las Vegas, NV',
    summary:
      'Served as the primary liaison between the President of The Mirage Hotel & Casino, key executives, and staff \u2014 managing an extremely active calendar and high-level communications.',
    highlights: [
      'Acted as liaison between the President, key Executives, and employees across the organization',
      'Managed the President\u2019s calendar, arranged multi-executive meetings, and developed itineraries and agendas',
      'Prepared correspondence, meeting minutes, and compiled documents to ensure full preparedness for all meetings',
      'Organized property functions including holiday events for the entire property',
      'Communicated directly with outside organizations where the President served as a Board member',
    ],
    skills: ['Executive Communications', 'Calendar Management', 'Event Planning', 'Board Relations', 'Confidential Correspondence'],
  },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState(experiences[0].id);
  const activeExperience = experiences.find((exp) => exp.id === activeTab)!;

  return (
    <section className="work" id="work">
      <div className="section-container">
        <span className="section-label">Professional Experience</span>
        <h2 className="section-title">Where I've contributed</h2>

        <div className="experience-tabs">
          <div className="tab-list" role="tablist" aria-label="Professional experience">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                role="tab"
                aria-selected={activeTab === exp.id}
                aria-controls={`panel-${exp.id}`}
                id={`tab-${exp.id}`}
                className={`tab-button ${activeTab === exp.id ? 'tab-active' : ''}`}
                onClick={() => setActiveTab(exp.id)}
              >
                <span className="tab-company">{exp.company}</span>
                <span className="tab-role">{exp.role}</span>
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`panel-${activeExperience.id}`}
            aria-labelledby={`tab-${activeExperience.id}`}
            className="tab-panel"
          >
            <div className="experience-header">
              <div>
                <h3 className="experience-role">{activeExperience.role}</h3>
                <p className="experience-company">{activeExperience.company}</p>
              </div>
              <div className="experience-meta">
                <span className="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {activeExperience.duration}
                </span>
                <span className="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {activeExperience.location}
                </span>
              </div>
            </div>

            <p className="experience-summary">{activeExperience.summary}</p>

            <div className="experience-highlights">
              <h4>Key Contributions</h4>
              <ul>
                {activeExperience.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="experience-skills">
              {activeExperience.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
