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
    id: 'georgia-tech',
    company: 'Georgia Tech',
    role: 'Graduate Researcher & Developer',
    duration: 'Aug 2024 \u2013 Present',
    location: 'Remote',
    summary:
      'MS in Computer Science (HCI), researching cross-device UX adaptation.',
    highlights: [
      'Researching how mental models transfer between devices, producing interaction design documentation',
      'Applying usability testing and information architecture to real-world project work',
      'Deepening expertise in design systems, accessibility, and conversion-focused UX',
    ],
    skills: ['HCI Research', 'Interaction Design', 'Usability Testing', 'Information Architecture', 'User-Centered Design'],
  },
  {
    id: 'credit-one-web',
    company: 'Credit One Bank',
    role: 'Frontend Web Designer & Developer',
    duration: 'May 2021 \u2013 Sept 2023',
    location: 'Las Vegas, NV',
    summary:
      'Built customer-facing web pages, a reusable component library, and design system for enterprise fintech applications.',
    highlights: [
      'Translated Figma mockups into responsive, accessible implementations with React, TypeScript, HTML5, and CSS3',
      'Built a shared component library and design system used across multiple product teams',
      'Integrated custom components into Adobe Experience Manager (AEM) and conducted thorough post-implementation testing',
      'Implemented WCAG 2.1 accessibility standards across web properties',
    ],
    skills: ['React', 'TypeScript', 'HTML5/CSS3', 'Figma', 'Design Systems', 'AEM', 'WCAG 2.1', 'Responsive Design', 'Playwright', 'Git'],
  },
  {
    id: 'freelance',
    company: 'The Shipping Store',
    role: 'Freelance Web Designer & Developer',
    duration: 'Sept 2023 \u2013 Jan 2025',
    location: 'Remote',
    summary:
      'Owned design-to-deployment for a CMS-powered business website, including branding and content strategy.',
    highlights: [
      'Designed and built a responsive, high-performing website with optimized loading speeds',
      'Implemented a headless CMS (Sanity) giving the client full content control',
      'Created reusable design templates and brand assets in Adobe Suite and Canva',
      'Optimized for SEO, performance, and conversion',
    ],
    skills: ['Web Design', 'Responsive Design', 'CMS (Sanity)', 'Adobe Suite', 'SEO', 'Performance Optimization', 'Branding'],
  },
  {
    id: 'credit-one-ba',
    company: 'Credit One Bank',
    role: 'UAT Analyst / Business Analyst',
    duration: 'Feb 2018 \u2013 May 2021',
    location: 'Las Vegas, NV',
    summary:
      'Led UAT and requirements gathering for a major SaaS platform launch.',
    highlights: [
      'Defined acceptance criteria and ensured user-centered requirements for a year-long SaaS implementation',
      'Facilitated cross-departmental requirements sessions, producing user stories and process documentation',
      'Collaborated with dev, QA, and PMs on defect analysis and iterative improvements',
    ],
    skills: ['User Acceptance Testing', 'Requirements Gathering', 'User Flows', 'Stakeholder Management', 'Agile/Scrum', 'Process Design'],
  },
  {
    id: 'rto',
    company: 'Rise To Offend Podcast',
    role: 'Web & Digital Campaign Designer',
    duration: '2013 \u2013 2021',
    location: 'Las Vegas, NV',
    summary:
      'Owned web presence and digital campaign assets for a media brand over eight years.',
    highlights: [
      'Designed and iterated on landing pages optimized for audience conversion',
      'Created reusable templates for social campaigns, email newsletters, and promotional content',
      'Produced motion graphics and short-form video using After Effects and Cinema 4D',
    ],
    skills: ['Landing Page Design', 'Email Templates', 'Campaign Graphics', 'After Effects', 'Photoshop', 'Illustrator', 'Brand Design'],
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
