import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Misc } from "@/components/Misc";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Misc />
    </>
  );
}
