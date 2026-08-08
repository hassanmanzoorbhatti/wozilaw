# Services section — match the reference layout

Goal: make the services grid read exactly like the reference: three cards only, flush to the section edges vertically, full-width rules above and below the card row, and a bordered button row underneath.

## Changes

### Card count
Render only the first three services (Contracts, Corporate, Employment). Disputes is dropped from the grid; the "View all services" button still points to the full list.

### Card row framing (desktop)
- Remove the top padding from the card row so the cards sit directly under the headline block's bottom rule — no gap.
- Keep 32px horizontal spacing on the left and right of the three-card group only.
- Add a full-container-width border line on top and bottom of the card row so the row is visually enclosed, matching the reference.
- The button row below sits in its own band with a bottom border line running the full container width.
- Remove the current `gap-8` between columns and use adjoining vertical rules between cards instead, as in the reference where the cards touch and are separated by thin lines.

### Card internals
- Image stays as the top block with the white arrow tile at its top-right corner (unchanged).
- The text box below the image gets uniform 32px padding on all four sides (currently 24/28px with different vertical values).
- Title and description styling stay as they are.

### Mobile
- Remove the surrounding horizontal padding around the card group — cards go edge to edge, since the page container already draws left/right rules.
- Each card keeps only top and bottom borders; no left/right borders on mobile.
- Gap between stacked cards: 32px.

## Not changing

Headline block, copy, fonts, colors, images, the pink "View all services" button style, and all reveal/hover animation behaviour.

## Technical notes

All edits are inside `Services()` and `ServiceCard()` in `src/routes/index.tsx`. Border colors keep using the `clause-border` token. The card grid becomes a 3-column grid with border utilities on the wrapper (top/bottom) and per-card dividers, with the mobile variants gated behind `md:`.
