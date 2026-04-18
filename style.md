# Style Editing Guide (for globals.css)

Use this as a quick reference while editing `src/app/globals.css`.

## Section Map

| Section                               |                             Lines | Controls                                            | Edit here for…                                                                      |
| ------------------------------------- | --------------------------------: | --------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Theme tokens (light)**              |                    `:root` (3–19) | Global colors + font variables                      | Main background/text colors, borders, highlight, nav background, default font stack |
| **Theme tokens (dark)**               | `html[data-theme="dark"]` (21–33) | Dark mode palette                                   | Dark background, dark text, dark header color (`--nav-bg`)                          |
| **Base page behavior**                |                             35–62 | `html`, `body`, global transitions, selection color | Smooth scroll, global font, global background/text, transition feel                 |
| **Terminal text utilities**           |                             64–80 | `.courier-text`, `.terminal-label`, `.meta-text`    | Terminal-style typography sizing/spacing                                            |
| **About section text styles**         |                            82–137 | `.about-*`, `.experience-command`                   | About heading/command look, intro paragraph tone, cursor styling                    |
| **Projects section**                  |                           139–256 | `.projects-*`, `.project-*`                         | Row spacing, hover background, terminal preview card, project metadata text         |
| **Hero text effect + layout helpers** |                           258–291 | `.sunset-text`, `.type-cursor`, `.hero-*`           | Sunset text effect, typing cursor animation, hero grid alignment                    |
| **Polaroid component styles**         |                           293–427 | `.polaroid-*`                                       | Frame shape, paper texture, shadow depth, image crop/zoom                           |
| **Footer visuals**                    |                           429–480 | `.footer-*`                                         | Footer image/wash overlays, footer clock styling                                    |
| **Custom cursor system**              |                           482–511 | `.cursor-terminal` + media query                    | Terminal cursor appearance + hide/show native cursor behavior                       |
| **Animations**                        |                           513–533 | `@keyframes`                                        | Blink timing for cursors                                                            |
| **Responsive breakpoints**            |                           535–608 | media queries (767 / 1024 / 479)                    | Mobile/tablet/desktop sizing and layout tweaks                                      |

## Practical Notes

- Start with `:root` and `html[data-theme="dark"]` for global visual changes.
- Footer text color is intentionally fixed to ivory (`#ffffe3`) as an exception.
- The **Misc** section is mostly styled in `src/components/Misc.tsx` (`<style jsx>`), not in `globals.css`.
