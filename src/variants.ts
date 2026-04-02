export type VariantKey = 'connect' | 'work' | 'hello' | 'default';

export interface SiteVariant {
  key: VariantKey;
  badge: string;
  headline: string;
  description: string;
  aboutHeadline: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  frontendSkills: string[];
  domainSkills: string[];
  domainSkillsLabel: string;
  stats: { value: string; label: string }[];
  contactHeadline: string;
  contactDescription: string;
  floatingCards: { icon: string; label: string }[];
}

export const variants: Record<VariantKey, SiteVariant> = {
  connect: {
    key: 'connect',
    badge: 'Business Analyst • Process Improvement • HCI Specialist',
    headline: 'Turning Complex Systems into Clear, Human-Centered Solutions',
    description:
      'I translate ambiguous business problems into structured requirements, streamlined processes, and measurable outcomes.',
    aboutHeadline: 'Analyst mindset, human-centered focus',
    aboutP1:
      'I started in QA and UAT at Credit One Bank, where I naturally gravitated toward asking "what does the user actually need?" That instinct led me into business analysis, and now I\'m sharpening it with formal HCI training at Georgia Tech, focused on usability, mental models, and design decisions in regulated environments.',
    aboutP2: '',
    aboutP3: '',
    frontendSkills: ['Requirements Gathering', 'Process Mapping', 'UAT & QA', 'Stakeholder Management'],
    domainSkills: ['User Story Authoring', 'Root Cause Analysis', 'WCAG 2.1 Compliance', 'Jira / Confluence'],
    domainSkillsLabel: 'Analysis + Tools',
    stats: [
      { value: '5+', label: 'Years in BA/Analysis' },
      { value: 'HCI', label: 'MS Specialization' },
    ],
    contactHeadline: "Let's solve a hard problem together",
    contactDescription:
      `Based in Las Vegas, open to remote. If you're hiring for BA, analyst, or process improvement roles, I'd love to connect.`,
    floatingCards: [
      { icon: '📋', label: 'Requirements' },
      { icon: '🔄', label: 'Process Design' },
      { icon: '🧩', label: 'HCI Research' },
    ],
  },

  // /work - Scrum Master (Curaleaf, gaming/tech)
  work: {
    key: 'work',
    badge: 'Scrum Master • CSPO • CSM • CSD • Agile Coach',
    headline: 'Agile Leadership That Keeps Teams Focused and Stakeholders Informed',
    description:
      'I run tight ceremonies, remove blockers before they become fires, and coach teams toward sustainable velocity.',
    aboutHeadline: 'Servant leadership, not just stand-ups',
    aboutP1:
      `I grew into Scrum Master work from the inside, starting as a BA and UAT analyst who noticed blockers going unaddressed and retrospectives becoming a formality. My CSPO, CSM, and CSD certifications, combined with an MS in HCI at Georgia Tech, give me a credible read on both business priorities and the technical realities of a sprint.`,
    aboutP2: '',
    aboutP3: '',
    frontendSkills: ['Sprint Facilitation', 'Backlog Refinement', 'Impediment Removal', 'Velocity Tracking'],
    domainSkills: ['Scrum / Kanban', 'Stakeholder Reporting', 'Burndown Analysis', 'Jira / Confluence'],
    domainSkillsLabel: 'Agile + Tools',
    stats: [
      { value: 'CSM', label: 'Certified Scrum Master' },
      { value: 'CSPO', label: 'Certified Product Owner' },
      { value: 'CSD', label: 'Certified Developer' },
    ],
    contactHeadline: "Let's build a team that actually ships",
    contactDescription:
      `Looking for Scrum Master or Agile Lead roles. Based in Las Vegas, open to remote.`,
    floatingCards: [
      { icon: '🏃', label: 'Scrum' },
      { icon: '📊', label: 'Velocity' },
      { icon: '🚧', label: 'Blockers' },
    ],
  },

  // /hello - Product Manager (MGM, gaming/tech)
  hello: {
    key: 'hello',
    badge: 'Associate Product Manager • HCI Specialist • BA',
    headline: 'Product Thinking Grounded in User Research and Business Value',
    description:
      'I connect user needs to business outcomes through structured discovery, clear requirements, and cross-functional alignment.',
    aboutHeadline: 'Where research meets roadmap',
    aboutP1:
      `My path to product management runs through business analysis, UAT, and a curiosity about why users behave the way they do. At Credit One Bank I managed 200+ use cases for a SaaS implementation, and my MS in HCI at Georgia Tech has sharpened how I think about discovery research, usability tradeoffs, and the mental models users bring to a product.`,
    aboutP2: '',
    aboutP3: '',
    frontendSkills: ['Product Discovery', 'Roadmap Prioritization', 'User Story Authoring', 'Stakeholder Alignment'],
    domainSkills: ['HCI / UX Research', 'A/B Framing', 'Backlog Management', 'Jira / Confluence'],
    domainSkillsLabel: 'Product + Research',
    stats: [
      { value: 'APM', label: 'Track Target' },
      { value: 'HCI', label: 'MS Specialization' },
      { value: '200+', label: 'Use Cases Owned' },
    ],
    contactHeadline: "Let's talk product",
    contactDescription:
      `Looking for APM or PM-track roles in Las Vegas or remote. If you're building something with real user impact, I'd love to connect.`,
    floatingCards: [
      { icon: '🗺️', label: 'Roadmap' },
      { icon: '🔬', label: 'User Research' },
      { icon: '📦', label: 'Delivery' },
    ],
  },

  // Fallback (root / unknown paths - UX Engineer)
  default: {
    key: 'default',
    badge: 'Web Design · Front-End Development · UI/UX',
    headline: 'UX Engineer',
    description:
      'I design and build landing pages, email campaigns, and responsive web experiences from Figma through deployment.',
    aboutHeadline: 'From concept to code, I own the full workflow',
    aboutP1:
      'I started in communications and business analysis, moved into front-end development building component libraries and design systems at Credit One Bank with React, TypeScript, and CSS3, and now I\'m completing an MS in Computer Science (HCI) at Georgia Tech. That arc gives me both the design eye and the technical execution to own projects end-to-end.',
    aboutP2: '',
    aboutP3: '',
    frontendSkills: ['HTML5 / CSS3 / JavaScript', 'React / TypeScript', 'Responsive Design', 'Figma to Code'],
    domainSkills: ['Landing Page Optimization', 'Email Campaign Design', 'WCAG Accessibility', 'Design Systems & CMS'],
    domainSkillsLabel: 'Design + Strategy',
    stats: [
      { value: 'HCI', label: 'MS Specialization' },
    ],
    contactHeadline: "Let's build something that converts",
    contactDescription:
      `Based in Henderson, NV. Open to on-site and remote opportunities.`,
    floatingCards: [
      { icon: '🎨', label: 'Visual Design' },
      { icon: '💻', label: 'Front-End Dev' },
      { icon: '📈', label: 'Conversion' },
    ],
  },
};

export function getVariant(): SiteVariant {
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  if (path === 'connect') return variants.connect;
  if (path === 'work') return variants.work;
  if (path === 'hello') return variants.hello;
  return variants.default;
}
