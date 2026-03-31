export const siteData = {
  email: "emily.yu1@uwaterloo.ca",
  sunsetImage:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
  heroLines: [
    "computer engineering @ university of waterloo",
    "open to fall 2026 internships!",
  ],
  intro:
    "hi, i’m emily, a computer engineering student at the university of waterloo focused on full-stack development and exploring AI/ML. i’m always looking to learn new technologies, build, and grow through the process. i love connecting with people who are curious and driven, so feel free to reach out!",
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
      name: "\\price delta",
      stack: "node.js | typescript | react | postgreSQL",
      description:
        "a quiet planning workspace for coordinating deadlines, notes, and shared study sessions without clutter.",
      href: "https://github.com/emilyyu/study-sync",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "\\strider",
      stack: "python | react | postgreSQL",
      description:
        "a field journal for walks and hikes, pairing route history with short reflections and weather-aware memory prompts.",
      href: "https://github.com/emilyyu/trail-notes",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "\\new guelph times games",
      stack: "java | react | ...",
      description:
        "a lightweight ingredient tracker that reads grocery images and suggests practical meals with minimal manual input.",
      href: "https://github.com/emilyyu/pantry-vision",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
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
