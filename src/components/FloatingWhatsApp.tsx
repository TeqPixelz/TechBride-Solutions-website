import { MessageCircle } from "lucide-react";
import { contact } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}?text=Hello%20TechBridge%20Solutions%2C%20I%20would%20like%20a%20quote.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with TechBridge Solutions on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-bridge text-white shadow-2xl shadow-green-900/35 transition hover:-translate-y-1 hover:bg-[#168E2D]"
    >
      <MessageCircle size={27} />
    </a>
  );
}
