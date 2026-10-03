export const navigation = [
  {
    label: 'Technology',
    href: '/technology',
  },
  {
    label: 'Applications',
    href: '/applications',
  },
  {
    label: 'Research',
    href: '/research',
  },
  {
    label: 'About',
    href: '/about',
  },
] as const;

export const footerNavigation = {
  company: [
    { label: 'About', href: '/about', external: false },
    { label: 'Research', href: '/research', external: false },
    { label: 'Applications', href: '/applications', external: false },
  ],
  technology: [
    { label: 'Platform', href: '/technology', external: false },
    { label: 'Digital Twin', href: '/technology#digital-twin', external: false },
    { label: 'Intelligence', href: '/technology#intelligence', external: false },
  ],
  connect: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/metabotics', external: true },
    { label: 'Email', href: 'mailto:hello@metabotics.com', external: false },
    { label: 'Partner With Us', href: '/contact', external: false },
  ],
} as const;