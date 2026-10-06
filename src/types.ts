export type DeploymentOption = 'cloud' | 'self-hosted' | 'both';

export interface Ticket {
  id: string;
  subject: string;
  requester: string;
  email: string;
  department: string;
  priority: 'Emergency' | 'High' | 'Normal' | 'Low';
  status: 'Open' | 'In Progress' | 'Awaiting Customer' | 'Resolved';
  slaDue: string;
  slaStatus: 'healthy' | 'warning' | 'critical';
  channel: 'Email' | 'Portal' | 'API' | 'Chat';
  assignedAgent: string;
  lastUpdated: string;
  previewSnippet: string;
}

export interface FeatureDetail {
  id: string;
  badge: string;
  title: string;
  description: string;
  benefits: string[];
  interfaceType: 'ticket-management' | 'automation' | 'sla' | 'knowledge-base' | 'ai' | 'analytics' | 'integrations';
}

export interface CaseStudy {
  id: string;
  organization: string;
  industry: string;
  location: string;
  deployment: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Product' | 'Deployment' | 'SLA & Automation' | 'Pricing & Trials';
}

export interface DemoFormData {
  fullName: string;
  email: string;
  companyName: string;
  phone?: string;
  teamSize: string;
  deploymentPreference: 'cloud' | 'self-hosted' | 'undecided';
  primaryNeed: string;
}
