export const IMG_HERO =
  'https://images.unsplash.com/photo-1730584474428-83f3cfc20a73?w=1600&h=1000&fit=crop&auto=format'
export const IMG_CONSTRUCTION =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=540&fit=crop&auto=format'
export const IMG_AUDIT =
  'https://images.unsplash.com/photo-1760970237216-17a474403b5c?w=800&h=540&fit=crop&auto=format'

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Industries', href: '#industries' },
  { label: 'About Us', href: '#about' },
  { label: 'FAQs', href: '#faq' },
] as const

export const CREDENTIALS = [
  'ISO 45001 Aligned',
  'OSHA Compliant',
  'NEBOSH Practitioners',
  'HIRA Certified',
  'ISO 14001 Aware',
] as const

export const SERVICES_LIST = [
  'Risk Assessment & HIRA',
  'Safety Management Systems (ISO 45001)',
  'On-Site Safety Auditing',
  'Incident Investigation & RCA',
  'Emergency Response Planning',
  'Construction Safety',
  'Safety Training & Competency',
  'Regulatory Compliance (OSHA/EPA)',
  'Process Safety Management',
  'Contractor Safety Management',
  'Occupational Health & Hygiene',
  'Safety Culture Development',
] as const

export const SERVICE_CATEGORIES = [
  {
    number: '01',
    title: 'System Safety',
    desc: 'We build the frameworks, procedures, and oversight structures that keep your operations safe and audit-ready.',
    items: [
      'Risk Assessment & HIRA',
      'Safety Management Systems',
      'On-Site Safety Auditing',
      'Process Safety Management',
      'Emergency Response Planning',
      'Regulatory Compliance',
    ],
  },
  {
    number: '02',
    title: 'People Safety',
    desc: 'Safety culture starts with people. We develop competency, awareness, and accountability at every level.',
    items: [
      'Safety Training & Induction',
      'Leadership Safety Coaching',
      'Behaviour Based Safety',
      'Safety Culture Assessments',
      'Competency Gap Analysis',
      'Toolbox Talk Facilitation',
    ],
  },
  {
    number: '03',
    title: 'Incident & Response',
    desc: "When things go wrong, we help you understand why — and make sure it doesn't happen again.",
    items: [
      'Incident Investigation & RCA',
      'Near-Miss Reporting Systems',
      'Corrective Action Planning',
      'Regulatory Reporting Support',
      'Emergency Drill Facilitation',
      'Post-Incident Review',
    ],
  },
] as const

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: "A free, no-obligation conversation to understand your operations, current safety posture, and the specific challenges you're facing.",
  },
  {
    step: '02',
    title: 'Site Assessment',
    desc: 'We conduct a thorough on-site or document-based review to identify hazards, compliance gaps, and cultural risk factors.',
  },
  {
    step: '03',
    title: 'Tailored Plan',
    desc: 'You receive a clear, prioritized action plan — not a generic template. Every recommendation is specific to your site and industry.',
  },
  {
    step: '04',
    title: 'Implementation Support',
    desc: 'We stay with you through the rollout — training staff, embedding procedures, and verifying effectiveness before handover.',
  },
] as const

export const INDUSTRIES = [
  'Manufacturing',
  'Construction',
  'Oil & Gas',
  'Healthcare',
  'Logistics & Warehousing',
  'Chemical Processing',
  'Mining',
  'Food & Beverage',
  'Facilities Management',
  'Retail & Commercial',
] as const

export const ABOUT_VALUES = [
  {
    title: 'Practitioner-Led',
    body: 'Our consultants have direct field experience in the industries they serve — not just classroom or theoretical knowledge.',
  },
  {
    title: 'Commercially Unbiased',
    body: "We don't sell products, software, or equipment. Every recommendation we make is in your interest, not ours.",
  },
  {
    title: 'Transparent Pricing',
    body: 'No surprise invoices. We scope clearly, quote honestly, and deliver exactly what we promise — no scope creep.',
  },
  {
    title: 'Flexible Engagement',
    body: 'Whether you need a one-time audit, a full system build, or an ongoing advisory partner, we structure around your needs.',
  },
] as const

export const FAQS = [
  {
    q: "We're a small business. Is APEX the right fit for us?",
    a: 'Absolutely. We work with organizations of all sizes — from single-site SMEs to multi-location operations. Our engagement model scales to your size and budget. Small businesses often have the most to gain from getting safety right early.',
  },
  {
    q: 'What makes APEX different from other safety consultants?',
    a: "We're practitioners, not paper-pushers. Our consultants have direct field experience in the industries they serve. We don't deliver binders and disappear — we work alongside your team until every recommendation is actually in place.",
  },
  {
    q: 'How quickly can we get started?',
    a: 'We typically respond within one business day and can schedule a discovery call within the week. For urgent compliance matters, we prioritize accordingly. Getting started costs nothing — just reach out.',
  },
  {
    q: 'Do you offer ongoing safety support or just one-off projects?',
    a: 'Both. We offer project-based engagements (audits, incident investigations, system design) as well as retained advisory arrangements for organizations that want a safety partner on call.',
  },
  {
    q: 'Which standards and regulations do you work with?',
    a: 'We work across ISO 45001, OSHA, EPA regulations, NEBOSH frameworks, local Occupational Health & Safety legislation, and industry-specific standards across manufacturing, construction, oil & gas, healthcare, and more.',
  },
] as const

export const CONTACT_DETAILS = [
  { label: 'Email', value: 'info@apexsafetyconsultants.com' },
  { label: 'Phone', value: '+1 (555) 000-0000' },
  { label: 'Response time', value: 'Within 1 business day' },
] as const

export const FOOTER_COLUMNS = [
  {
    heading: 'Services',
    links: [
      { label: 'Risk Assessment', href: '#services' },
      { label: 'Safety Management Systems', href: '#services' },
      { label: 'Incident Investigation', href: '#services' },
      { label: 'Safety Training', href: '#services' },
      { label: 'Regulatory Compliance', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Approach', href: '#approach' },
      { label: 'Industries Served', href: '#industries' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'info@apexsafetyconsultants.com', href: 'mailto:info@apexsafetyconsultants.com' },
      { label: '+1 (555) 000-0000', href: 'tel:+15550000000' },
      { label: 'Mon–Fri, 8am–6pm', href: '#contact' },
    ],
  },
] as const
