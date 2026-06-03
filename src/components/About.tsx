export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="divider-gold mb-6 text-[0.65rem] tracking-[0.4em] uppercase justify-center">
          <span>Our Story</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
          Welcome to{" "}
          <span className="italic text-gold-gradient">Sri Senthil Silks</span>
        </h2>

        <div className="mt-10 space-y-6 text-cream/80 leading-relaxed text-[1.05rem] text-left md:text-center">
          <p>
            Since 2010, Sri Senthil Silks has been offering authentic Kanchipuram silk sarees
            directly from skilled weavers. Built on trust, quality, and tradition, we provide a
            carefully curated collection of bridal, wedding, and traditional silk sarees at wholesale
            and retail prices.
          </p>
          <p>
            By working directly with weavers and avoiding middlemen, we ensure genuine craftsmanship
            and exceptional value for every customer.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Authentic Silk", "Direct from Weavers", "Wholesale & Retail"].map((t) => (
            <span
              key={t}
              className="text-[0.7rem] tracking-[0.25em] uppercase text-gold border border-gold/40 px-4 py-2"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
