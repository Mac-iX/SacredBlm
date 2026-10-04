import { MediaFrame } from "@/components/MediaFrame";

export const metadata = { title: "Gatherings + Schedule" };

export default function GatheringsPage() {
  return (
    <main className="shell simple-page">
      <h1>Gatherings + Schedule</h1>
      <p>
        This page is reserved for confirmed recurring classes, monthly circles,
        and dated events. The calendar should support the page, not replace the
        readable event information.
      </p>
      <div className="two-up">
        <MediaFrame
          assetId="interactive-calendar"
          description="Google Calendar or approved scheduling calendar, paired with readable event summaries."
          altGuidance="Calendar embed does not require decorative alt text."
          aspectRatio="4:3"
        />
        <MediaFrame
          assetId="upcoming-event-poster"
          description="Clickable poster for the next confirmed event, such as ecstatic dance or a moon circle."
          altGuidance="Describe the event poster, including event name, date, and key artwork."
          aspectRatio="4:3"
        />
      </div>
    </main>
  );
}
