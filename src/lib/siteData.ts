export const siteData = {
  email: "emily.yu1@uwaterloo.ca",
  sunsetImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
  heroLines: [
    "computer engineering @ university of waterloo",
    "open to fall 2026 internships!",
  ],
  intro:
    "hi, i'm emily! i'm a computer engineering student at the university of waterloo focused on full-stack development and exploring AI/ML. i love to learn new technologies, build, and grow through the process. i'm always open to chat and connect, so feel free to reach out!",
  experiences: [
    {
      role: "software developer intern",
      subtext: "internal tools",
      company: "skyjack inc.",
      timeFrame: "jan 2026 - may 2026",
    },
    {
      role: "software developer",
      subtext: "ground station subteam",
      company: "uw orbital",
      timeFrame: "jan 2026 - present",
    },
    {
      role: "ios developer",
      subtext: "mental health + wellness apps",
      company: "career education council",
      timeFrame: "jun 2024 - aug 2024",
    },
  ],
  projects: [
    {
      name: "price-delta/",
      stack: "Node.js, TypeScript, PostgreSQL, Redis",
      description: "TBD  Emily to provide",
      descriptionTbd: true,
      href: "https://github.com/emilyyu07/price-delta.git",
      previewName: "price-delta",
    },
    {
      name: "strider/",
      stack: "FastAPI, Python, PostgreSQL (PostGIS), Ollama",
      description: "TBD  Emily to provide",
      descriptionTbd: true,
      href: "https://github.com/emilyyu07/strider.git",
      previewName: "strider",
    },
    {
      name: "new-guelph-times-games/",
      stack: "Java, React",
      description: "TBD  Emily to provide",
      descriptionTbd: true,
      href: "https://github.com/emilyyu07/new-guelph-times-games.git",
      previewName: "new-guelph-times-games",
    },
    {
      name: "portfolio/",
      stack: "Next.js, TypeScript, Tailwind",
      description: "this portfolio website!",
      descriptionTbd: true,
      href: "https://github.com/emilyyu07/portfolio.git",
      previewName: "portfolio",
    },
  ],
  misc: {
    plantImage:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    shoesImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    recordImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    berriesImage:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&q=80",
    plantText: "currently thriving",
    stravaUsername: "@emilyyu",
    songTitle: "sunset rollercoaster",
    songArtist: "my jinji",
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emilyyu01",
      shortLabel: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/emilyyu07",
      shortLabel: "github",
    },
    {
      label: "Email",
      href: "mailto:hello@emily.yu1@uwaterloo.ca",
      shortLabel: "email",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/__emilyyu_",
      shortLabel: "instagram",
    },
  ],
} as const;
