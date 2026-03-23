import Link from "next/link";
import { CoconutSVG } from "./CoconutSVG";

function NavIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="nav-coconut inline-flex shrink-0 focus-within:outline-none">
      {children}
    </span>
  );
}

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="focus-ring font-caveat text-[20px] tracking-[0.2px] text-chestnut opacity-80 transition-opacity duration-200 hover:opacity-100"
      >
        {label}
      </Link>
      <span
        className="pointer-events-none absolute left-1/2 top-[-30px] z-10 -translate-x-1/2 whitespace-nowrap rounded-[20px] border border-[rgba(90,56,24,0.18)] bg-[rgba(250,247,241,0.85)] px-[10px] py-[2px] font-caveat text-[12px] opacity-0 transition-opacity duration-[180ms] group-hover:opacity-100"
        style={{ color: "var(--text-muted)" }}
        aria-hidden="true"
      >
        coming soon :)
      </span>
    </div>
  );
}

export function Nav() {
  return (
    <header className="nav-rise flex justify-center px-[60px] pb-[22px] pt-[30px]">
      <nav
        className="flex items-center gap-[52px]"
        aria-label="Main navigation"
      >
        <NavLink href="/about" label="about" />
        <Link
          href="/"
          className="focus-ring nav-coconut rounded-full"
          aria-label="Home"
        >
          <NavIcon>
            <CoconutSVG />
          </NavIcon>
        </Link>
        <NavLink href="/projects" label="projects" />
      </nav>
    </header>
  );
}
