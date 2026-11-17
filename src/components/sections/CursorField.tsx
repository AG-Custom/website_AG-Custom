"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";

const SPACING = 28;
const RADIUS = 170;

/**
 * Grade de pontos que reage ao cursor (momento interativo do hero).
 * - Leve: canvas 2D, só anima enquanto o cursor se move e o hero está visível.
 * - Com prefers-reduced-motion ou sem mouse, desenha a grade estática.
 */
export function CursorField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const interactive = !reduceMotion && finePointer;

    let width = 0;
    let height = 0;
    let dpr = 1;
    // posição alvo e suavizada do cursor (fora da tela por padrão)
    const target = { x: -9999, y: -9999 };
    const current = { x: -9999, y: -9999 };
    let raf = 0;
    let visible = true;
    let idleFrames = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      const offsetX = (width % SPACING) / 2;
      const offsetY = (height % SPACING) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let x = offsetX + c * SPACING;
          let y = offsetY + r * SPACING;
          const dx = x - current.x;
          const dy = y - current.y;
          const dist = Math.hypot(dx, dy);
          const t = Math.max(0, 1 - dist / RADIUS); // 0 longe → 1 perto
          const ease = t * t * (3 - 2 * t);

          if (ease > 0) {
            // empurra levemente para longe do cursor
            const push = ease * 10;
            x += (dx / (dist || 1)) * push;
            y += (dy / (dist || 1)) * push;
            // branco → violeta (#8B5CF6) conforme aproxima
            const red = Math.round(255 - (255 - 139) * ease);
            const green = Math.round(255 - (255 - 92) * ease);
            ctx.fillStyle = `rgba(${red}, ${green}, 246, ${0.1 + ease * 0.8})`;
            ctx.beginPath();
            ctx.arc(x, y, 1 + ease * 1.4, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
            ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
          }
        }
      }
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;
      draw();
      const settled = Math.abs(target.x - current.x) < 0.5 && Math.abs(target.y - current.y) < 0.5;
      idleFrames = settled ? idleFrames + 1 : 0;
      raf = visible && idleFrames < 10 ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (!raf && visible) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      // primeira entrada: começa já na posição, sem "voar" de fora da tela
      if (current.x < -9000) {
        current.x = target.x;
        current.y = target.y;
      }
      idleFrames = 0;
      start();
    };

    const onLeave = () => {
      target.x = target.y = -9999;
      current.x = current.y = -9999;
      draw();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(canvas);

    if (interactive) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.field} aria-hidden="true" />;
}
