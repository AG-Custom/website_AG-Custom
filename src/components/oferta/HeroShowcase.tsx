"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { segments } from "@/content/oferta";
import { ExampleSite } from "./ExampleSite";
import styles from "./OfferHero.module.scss";

const INTERVAL = 5200;

/**
 * Preview do hero: o mesmo site de exemplo no computador e no celular, "se montando".
 * Troca de segmento a cada ~5 s para mostrar que serve para qualquer negócio.
 * Pausa fora da tela, com a aba oculta e com prefers-reduced-motion.
 */
export function HeroShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const segment = segments[index];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    if (el) observer.observe(el);
    const id = window.setInterval(() => {
      if (!visible || document.hidden || paused) return;
      setIndex((i) => (i + 1) % segments.length);
    }, INTERVAL);
    return () => {
      window.clearInterval(id);
      observer.disconnect();
    };
  }, [paused]);

  return (
    <div
      ref={ref}
      className={styles.showcase}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.browser}>
        <div className={styles.bar} aria-hidden="true">
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.url}>
            <span className={styles.lock} />
            <span key={segment.id} className={styles.typed} style={{ "--chars": segment.domain.length } as React.CSSProperties}>
              {segment.domain}
            </span>
          </span>
        </div>
        <ExampleSite key={segment.id} segment={segment} build />
      </div>

      <div className={styles.phone}>
        <ExampleSite key={`${segment.id}-m`} segment={segment} variant="phone" build />
      </div>

      <div className={styles.switcher}>
        <span className={styles.switcherLabel}>
          Exemplo · <strong>{segment.label}</strong>
        </span>
        <span className={styles.switcherDots}>
          {segments.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={clsx(styles.switcherDot, i === index && styles.switcherDotActive)}
              aria-label={`Ver exemplo de site: ${s.label}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
