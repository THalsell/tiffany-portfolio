export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    label: 'Backend & APIs',
    items: ['Node.js', 'REST APIs', 'GraphQL', 'Shopify Storefront API', 'Shopify Admin API'],
  },
  {
    label: 'Platforms & Deployment',
    items: ['Shopify', 'Vercel', 'GitHub', 'Linux / WSL', 'Cloudflare', 'Resend'],
  },
  {
    label: 'Data, Analytics & Marketing',
    items: [
      'Google Analytics 4',
      'Google Tag Manager',
      'Google Ads',
      'Search Console',
      'Merchant Center',
      'Technical SEO',
    ],
  },
  {
    label: 'Workflow & Collaboration',
    items: ['Git', 'GitHub', 'CI/CD', 'Debugging', 'Stakeholder Communication', 'Project Planning'],
  },
];
