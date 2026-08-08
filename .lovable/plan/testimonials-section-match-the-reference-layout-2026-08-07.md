# Testimonials section — match the reference layout

Replace the current horizontal drag-carousel with the reference layout: a headline row with a CTA on the right, then a portrait image with a featured quote card, beside two slowly auto-scrolling columns of review cards.

## Desktop layout

```text
┌──────────────────────────────────────────────────────────┐
│ Trusted by teams                 [ MORE CLIENT STORIES ↗]│  headline row
├──────────────────────────────────────────────────────────┤
│ ┌────────────┐ ┌───────────┐ ┌───────────┐               │
│ │  portrait  │ │  review   │ │  review   │  two columns  │
│ │            │ │  review   │ │  review   │  scrolling up │
│ │ ┌────────┐ │ │  review   │ │  review   │  (masked      │
│ │ │ quote  │ │ │  review   │ │  review   │   top/bottom) │
│ └─┴────────┴─┘ └───────────┘ └───────────┘               │
└──────────────────────────────────────────────────────────┘
```

- Headline row: serif h2 "Trusted by teams building real growth" on the left, CTA button on the right, vertically centered, with a bottom border across the container.
- Grid below: 7 columns — image block spans 3, each marquee column spans 2. Gap 32px, 32px side inset, matching the services section rhythm.
- Image block: existing testimonial portrait, object-cover, tall (about 4:5). A light card (bg #f6f7f8, 1px border, 1px radius) is absolutely positioned in the lower-left with a serif quote plus name and role in muted grotesk. Card padding 32px, inset 24px from the image edges.
- Marquee columns: continuous vertical loop, column 1 moving up, column 2 moving down (offset speeds so they never sync). CSS transform animation on a duplicated list, paused on hover. Both columns wrapped in a mask-image fade (transparent → opaque at 12.5% → transparent at 87.5%) exactly as in the reference.
- Review card: quote text, 5 amber stars, then avatar (40px circle) with name and role. 1px border in rgba(0,0,0,0.05), 24px padding, 8px gap between cards. Alternating cards get the pale blue tint seen in the reference (a subtle gradient surface), the rest stay transparent.

## Mobile layout

- Headline, then CTA button below it (left aligned), then a bottom border.
- Portrait image full width with the overlaid quote card (smaller padding, inset 12px).
- A single marquee column below the image, same mask fade, cards full width.
- No horizontal drag, no progress bar.

## Content

Reuse the existing five testimonials and add a few more so each column has enough cards for a smooth loop; the featured card uses the first quote. Existing avatar images stay.

## Technical notes

- Edit `src/routes/index.tsx` only: replace the `Testimonials` component and extend the `TESTIMONIALS` array.
- Remove the carousel state, refs, pointer handlers, interval, and progress bar; drop now-unused `useState`/`useRef`/`useEffect` imports if nothing else uses them.
- Vertical marquee uses a keyframe defined in `src/styles.css` (`@keyframes marquee-up`) plus inline duration/direction per column — no new dependencies.
- Respect `prefers-reduced-motion`: pause the marquee.
- Keep the existing pink CTA button styling used elsewhere on the page rather than the reference's blue gradient button.
