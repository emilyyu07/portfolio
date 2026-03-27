import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.8A4.8 4.8 0 0 1 16 8Z" />
      <path d="M2 9h4v12H2Z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.4-6-3" />
      <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.9a5.4 5.4 0 0 0-1.5-3.8A5 5 0 0 0 18.6 1S17.4.7 15 2.3a13.4 13.4 0 0 0-6 0C6.6.7 5.4 1 5.4 1a5 5 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5.3 3.1 6.5 6.1 6.9a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StravaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m15.7 18 2.7-5.4H13L15.7 18Zm-7.3 0 5.9-11.5L20.2 18h-4l-1.5-3H11.9L10.4 18h-2Zm4-8.4L9.8 15h5.1l-2.5-5.4Z" />
    </svg>
  );
}
