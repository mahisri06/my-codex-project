import { FaJira } from 'react-icons/fa6';
import {
  SiAzuredevops,
  SiClickup,
  SiJavascript,
  SiLinear,
  SiPlaywright,
  SiPostman,
  SiSelenium
} from 'react-icons/si';

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#expertise' },
  { label: 'Case Studies', href: '#projects' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' }
];

export const timeline = [
  {
    year: 'Today',
    title: 'Senior QA Engineer • Restaurant SaaS',
    text: 'Own release quality for multi-outlet ordering systems, POS sync, and production risk decisions.'
  },
  {
    year: 'Previous',
    title: 'QA Engineer • Telehealth Platform',
    text: 'Validated appointment, payment, and compliance-critical workflows with user/admin panel parity testing.'
  },
  {
    year: 'Earlier',
    title: 'QA Analyst • Enterprise Analytics',
    text: 'Focused on data quality, configurable reporting, and release confidence for analytics stakeholders.'
  }
];

export const capabilities = [
  {
    title: 'Revenue-Critical QA',
    points: [
      'Ordering flows across pickup, delivery, curbside, and drive-thru',
      'Tax, fees, refund logic, and pricing synchronization',
      'Peak-hour failure containment and failover-focused testing'
    ]
  },
  {
    title: 'POS & Integration Testing',
    points: [
      'Multi-POS validation and order handoff traceability',
      'Pricing mismatch detection between platform and POS',
      'Modifier integrity checks for kitchen-ready accuracy'
    ]
  },
  {
    title: 'Automation Engineering',
    points: [
      'Selenium and Playwright suites in JavaScript',
      'API validation using Postman collections',
      'Regression architecture optimized for high-value flows'
    ]
  },
  {
    title: 'Risk-Based Release Ownership',
    points: [
      'Go/No-Go decisions driven by impact analysis',
      'Production validation strategy and smoke depth planning',
      'Risk-adjusted regression for revenue-facing services'
    ]
  }
];

export const caseStudies = [
  {
    id: 'restaurant',
    title: 'Restaurant Multi-Outlet SaaS Platform',
    role: 'End-to-End QA Owner',
    responsibilities: [
      'Validated business hours vs fulfillment hours behavior under timezone constraints.',
      'Verified POS integration stability and asynchronous order synchronization.',
      'Tested modifier and pricing accuracy across platform and downstream systems.'
    ],
    strategy: 'Prioritized order lifecycle breakpoints and revenue leak vectors before each release.',
    impact: [
      'Prevented revenue-impacting sync issues before production.',
      'Improved order accuracy for multi-tenant outlet networks.',
      'Reduced post-release defects in critical order flows.'
    ]
  },
  {
    id: 'telehealth',
    title: 'Telehealth Platform',
    role: 'QA Engineer',
    responsibilities: [
      'Executed compliance-focused testing for regulated patient workflows.',
      'Validated appointment lifecycle and payment logic across user/admin panels.',
      'Implemented automation coverage for repeatable business-critical paths.'
    ],
    strategy: 'Mapped user trust risks to test depth to protect both compliance and conversion.',
    impact: [
      'Improved confidence in release quality for care delivery journeys.',
      'Lowered regression effort through targeted automation.',
      'Increased consistency across panel-specific workflows.'
    ]
  },
  {
    id: 'analytics',
    title: 'Enterprise Analytics Platform',
    role: 'QA Analyst',
    responsibilities: [
      'Validated data accuracy and aggregation logic across report dimensions.',
      'Tested country/state reporting outputs under varied data configurations.',
      'Verified admin configuration controls affecting downstream dashboards.'
    ],
    strategy: 'Aligned test design to data lineage and stakeholder decision criticality.',
    impact: [
      'Improved reliability of executive and operational reporting.',
      'Caught high-impact data anomalies before release.',
      'Strengthened confidence in configurable reporting features.'
    ]
  }
];

export const metrics = [
  { label: 'Live Platforms Owned', value: 3, suffix: '+' },
  { label: 'Restaurant SaaS Tenants Supported', value: 40, suffix: '+' },
  { label: 'Critical Flows Automated', value: 120, suffix: '+' },
  { label: 'Release Stability Confidence', value: 98, suffix: '%' }
];

export const tools = [
  { name: 'Selenium', icon: SiSelenium },
  { name: 'Playwright', icon: SiPlaywright },
  { name: 'Postman', icon: SiPostman },
  { name: 'Azure DevOps', icon: SiAzuredevops },
  { name: 'JIRA', icon: FaJira },
  { name: 'ClickUp', icon: SiClickup },
  { name: 'Linear', icon: SiLinear },
  { name: 'JavaScript', icon: SiJavascript }
];
