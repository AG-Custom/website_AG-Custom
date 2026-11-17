import { OfferFooter, OfferHeader } from "@/components/oferta/OfferChrome";
import { StickyCta } from "@/components/oferta/StickyCta";
import { AttributionCapture } from "@/components/oferta/AttributionCapture";

/**
 * Layout das landing pages de tráfego pago: header mínimo (sem menu), rodapé curto,
 * barra fixa de WhatsApp no celular e captura da origem do anúncio.
 * Scripts de anúncio (Meta Pixel, GA4/Google Ads, GTM, Clarity) entram aqui quando houver IDs.
 */
export default function OfertaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <OfferHeader />
      <main id="conteudo">{children}</main>
      <OfferFooter />
      <StickyCta />
      <AttributionCapture />
    </>
  );
}
