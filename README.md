# Sacred Bloom Wellness site test

A dependency-free static website prototype built from the supplied visual references, logo, offering icons, and handwritten offering notes.

## Preview locally

From this folder, run:

    python -m http.server 8000

Then open http://localhost:8000.

The site uses hash routes for the home page, offering detail pages, event descriptions, schedule, about, journal, and contact. Images are embedded in assets-data.js so the test build stays self-contained.

## Before live bookings

The calendar collects a preferred date only. Forms do not send or store submissions, and contributions are not processed. Connect Raechel’s booking calendar, registration destination, contact method, and donation link before accepting live requests. Confirm event dates and the travel locations Raechel wants to publish.

The Google Doc referenced in the build request was not included in the provided file set. Copy edits in this prototype use the supplied image notes.

## Visual reference rebuild

The landing composition follows the supplied 1500 × 1000 reference: a 141 px header, unobscured ocean crop, an ornamental SVG arch with live text and links, and three live offering cards positioned within the ocean scene. The opening hero now fits the arch and all three cards within common desktop, laptop, and phone viewports. Mobile uses compact horizontal cards beneath the arch. No complete landing-page screenshot is rendered as an asset.

Cormorant Garamond and Allura are subsetted and embedded in fonts.css, with their SIL Open Font Licenses in FONT-LICENSES.txt. The travel map uses public-domain Natural Earth land geometry distributed by world-atlas (https://github.com/topojson/world-atlas). Fonts, images, and the ocean video are served with the site.

The Apothecary is a coming-soon page matching the navigation in the reference. The hero includes an animated ocean background with a static-image fallback, a pause/play control, and respect for the reduced-motion setting.

## Ocean motion and contrast update — October 22, 2026

- Full arch and all three cards remain visible in the opening hero; verified at 1366 × 768, 390 × 844, and 320 × 568.
- Cream cards use dark rose (#99465e) titles and dark taupe (#70584b) details. Supplied icon artwork is preserved and darkened using CSS.
- Higgsfield MiniMax H3 generated one 8-second 2K ocean-and-cloud animation from the existing clean ocean crop. Job: dcf92a24-00cf-438f-9235-447843eee473. Quoted cost: 16 credits.
- Only the scenery is animated. The arch, cards, logo, and lettering remain live HTML/SVG elements.
- `media/ocean-loop.mp4` is the silent website loop. The original generated master remains available in the Higgsfield generation result.
- With reduced motion enabled, the original ocean image displays until the visitor explicitly chooses Play motion.

## Offering copy and navigation refinement — October 24, 2026

The main navigation includes Offerings, Schedule, Tantra, Yoga, Apothecary, Journal, and About, plus Book Now. It collapses to a menu on narrower screens.

The three featured cards now share equal widths and a bounded, reference-based height. The complete arch and all three cards remain within the opening composition on the verified laptop layout.

All seven offering pages now use fuller descriptions edited from the supplied handwritten notes (IMG_2238 through IMG_2245). Personal language and the sequence of each practice are retained. Repeated introductory paragraphs were removed. Intimate opening lines, readable paragraphs, the four-week Tantra outline, and a separate What to expect section give the copy a clearer hierarchy. No prices, credentials, testimonials, or event dates were invented. The existing ocean animation, ornamental arch, original logo, and icon artwork are retained.
