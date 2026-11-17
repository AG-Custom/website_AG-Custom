"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Observa todos os elementos com `data-reveal` e adiciona `data-revealed`
 * quando entram na tela. Montado uma vez no layout; reexecuta a cada rota.
 * O estado inicial (oculto) só existe com a classe `.js` no <html> e sem
 * prefers-reduced-motion — ver styles/globals.scss.
 * Atraso opcional: data-reveal-delay="120" (ms).
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js", "reveal-ready");

    const reveal = (el: HTMLElement) => {
      const delay = el.dataset.revealDelay;
      if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.setAttribute("data-revealed", "");
    };

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"),
    );
    if (!("IntersectionObserver" in window)) {
      elements.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
