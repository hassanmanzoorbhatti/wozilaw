# Site-wide refinements — London Lawyers House

## Global

- Page background becomes `#f6f7f8` across every section (replaces the ivory `#f3f0e8`). Applied at the token level so nav, drawer, footer bands and all sections follow. Dark bands (final CTA) stay dark.
- Content container width goes from 1224px to **1320px** on every page (shell + homepage wrapper).
- Homepage `Careers` section is removed (the `/careers` page itself stays reachable from nav/footer).

## Hero

- Image switches to a **1:1.2 ratio** (portrait, cover) instead of stretching to full column height; the `min-h-[calc(100vh-5rem)]` on the section is removed so the hero sizes to its content.
- Text column restructured to match reference image 3:
  - Heading on max 3 lines ("Practical legal support / with clear guidance / you can rely on."), tightened line-height.
  - Description constrained to max 3 lines of copy.
  - A larger gap, then a single row: primary button on the left, and to its right a small trust block — `4.9/5` with five stars above `Trusted by 600+ clients`, separated by a vertical rule.
  - Button gets `whitespace-nowrap` so the label never wraps or overlaps; the secondary "Explore Our Services" moves below on mobile / sits inline on wide screens without crowding.
- Mobile: heading font size fixed at **30px**.
- The zigzag graphic under the hero buttons is dropped from the hero (kept elsewhere) so the layout reads like the reference.

## Network strip ("Supporting clients across the United Kingdom and internationally")

Desktop: 96px top/bottom padding, 32px left/right padding. Heading width tuned so it breaks over **max two lines**.

## Services

All six services show an image card. The three secondary services (Family Law, Financial Claims & Debt Recovery, Business & Legal Disputes) currently have no image — they get one each, generated in the same editorial British-legal style as the existing three, and the second grid row uses the same image card layout as the first.

## Experience section

Left column: 32px left padding (right padding unchanged), 96px top/bottom. Image pair on the right unchanged.

## Leadership section

- Uses the **uploaded portrait of the Managing Director**, displayed at **1:1, object-cover, center center**.
- Right (text) column gets 32px side spacing.

## Footer

32px left/right padding. Contact column gains a relevant icon beside each detail: map pin for the address, phone for office, mobile for the mobile number, envelope for email, clock for hours.

## Mobile menu drawer

- Opens as a smooth top-to-bottom reveal (animated height/translate with an ease-out curve) and closes in reverse, instead of appearing instantly.
- Nav items and the CTA button fade/slide in one by one with a staggered ease.
- Drawer keeps the same left/right border lines with 8px margin as the rest of the mobile layout.
- Drawer item font size reduced to **20px**.

## Technical notes

- Background/width: `--color-clause-bg` set to `#f6f7f8` in `src/styles.css` (plus the scrollbar track already matches); `max-w-[1224px]` → `max-w-[1320px]` in `src/components/site/Sections.tsx` and `src/routes/index.tsx`.
- Hero, network strip, services, experience: edits inside `src/routes/index.tsx`. Secondary service cards render through the existing `ServiceCard` component once images are added to `ADDITIONAL_SERVICES` in `src/lib/services.ts`.
- Leadership portrait: uploaded image registered as a CDN asset pointer and imported in `src/components/site/Leadership.tsx`.
- Drawer animation: `motion/react` `AnimatePresence` + variants in `src/components/site/Navbar.tsx`, with `inset-x-2` and `border-x` for the 8px bordered edges.
- Footer icons come from `lucide-react`.
