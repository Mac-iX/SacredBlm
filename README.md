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

The landing composition follows the supplied 1500 × 1000 reference: a 141 px header, unobscured ocean crop, an ornamental SVG arch with live text and links, and three live offering cards positioned within the ocean scene. Mobile stacks the cards beneath the arch. No complete landing-page screenshot is rendered as an asset.

Cormorant Garamond and Allura are subsetted and embedded in fonts.css, with their SIL Open Font Licenses in FONT-LICENSES.txt. The travel map uses public-domain Natural Earth land geometry distributed by world-atlas (https://github.com/topojson/world-atlas). No external runtime asset requests are required.

The Apothecary is a coming-soon page matching the navigation in the reference. The hero remains a static ocean crop, ready for the animated asset.
