# jeffreygaggino.github.io

Jeffrey Gaggino's personal site. A single scrolling page, deployed to GitHub Pages at
[jeffreygaggino.github.io](https://jeffreygaggino.github.io/).

## Running it

Requires Node 22 (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm dev        # dev server
pnpm test       # vitest, watch mode
pnpm test:run   # vitest, once
pnpm check      # biome, lint and format
pnpm fix        # biome, apply fixes
pnpm build      # typecheck then production build
```

## Stack

Vite, React 19 and TypeScript. CSS Modules for component styles, custom properties for
design tokens. Vitest and Testing Library. Biome for linting and formatting. No router,
no state library: it is one page.

## Layout

```
src/
├── sections/          one folder per section of the page
│   └── <name>/        Component.tsx, Component.module.css, nameContent.ts
├── components/        shared pieces: CodeTag, Reveal, TagLink, SiteHeader, ThemeToggle
├── drawing/           the illustrations, as data
├── theme/             light and dark switching
├── styles/            tokens, fonts, shared text styles
└── hooks/
```

Sections are Hero, About, Work, Expertise and Contact, composed in `App.tsx` in that order.

**Copy lives in `<name>Content.ts`** beside each section rather than inside the markup, so
wording can change without touching components.

## Illustrations

The drawings are not image files. Each is a `DrawingData` object in `src/drawing/`: a
`viewBox`, a label, and a list of **Parts**. A Part carries its own SVG path and names the
**Token** that colours it, never a literal colour.

```ts
{ name: "hair", token: "ink", d: "M18.4..." }
```

`Drawing.tsx` maps over the Parts. Tokens resolve to CSS custom properties defined per
theme in `styles/tokens.css`, so switching theme recolours every drawing at once without
React re-rendering anything.

Three treatments, chosen by the calling section rather than by the theme:

| variant | effect |
|---|---|
| `filled` | each Part solid in its Token |
| `outline` | line art only |
| `wash` | Parts tinted, with the line carrying the shape |

Parts can also be flagged `solid` (filled in the line colour when drawn as line art) or
`hideInLineArt` (dropped from the outline, for detail that only reads in colour).

Adding a drawing means adding a data file, not a component. See
[docs/adr/0001](docs/adr/0001-hand-authored-drawings.md) for why the artwork is hand
authored rather than converted from the original Illustrator files.

## Theme

`data-theme` on `<html>`, defaulting to dark. A small blocking script in `index.html`
commits to a theme before first paint so there is no flash. An explicit choice is stored in
`localStorage`; `theme/useTheme.ts` exposes it to components.

A theme only changes colour values. It never changes what a drawing depicts or which Parts
it has.

## Scroll reveals

`components/Reveal.tsx` wraps anything and fades it in as it enters view, using
`IntersectionObserver`. Props: `rootMargin`, `threshold`, `delay`, `once` and `as`.

- Anything holding text uses `once`, so copy never fades back out as you scroll over it.
- Drawings fade both ways.
- Where `IntersectionObserver` is unavailable, content shows rather than hides.

## Tests

Deliberately few. The suite covers things that fail silently or have already been wrong:
theme persistence, the reveal observer and its fallbacks, drawings colouring only through
Tokens, the treatment class reaching the SVG, font loading fallbacks, and screen reader
labelling.

It does not assert that copy renders or make claims about the writing. Those fail loudly on
sight and would block a deploy over a wording change.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: lint, tests, build, then publish to
GitHub Pages. Pages is configured with GitHub Actions as its source. `base` is `/` because
this is a user site served from the domain root.

## Vocabulary

`CONTEXT.md` defines the terms used throughout the code: Section, Drawing, Part, Prop,
Token, Palette, Theme. Worth reading before changing anything in `src/drawing/`.
