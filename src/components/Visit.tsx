import whatsappIcon from "@/assets/whatsapp-button.png";
import locationQrAsset from "@/assets/location-qr-real.png.asset.json";

const locationQr = locationQrAsset.url;
const WHATSAPP_URL =
  "https://wa.me/919944358299?text=Hello%20Sri%20Senthil%20Silks,%20I%20would%20like%20to%20know%20more%20about%20your%20silk%20saree%20collections.";
const MAPS_URL = "https://maps.app.goo.gl/5Ce3K45DiE9A2Ago9";
const MAPS_EMBED = "https://www.google.com/maps?q=Sri+Senthil+Silks,+Lakshmi+Complex,+49%2F4D+Mettu+Street,+Little+Kanchipuram,+Kanchipuram+631501&ll=12.8274235,79.7063127&z=18&output=embed";

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

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-card border border-gold/20 p-6 shadow-deep hover:border-gold/60 transition-colors group"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-16 h-16 shrink-0" />
              <div>
                <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-1">Chat With Us</p>
                <p className="font-display text-2xl text-cream group-hover:translate-x-1 transition-transform">
                  WhatsApp →
                </p>
                <p className="text-cream/60 text-xs mt-1">+91 99443 58299</p>
              </div>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-gold/20 p-5 shadow-deep hover:border-gold/60 transition-colors flex flex-col items-center text-center"
              >
                <img src={locationQr} alt="Scan QR for directions to Sri Senthil Silks" className="w-full max-w-[200px] aspect-square object-contain bg-white p-3 rounded-sm" />
                <p className="text-[0.7rem] tracking-[0.25em] uppercase text-gold mt-4 leading-relaxed">
                  Scan to Get Directions<br/>to Sri Senthil Silks
                </p>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-gold/20 shadow-deep overflow-hidden group relative min-h-[200px]"
              >
                <iframe
                  src={MAPS_EMBED}
                  className="absolute inset-0 w-full h-full grayscale contrast-110 opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Senthil Silks location"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-royal to-transparent p-3 text-center">
                  <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold">Open in Maps →</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
