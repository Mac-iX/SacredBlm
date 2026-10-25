# Sacred Bloom Wellness test site

A static website built from the supplied visual reference, original logo, offering icons, handwritten descriptions, and approved ocean motion. The current test remains owner-private.

## Build and preview

No dependencies need to be installed. Use Node to generate the readable pages:

    node build-site.cjs
    python -m http.server 8000 --directory dist

Then open http://localhost:8000/. The build validates every internal page link, per-page metadata, structured data, and the seven FAQ entries.

The default canonical origin is the current private Site preview. When preparing a production build for the primary domain, rebuild with the actual destination:

    SITE_URL=https://sacredbloomwellness.com node build-site.cjs

Deployment uses the generated `dist/` directory. The hosting manifest retains the existing Sites project. The source is also synchronized to the `codex/sacred-bloom-wellness-test` branch of Mac-iX/SacredBlm.

## Current experience

- Eighteen readable HTML pages, including seven offerings, About, Schedule, Journal, Contact, and the Apothecary introduction. Essential page text and links are present before JavaScript runs.
- Existing hash links remain compatible; new links use normal page URLs.
- Pink hues, cream panels, taupe accents, and darker copy. The ornamental arch aligns with the first card below it; the composition is checked at laptop and phone sizes.
- `media/pink-flow.jpg` is the exact supplied smooth wallpaper. Both interior wallpaper slots now use it. The previous textured wallpaper is removed from the published assets.
- `media/sacred-bloom-logo.png` is the supplied transparent original, used in the header, footer, About emblem, and favicon. No replacement logo was generated.
- Seven practical FAQ comparisons and booking-format questions at the bottom of Home, with contextual links to offerings. No medical FAQ content, fabricated policies, or recipe details.
- Lightweight card hints on hover and keyboard focus, with native keyboard-accessible FAQ disclosures.
- Unique page titles and descriptions, canonical links, Organization/WebSite/AboutPage/Person structured data where applicable, and a sitemap. No unsupported review, qualification, pricing, or FAQ schema is added.

## Content sources

Offering descriptions use the supplied handwritten notes (IMG_2238 through IMG_2245). The About story and travel references are grounded in the client's published bio at https://sacredbloomwellness.com/, checked October 24, 2026. The current site identifies Appalachian origins, Southern California, yoga study in India, plant traditions in Peru, and sound work in Nepal. Wilmington comes from the supplied project brief. No dates, certifications, testimonials, or experience totals were invented.

The world map uses public-domain Natural Earth geometry distributed by world-atlas. Embedded Cormorant Garamond and Allura licenses are in FONT-LICENSES.txt.

## Ocean motion

The silent `media/ocean-loop.mp4` runs at 2528 × 1440. Higgsfield MiniMax H3 produced the original eight-second clip from the existing clean ocean crop; job dcf92a24-00cf-438f-9235-447843eee473. A soft wrap crossfade creates the website loop. Only water and clouds move. The arch, cards, logo, and type remain live page elements. Reduced-motion visitors get the still image unless they choose Play motion.

## Details still being finalized

The calendar is a preferred-date preview. Forms do not send or store requests, and donations are not processed. Connect confirmed booking, contact, contribution, and group joining destinations before accepting registrations.

The Apothecary introduces planned teas and recipe access. Product contents, prices, access terms, checkout, fulfillment, and sourcing details await the client's decisions. No inventory, sales flow, affiliate arrangement, or recipe content has been invented.
