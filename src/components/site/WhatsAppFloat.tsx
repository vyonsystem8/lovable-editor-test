import { trackEvent, whatsappUrl } from "@/lib/track";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => trackEvent("cta_whatsapp_click", { location: "float" })}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#F26B38] text-white shadow-[0_10px_30px_-10px_rgba(242,107,56,0.6)] hover:bg-[#e05f30] transition-all hover:scale-105"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11.7 11.7 0 0 0 3.2 19.3L2 22l2.8-.7A11.7 11.7 0 1 0 20.5 3.5Zm-8.4 18a9.7 9.7 0 0 1-4.9-1.3l-.4-.2-2.3.6.6-2.3-.2-.4a9.7 9.7 0 1 1 7.2 3.6Zm5.4-7.3c-.3-.1-1.7-.8-2-.9s-.4-.1-.6.1-.7.9-.9 1.1-.3.2-.6 0a8 8 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.4 0-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.8.4 3.2 3.2 0 0 0-1 2.4 5.5 5.5 0 0 0 1.2 3 12.7 12.7 0 0 0 4.9 4.3c.7.3 1.2.5 1.6.6a3.8 3.8 0 0 0 1.7.1 2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"/>
      </svg>
    </a>
  );
}
