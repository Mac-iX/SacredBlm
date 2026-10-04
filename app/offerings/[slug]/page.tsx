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
    <main className="shell product-page">
      <div className="product-page__intro">
        <div>
          <Link className="back-link" href="/#offerings">← All offerings</Link>
          <h1>{offering.title}</h1>
          {offering.format ? <p className="format-line">{offering.format}</p> : null}
          {offering.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {offering.details ? (
            <ul className="detail-list">
              {offering.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          ) : null}
          <div className="product-actions">
            <a
              className="button"
              href={`mailto:sacredbloomwellness@gmail.com?subject=${encodeURIComponent(
                offering.title
              )}`}
            >
              Request this offering
            </a>
            <Link className="text-link" href="/gatherings">View calendar</Link>
          </div>
        </div>
        <MediaFrame
          assetId={offering.media.assetId}
          description={offering.media.description}
          altGuidance={offering.media.altGuidance}
          aspectRatio={offering.media.aspectRatio}
          caption={offering.media.caption}
        />
      </div>
    </main>
  );
}
