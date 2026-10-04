import Link from "next/link";
import type { Offering } from "@/lib/content";

export function OfferingCard({ offering }: { offering: Offering }) {
  return (
    <Link
      className={`offering-card offering-card--${offering.tone}`}
      href={`/offerings/${offering.slug}`}
    >
      <div>
        <h3>{offering.title}</h3>
        {offering.format ? (
          <span className="offering-card__format">{offering.format}</span>
        ) : null}
        <p>{offering.short}</p>
      </div>
      <span className="offering-card__action">View offering →</span>
    </Link>
  );
}
