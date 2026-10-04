import { MediaFrame } from "@/components/MediaFrame";

export const metadata = { title: "About Rae" };

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="shell about-hero">
        <div className="about-copy-panel">
          <h1>Meet Rae</h1>
          <p className="about-lead">
            Rae grew up in the Appalachian hills with an early connection to
            nature and the rhythms of the land. Her path later took her to
            Southern California and then abroad as she pursued yoga, sound,
            energy work, plant traditions, and a wider wellness community.
          </p>
          <p>
            Her current Sacred Bloom site describes studying yoga in India,
            exploring plant medicine in Peru, and studying sound healing in
            Nepal. Those experiences now inform the mix of yoga, sound,
            herbalism, and restorative practices she shares through Sacred
            Bloom.
          </p>
          <p>
            The rebuilt site will keep that travel and training history
            specific and readable while leaving room for Rae to confirm any
            credentials, lineages, dates, or additional study before launch.
          </p>
        </div>
        <MediaFrame
          assetId="rae-portrait-or-travel"
          label="Rae portrait / travel image"
          aspectRatio="4:5"
          description="Use an authentic portrait or travel image of Rae. Prefer a real image from her existing archive over generic wellness photography."
          altGuidance="Describe Rae and the actual setting shown without inferring mood, health, or spirituality."
        />
      </section>

      <section className="about-path">
        <div className="shell about-path__grid">
          <div>
            <h2>Her path into the work</h2>
          </div>
          <div className="path-list">
            <div><strong>Appalachia</strong><span>Early connection to nature and place.</span></div>
            <div><strong>Southern California</strong><span>A broader wellness and spiritual community.</span></div>
            <div><strong>India</strong><span>Yoga study.</span></div>
            <div><strong>Peru</strong><span>Plant medicine exploration.</span></div>
            <div><strong>Nepal</strong><span>Sound healing and Tibetan singing bowl study.</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
