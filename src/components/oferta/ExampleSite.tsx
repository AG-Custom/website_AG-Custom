import clsx from "clsx";
import type { CSSProperties } from "react";
import type { Segment } from "@/content/oferta";
import styles from "./ExampleSite.module.scss";

type Props = {
  segment: Segment;
  variant?: "desktop" | "phone";
  /** Blocos entram em sequência ("site se montando"). Reinicia quando o componente remonta (use `key`). */
  build?: boolean;
  className?: string;
};

const b = (n: number) => ({ "--b": n }) as CSSProperties;

/**
 * Site de exemplo de um negócio fictício, desenhado como uma captura de tela:
 * tudo é medido em unidades do container, então escala igual a uma imagem.
 * Decorativo (aria-hidden): quem usa descreve o exemplo no texto ao redor.
 */
export function ExampleSite({ segment: s, variant = "desktop", build, className }: Props) {
  const vars = {
    "--s-bg": s.palette.bg,
    "--s-surface": s.palette.surface,
    "--s-text": s.palette.text,
    "--s-accent": s.palette.accent,
    "--s-art": s.palette.art,
  } as CSSProperties;
  const phone = variant === "phone";
  const initials = s.business
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className={clsx(styles.frame, className)} aria-hidden="true">
      <div
        className={clsx(styles.site, phone ? styles.phone : styles.desktop, build && styles.build)}
        data-font={s.font}
        style={vars}
      >
        <header className={styles.nav} style={b(0)}>
          <span className={styles.brand}>
            <span className={styles.mark}>{initials}</span>
            {s.business}
          </span>
          {phone ? (
            <span className={styles.burger}>
              <i />
              <i />
            </span>
          ) : (
            <>
              <span className={styles.links}>
                {s.nav.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </span>
              <span className={styles.navCta}>{s.cta}</span>
            </>
          )}
        </header>

        <section className={styles.hero}>
          <div className={styles.copy}>
            <span className={styles.eyebrow} style={b(1)}>
              {s.eyebrow}
            </span>
            <span className={styles.title} style={b(2)}>
              {s.headline}
            </span>
            <span className={styles.sub} style={b(3)}>
              {s.sub}
            </span>
            <span className={styles.buttons} style={b(4)}>
              <span className={styles.primary}>{s.cta}</span>
              {!phone && <span className={styles.secondary}>{s.secondary}</span>}
            </span>
            {!phone && (
              <span className={styles.info} style={b(5)}>
                {s.info.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </span>
            )}
          </div>

          <div className={styles.art} style={b(2)}>
            <span className={styles.orb} />
            <SegmentIcon icon={s.icon} className={styles.icon} />
            <span className={styles.rating} style={b(5)}>
              <span className={styles.stars}>★★★★★</span>
              {s.rating}
            </span>
            {!phone && (
              <span className={styles.chat} style={b(6)}>
                <i />
                Respondemos pelo WhatsApp
              </span>
            )}
          </div>
        </section>

        <section className={styles.services}>
          {s.services.slice(0, phone ? 2 : 3).map((item, i) => (
            <span key={item.title} className={styles.card} style={b(6 + i)}>
              <span className={styles.dot} />
              <strong>{item.title}</strong>
              <span>{item.meta}</span>
            </span>
          ))}
        </section>

        <span className={styles.whatsapp} style={b(9)}>
          <WhatsGlyph />
        </span>
      </div>
    </div>
  );
}

function WhatsGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1Z" />
    </svg>
  );
}

const iconPaths: Record<Segment["icon"], string[]> = {
  food: ["M6 3v7a2 2 0 0 0 4 0V3", "M8 3v18", "M17 21V3c-2 1.5-3 4-3 7s1.3 4 3 4"],
  health: [
    "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z",
    "M7.5 11h2.5l1-2 2 4 1-2h2.5",
  ],
  law: ["M12 3v18", "M7 21h10", "M5 7h14", "M5 7l-3 6a3 3 0 0 0 6 0Z", "M19 7l-3 6a3 3 0 0 0 6 0Z"],
  beauty: ["M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", "M8.2 7.8 20 19", "M8.2 16.2 20 5"],
  shop: ["M5 8h14l-1.2 12H6.2Z", "M9 8V6a3 3 0 0 1 6 0v2"],
  tools: ["M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4Z"],
};

function SegmentIcon({ icon, className }: { icon: Segment["icon"]; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {iconPaths[icon].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
