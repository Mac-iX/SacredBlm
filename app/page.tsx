import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { OfferingCard } from "@/components/OfferingCard";
import { offerings } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-band">
        <div className="shell hero">
          <div className="hero__mosaic">
            <div className="arch-mosaic" aria-label="Sacred Bloom hero image mosaic">
              <MediaFrame
                assetId="hero-singing-bowls"
                variant="arch"
                label="Singing bowls"
                aspectRatio="3:4"
                description="Close, luminous singing bowls in warm gold tones; tactile, quiet, and photographed in natural light."
                altGuidance="Describe the singing bowls and setting actually shown."
              />
              <MediaFrame
                assetId="hero-crystals"
                variant="arch"
                label="Crystals"
                aspectRatio="3:4"
                description="Natural crystals and stone textures arranged simply; no mystical clip art or exaggerated glow effects."
                altGuidance="Describe the specific crystals or stones actually visible."
              />
              <MediaFrame
                assetId="hero-aromatherapy"
                variant="arch"
                label="Aromatherapy"
                aspectRatio="3:4"
                description="Botanical oils, herbs, linen, and soft coastal daylight in the Sacred Bloom palette."
                altGuidance="Describe the oils, herbs, and materials actually shown."
              />
            </div>
          </div>

          <div className="hero__brand">
            <div className="brand-logo-wrap">
              <img
                className="client-logo"
                src="/sacred-bloom-logo.webp"
                alt="Sacred Bloom Wellness sun, lotus, and crescent moon logo"
                width="240"
                height="505"
              />
            </div>
            <h1>Sacred Bloom <em>Wellness.</em></h1>
            <p className="subtitle">
              Yoga, sound, restorative practice, and gatherings in Wilmington
              and online.
            </p>
            <p>
              Explore Rae&apos;s practices, learn what each session includes,
              and find the right way to join.
            </p>
            <div className="hero__actions">
              <Link className="button button--rose" href="#offerings">
                Explore offerings ↗
              </Link>
              <Link className="button button--light" href="/gatherings">
                View schedule
              </Link>
            </div>
          </div>
        </div>

        <div className="practice-ribbon" aria-label="Ways to practice">
          <span>Learn online</span>
          <span>Private practice</span>
          <span>Gather in community</span>
        </div>
      </section>

      <section className="voice-band">
        <div className="shell voice-note">
          <p className="handwritten">
            “Asana is the core which holds it all together, but it is not all
            that exists.”
          </p>
          <span>From Rae&apos;s Classical Yoga notes</span>
        </div>
      </section>

      <section className="offerings-band" id="offerings">
        <div className="shell offerings-section">
          <div className="section-intro">
            <div>
              <h2>Offerings</h2>
              <p>
                Classes, private sessions, and circles. Each card opens a full
                page explaining the practice and how to inquire or join.
              </p>
            </div>
            <p className="section-note">
              Desktop cards reveal a short description on hover or focus.
              Mobile keeps the description visible.
            </p>
          </div>

          <div className="offering-grid">
            {offerings.map((offering) => (
              <OfferingCard key={offering.slug} offering={offering} />
            ))}
          </div>
        </div>
      </section>

      <section className="classical-band">
        <div className="shell classical-feature">
          <div className="classical-feature__copy">
            <h2>Classical Yoga</h2>
            <p className="feature-lead">
              So much of traditional yoga is lost when making the journey to
              the West. Asana is the core which holds it all together, but it
              is not all that exists.
            </p>
            <p>
              This practice brings mantra, mudra, pranayama, asana, and
              meditation into the same sequence rather than treating yoga as
              posture alone.
            </p>
            <div className="practice-terms" aria-label="Classical Yoga practices">
              <span>Mantra</span>
              <span>Mudra</span>
              <span>Pranayama</span>
              <span>Asana</span>
              <span>Meditation</span>
            </div>
            <Link className="button button--ink" href="/offerings/classical-yoga">
              Read the practice →
            </Link>
          </div>
          <MediaFrame
            assetId="classical-yoga-feature"
            label="Classical Yoga image"
            aspectRatio="4:5"
            description="Quiet, grounded practice image focused on hands, breath, mat, and ritual objects rather than athletic performance. Use coastal morning light."
            altGuidance="Describe the posture or ritual objects actually visible."
          />
        </div>
      </section>

      <section className="schedule-band">
        <div className="shell schedule-preview">
          <div>
            <h2>Calendar + gatherings</h2>
            <p>
              Confirmed classes, circles, and special events will live here.
              Event posters should be clickable and lead to a page with the
              full description, date, location or online status, and next step.
            </p>
            <Link className="button button--light" href="/gatherings">
              View schedule
            </Link>
          </div>
          <MediaFrame
            assetId="calendar-or-event-poster"
            label="Calendar / event poster"
            aspectRatio="4:3"
            description="Interactive calendar or a current event poster. Use real dates only; posters should link to event detail pages."
            altGuidance="Describe the visible event artwork and include the event name when known."
          />
        </div>
      </section>
    </main>
  );
}
