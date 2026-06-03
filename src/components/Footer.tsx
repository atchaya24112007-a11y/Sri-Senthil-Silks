export function Footer() {
  return (
    <footer className="border-t border-gold/20 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl text-gold-gradient italic">Sri Senthil Silks</p>
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-cream/60 mt-1">
            Kanchipuram · Tamil Nadu
          </p>
        </div>
        <p className="text-xs text-cream/50 tracking-wider text-center">
          © {new Date().getFullYear()} Sri Senthil Silks · Handcrafted with devotion.
        </p>
      </div>
    </footer>
  );
}
