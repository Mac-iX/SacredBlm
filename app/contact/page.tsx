export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="shell simple-page readable">
      <h1>Contact</h1>
      <p>
        Ask about a private session, an online class, a circle, or an upcoming
        gathering.
      </p>
      <a className="button" href="mailto:sacredbloomwellness@gmail.com">
        sacredbloomwellness@gmail.com
      </a>
      <p className="small-copy">
        A Google Form or approved inquiry workflow can replace this direct email
        action once the final fields and account access are confirmed.
      </p>
    </main>
  );
}
