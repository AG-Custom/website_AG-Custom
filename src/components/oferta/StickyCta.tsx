"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { oferta, formatPrice } from "@/content/oferta";
import { WhatsAppCta } from "./WhatsAppCta";
import styles from "./OfferChrome.module.scss";

/**
 * Barra fixa de WhatsApp (só no celular). Aparece quando o CTA do hero sai da tela
 * e some quando o CTA final aparece, para não ficar duplicado.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-cta");
    const final = document.getElementById("cta-final");
    if (!hero || !("IntersectionObserver" in window)) return;

    const state = { heroGone: false, finalIn: false };
    const update = () => setVisible(state.heroGone && !state.finalIn);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) state.heroGone = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        if (entry.target === final) state.finalIn = entry.isIntersecting;
      }
      update();
    });
    observer.observe(hero);
    if (final) observer.observe(final);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={clsx(styles.sticky, visible && styles.stickyVisible)} inert={!visible}>
      <p className={styles.stickyPrice}>
        <span className={styles.stickyAmount}>
          <strong>{formatPrice(oferta.price)}</strong>/mês
        </span>
        <span>R$ 0 de criação</span>
      </p>
      <WhatsAppCta placement="sticky" size="md" icon="whatsapp" className={styles.stickyButton}>
        {oferta.hero.cta}
      </WhatsAppCta>
    </div>
  );
}
