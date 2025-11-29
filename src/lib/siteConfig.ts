export type SiteLink = {
  label: string;
  href: string;
};

export const navLinks: SiteLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Skills", href: "/#skills" },
  { label: "Career", href: "/#career" },
  { label: "Contact", href: "/#contact" },
];

export const siteConfig = {
  name: "SMART.SYS",
  shortName: "Smart System Engineer",
  description:
    "Infrastructure-first full-stack engineer crafting resilient systems across bare metal, cloud, and web.",
  url: "https://smart-sys.dev",
  ogImage: "/og-card.svg",
  keywords: [
    "Next.js 16",
    "React 19",
    "Tailwind v4",
    "Portfolio",
    "DevOps",
    "SRE",
    "Full Stack",
  ] as string[],
  author: {
    name: "Smart Dev",
    email: "contact@smart-sys.dev",
    social: {
      github: "https://github.com/placeholder",
      linkedin: "https://www.linkedin.com/in/placeholder",
      website: "https://smart-sys.dev",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
