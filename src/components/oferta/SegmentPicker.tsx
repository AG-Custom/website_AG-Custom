"use client";

import { useState } from "react";
import { segments, type Segment } from "@/content/oferta";
import { ExampleSite } from "./ExampleSite";
import { WhatsAppCta } from "./WhatsAppCta";
import styles from "./SegmentPicker.module.scss";

/**
 * "Funciona para o meu negócio?": chips de segmento trocam o site de exemplo
 * (computador + celular). A troca remonta o exemplo e os blocos entram de novo.
 */
export function SegmentPicker() {
  const [active, setActive] = useState<Segment>(segments[0]);

  return (
    <div className={styles.wrap}>
      <div className={styles.chips} role="group" aria-label="Escolha o tipo de negócio" data-reveal>
        {segments.map((s) => (
          <button
            key={s.id}
            type="button"
            className={styles.chip}
            aria-pressed={s.id === active.id}
            onClick={() => setActive(s)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className={styles.stage} data-reveal data-reveal-delay="120">
        <figure className={styles.devices}>
          <div className={styles.browser}>
            <div className={styles.bar} aria-hidden="true">
              <span className={styles.dots}>
                <i />
                <i />
                <i />
              </span>
              <span className={styles.url}>{active.domain}</span>
            </div>
            <ExampleSite key={active.id} segment={active} build />
          </div>
          <div className={styles.phone}>
            <ExampleSite key={`${active.id}-m`} segment={active} variant="phone" build />
          </div>
          <figcaption className={styles.caption} aria-live="polite">
            Exemplo de layout · {active.label} ({active.business}, negócio fictício)
          </figcaption>
        </figure>

        <div className={styles.aside}>
          <p className={styles.asideTitle}>
            Feito com a <strong>sua marca</strong>.
          </p>
          <ul className={styles.features}>
            <li>Suas cores, seu logo e suas fotos</li>
            <li>Funciona no celular e no computador</li>
            <li>Botão de WhatsApp em todas as telas</li>
            <li>Serviços, preços, horários e endereço</li>
          </ul>
          <WhatsAppCta
            placement="segmentos"
            variant="secondary"
            size="md"
            message={`Olá! Vi o Site Essencial por R$ 150/mês e quero um site para o meu negócio (${active.label}).`}
          >
            Quero um site assim
          </WhatsAppCta>
        </div>
      </div>
    </div>
  );
}
