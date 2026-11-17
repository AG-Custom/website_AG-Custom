import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Layout";
import { oferta } from "@/content/oferta";
import { WhatsAppCta } from "./WhatsAppCta";
import { HeroShowcase } from "./HeroShowcase";
import styles from "./OfferHero.module.scss";

const enter = (n: number) => ({ "--enter": n }) as CSSProperties;

/**
 * Primeira tela: promessa + preço + CTA + preview de um site de exemplo (computador + celular).
 * O título não tem animação de entrada: é o elemento de LCP e precisa aparecer no 1º frame.
 */
export function OfferHero() {
  const { hero } = oferta;
  return (
    <section className={styles.hero} aria-labelledby="hero-title" id="topo">
      <div className={styles.glow} aria-hidden="true" />
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow} data-enter>
            <span className={styles.dot} aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 id="hero-title" className={styles.title}>
            {hero.titleBefore} <span className="accent">{hero.titleAccent}</span>{" "}
            <span className={styles.titleAfter}>{hero.titleAfter}</span>
          </h1>

          <p className={styles.lead} data-enter style={enter(1)}>
            {hero.lead}
          </p>

          <div className={styles.actions} data-enter style={enter(2)}>
            <WhatsAppCta placement="hero" id="hero-cta" className={styles.cta}>
              {hero.cta}
            </WhatsAppCta>
            <ul className={styles.risk}>
              {hero.risk.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.visual} data-enter style={enter(2)}>
          <HeroShowcase />
        </div>
      </Container>
    </section>
  );
}
