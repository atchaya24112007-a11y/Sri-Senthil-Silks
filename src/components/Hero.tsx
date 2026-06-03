import heroImg from "@/assets/hero-saree.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bride wearing a Kanchipuram silk saree"
          width={1536}
          height={1920}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pb-24 md:pb-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="divider-gold mb-6 text-[0.65rem] tracking-[0.4em] uppercase">
            <span>Heritage Silk Atelier</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-cream">
            Woven in <span className="italic text-gold-gradient">Tradition</span>,
            <br /> Worn with <span className="italic text-gold-gradient">Grace</span>.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-cream/80 leading-relaxed">
            Exclusive handmade Kanchipuram silk sarees, sourced directly from master
            weavers — bridal, traditional, designer & festive collections at wholesale and retail.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#collections"
              className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-all shadow-gold"
            >
              Explore Collections <span>→</span>
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-3 border border-gold/60 text-gold px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold/10 transition-all"
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden md:flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[0.6rem] tracking-[0.3em] uppercase rotate-90 origin-center mt-8">Scroll</span>
      </div>
    </section>
  );
}
