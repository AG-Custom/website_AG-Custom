import type { Metadata } from "next";
import { Container, SectionHeader } from "@/components/ui/Layout";
import { FaqList } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { faq } from "@/content/home";
import styles from "../pages.module.scss";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: "Prazos, valores, manutenção e hospedagem: respostas rápidas sobre como a AG Custom trabalha.",
  alternates: { canonical: "/faq" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <div className={styles.pageTop}>
        <Container size="narrow">
          <SectionHeader
            as="h1"
            index="01"
            eyebrow="FAQ"
            title={
              <>
                Perguntas <span className="accent">frequentes</span>.
              </>
            }
            lead="Não encontrou sua dúvida? Chame no WhatsApp e responda direto com a gente."
          />
          <FaqList />
        </Container>
      </div>
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
