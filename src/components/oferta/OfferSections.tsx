import Image from "next/image";
import { Container, Section, SectionHeader } from "@/components/ui/Layout";
import { FaqList } from "@/components/sections/Faq";
import { projects } from "@/content/projects";
import { stats } from "@/content/site";
import { oferta, formatPrice } from "@/content/oferta";
import { SegmentPicker } from "./SegmentPicker";
import { SimpleSteps } from "./SimpleSteps";
import { WhatsAppCta } from "./WhatsAppCta";
import styles from "./OfferSections.module.scss";

/** 02 · Números reais + nomes de clientes (sem inventar nada). */
export function OfferProof() {
  return (
    <section className={styles.proof} aria-label="A AG Custom em números">
      <Container>
        <dl className={styles.stats}>
          {stats.map((s, i) => (
            <div key={s.label} data-reveal data-reveal-delay={i * 80}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/** 03 · "Funciona para qualquer negócio" com o seletor de segmento. */
export function OfferSegments() {
  return (
    <Section id="exemplos" labelledBy="exemplos-title">
      <Container>
        <SectionHeader
          index="01"
          eyebrow="Exemplos"
          id="exemplos-title"
          title="Funciona para qualquer negócio."
          lead="Toque no seu tipo de negócio e veja como o seu site pode ficar."
        />
        <SegmentPicker />
      </Container>
    </Section>
  );
}

/** 04 · Como funciona: 3 passos simples, para entender batendo o olho. */
export function OfferSteps() {
  return (
    <Section id="como-funciona" labelledBy="passos-title" tone="deep">
      <Container>
        <SectionHeader
          index="02"
          eyebrow="Como funciona"
          id="passos-title"
          title="Simples assim: 3 passos."
        />
        <SimpleSteps />
      </Container>
    </Section>
  );
}

/** 05 · Card de preço: o centro da página. Tudo o que está (e o que não está) incluso. */
export function OfferPrice() {
  return (
    <Section id="preco" labelledBy="preco-title">
      <Container className={styles.priceGrid}>
        <SectionHeader
          index="03"
          eyebrow="Preço"
          id="preco-title"
          title="Um preço só. Sem letra miúda."
          lead="Você sabe exatamente quanto vai pagar, do primeiro ao último mês."
          className={styles.priceHeader}
        />

        <article className={styles.priceCard} data-reveal data-sheen aria-labelledby="plano-nome">
          <header className={styles.priceTop}>
            <p id="plano-nome" className={styles.planName}>
              {oferta.planName}
            </p>
            <p className={styles.setup}>
              Criação do site <strong className={styles.zero}>R$ 0</strong>
            </p>
          </header>

          <p className={styles.price}>
            <span className={styles.currency}>R$</span>
            <span className={styles.amount}>{oferta.price}</span>
            <span className={styles.period}>/mês</span>
          </p>
          <p className={styles.terms}>
            Sem fidelidade · cancele quando quiser
          </p>

          <ul className={styles.included}>
            {oferta.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className={styles.notIncluded}>
            <span>Não incluso:</span> {oferta.notIncluded}
          </p>

          <WhatsAppCta placement="preco" className={styles.priceCta}>
            Quero meu site por {formatPrice(oferta.price)}/mês
          </WhatsAppCta>
          <p className={styles.priceNote}>Você só começa a pagar depois de aprovar o layout.</p>
        </article>
      </Container>
    </Section>
  );
}

/** 06 · Comparativo com o modelo tradicional (sem citar concorrentes). */
export function OfferComparison() {
  const { comparison } = oferta;
  return (
    <Section id="comparativo" labelledBy="comparativo-title" tone="deep">
      <Container size="narrow">
        <SectionHeader
          index="04"
          eyebrow="Comparativo"
          id="comparativo-title"
          title="Por que pagar por mês sai melhor."
        />
        <div className={styles.tableWrap} data-reveal>
          <table className={styles.table}>
            <thead>
              <tr>
                <td />
                <th scope="col">{comparison.columns[0]}</th>
                <th scope="col" className={styles.ours}>
                  {comparison.columns[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.traditional}</td>
                  <td className={styles.ours}>{row.ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}

/** 07 · Portfólio real em marquee. Sem link para fora: o objetivo é mostrar qualidade. */
export function OfferShowcase() {
  const items = [...projects, ...projects];
  return (
    <Section id="portfolio" labelledBy="portfolio-title" className={styles.showcase}>
      <Container>
        <SectionHeader
          index="05"
          eyebrow="Portfólio"
          id="portfolio-title"
          title="Projetos reais, no ar."
          lead="Alguns dos sites e sistemas que a AG Custom já entregou."
        />
      </Container>
      <div className={styles.marquee} data-reveal>
        <ul className={styles.track}>
          {items.map((p, i) => {
            const clone = i >= projects.length;
            return (
              <li key={`${p.slug}-${i}`} className={styles.shot} aria-hidden={clone || undefined}>
                <div className={styles.shotImage}>
                  <Image
                    src={p.images.desktop}
                    alt={clone ? "" : p.images.alt}
                    fill
                    sizes="(min-width: 768px) 440px, 300px"
                  />
                </div>
                <p className={styles.shotCaption}>
                  <strong>{p.name}</strong> {p.kind}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

/** 08 · Garantias que derrubam o "qual é a pegadinha?". */
export function OfferGuarantees() {
  return (
    <Section id="garantias" labelledBy="garantias-title">
      <Container>
        <SectionHeader index="06" eyebrow="Sem risco" id="garantias-title" title="O que é seu e o que a gente garante." />
        <ul className={styles.guarantees}>
          {oferta.guarantees.map((g, i) => (
            <li key={g.title} className={styles.guarantee} data-reveal data-reveal-delay={i * 100}>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/** 09 · FAQ com as objeções restantes. */
export function OfferFaq() {
  return (
    <Section id="perguntas" labelledBy="faq-title" tone="deep">
      <Container size="narrow">
        <SectionHeader index="07" eyebrow="Perguntas" id="faq-title" title="Perguntas frequentes" />
        <FaqList items={oferta.faq} />
      </Container>
    </Section>
  );
}

/** 10 · CTA final. */
export function OfferFinalCta() {
  return (
    <Section id="comecar" labelledBy="final-title">
      <Container size="narrow" className={styles.final}>
        <div className={styles.finalCard} data-reveal>
          <h2 id="final-title" className={styles.finalTitle}>
            Seu site no ar, sem pagar pela criação.
          </h2>
          <p className={styles.finalLead}>
            {formatPrice(oferta.price)}/mês com hospedagem, manutenção e suporte. Você só paga depois de
            aprovar.
          </p>
          <WhatsAppCta placement="final" id="cta-final" icon="whatsapp">
            Quero meu site
          </WhatsAppCta>
          <p className={styles.finalNote}>Resposta pelo WhatsApp · Sem compromisso</p>
        </div>
      </Container>
    </Section>
  );
}
