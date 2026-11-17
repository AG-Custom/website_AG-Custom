"use client";

import { useEffect } from "react";

/**
 * Reflexo do vidro que segue o cursor.
 * Um único listener global: ao mover o mouse sobre um elemento com `data-sheen`,
 * grava a posição em --mx/--my (px) no próprio elemento. O CSS (token --glass-sheen)
 * desenha o brilho nessa posição. Só roda com mouse e sem prefers-reduced-motion.
 */
export function GlassPointer() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let frame = 0;
    let last: PointerEvent | null = null;

    const update = () => {
      frame = 0;
      if (!last) return;
      // elementsFromPoint (e não closest): funciona mesmo quando um link "esticado"
      // cobre a superfície de vidro, como nos cards de projeto
      const target = document
        .elementsFromPoint(last.clientX, last.clientY)
        .find((el): el is HTMLElement => el instanceof HTMLElement && el.hasAttribute("data-sheen"));
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${last.clientX - rect.left}px`);
      target.style.setProperty("--my", `${last.clientY - rect.top}px`);
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
