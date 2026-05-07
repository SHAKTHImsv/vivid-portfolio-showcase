## Goal
Give the portfolio a fresh, more cohesive color identity and noticeably more dynamic motion — without changing structure or content.

## New theme: "Aurora Nights"
Move from the current magenta/cyan/yellow cosmic palette to a richer **teal → violet → coral aurora** on a deep midnight base. Better contrast, more "modern portfolio" feel.

Tokens to update in `src/styles.css`:
- `--background`: deep midnight navy (`oklch(0.12 0.05 260)`)
- `--primary`: electric violet (`oklch(0.68 0.24 290)`)
- `--secondary`: aurora teal (`oklch(0.78 0.16 190)`)
- `--accent`: warm coral (`oklch(0.74 0.2 25)`)
- New neon stops: `--neon-mint`, `--neon-violet`, `--neon-coral`, `--neon-sky`, `--neon-rose`
- New gradients: `--gradient-aurora` (teal→violet→coral), `--gradient-mesh` (multi-radial), updated `--gradient-cosmic`
- New shadows: `--shadow-aurora`, `--shadow-glow-violet`

All section components already use semantic tokens / CSS vars, so most colors update automatically. A few hardcoded `var(--neon-*)` references in Achievements/Certifications/Skills will be remapped to the new neon stops.

## New animations

Additions to `src/components/portfolio/animations.tsx`:
- `ScrambleText` — letters scramble then resolve on view (used in section headers)
- `Marquee` — infinite horizontal ticker (used as a skills/keywords ribbon between sections)
- `ScrollProgress` — top fixed progress bar tied to scroll
- `CursorGlow` — global soft aurora blob that follows the cursor
- `ParallaxY` — wraps children with scroll-linked Y translate using `useScroll`/`useTransform`
- `GradientBlob` — animated SVG mesh blob for section backgrounds

Additions to `src/styles.css`:
- `@keyframes aurora-shift`, `gradient-pan`, `border-glow`, `text-flicker`, `bob`
- Utilities: `.bg-aurora` (animated multi-stop gradient), `.border-aurora` (animated gradient border via mask), `.text-aurora` (animated gradient text)

## Section-by-section upgrades
- **Navbar**: animated aurora underline on active link, gradient-shifting logo, scroll-progress bar mounted here.
- **Hero**: replace current particle field with layered `GradientBlob`s + `ParallaxY` on headline; add `ScrambleText` for the role line; magnetic CTAs keep, add aurora ring pulse.
- **About**: parallax on the portrait/stat block; animated gradient border on stat cards; counters keep.
- **Skills**: cards get animated aurora borders, hover lifts with spring, category icons gently bob.
- **Marquee ribbon** (new): thin infinite ticker of tech keywords between Skills and Projects.
- **Projects**: tilt + spotlight kept, add `ParallaxY` on card images and animated gradient title on hover.
- **Achievements**: rotate background blobs to coral/violet, add staggered flip-in, sparkle pings on trophy icons.
- **Certifications**: shimmer kept, swap badge colors to new neon stops, add subtle animated border.
- **Contact**: replace cosmic orb with mesh-gradient backdrop; input fields get focus-driven aurora glow; submit button gets animated gradient fill.
- **Global**: mount `CursorGlow` and `ScrollProgress` in `src/routes/index.tsx`.

## Out of scope
- No content/copy changes
- No layout/structure changes
- No new sections or routing changes
- No backend / data work

## Files touched
- `src/styles.css` (palette + new keyframes/utilities)
- `src/components/portfolio/animations.tsx` (new helpers)
- `src/components/portfolio/Navbar.tsx`
- `src/components/portfolio/Hero.tsx`
- `src/components/portfolio/About.tsx`
- `src/components/portfolio/Skills.tsx`
- `src/components/portfolio/Projects.tsx`
- `src/components/portfolio/Achievements.tsx`
- `src/components/portfolio/Certifications.tsx`
- `src/components/portfolio/Contact.tsx`
- `src/routes/index.tsx` (mount CursorGlow + ScrollProgress + Marquee ribbon)
