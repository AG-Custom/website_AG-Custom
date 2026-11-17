"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.scss";

export type AboutTab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

/**
 * Painel de vidro com abas (padrão WAI-ARIA Tabs: setas, Home/End).
 * A aba ativa é marcada por uma "gota" de vidro que desliza (estilo tab bar do Liquid Glass).
 */
export function AboutTabs({ tabs }: { tabs: AboutTab[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const update = () => {
      const el = tabRefs.current[active];
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = tabs.length - 1;
    let next = active;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className={styles.panel} data-sheen>
      <div className={styles.tablist} role="tablist" aria-label="Sobre a AG Custom" onKeyDown={onKeyDown}>
        <span
          className={styles.pill}
          aria-hidden="true"
          style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
        />
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={i === active}
            aria-controls={`painel-${tab.id}`}
            tabIndex={i === active ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`painel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={i !== active}
          className={styles.tabpanel}
          tabIndex={0}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
