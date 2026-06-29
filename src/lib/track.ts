// Centralized dataLayer tracking
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export type TrackEventName =
  | "page_view"
  | "form_start"
  | "generate_lead_form"
  | "cta_whatsapp_click"
  | "cta_header_click"
  | "cta_hero_click"
  | "cta_middle_click"
  | "cta_final_click"
  | "service_card_click"
  | "blog_article_click"
  | "faq_open"
  | "scroll_25"
  | "scroll_50"
  | "scroll_75"
  | "scroll_90"
  | "phone_click"
  | "email_click";

export function trackEvent(event: TrackEventName, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export const WHATSAPP_NUMBER = "5561999999999";
export const WHATSAPP_MSG = "Olá, vim pelo site da Consync e gostaria de falar com um especialista sobre contabilidade para minha empresa.";
export const whatsappUrl = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
