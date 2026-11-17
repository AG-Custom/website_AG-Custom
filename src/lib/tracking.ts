// Eventos de conversão da landing page. Hoje nenhum script de anúncio está instalado:
// estas funções só disparam se fbq/gtag/dataLayer existirem na página.
// Ao instalar Meta Pixel, GA4/Google Ads ou GTM, os eventos passam a ser enviados sem mudar os componentes.

type Fbq = (cmd: "track", event: string, params?: Record<string, unknown>) => void;
type Gtag = (cmd: "event", event: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    fbq?: Fbq;
    gtag?: Gtag;
    dataLayer?: Record<string, unknown>[];
  }
}

/** Clique em qualquer botão de WhatsApp (a conversão da página). */
export function trackWhatsAppClick(placement: string, code: string) {
  const params = { placement, code, content_name: "Site Essencial" };
  try {
    window.fbq?.("track", "Contact", params);
    window.gtag?.("event", "generate_lead", params);
    window.dataLayer?.push({ event: "whatsapp_click", ...params });
  } catch {
    // tracking nunca pode quebrar o clique
  }
}
