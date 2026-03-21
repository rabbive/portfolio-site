# Parity Checklist (`ramx.in`)

Use this checklist before considering a UI task done.

## Viewports
- [ ] Desktop `1280x900`
- [ ] Tablet `768x1024`
- [ ] Mobile `390x844`

## Theme Modes
- [ ] Light mode parity checked
- [ ] Dark mode parity checked

## Route Parity
- [ ] `/`
- [ ] `/work`
- [ ] `/blog`
- [ ] `/blog/[slug]` (sample + all slugs render)
- [ ] `/resume`
- [ ] `/books`
- [ ] `/movies`
- [ ] `/gears`
- [ ] `/setup`
- [ ] `/terminal`

## Home Page Details
- [ ] Header nav spacing and command palette trigger styling
- [ ] Avatar image and social icon treatment
- [ ] Spotify line typography and color
- [ ] Experience list density and right-side metadata alignment
- [ ] Blog cards and read-more alignment
- [ ] Development/Personal cards border/radius/padding
- [ ] Quote block watermark and mono text style
- [ ] Footer labels, icon grid, and visitor line
- [ ] Floating oneko cat asset visibility

## Interaction States
- [ ] Theme toggle icon and hover
- [ ] Experience expand/collapse labels and content
- [ ] Blog tag filter selected/hover states
- [ ] Copy email feedback state
- [ ] Link hover/focus-visible parity

## Verification Commands
- [ ] `npm run lint`
- [ ] `npm run build`

## Notes
- If a mismatch is found, capture route + viewport + mode + element and patch before merging.
