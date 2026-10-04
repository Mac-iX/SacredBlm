import { notFound } from "next/navigation";
import Link from "next/link";
import { MediaFrame } from "@/components/MediaFrame";
import { offeringBySlug, offerings } from "@/lib/content";

export function generateStaticParams() {
  return offerings.map(({ slug }) => ({ slug }));
}

export default async function OfferingPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offering = offeringBySlug[slug];

  if (!offering) notFound();

  return (
    <main className={`product-shell product-shell--${offering.tone}`}>
      <section className="shell product-page">
        <Link className="back-link" href="/#offerings">
          ← All offerings
        </Link>

        <div className="product-page__intro">
          <article className="product-copy-panel">
            <h1>{offering.title}</h1>
            {offering.format ? (
              <p className="format-line">{offering.format}</p>
            ) : null}

            <div className="product-prose">
              {offering.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {offering.details ? (
              <div className="detail-panel">
                <h2>What the series covers</h2>
                <ul className="detail-list">
                  {offering.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>

          <aside className="product-side">
            <MediaFrame
              assetId={offering.media.assetId}
              label={offering.title}
              description={offering.media.description}
              altGuidance={offering.media.altGuidance}
              aspectRatio={offering.media.aspectRatio}
              caption={offering.media.caption}
            />

            {offering.pullquote ? (
              <blockquote className="handwritten-note">
                “{offering.pullquote}”
              </blockquote>
            ) : null}

            <div className="product-next">
              <h2>Next step</h2>
              <p>
                Ask about availability, private booking, group size, or the next
                scheduled session.
              </p>
              <div className="product-actions">
                <a
                  className="button button--ink"
                  href={`mailto:sacredbloomwellness@gmail.com?subject=${encodeURIComponent(
                    offering.title
                  )}`}
                >
                  Request this offering
                </a>
                <Link className="button button--light" href="/gatherings">
                  View calendar
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
