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
      'I translate ambiguous business problems into structured requirements, streamlined processes, and measurable outcomes. MS in Computer Science (HCI) candidate at Georgia Tech, with 5+ years bridging technical teams and business stakeholders.',
    aboutHeadline: 'Analyst mindset, human-centered focus',
    aboutP1:
      'My career started in QA and UAT at Credit One Bank — I was the person asking "but what does the user actually need?" before that became a formal part of anyone\'s job description. That instinct drove me toward business analysis, where I spent years translating stakeholder needs into traceable requirements, prioritized backlogs, and working software.',
    aboutP2:
      `Now I'm layering that foundation with formal HCI training at Georgia Tech. My coursework in Digital Health Equity and Health Informatics has sharpened how I think about usability, mental models, and the downstream consequences of design decisions — especially in regulated, high-stakes environments.`,
    aboutP3:
      `I'm looking for BA, analyst, or process improvement roles where technical fluency and a human-centered lens are both assets, not trade-offs.`,
    frontendSkills: ['Requirements Gathering', 'Process Mapping', 'UAT & QA', 'Stakeholder Management'],
    domainSkills: ['User Story Authoring', 'Root Cause Analysis', 'WCAG 2.1 Compliance', 'Jira / Confluence'],
    domainSkillsLabel: 'Analysis + Tools',
    stats: [
      { value: '5+', label: 'Years in BA/Analysis' },
      { value: 'HCI', label: 'MS Specialization' },
      { value: '6', label: 'Active Certifications' },
    ],
    contactHeadline: "Let's solve a hard problem together",
    contactDescription:
      `I bring structured thinking, strong stakeholder communication, and a genuine curiosity about how systems — and the people inside them — actually work. If you're hiring for BA, analyst, or process improvement roles in Las Vegas or remote, I'd love to connect.`,
    floatingCards: [
      { icon: '📋', label: 'Requirements' },
      { icon: '🔄', label: 'Process Design' },
      { icon: '🧩', label: 'HCI Research' },
    ],
  },

  // /work — Scrum Master (Curaleaf, gaming/tech)
  work: {
    key: 'work',
    badge: 'Scrum Master • CSPO • CSM • CSD • Agile Coach',
    headline: 'Agile Leadership That Keeps Teams Focused and Stakeholders Informed',
    description:
      'I run tight ceremonies, remove blockers before they become fires, and coach teams toward sustainable velocity. CSM, CSPO, and CSD certified, with years of hands-on Scrum experience in regulated tech environments.',
    aboutHeadline: 'Servant leadership, not just stand-ups',
    aboutP1:
      `I grew into Scrum Master work from the inside — I was the BA and UAT analyst who noticed that blockers were going unaddressed, sprint goals were fuzzy, and retrospectives were becoming a formality. So I stepped in. I coached teams on Fibonacci estimation, facilitated backlog refinement that actually refined, and started tracking velocity so we could have honest capacity conversations.`,
    aboutP2:
      `That experience — plus my CSPO, CSM, and CSD certifications — gives me a credible read on both the business priorities and the technical realities of a sprint. I can translate between product owners and engineering teams because I've sat on both sides of that table.`,
    aboutP3:
      `I'm pursuing my MS at Georgia Tech with a focus on Human-Computer Interaction. The HCI lens makes me a better Scrum Master — I pay attention to how people actually work, not just the process they're supposed to follow.`,
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
      `I'm looking for Scrum Master or Agile Lead roles where I can bring structure without bureaucracy and coaching without micromanagement. If your team needs someone who can hold the process AND understand the product, let's talk.`,
    floatingCards: [
      { icon: '🏃', label: 'Scrum' },
      { icon: '📊', label: 'Velocity' },
      { icon: '🚧', label: 'Blockers' },
    ],
  },

  // /hello — Product Manager (MGM, gaming/tech)
  hello: {
    key: 'hello',
    badge: 'Associate Product Manager • HCI Specialist • BA',
    headline: 'Product Thinking Grounded in User Research and Business Value',
    description:
      'I connect user needs to business outcomes through structured discovery, clear requirements, and cross-functional alignment. Pursuing an MS in HCI at Georgia Tech, with a background in enterprise BA and Agile product delivery.',
    aboutHeadline: 'Where research meets roadmap',
    aboutP1:
      `My path to product management runs through business analysis, UAT, and a deep curiosity about why users behave the way they do — not just what they click. At Credit One Bank, I managed a backlog of 200+ use cases for a SaaS implementation, prioritizing by urgency and severity, running cross-functional discovery sessions, and keeping stakeholders across the enterprise aligned through every sprint.`,
    aboutP2:
      `My MS work at Georgia Tech in Human-Computer Interaction has sharpened how I think about discovery research, usability tradeoffs, and the mental models that users bring to a product. I believe the best PMs are grounded in evidence — qualitative and quantitative — not just instinct.`,
    aboutP3:
      `I'm looking for APM or PM-track roles where the product has meaningful impact and where I can grow from structured discovery through to launch ownership.`,
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
      `I'm actively looking for Associate PM or PM-track roles in Las Vegas or remote, with preference for tech, gaming, or enterprise SaaS. If you're building something with real user impact and need someone who bridges research and delivery, I'd love to connect.`,
    floatingCards: [
      { icon: '🗺️', label: 'Roadmap' },
      { icon: '🔬', label: 'User Research' },
      { icon: '📦', label: 'Delivery' },
    ],
  },

  // Fallback (root / unknown paths — defaults to BA)
  default: {
    key: 'default',
    badge: 'Business Analyst • HCI Specialist • Agile',
    headline: 'Turning Complex Systems into Clear, Human-Centered Solutions',
    description:
      'I translate ambiguous business problems into structured requirements and measurable outcomes. MS in Computer Science (HCI) candidate at Georgia Tech, with 5+ years bridging technical teams and business stakeholders.',
    aboutHeadline: 'Analyst mindset, human-centered focus',
    aboutP1:
      'My career started in QA and UAT — I was the person asking "but what does the user actually need?" before that was anyone\'s formal job. That instinct led me toward business analysis, where I spent years translating stakeholder needs into traceable requirements and working software.',
    aboutP2:
      `Now I'm building on that with a formal HCI specialization at Georgia Tech, with coursework in Digital Health Equity and Health Informatics. I'm interested in roles where technical fluency and a human-centered lens are both valued.`,
    aboutP3:
      `I hold CSPO, CSM, CSD, ITIL, ISTQB, and CompTIA Project+ certifications, and I'm comfortable working across BA, Scrum, and PM-adjacent roles.`,
    frontendSkills: ['Requirements Gathering', 'Process Mapping', 'UAT & QA', 'Stakeholder Management'],
    domainSkills: ['User Story Authoring', 'Root Cause Analysis', 'WCAG 2.1 Compliance', 'Jira / Confluence'],
    domainSkillsLabel: 'Analysis + Tools',
    stats: [
      { value: '5+', label: 'Years in BA/Analysis' },
      { value: 'HCI', label: 'MS Specialization' },
      { value: '6', label: 'Active Certifications' },
    ],
    contactHeadline: "Let's connect",
    contactDescription:
      `I'm actively looking for BA, Scrum Master, and PM-track roles in Las Vegas or remote. If you're working on something meaningful and need someone who can bridge business and technology, I'd love to hear from you.`,
    floatingCards: [
      { icon: '📋', label: 'Requirements' },
      { icon: '🔄', label: 'Process Design' },
      { icon: '🧩', label: 'HCI Research' },
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
