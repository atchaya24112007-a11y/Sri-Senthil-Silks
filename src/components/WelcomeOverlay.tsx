import { useEffect, useState } from "react";

export function WelcomeOverlay() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  const close = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 500);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-royal transition-opacity duration-500 ${closing ? "opacity-0" : "opacity-100"}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.55 0.20 28 / 0.5), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.78 0.15 75 / 0.3), transparent 50%)",
        }}
      />
      <div className="relative mx-6 max-w-2xl text-center animate-scale-in">
        <div className="divider-gold mb-8 text-xs tracking-[0.4em] uppercase">
          <span>Est. Kanchipuram</span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
          Welcome to{" "}
          <span className="block mt-2 italic text-gold-gradient font-medium">
            Sri Senthil Silks
          </span>
        </h1>
        <p className="mt-8 font-display text-xl md:text-2xl text-cream/90 italic font-light">
          Exclusive Handmade Silk Sarees
        </p>
        <p className="mt-2 text-sm md:text-base tracking-[0.3em] uppercase text-gold animate-shimmer">
          — From Weavers to You —
        </p>
        <button
          onClick={close}
          className="mt-12 group relative inline-flex items-center gap-3 px-10 py-4 border border-gold/60 text-gold uppercase tracking-[0.25em] text-xs hover:bg-gold hover:text-primary-foreground transition-all duration-500 shadow-gold"
        >
          <span>Enter Boutique</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
}
