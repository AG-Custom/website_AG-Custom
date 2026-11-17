import type { Metadata } from "next";
import { OfferHero } from "@/components/oferta/OfferHero";
import {
  OfferComparison,
  OfferFaq,
  OfferFinalCta,
  OfferGuarantees,
  OfferPrice,
  OfferProof,
  OfferSegments,
  OfferShowcase,
  OfferSteps,
} from "@/components/oferta/OfferSections";
import { oferta, formatPrice } from "@/content/oferta";
import { site } from "@/content/site";

const title = `Site profissional por ${formatPrice(oferta.price)}/mês, sem pagar pela criação`;
const description = `${oferta.planName} da ${site.name}: criamos, hospedamos e cuidamos do seu site por ${formatPrice(
  oferta.price,
)}/mês. R$ 0 de criação e você só paga depois de aprovar o layout.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: oferta.slug },
  openGraph: { title, description, url: `${site.url}${oferta.slug}` },
  twitter: { title, description },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: oferta.planName,
    serviceType: "Criação e hospedagem de sites",
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "BR",
    offers: {
      "@type": "Offer",
      price: oferta.price,
      priceCurrency: "BRL",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: oferta.price,
        priceCurrency: "BRL",
        unitCode: "MON",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: oferta.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
];

/** Landing page da oferta "Site Essencial" (tráfego pago). Ver docs/estudo-oferta-site-mensal.md. */
export default function SiteEssencialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OfferHero />
      <OfferProof />
      <OfferSegments />
      <OfferSteps />
      <OfferPrice />
      <OfferComparison />
      <OfferShowcase />
      <OfferGuarantees />
      <OfferFaq />
      <OfferFinalCta />
    </>
  );
}
