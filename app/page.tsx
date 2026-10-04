import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { OfferingCard } from "@/components/OfferingCard";
import { offerings } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero__mosaic">
          <div className="arch-mosaic" aria-label="Future Sacred Bloom hero mosaic">
            <MediaFrame
              assetId="hero-singing-bowls"
              variant="arch"
              aspectRatio="3:4"
              description="Close, luminous singing bowls in warm gold and copper tones."
              altGuidance="Describe the singing bowls and setting actually shown."
            />
            <MediaFrame
              assetId="hero-crystals"
              variant="arch"
              aspectRatio="3:4"
              description="Natural crystals and stone textures, restrained and tactile rather than mystical clip art."
              altGuidance="Describe the specific crystals or stones actually visible."
            />
            <MediaFrame
              assetId="hero-aromatherapy"
              variant="arch"
              aspectRatio="3:4"
              description="Botanical aromatherapy oils, herbs, linen, and coastal daylight."
              altGuidance="Describe the oils, herbs, and materials actually shown."
            />
          </div>
        </div>

        <div className="hero__brand">
          <MediaFrame
            assetId="sacred-bloom-logo"
            variant="logo"
            aspectRatio="1:1"
            description="Use the supplied Sacred Bloom vertical sun, lotus, moon, and dot mark here."
            altGuidance="Sacred Bloom Wellness logo."
          />
          <h1>Sacred Bloom Wellness</h1>
          <p>
            Classical yoga, private restorative practices, sound, and community
            gatherings in Wilmington and online.
          </p>
          <div className="hero__actions">
            <Link className="button" href="#offerings">Explore offerings</Link>
            <Link className="text-link" href="/gatherings">View the schedule</Link>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <blockquote>“Create space for the body to come home to itself.”</blockquote>
        <p>From Ritual of Rest</p>
      </section>

      <section className="shell offerings-section" id="offerings">
        <div className="section-intro">
          <h2>Offerings</h2>
          <p>
            Each offering has its own page with the practice, format, and next
            step explained in Raechel&apos;s language.
          </p>
        </div>
        <div className="offering-grid">
          {offerings.map((offering) => (
            <OfferingCard key={offering.slug} offering={offering} />
          ))}
        </div>
      </section>

      <section className="shell schedule-preview">
        <div>
          <h2>Calendar + gatherings</h2>
          <p>
            Recurring classes, circles, and event posters belong here only when
            dates are confirmed. Posters should be clickable and lead to a full
            event description rather than functioning as decoration.
          </p>
          <Link className="button" href="/gatherings">View schedule</Link>
        </div>
        <MediaFrame
          assetId="calendar-or-event-poster"
          aspectRatio="4:3"
          description="Interactive calendar or current event poster area. Use real dates only; event posters should link to event detail pages."
          altGuidance="Describe the visible event artwork and include the event name when known."
        />
      </section>
    </main>
  );
}
