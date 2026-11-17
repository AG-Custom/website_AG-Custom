import { site } from "@/content/site";

/** Link wa.me com mensagem pronta. Funciona sem JS (o código de origem é acrescentado no clique). */
export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

const STORAGE_KEY = "agc_attribution";

type Attribution = { source?: string; campaign?: string; content?: string; click?: "fb" | "g" };

/** Guarda UTM/fbclid/gclid da URL de entrada na sessão (chamado uma vez no layout da oferta). */
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const data: Attribution = {
      source: params.get("utm_source") ?? undefined,
      campaign: params.get("utm_campaign") ?? undefined,
      content: params.get("utm_content") ?? undefined,
      click: params.has("fbclid") ? "fb" : params.has("gclid") ? "g" : undefined,
    };
    if (!data.source && !data.click) return; // não sobrescreve a origem com uma visita direta
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage bloqueado: segue sem código
  }
}

const clean = (s?: string) => s?.toUpperCase().replace(/[^A-Z0-9]+/g, "").slice(0, 12);

/**
 * Código curto que vai no fim da mensagem do WhatsApp para saber qual anúncio gerou a conversa.
 * Ex.: utm_source=meta&utm_content=v01 → "SE-META-V01". Sem origem → "SE-SITE".
 */
export function attributionCode(prefix = "SE") {
  let data: Attribution = {};
  try {
    data = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    // ignora
  }
  const source = clean(data.source) ?? (data.click === "fb" ? "META" : data.click === "g" ? "GOOGLE" : "SITE");
  return [prefix, source, clean(data.content ?? data.campaign)].filter(Boolean).join("-");
}
