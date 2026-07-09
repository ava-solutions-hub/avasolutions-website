export const site = {
  name: 'AVA Solutions',
  legalName: 'AVA Solutions LLC',
  domain: 'avasolutions.us',
  url: 'https://avasolutions.us',
  email: 'info@avasolutions.us',
  city: 'Aldie',
  state: 'Virginia',
  stateAbbr: 'VA',
  tagline: 'Accelerating value through innovation, automation & excellence.',
  description:
    'AVA Solutions is a woman-owned technology consulting firm delivering cloud modernization, AI, data, and program delivery for federal and enterprise missions.',
  capabilityStatementPath: '/AVA_Solutions_Capability_Statement.pdf',
  ogImagePath: '/og-image.svg',
} as const;

// SAM.gov UEI: PWPNEHF87D36 (AVA Solutions LLC) — for proposals/capability statement; not rendered on site
export const federal = {
  businessType: 'Woman-Owned',
  structure: 'Virginia LLC',
  location: 'Aldie, Virginia',
  naics: ['541511', '541512', '541519', '541611'] as const,
  engagement: 'Prime · Subcontractor · Teaming',
} as const;

export const navLinks = [
  { href: '#overview', label: 'Overview' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#federal', label: 'Federal' },
] as const;

export const capabilities = [
  {
    tag: 'Cloud',
    title: 'Cloud Modernization',
    body:
      'Migrate and re-architect legacy systems onto modern cloud platforms, with security and scale designed in from the start.',
  },
  {
    tag: 'AI',
    title: 'AI & Automation',
    body:
      'Apply AI-assisted engineering and intelligent automation to accelerate delivery and reduce operational toil.',
  },
  {
    tag: 'Data',
    title: 'Data & Analytics',
    body:
      'Migrate, integrate, and surface data so teams make faster, better-informed decisions across the enterprise.',
  },
  {
    tag: 'Apps',
    title: 'Application Modernization',
    body:
      'Replatform and rebuild aging applications into maintainable, cloud-native services that are built to last.',
  },
  {
    tag: 'Delivery',
    title: 'Program & Delivery',
    body:
      'Agile delivery, DevSecOps, and program management focused on shipping mission outcomes with discipline.',
  },
  {
    tag: 'Federal',
    title: 'Acquisition & Grants Systems',
    body:
      'Deep experience modernizing federal acquisition and grants management systems that serve thousands of users.',
  },
] as const;

export const whyItems = [
  {
    title: 'Federal-grade experience',
    body:
      'Leadership with decades of combined experience delivering on federal mission systems.',
  },
  {
    title: 'Modern engineering',
    body:
      'Cloud-native, DevSecOps, and AI-assisted delivery as the default — not an upgrade.',
  },
  {
    title: 'Outcome focus',
    body:
      'Measured by mission impact and operational efficiency, not hours on a timesheet.',
  },
  {
    title: 'Accountable by design',
    body:
      'A woman-owned business built to stay close to the work and answerable for results.',
  },
] as const;

export const leaders = [
  {
    initials: 'AP',
    name: 'Aarathi Poldass',
    role: 'Chief Executive Officer',
    bio:
      'Leads company strategy and client delivery, with a background spanning federal modernization and enterprise technology programs.',
  },
  {
    initials: 'SM',
    name: 'Suman Mallela',
    role: 'Vice President & CTO',
    bio:
      'Leads engineering and technology strategy across cloud, data, AI, and DevSecOps, turning modernization goals into working systems.',
  },
] as const;
