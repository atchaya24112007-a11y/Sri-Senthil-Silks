import whatsappIcon from "@/assets/whatsapp-button.png";
import locationQr from "@/assets/location-qr.png";

const WHATSAPP_URL = "https://wa.me/919944358299";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Sri+Senthil+Silks+Kanchipuram";
const MAPS_EMBED = "https://www.google.com/maps?q=Lakshmi+Complex+Mettu+Street+Little+Kanchipuram&output=embed";

export function Visit() {
  const details = [
    { icon: "📍", label: "Address", value: "Lakshmi Complex, 49/4D Mettu Street, Little Kanchipuram, Kanchipuram - 631501, Tamil Nadu, India" },
    { icon: "📌", label: "Landmark", value: "Opposite to Thiruvalluvar Handloom Society" },
    { icon: "🕘", label: "Open Daily", value: "9:00 AM — 9:00 PM" },
    { icon: "📞", label: "Contact", value: "+91 99443 58299" },
  ];

  return (
    <section id="visit" className="relative py-28 md:py-40 bg-royal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="divider-gold mb-6 text-[0.65rem] tracking-[0.4em] uppercase">
            <span>Visit Our Store</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            Visit Our <span className="italic text-gold-gradient">Showroom</span>
          </h2>
          <p className="mt-6 text-cream/70">
            Experience the texture, the sheen, the heritage — in person at Kanchipuram.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="bg-card border border-gold/20 p-8 md:p-12 shadow-deep">
            <p className="font-display text-3xl text-gold-gradient italic">Sri Senthil Silks</p>
            <div className="h-px w-16 bg-gold mt-4 mb-8" />
            <ul className="space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="text-2xl shrink-0">{d.icon}</span>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-1">{d.label}</p>
                    <p className="text-cream/85 leading-relaxed">{d.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-gold/20 space-y-3 text-center">
              <p className="text-sm text-gold tracking-[0.2em] uppercase">✨ Wholesale & Retail ✨</p>
              <p className="text-xs tracking-[0.2em] uppercase text-cream/70">
                Authentic Kanchipuram Silk Sarees · Directly from Weavers
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <a
              href="tel:+919944358299"
              className="block bg-gold text-primary-foreground p-8 hover:bg-gold-light transition-colors shadow-gold group"
            >
              <p className="text-[0.65rem] tracking-[0.3em] uppercase">Call Our Store</p>
              <p className="font-display text-3xl md:text-4xl mt-2 group-hover:translate-x-1 transition-transform">
                +91 99443 58299 →
              </p>
            </a>

            <div className="bg-card border border-gold/20 p-8 shadow-deep">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3">Hours</p>
              <p className="font-display text-2xl text-cream">Open All Days</p>
              <p className="text-cream/70 mt-1">9:00 AM — 9:00 PM</p>
              <div className="mt-6 flex items-center gap-2 text-xs text-cream/60">
                <span className="inline-block w-2 h-2 rounded-full bg-gold animate-shimmer" />
                Currently welcoming visitors
              </div>
            </div>

            <div className="bg-card border border-gold/20 p-8 shadow-deep">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3">Coming Soon</p>
              <p className="font-display text-2xl text-cream">QR · WhatsApp · Map</p>
              <p className="text-cream/70 mt-2 text-sm">
                Quick scan to reach the store and chat instantly with our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
