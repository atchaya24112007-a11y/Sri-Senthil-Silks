const WHATSAPP_URL =
  "https://wa.me/919944358299?text=Hello%20Sri%20Senthil%20Silks,%20I%20would%20like%20to%20know%20more%20about%20your%20silk%20saree%20collections.";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[60] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.45)] ring-2 ring-gold/60 hover:scale-110 transition-transform">
        <svg viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8 fill-white" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.214-.5.214-.93.143-1.017-.13-.143-.272-.286-.473-.43z"/>
          <path d="M16 0C7.16 0 0 7.16 0 16c0 2.88.756 5.582 2.078 7.92L.038 32l8.36-2.005A15.953 15.953 0 0 0 16 32c8.84 0 16-7.16 16-16S24.84 0 16 0zm0 29.18c-2.55 0-4.96-.665-7.04-1.834l-4.92 1.18 1.17-4.9A12.91 12.91 0 0 1 3.18 16C3.18 8.92 8.92 3.18 16 3.18 23.08 3.18 28.82 8.92 28.82 16S23.08 29.18 16 29.18z"/>
        </svg>
      </span>
    </a>
  );
}
