"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Handshake, MessageCircle, Sparkles, Zap } from "@/components/ui/Icons";
import { differentials } from "@/content/home";
import styles from "./DifferentialsShowcase.module.scss";

const DURATION = 6500; // ms por capítulo
const icons = { conversa: MessageCircle, rapidez: Zap, identidade: Sparkles, parceria: Handshake } as const;

/**
 * Demonstrativo "em vídeo" dos diferenciais: capítulos à esquerda com barra de progresso,
 * tela de vidro à direita com uma cena animada (CSS) para cada um.
 * Avança sozinho; pausa no hover/foco e pelo botão (WCAG 2.2.2). Sem autoplay com reduced-motion.
 */
export function DifferentialsShowcase() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  const paused = !playing || hovering;

  const next = () => setActive((i) => (i + 1) % differentials.length);

  return (
    <div
      className={clsx(styles.showcase, paused && styles.paused)}
      style={{ "--chapter": `${DURATION}ms` } as React.CSSProperties}
      // pausa só com mouse: em telas de toque o "hover" ficaria preso após um toque
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovering(false)}
    >
      <div className={styles.chapters} role="tablist" aria-label="Diferenciais da AG Custom">
        {differentials.map((item, i) => {
          const Icon = icons[item.icon];
          const isActive = i === active;
          return (
            <button
              key={item.title}
              type="button"
              role="tab"
              id={`dif-tab-${i}`}
              aria-selected={isActive}
              aria-controls="dif-screen"
              className={clsx(styles.chapter, isActive && styles.chapterActive)}
              onClick={() => setActive(i)}
            >
              <span className={styles.chapterIcon}>
                <Icon size={18} />
              </span>
              <span className={styles.chapterText}>
                <span className={styles.chapterTitle}>{item.title}</span>
                <span className={styles.chapterDesc}>{item.description}</span>
              </span>
              <span className={styles.progress} aria-hidden="true">
                {isActive && (
                  <span
                    key={`${active}`}
                    className={styles.progressBar}
                    onAnimationEnd={next}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="dif-screen"
        role="tabpanel"
        aria-labelledby={`dif-tab-${active}`}
        className={styles.screen}
        data-sheen
      >
        <div className={styles.screenBar} aria-hidden="true">
          <span className={styles.rec} />
          <span className={styles.screenLabel}>
            {String(active + 1).padStart(2, "0")} / {String(differentials.length).padStart(2, "0")}
          </span>
        </div>

        <div key={active} className={styles.stage}>
          {active === 0 && <SceneChat />}
          {active === 1 && <SceneClock />}
          {active === 2 && <SceneIdentity />}
          {active === 3 && <SceneLog />}
        </div>

        <button
          type="button"
          className={styles.playToggle}
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pausar demonstração" : "Reproduzir demonstração"}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <rect x="3" y="2" width="3" height="10" rx="1" fill="currentColor" />
              <rect x="8" y="2" width="3" height="10" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M4 2.5v9l7.5-4.5L4 2.5Z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

// ---------- Cenas (decorativas: o texto do capítulo já descreve cada uma) ----------

function SceneChat() {
  return (
    <div className={styles.chat} aria-hidden="true">
      <div className={styles.chatHead}>
        <span className={styles.avatar}>AG</span>
        <span>
          <strong>Time de desenvolvimento</strong>
          <small>online agora</small>
        </span>
      </div>
      <p className={clsx(styles.bubble, styles.bubbleIn)} style={{ "--d": "0.3s" } as React.CSSProperties}>
        Oi! Dá para adicionar agendamento online no site?
      </p>
      <p className={clsx(styles.typing)} style={{ "--d": "1.2s" } as React.CSSProperties}>
        <i />
        <i />
        <i />
      </p>
      <p className={clsx(styles.bubble, styles.bubbleOut)} style={{ "--d": "2.3s" } as React.CSSProperties}>
        Dá sim! Quem fala aqui é quem desenvolve o seu projeto. Te mando a proposta hoje.
      </p>
      <p className={clsx(styles.bubble, styles.bubbleIn)} style={{ "--d": "3.8s" } as React.CSSProperties}>
        Perfeito, sem intermediários.
      </p>
    </div>
  );
}

function SceneClock() {
  const steps = ["Conteúdo recebido", "Design aprovado", "Desenvolvimento", "Site no ar"];
  return (
    <div className={styles.clock} aria-hidden="true">
      <svg viewBox="0 0 120 120" className={styles.ring}>
        <circle cx="60" cy="60" r="52" className={styles.ringTrack} />
        <circle cx="60" cy="60" r="52" className={styles.ringFill} pathLength="100" />
      </svg>
      <span className={styles.ringLabel}>
        <strong>24h</strong>
        <small>do conteúdo ao ar</small>
      </span>
      <ol className={styles.steps}>
        {steps.map((s, i) => (
          <li key={s} style={{ "--d": `${0.4 + i * 1.1}s` } as React.CSSProperties}>
            <span className={styles.check}>✓</span>
            {s}
          </li>
        ))}
      </ol>
    </div>
  );
}

function SceneIdentity() {
  const brands = [
    { name: "AgroPulse", c1: "#1f7a43", c2: "#e9f3e7", ink: "#0f2818" },
    { name: "VAE Mobility", c1: "#ff5a00", c2: "#20262e", ink: "#ffffff" },
    { name: "Amanda Rudio", c1: "#9b7fd4", c2: "#f3eefb", ink: "#3d2b63" },
  ];
  return (
    <div className={styles.identity} aria-hidden="true">
      {brands.map((b, i) => (
        <div
          key={b.name}
          className={styles.brand}
          style={
            { "--c1": b.c1, "--c2": b.c2, "--ink": b.ink, "--d": `${i * 2.1}s` } as React.CSSProperties
          }
        >
          <div className={styles.mockNav}>
            <span className={styles.mockLogo} />
            <span className={styles.mockLinks}>
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className={styles.mockHero}>
            <span className={styles.mockTitle}>{b.name}</span>
            <span className={styles.mockLine} />
            <span className={styles.mockLine} style={{ width: "60%" }} />
            <span className={styles.mockBtn} />
          </div>
          <div className={styles.mockCards}>
            <i />
            <i />
            <i />
          </div>
        </div>
      ))}
      <span className={styles.identityTag}>Mesma base, identidade de cada cliente</span>
    </div>
  );
}

function SceneLog() {
  const lines = [
    { tag: "fix", text: "Bug corrigido no formulário de contato", time: "hoje" },
    { tag: "feat", text: "Nova funcionalidade: agenda online", time: "ontem" },
    { tag: "perf", text: "Otimização de desempenho no celular", time: "3 dias" },
    { tag: "ops", text: "Hospedagem e certificado renovados", time: "1 sem" },
  ];
  return (
    <div className={styles.log} aria-hidden="true">
      <p className={styles.logHead}>
        <span>suporte contínuo</span>
        <span className={styles.logLive}>ativo</span>
      </p>
      <ul>
        {lines.map((l, i) => (
          <li key={l.text} style={{ "--d": `${0.3 + i * 1.1}s` } as React.CSSProperties}>
            <span className={clsx(styles.logTag, styles[`tag_${l.tag}`])}>{l.tag}</span>
            <span className={styles.logText}>{l.text}</span>
            <span className={styles.logTime}>{l.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
