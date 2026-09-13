type HomeProps = {
  onBrowse: () => void;
};

export default function Home({ onBrowse }: HomeProps) {
  return (
    <section className="home">
      <div className="hero">
        <p className="eyebrow">KL · Klang Valley · Late-night friendly</p>
        <h1>
          Because sometimes love
          <br />
          means a <em>10pm cookie run</em>.
        </h1>
        <p className="lede">
          Cookie Run Club started on an ordinary weeknight: a founder racing
          across town at 10pm so an 11-year-old daughter could wake up to warm
          cookies before her big day. That small mission grew into a directory
          for cookie lovers — connecting people to the shops that stay open
          (or stay legendary) across Kuala Lumpur and the Klang Valley.
        </p>
        <button type="button" className="cta" onClick={onBrowse}>
          Browse cookie shops
        </button>
      </div>

      <div className="story-cards">
        <article className="story-card">
          <h2>Find your shop</h2>
          <p>
            Name, area, hours, what they&apos;re known for, plus Maps,
            Instagram, and WhatsApp when available.
          </p>
        </article>
        <article className="story-card">
          <h2>Filter for the run</h2>
          <p>
            Narrow by neighbourhood or tick &ldquo;late night&rdquo; when the
            craving hits after dinner.
          </p>
        </article>
        <article className="story-card">
          <h2>Keep it simple</h2>
          <p>
            No accounts, no payments, no fake reviews — just a warm map of
            where the good cookies live.
          </p>
        </article>
      </div>
    </section>
  );
}
