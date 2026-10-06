import { Ticket, FeatureDetail, CaseStudy, FAQItem } from '../types';

export const HERO_SAMPLE_TICKETS: Ticket[] = [
  {
    id: '#TKT-4892',
    subject: 'Urgent: Production API Gateway returning 504 timeout',
    requester: 'DevOps Lead · CloudTech Enterprise',
    email: 'marcus.vance@cloudtech.io',
    department: 'Technical Operations',
    priority: 'Emergency',
    status: 'In Progress',
    slaDue: '18m remaining',
    slaStatus: 'warning',
    channel: 'API',
    assignedAgent: 'Sarah Jenkins',
    lastUpdated: '4m ago',
    previewSnippet: 'We have observed sudden latency spikes exceeding 30s across our billing webhook microservice. Incident log attached.',
  },
  {
    id: '#TKT-4891',
    subject: 'Request for LDAP Single Sign-On (SSO) integration setup',
    requester: 'IT Director · Apex Regional Bank',
    email: 'k.patel@apexbank.com',
    department: 'Enterprise Support',
    priority: 'High',
    status: 'Open',
    slaDue: '2h 15m remaining',
    slaStatus: 'healthy',
    channel: 'Portal',
    assignedAgent: 'David Chen',
    lastUpdated: '12m ago',
    previewSnippet: 'Following our internal security audit, we require SAML 2.0 / Active Directory synchronization for all 180 support agents.',
  },
  {
    id: '#TKT-4890',
    subject: 'Billing inquiry: Request consolidated annual invoice with VAT',
    requester: 'Finance Operations · BioCare Labs',
    email: 'accounting@biocare-intl.com',
    department: 'Accounts & Billing',
    priority: 'Normal',
    status: 'Awaiting Customer',
    slaDue: 'Tomorrow at 10:00 AM',
    slaStatus: 'healthy',
    channel: 'Email',
    assignedAgent: 'Elena Rostova',
    lastUpdated: '35m ago',
    previewSnippet: 'We have settled the annual on-premise license renewal. Please provide the corresponding GST/VAT tax breakdown receipt.',
  },
  {
    id: '#TKT-4889',
    subject: 'Feature inquiry: Custom ticket field dependencies configuration',
    requester: 'Operations Specialist · Metro Logistics',
    email: 't.alvarez@metrolog.net',
    department: 'Customer Success',
    priority: 'Low',
    status: 'Resolved',
    slaDue: 'Resolved within SLA',
    slaStatus: 'healthy',
    channel: 'Email',
    assignedAgent: 'Marcus Sterling',
    lastUpdated: '1h ago',
    previewSnippet: 'Thank you for sharing the knowledge base guide on dependent dropdowns. The configuration has worked as expected.',
  },
];

export const PROBLEM_SOLUTION_WORKFLOW = [
  {
    step: '01',
    stage: 'Omnichannel Intake',
    problem: 'Queries scattered across disconnected personal inboxes, web forms, and chat without central records.',
    solution: 'Consolidate email, web portals, REST APIs, and chat into a single unified ticket queue with deduplication.',
    metric: '100% centralized capture',
  },
  {
    step: '02',
    stage: 'Automated Triage & Routing',
    problem: 'Manual forwarding causes delays, misdirected tickets, and slow first responses.',
    solution: 'Route tickets instantly based on keywords, sender domain, department, or agent workload round-robin rules.',
    metric: 'Zero manual sorting delays',
  },
  {
    step: '03',
    stage: 'Workspace & Collision Control',
    problem: 'Multiple agents inadvertently reply to the same customer, causing conflicting answers and confusion.',
    solution: 'Live agent collision detection warns when another teammate is viewing or drafting a response.',
    metric: 'Eliminates duplicate replies',
  },
  {
    step: '04',
    stage: 'SLA Tracking & Escalation',
    problem: 'High-priority enterprise issues slip through without notice until a client escalates angrily.',
    solution: 'Multi-tier SLA policies with automated alerts before breaches, escalating directly to team leads.',
    metric: 'Proactive SLA compliance',
  },
  {
    step: '05',
    stage: 'Resolution & Reporting',
    problem: 'Leadership has no visibility into first response times, backlog trends, or recurring pain points.',
    solution: 'Granular analytics dashboards reveal first contact resolution, backlog volume, and agent performance.',
    metric: 'Data-driven service decisions',
  },
];

export const WALKTHROUGH_MODULES = [
  {
    id: 'inbox',
    title: 'Omnichannel Ticket Queue',
    kicker: 'Centralized Queue',
    summary: 'View, filter, and triage requests from every inbound channel with custom views, tags, and status filters.',
    highlights: [
      'Custom views for Unassigned, Due Soon, and Department queues',
      'Bulk actions: reassign, change status, merge tickets in one click',
      'Complete audit trail of internal notes, time entries, and status shifts',
    ],
  },
  {
    id: 'sla',
    title: 'Multi-Tier SLA Engine',
    kicker: 'Service Level Governance',
    summary: 'Configure distinct response and resolution targets tailored to client contract tiers and ticket priorities.',
    highlights: [
      'Business hours & holiday calendar awareness',
      'Automated multi-level escalations prior to SLA breaches',
      'Department-specific SLA definitions with custom breach actions',
    ],
  },
  {
    id: 'productivity',
    title: 'Agent Workspace & Macros',
    kicker: 'Productivity & Collaboration',
    summary: 'Equip support teams with canned responses, internal notes, and live collision detection to resolve tickets faster.',
    highlights: [
      'Real-time collision alerts preventing double responses',
      'Canned response library with dynamic variable replacement',
      'Private internal notes for seamless cross-department collaboration',
    ],
  },
  {
    id: 'kb',
    title: 'Client Portal & Knowledge Base',
    kicker: 'Customer Self-Service',
    summary: 'Deflect repetitive queries with a structured, searchable knowledge base and customer self-service ticket portal.',
    highlights: [
      'Category hierarchy with public and internal restricted articles',
      'Ticket submission portal with contextual article suggestions',
      'SEO-friendly article indexation and multi-language capability',
    ],
  },
  {
    id: 'analytics',
    title: 'Granular Reporting & Metrics',
    kicker: 'Performance Visibility',
    summary: 'Gain actionable clarity on support bottlenecks, team workload distribution, and SLA adherence rates.',
    highlights: [
      'First Response Time (FRT) and Mean Time to Resolution (MTTR)',
      'SLA compliance rate breakdowns by department and priority',
      'Automated scheduled executive PDF and CSV report exports',
    ],
  },
];

export const DETAILED_FEATURES: FeatureDetail[] = [
  {
    id: 'ticket-management',
    badge: 'Core Platform',
    title: 'Unified Ticket Lifecycle Management',
    description: 'Transform incoming requests from email, portal, and APIs into structured, trackable tickets. Organise with custom fields, status lifecycles, and relational ticket linking.',
    benefits: [
      'Merge duplicate tickets or link related sub-issues into parent-child trees',
      'Custom ticket forms with dependent fields tailored to department needs',
      'Full chronological activity audit log preserving every modification',
    ],
    interfaceType: 'ticket-management',
  },
  {
    id: 'automation-workflows',
    badge: 'Automation',
    title: 'Rule-Based Triggers & Auto-Routing',
    description: 'Automate repetitive triage tasks. Route tickets to the right team members based on keywords, sender domain, department, or balanced round-robin workload distribution.',
    benefits: [
      'Event-triggered and time-based automation rules',
      'Automated round-robin distribution to prevent agent overload',
      'Custom webhook actions connecting external CRM and billing systems',
    ],
    interfaceType: 'automation',
  },
  {
    id: 'sla-management',
    badge: 'SLA Governance',
    title: 'Configurable Service Level Agreements',
    description: 'Define precise first-response and resolution deadlines according to client contract tiers, ticket priority, and operating business hours.',
    benefits: [
      'Automatic escalation triggers before deadlines are breached',
      'Custom business hours calculation excluding weekends and holidays',
      'Real-time SLA countdown timers visible in agent workspace',
    ],
    interfaceType: 'sla',
  },
  {
    id: 'knowledge-base',
    badge: 'Self-Service',
    title: 'Self-Service Knowledge Base & Client Portal',
    description: 'Empower customers to find immediate answers 24/7. Deflect routine tickets with searchable FAQs, how-to guides, and organized documentation.',
    benefits: [
      'Reduces repetitive inbound inquiries by providing instant answers',
      'Role-based article visibility: public customer-facing vs. internal agent guides',
      'Client portal enables customers to track ticket progress transparently',
    ],
    interfaceType: 'knowledge-base',
  },
  {
    id: 'ai-assisted',
    badge: 'Assisted Support',
    title: 'Pragmatic AI & Smart Assistant Capabilities',
    description: 'Verified assistive features designed to accelerate agent replies: smart ticket categorization, response drafts based on verified knowledge base articles, and duplicate detection.',
    benefits: [
      'Drafts context-aware reply suggestions referencing approved documentation',
      'Automatic topic categorization and sentiment tag hints for faster routing',
      'Human-in-the-loop review ensures full agent control before replies are sent',
    ],
    interfaceType: 'ai',
  },
  {
    id: 'analytics-reporting',
    badge: 'Business Intelligence',
    title: 'Real-Time Helpdesk Analytics & Reports',
    description: 'Monitor ticket volumes, team velocity, SLA compliance, and backlog health with exportable reports and filterable dashboard widgets.',
    benefits: [
      'Measure First Contact Resolution (FCR) and Average Resolution Time',
      'Identify recurring customer pain points and departmental bottlenecks',
      'Scheduled automated delivery of executive summaries via email',
    ],
    interfaceType: 'analytics',
  },
  {
    id: 'integrations-channels',
    badge: 'Ecosystem',
    title: 'Enterprise Integrations & Omnichannel Connectivity',
    description: 'Connect Faveo seamlessly into your existing enterprise infrastructure. Integrate with authentication providers, productivity suites, and external webhooks.',
    benefits: [
      'Single Sign-On (SSO) via Microsoft 365, Google Workspace, LDAP, and SAML',
      'REST API and Webhooks for two-way synchronization with CRMs and ERPs',
      'Omnichannel capture supporting email, web forms, and messaging gateways',
    ],
    interfaceType: 'integrations',
  },
];

export const USE_CASES = [
  {
    id: 'customer-support',
    title: 'Customer Service & Support Teams',
    subtitle: 'B2B & B2C Client Support',
    challenge: 'Managing high volumes of incoming client queries without dropping SLAs or providing inconsistent answers.',
    capabilities: 'Omnichannel inbox, SLA escalation rules, canned responses, knowledge base deflection, and customer portal.',
    outcome: 'Faster first-response times, organized ticket ownership, and measurable customer satisfaction.',
  },
  {
    id: 'internal-it',
    title: 'Internal IT & Employee Helpdesks',
    subtitle: 'Corporate IT & Operations',
    challenge: 'Handling internal hardware, software, VPN, and onboarding requests scattered across chat and hallway conversations.',
    capabilities: 'Departmental queues, Active Directory/LDAP integration, approval workflows, and internal private notes.',
    outcome: 'Clear IT request accountability, audited change logs, and streamlined employee service fulfillment.',
  },
  {
    id: 'data-sovereignty',
    title: 'High-Compliance & Data-Sensitive Sectors',
    subtitle: 'Healthcare, Finance & Government',
    challenge: 'Strict regulatory mandates (GDPR, HIPAA, local data residency) prohibiting storage of sensitive tickets on public multi-tenant clouds.',
    capabilities: 'Complete On-Premise / Self-Hosted deployment, private database isolation, and full source code access.',
    outcome: 'Total data sovereignty, air-gapped network compatibility, and complete internal compliance sign-off.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'campus-it',
    organization: 'Regional University System',
    industry: 'Higher Education',
    location: 'United States & International',
    deployment: 'Self-Hosted (On-Premise)',
    challenge: 'Fragmented departmental inboxes across 8 colleges led to lost student inquiries, delayed course registrations, and lack of accountability.',
    solution: 'Deployed Faveo Helpdesk with LDAP authentication, centralized campus portal, and priority-based routing for financial aid and IT support.',
    results: [
      { metric: '64%', label: 'Reduction in first response time' },
      { metric: '18,000+', label: 'Monthly requests tracked cleanly' },
      { metric: '98.2%', label: 'SLA compliance across campus teams' },
    ],
  },
  {
    id: 'clinical-healthcare',
    organization: 'Apex Diagnostic & Laboratory Services',
    industry: 'Healthcare & Clinical Services',
    location: 'Europe & Middle East',
    deployment: 'Self-Hosted Private Cloud',
    challenge: 'Strict patient confidentiality regulations required a support solution hosted entirely within their certified private data center.',
    solution: 'Installed Faveo Self-Hosted edition on their private Linux infrastructure, integrating directly with their internal lab portal via REST API.',
    results: [
      { metric: '100%', label: 'Data sovereignty & GDPR compliance' },
      { metric: '42m', label: 'Average critical incident resolution' },
      { metric: '0', label: 'Third-party cloud data exposure' },
    ],
  },
  {
    id: 'b2b-saas',
    organization: 'SyncPoint Logistics Solutions',
    industry: 'B2B Enterprise SaaS',
    location: 'United Kingdom',
    deployment: 'Faveo Cloud Managed',
    challenge: 'Rapid customer growth caused SLA breaches on premium accounts due to lack of automated escalation and agent collision errors.',
    solution: 'Implemented Faveo multi-tier SLA policies with automated alerts, agent collision prevention, and integrated client knowledge base.',
    results: [
      { metric: '41%', label: 'Ticket deflection via Knowledge Base' },
      { metric: '96.5%', label: 'Customer satisfaction rating (CSAT)' },
      { metric: '2.4x', label: 'Improvement in agent resolution throughput' },
    ],
  },
];

export const DIFFERENTIATORS = [
  {
    category: 'Deployment Freedom',
    faveo: 'Cloud SaaS OR Self-Hosted (On-Premise on your own servers with full database ownership)',
    alternatives: 'Primarily locked to vendor multi-tenant cloud with no on-premise installation option',
  },
  {
    category: 'Source Code & Customization',
    faveo: 'Built on clean Laravel/PHP architecture with source access available for custom modules',
    alternatives: 'Proprietary black-box architectures limited strictly to rigid standard UI extensions',
  },
  {
    category: 'ITIL / ITSM Growth Pathway',
    faveo: 'Seamless upgrade path from Faveo Helpdesk to Faveo Service Desk (Incident, Problem, Change & Assets)',
    alternatives: 'Requires migrating to completely distinct, expensive enterprise ITSM platforms',
  },
  {
    category: 'Predictable Licensing',
    faveo: 'Transparent agent licensing with no hidden surcharges for end-user contacts or storage',
    alternatives: 'Complex tiered pricing with costly add-ons for essential SLA and reporting features',
  },
  {
    category: 'Authentication & SSO',
    faveo: 'Out-of-the-box Microsoft 365, Google Workspace, Azure AD, LDAP, and SAML integrations',
    alternatives: 'SSO often locked behind expensive top-tier enterprise plans',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'what-is-faveo',
    category: 'Product',
    question: 'What is Faveo Helpdesk and how does it organize support?',
    answer: 'Faveo Helpdesk is an automated customer support and ticketing system developed by Ladybird Web Solution. It consolidates support inquiries from email, web portals, chat, and APIs into a unified queue, allowing teams to assign tickets, enforce SLA targets, collaborate via internal notes, and monitor performance.',
  },
  {
    id: 'helpdesk-vs-servicedesk',
    category: 'Product',
    question: 'What is the difference between Faveo Helpdesk and Faveo Service Desk?',
    answer: 'Faveo Helpdesk is specifically optimized for customer support ticketing, SLA tracking, multi-channel intake, and customer self-service. Faveo Service Desk is an ITIL-aligned IT Service Management (ITSM) solution that builds upon helpdesk capabilities to add Incident Management, Problem Management, Change Management, Release Management, and Asset/CMDB Management for internal IT teams.',
  },
  {
    id: 'self-hosted-options',
    category: 'Deployment',
    question: 'Can we host Faveo Helpdesk on our own private servers (on-premise)?',
    answer: 'Yes. One of Faveo\'s key differentiators is full self-hosted on-premise deployment. You can install Faveo on your own Linux servers, private clouds (AWS, Azure, GCP, or private data centers) with complete ownership of your database and data privacy.',
  },
  {
    id: 'server-requirements',
    category: 'Deployment',
    question: 'What are the technical requirements for running Faveo on-premise?',
    answer: 'Faveo is built on the robust Laravel PHP framework. For self-hosting, it typically requires PHP 8.1+, a MySQL or MariaDB database, an HTTP web server (Nginx or Apache), and standard PHP extensions (OpenSSL, PDO, Mbstring, Tokenizer, XML, cURL). Complete system requirement guides are provided in the documentation.',
  },
  {
    id: 'trial-duration',
    category: 'Pricing & Trials',
    question: 'How does the free trial work and is a credit card required?',
    answer: 'Faveo provides a full-featured 14-day free trial. No credit card is required to begin. You can evaluate the Cloud edition instantly or request a trial license for evaluation on your self-hosted environment.',
  },
  {
    id: 'sso-integrations',
    category: 'SLA & Automation',
    question: 'Does Faveo support Single Sign-On (SSO) and Active Directory?',
    answer: 'Yes. Faveo provides native Single Sign-On capabilities supporting Microsoft 365, Google Workspace, LDAP, Active Directory, and SAML 2.0. This allows your team and clients to sign in securely using their existing corporate credentials.',
  },
  {
    id: 'sla-escalation-details',
    category: 'SLA & Automation',
    question: 'How does Faveo handle SLA policies and automated escalations?',
    answer: 'You can create multi-tiered SLA policies mapped to ticket priorities, client agreements, or departments. The engine calculates operating business hours (excluding non-working hours and company holidays) and automatically fires notification warnings or reassigns tickets when an SLA deadline is in risk of breaching.',
  },
  {
    id: 'data-migration',
    category: 'Product',
    question: 'Can we migrate existing support tickets from Zendesk, Freshdesk, or osTicket?',
    answer: 'Yes. Faveo offers data import tools and migration scripts to transfer historical tickets, customer profiles, and knowledge base articles from legacy systems including Zendesk, Freshdesk, osTicket, and CSV/database dumps.',
  },
  {
    id: 'knowledge-base-benefit',
    category: 'SLA & Automation',
    question: 'How does the self-service Knowledge Base reduce ticket volumes?',
    answer: 'When customers begin typing a query into the self-service portal, Faveo automatically suggests relevant knowledge base articles in real-time. By providing immediate answers to frequent questions, teams deflect routine inquiries and empower customers 24/7.',
  },
  {
    id: 'book-demo-process',
    category: 'Pricing & Trials',
    question: 'How can our team schedule a personalized live product demonstration?',
    answer: 'You can click "Book a Live Demo" on this page. Our technical specialists will coordinate a 30-minute walkthrough tailored to your support workflow, discuss deployment preferences (Cloud vs On-Premise), and answer architectural questions.',
  },
];

export const INTEGRATIONS_LIST = [
  { name: 'Microsoft 365', category: 'Productivity & SSO', logo: 'M365' },
  { name: 'Google Workspace', category: 'Authentication & Mail', logo: 'Google' },
  { name: 'Active Directory / LDAP', category: 'Enterprise SSO', logo: 'LDAP' },
  { name: 'SAML 2.0 / Okta', category: 'Identity Management', logo: 'SAML' },
  { name: 'Zapier', category: 'Workflow Automation', logo: 'Zapier' },
  { name: 'Custom REST API', category: 'Developer Extensibility', logo: 'API' },
  { name: 'Webhooks', category: 'Real-Time Event Sync', logo: 'Hooks' },
  { name: 'SMS & WhatsApp Gateways', category: 'Omnichannel Messaging', logo: 'SMS' },
];

export const ENTERPRISE_CLIENTS = [
  { name: 'SHIVALIK', subtitle: 'Shivalik Small Finance Bank', category: 'Banking & Finance' },
  { name: 'Business 1st', subtitle: 'National Business Support', category: 'Government & Trade' },
  { name: 'InnBucks', subtitle: 'MicroBank Limited', category: 'FinTech & Microfinance' },
  { name: 'tekSalah', subtitle: 'BEYOND SOLUTIONS', category: 'IT Solutions & Telecom' },
  { name: 'bmb', subtitle: 'Technology Group', category: 'Enterprise Technology' },
  { name: 'EYE-Q', subtitle: 'SUPER-SPECIALITY EYE HOSPITALS', category: 'Healthcare Network' },
];

export const ONE_PLATFORM_FEATURES = [
  {
    id: 'automation-rules',
    title: 'Automation Rules',
    description: 'Set custom trigger conditions, ticket escalations, and automated field updates to reduce repetitive manual work.',
    category: 'Workflows',
  },
  {
    id: 'knowledge-base',
    title: 'Knowledge Base',
    description: 'Provide an organized self-service documentation library to resolve common questions before tickets are submitted.',
    category: 'Self-Service',
  },
  {
    id: 'sla-management',
    title: 'SLA Management',
    description: 'Define clear response and resolution targets tailored to ticket priorities and business hours with automated alerts.',
    category: 'Service Standards',
  },
  {
    id: 'omnichannel-support',
    title: 'Omnichannel Support',
    description: 'Unify incoming requests from email, client portal, web forms, and developer APIs into one central workspace.',
    category: 'Channels',
  },
  {
    id: 'ai-powered-automation',
    title: 'AI-Powered Automation',
    description: 'Smart ticket categorization, assisted reply suggestions, and contextual intent detection to accelerate agent velocity.',
    category: 'AI Capabilities',
  },
  {
    id: 'third-party-integrations',
    title: 'Third-Party Integrations',
    description: 'Connect Faveo with Microsoft 365, Google Workspace, Azure AD, LDAP SSO, and webhooks for unified ecosystem flow.',
    category: 'Integrations',
  },
  {
    id: 'mobile-friendly-access',
    title: 'Mobile Friendly Access',
    description: 'Manage support queues, review urgent tickets, and send updates anywhere with fully responsive mobile interfaces.',
    category: 'Accessibility',
  },
  {
    id: 'addons-extensions',
    title: 'Add-Ons & Extensions',
    description: 'Extend capabilities with modular plugins, custom ticket forms, dependent dropdowns, and developer hooks.',
    category: 'Customization',
  },
  {
    id: 'advanced-reports',
    title: 'Advanced Reports & Analytics',
    description: 'Gain deep visibility into first response times, resolution rates, agent workloads, and SLA compliance.',
    category: 'Analytics',
  },
  {
    id: 'scalable-cost-effective',
    title: 'Scalable and Cost-effective',
    description: 'Transparent pricing with no hidden end-user charges. Designed to scale seamlessly from 5 to 500+ agents.',
    category: 'Economics',
  },
];

export const TEAMS_HANDLED = [
  {
    id: 'startups',
    title: 'Startups & SMEs',
    description: 'Affordable helpdesk software to manage support from day one.',
    details: 'Quick onboarding, intuitive queue management, and essential automation without enterprise complexity.',
  },
  {
    id: 'enterprises',
    title: 'Enterprises',
    description: 'Scalable IT service desk system for complex, SLA-driven teams.',
    details: 'Custom departmental hierarchies, Active Directory/LDAP single sign-on, and rigorous audit logging.',
  },
  {
    id: 'ecommerce-saas',
    title: 'E-commerce & SaaS',
    description: 'High-volume support ticketing system with a centralized support inbox.',
    details: 'Auto-categorization, customer purchase history mapping, and canned macro replies for peak order spikes.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'SLA-protected support for patient and service teams.',
    details: 'Strict confidentiality, self-hosted on-premise installation options, and rapid clinical ticket triage.',
  },
  {
    id: 'other-industries',
    title: 'Other Industries',
    description: 'Flexible omnichannel support software for retail, logistics, and services.',
    details: 'Adaptable ticket lifecycles, asset tracking integration, and multi-location support desks.',
  },
];

export const OBVIOUS_CHOICE_PILLARS = [
  {
    id: 'open-source-scale',
    title: 'Open-source-first helpdesk software with enterprise scale',
    description: 'Gives technical teams the architectural freedom and customizability that closed proprietary systems block.',
  },
  {
    id: 'smart-automation',
    title: 'Smart automation that closes tickets faster',
    description: 'Intelligent triage, auto-assignment rules, and canned responses accelerate mean time to resolution.',
  },
  {
    id: 'fast-adoption',
    title: 'Fast adoption with a UI built for support teams',
    description: 'Clean agent workspace with minimal learning curve ensures your team is productive on day one.',
  },
  {
    id: 'cloud-or-selfhost',
    title: 'Deploy on cloud or self-host your helpdesk',
    description: 'Full freedom to choose our managed cloud or install directly in your private data center with complete database ownership.',
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise-grade security and strict compliance',
    description: 'Role-based access controls (RBAC), audit trails, GDPR compliance, and air-gapped network compatibility.',
  },
  {
    id: 'affordable-scale',
    title: 'Affordable, scalable support for teams of any size',
    description: 'Predictable licensing without penalty fees for end-user contacts, stored tickets, or incoming email volume.',
  },
];

export const COMPANY_STATS = [
  { value: '12+', label: 'YEARS OF EXPERIENCE', sublabel: 'Proven stability since 2015' },
  { value: '5000+', label: 'CUSTOMERS', sublabel: 'Across diverse industries' },
  { value: '50+', label: 'TEAM SIZE', sublabel: 'Dedicated engineers & specialists' },
  { value: '50+', label: 'COUNTRIES', sublabel: 'Global deployments worldwide' },
];

export const ACCOLADES = [
  {
    id: 'softwaresuggest-2020',
    title: 'MOST AFFORDABLE',
    awarder: 'SoftwareSuggest',
    year: '2020',
    accentColor: '#0284C7',
  },
  {
    id: 'software-advice-2026',
    title: 'FRONT RUNNERS',
    awarder: 'Software Advice',
    year: '2026',
    accentColor: '#1E293B',
  },
  {
    id: 'capterra-2026',
    title: 'SHORTLIST',
    awarder: 'Capterra',
    year: '2026',
    accentColor: '#0B63E5',
  },
  {
    id: 'software-advice-2025',
    title: 'FRONT RUNNERS',
    awarder: 'Software Advice',
    year: '2025',
    accentColor: '#1E293B',
  },
  {
    id: 'getapp-2025',
    title: 'CATEGORY LEADERS',
    awarder: 'GetApp',
    year: '2025',
    accentColor: '#0D9488',
  },
];

export const VALUABLE_CUSTOMERS = [
  {
    id: 'silafrica',
    name: 'SILAFRICA',
    tagline: 'We Make Packaging Roar',
    industry: 'Packaging & Manufacturing Leader',
    summary: 'Centralized customer orders and supply-chain inquiries across multiple African manufacturing plants with automated SLA routing.',
    badge: 'Manufacturing',
  },
  {
    id: 'chester',
    name: 'University of Chester',
    tagline: 'Higher Education Institution, UK',
    industry: 'Higher Education',
    summary: 'Streamlined campus-wide student and academic IT inquiries with LDAP SSO integration, reducing initial wait times significantly.',
    badge: 'Education',
  },
  {
    id: 'abk-teknik',
    name: 'ABK Teknik',
    tagline: 'Industrial Technical Engineering',
    industry: 'Engineering & Industrial Operations',
    summary: 'Standardized equipment maintenance and service requests with structured custom ticket fields and proactive SLA escalation.',
    badge: 'Industrial',
  },
  {
    id: 'sanveer',
    name: 'Sanveer Infotech',
    tagline: 'IT Infrastructure & Data Center Solutions',
    industry: 'Enterprise IT Services',
    summary: 'Deployed self-hosted Faveo within their secure private cloud for high-compliance client infrastructure ticket management.',
    badge: 'Enterprise IT',
  },
];
