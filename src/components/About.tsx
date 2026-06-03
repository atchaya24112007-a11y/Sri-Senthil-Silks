import weaver from "@/assets/about-weaver.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/6] overflow-hidden shadow-deep">
            <img
              src={weaver}
              alt="Weaver's hands at a Kanchipuram handloom"
              loading="lazy"
              width={1280}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-8 bg-gold text-primary-foreground p-8 max-w-xs shadow-gold">
            <p className="font-display text-3xl italic leading-tight">"Direct from the loom."</p>
            <p className="mt-3 text-[0.65rem] tracking-[0.3em] uppercase">— Master Weaver, Kanchipuram</p>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold/40 -z-10" />
        </div>

        <div className="order-1 lg:order-2">
          <div className="divider-gold mb-6 text-[0.65rem] tracking-[0.4em] uppercase">
            <span>Our Story</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            Welcome to{" "}
            <span className="italic text-gold-gradient">Sri Senthil Silks</span>
          </h2>
          <div className="mt-8 space-y-5 text-cream/80 leading-relaxed text-[1.05rem]">
            <p>
              Discover the elegance of authentic Kanchipuram silk sarees at Sri Senthil Silks.
              We offer exclusive handmade silk sarees sourced directly from skilled weavers,
              ensuring premium quality without intermediaries.
            </p>
            <p>
              From bridal collections and traditional wedding sarees to designer and festive
              wear, every saree reflects the rich heritage and craftsmanship of Kanchipuram.
              Enjoy an incredible collection at wholesale and retail prices with personalized
              service and trusted quality.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
