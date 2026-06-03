import bridal from "@/assets/collection-bridal.jpg";
import traditional from "@/assets/collection-traditional.jpg";
import soft from "@/assets/collection-soft-new.jpg";
import designer from "@/assets/collection-designer.jpg";
import festive from "@/assets/collection-festive.jpg";

const items = [
  { img: bridal, title: "Bridal Kanchipuram", tag: "Signature", desc: "Heirloom red & gold sarees crafted for the most sacred day." },
  { img: traditional, title: "Traditional Wedding", tag: "Classic", desc: "Temple-border weaves carrying centuries of South Indian heritage." },
  { img: soft, title: "Soft Silk Sarees", tag: "Everyday Luxe", desc: "Featherlight drapes in pastel hues with delicate zari." },
  { img: designer, title: "Designer Sarees", tag: "Contemporary", desc: "Modern motifs woven into timeless silk craftsmanship." },
  { img: festive, title: "Festive Collection", tag: "Celebration", desc: "Vibrant rich-toned sarees that bring every occasion to life." },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-28 md:py-40 bg-royal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="divider-gold mb-6 text-[0.65rem] tracking-[0.4em] uppercase">
            <span>Our Collections</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-tight">
            A Legacy in <span className="italic text-gold-gradient">Six Yards</span>
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed">
            Each saree is hand-selected from master weavers of Kanchipuram —
            pure silk, pure zari, pure tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative overflow-hidden bg-card shadow-deep"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                <span className="absolute top-5 left-5 text-[0.6rem] tracking-[0.3em] uppercase text-gold border border-gold/50 px-3 py-1 bg-background/40 backdrop-blur-sm">
                  {it.tag}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-cream">{it.title}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">{it.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Enquire <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
