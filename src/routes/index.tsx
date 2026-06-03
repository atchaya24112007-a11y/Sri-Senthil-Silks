import { createFileRoute } from "@tanstack/react-router";
import { WelcomeOverlay } from "@/components/WelcomeOverlay";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { About } from "@/components/About";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Senthil Silks — Exclusive Handmade Kanchipuram Silk Sarees" },
      { name: "description", content: "Authentic Kanchipuram silk sarees direct from weavers. Bridal, traditional, designer & festive collections at wholesale and retail prices." },
      { property: "og:title", content: "Sri Senthil Silks — Kanchipuram Silk Sarees" },
      { property: "og:description", content: "Exclusive handmade silk sarees from weavers to you." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <WelcomeOverlay />
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <About />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
