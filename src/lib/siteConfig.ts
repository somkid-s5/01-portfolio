export type SiteLink = {
  label: string;
  href: string;
};

export const navLinks: SiteLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Career", href: "/#career" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export const siteConfig = {
  name: "SMART",
  shortName: "Portfolio",
  description:
    "Infrastructure-first full-stack engineer crafting resilient systems across bare metal, cloud, and web.",
  url: "https://smart-th.com",
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
    name: "Smart Somkid Sodsai",
    email: "somkids.sodsai@gmail.com",
    social: {
      github: "https://github.com/somkid-s5",
      website: "https://smart-th.com",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
