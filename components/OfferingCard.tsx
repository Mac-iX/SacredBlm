import Link from "next/link";
import type { Offering } from "@/lib/content";

export function OfferingCard({ offering }: { offering: Offering }) {
  return (
    <Link className="offering-card" href={`/offerings/${offering.slug}`}>
      <div>
        <h3>{offering.title}</h3>
        <p>{offering.short}</p>
      </div>
      <span className="offering-card__action">View offering</span>
    </Link>
  );
}
