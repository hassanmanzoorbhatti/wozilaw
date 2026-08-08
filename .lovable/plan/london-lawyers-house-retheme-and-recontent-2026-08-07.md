# London Lawyers House — retheme and recontent

Keep the existing template's structure, spacing, animation language, typography hierarchy and responsive shell. Only colour tokens, copy, imagery and a few sections change.

## Colour system (src/styles.css)

Retone the existing six brand tokens — nothing else in the page needs colour edits, since all colour already routes through them:

| Token | New value | Role |
|---|---|---|
| `--color-clause-bg` | `#F3F0E8` warm ivory | dominant page/section background |
| `--color-clause-surface` | `#FFFFFF` | card interiors |
| `--color-clause-border` | `rgba(16,18,16,0.12)` | grid lines, dividers |
| `--color-clause-line` | `rgba(16,18,16,0.20)` | zigzag/rules |
| `--color-clause-pink` → accent | `#26372F` deep green | buttons, eyebrows, dots, active states |
| `--color-clause-onaccent` | `#F3F0E8` | text on the accent fill |
| `--color-clause-heading` | `#101210` | headings, stat numbers |
| `--color-clause-cream` | `#1C1F1C` | body copy, nav |
| `--color-clause-muted` | `#5C6459` | secondary paragraphs |

Soft stone `#D9D7CF` is used for subtle tinted bands, and muted sage `#8E9B82` for small indicators, icon tiles and hover states. Dark charcoal `#101210` stays reserved for the premium dark CTA section. Green is accent-only — no green page backgrounds.

Typography treatment (serif display headings + grotesk body, all `clamp()` scales) is unchanged.

## Header

Two-line text wordmark "LONDON / LAWYERS HOUSE" replacing the Clause logo mark. Nav: Home, Services, About, Our Team, Careers, Contact. CTA button: "Book a Consultation". Sticky behaviour and the mobile drawer are preserved; drawer items get 44px+ touch targets.

## Homepage sections

- **Hero** — eyebrow LONDON LAWYERS HOUSE, headline "Practical legal support. Clear guidance.", the supplied description, CTAs "Book a Consultation" and "Explore Our Services". New hero image: editorial legal consultation in a contemporary London office, ivory/charcoal/sage tonality.
- **Metrics** — 36 Qualified Lawyers in England · 600+ Successful Cases · 7 International Offices. On mobile these become a compact stacked/2-up arrangement rather than three cramped columns.
- **Introduction** — eyebrow ABOUT LONDON LAWYERS HOUSE, supplied heading and body, CTA "About London Lawyers House".
- **International network** — the rotating fake-logo strip is deleted entirely and replaced with the line "Supporting clients across the United Kingdom and internationally" plus typographic location labels: United Kingdom, UAE, Malaysia, Spain, Canada, United States.
- **Services** — eyebrow OUR SERVICES, supplied heading/description. Three primary cards (Immigration Law, Property Law, Criminal Defence) with numbered 01–03 labels, keeping the current card interaction and hover reveal; the three additional services (Family Law, Financial Claims & Debt Recovery, Business & Legal Disputes) appear as a numbered 04–06 text list below. CTA "View All Services".
- **Approach** — eyebrow OUR APPROACH, heading "Legal support you can rely on.", three items (Clear Communication, Practical Solutions, Professional Support). The existing marquee stays.
- **Trust** — the testimonial marquee is replaced by a stats + editorial-imagery section: heading "Experience supported by an international network." and the four figures (36, 50+, 600+, 7). The testimonial data structures and card components are kept in the file behind a disabled flag so real reviews can be switched on later.
- **Leadership** (new) — eyebrow LEADERSHIP, heading "Meet our Managing Director", Farhad Fattahi, Managing Director, supplied copy, and a "Connect on LinkedIn" button to the supplied URL. Portrait slot uses a placeholder editorial portrait treatment until the real asset is supplied; no invented credentials.
- **Careers** (new, concise) — eyebrow CAREERS, supplied heading/description, buttons "View Career Opportunities" and "Submit Your CV", with an office/team image.
- **News** — removed from the rendered homepage. The `LatestNews` component and ribbon stay in the file, unrendered, ready to re-enable.
- **Final CTA** — eyebrow NEED LEGAL SUPPORT?, supplied heading/description, "Book a Consultation" and "Call 020 8343 6000" (tel link). Keeps the full-width dark premium styling, now in `#101210`.
- **Footer** — brand, description, and the four supplied link columns plus contact block, hours, legal links and the new copyright line. Phone and email become real `tel:`/`mailto:` links.

## Routes

Nav needs real destinations, so add route files for `/services`, `/about`, `/team`, `/careers`, `/contact`, each with its own head() metadata and content drawn only from the supplied brief (services detail, about, leadership/team with the Managing Director, careers with contact routes, contact with address, phones, email and hours). Root metadata is rewritten for London Lawyers House.

## Imagery

Generate new editorial photography in the brief's tonality: hero consultation, three service images (immigration/property/criminal), one trust-section London architectural detail, one careers office/team image. No gavels, scales, courtrooms, US references or repeated Big Ben. Old Clause assets are deleted.

## Responsive

Every reworked section is checked at 1440, 834 and 393: comfortable padding, full-width CTAs on mobile, compact stats, correctly cropped imagery, no horizontal overflow, 44px+ tap targets.

## Verification

Screenshot desktop, tablet and mobile top-to-bottom, confirm contrast on ivory, confirm zero remaining "Clause" or fake-stat strings, and check the console is clean.
