import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sacred Bloom Wellness",
    template: "%s | Sacred Bloom Wellness"
  },
  description:
    "Classical yoga, restorative practices, sound, and community gatherings in Wilmington and online."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="wordmark" href="/">Sacred Bloom Wellness</Link>
          <nav aria-label="Primary navigation">
            <Link href="/#offerings">Offerings</Link>
            <Link href="/gatherings">Gatherings</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>Sacred Bloom Wellness</p>
          <div>
            <Link href="/gatherings">Schedule</Link>
            <Link href="/support">Support</Link>
            <a href="mailto:sacredbloomwellness@gmail.com">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
