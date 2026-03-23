export const socials = {
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/emilyyu01",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "emily.yu1@uwaterloo.ca",
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/emilyyu07",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/__emily_yu_/",
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://emilyyu.app";
