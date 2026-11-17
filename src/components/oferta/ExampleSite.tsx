import clsx from "clsx";
import type { CSSProperties, ReactNode } from "react";
import type { Segment } from "@/content/oferta";
import styles from "./ExampleSite.module.scss";

type Props = {
  segment: Segment;
  variant?: "desktop" | "phone";
  /** Blocos entram em sequência ("site se montando"). Reinicia quando o componente remonta (use `key`). */
  build?: boolean;
  className?: string;
};

type LayoutProps = { s: Segment; phone: boolean };

/** Ordem de entrada de cada bloco na animação "site se montando". */
const b = (n: number) => ({ "--b": n }) as CSSProperties;

/**
 * Site de exemplo de um negócio fictício, desenhado como uma captura de tela:
 * tudo é medido em unidades do container, então escala igual a uma imagem.
 * Cada segmento tem uma COMPOSIÇÃO própria (não só cores), como um site real daquele ramo.
 * Decorativo (aria-hidden): quem usa descreve o exemplo no texto ao redor.
 */
export function ExampleSite({ segment: s, variant = "desktop", build, className }: Props) {
  const phone = variant === "phone";
  const vars = {
    "--s-bg": s.palette.bg,
    "--s-surface": s.palette.surface,
    "--s-text": s.palette.text,
    "--s-accent": s.palette.accent,
    "--s-art": s.palette.art,
  } as CSSProperties;
  const Layout = layouts[s.id];

  return (
    <div className={clsx(styles.frame, className)} aria-hidden="true">
      <div
        className={clsx(styles.site, phone ? styles.phone : styles.desktop, build && styles.build)}
        data-font={s.font}
        data-layout={s.id}
        style={vars}
      >
        <Layout s={s} phone={phone} />
        <span className={styles.whatsapp} style={b(9)}>
          <WhatsGlyph />
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Restaurante: foto cobrindo o topo, título centralizado, cardápio com preços
// ---------------------------------------------------------------------------
function Restaurante({ s, phone }: LayoutProps) {
  return (
    <div className={styles.restaurante}>
      <header className={styles.rNav} style={b(0)}>
        {phone ? (
          <>
            <Brand s={s} />
            <Burger />
          </>
        ) : (
          <>
            <span className={styles.rLinks}>
              <span>{s.nav[0]}</span>
              <span>{s.nav[1]}</span>
            </span>
            <Brand s={s} />
            <span className={styles.rLinks}>
              <span>{s.nav[2]}</span>
              <span className={styles.outline}>{s.secondary}</span>
            </span>
          </>
        )}
      </header>

      <section className={styles.rHero} style={b(1)}>
        <Art s={s} className={styles.rArt} />
        <div className={styles.rHeroText}>
          <span className={styles.kicker} style={b(2)}>
            {s.eyebrow}
          </span>
          <span className={styles.title} style={b(3)}>
            {s.headline}
          </span>
          {!phone && (
            <span className={styles.sub} style={b(4)}>
              {s.sub}
            </span>
          )}
          <span className={styles.buttons} style={b(4)}>
            <span className={styles.primary}>{s.cta}</span>
            {!phone && <span className={styles.glassBtn}>{s.secondary}</span>}
          </span>
        </div>
        <Rating s={s} className={styles.rRating} />
      </section>

      <section className={styles.rMenu}>
        <span className={styles.label} style={b(5)}>
          Cardápio da semana
        </span>
        <span className={styles.rMenuList}>
          {s.services.slice(0, phone ? 2 : 3).map((item, i) => (
            <span key={item.title} className={styles.rMenuItem} style={b(6 + i)}>
              <strong>{item.title}</strong>
              <i />
              <span>{item.meta.replace("a partir de ", "")}</span>
            </span>
          ))}
        </span>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Clínica: claro, texto + foto, barra de agendamento e cards de especialidades
// ---------------------------------------------------------------------------
function Clinica({ s, phone }: LayoutProps) {
  return (
    <div className={styles.clinica}>
      <Nav s={s} phone={phone} />

      <section className={styles.split}>
        <div className={styles.copy}>
          <span className={styles.pill} style={b(1)}>
            {s.eyebrow}
          </span>
          <span className={styles.title} style={b(2)}>
            {s.headline}
          </span>
          <span className={styles.sub} style={b(3)}>
            {s.sub}
          </span>
        </div>
        <Art s={s} className={styles.cArt}>
          <span className={styles.cBadge} style={b(5)}>
            <i />
            Agenda aberta hoje
          </span>
          <Rating s={s} className={styles.cRating} />
        </Art>
      </section>

      <section className={styles.cBooking} style={b(4)}>
        <span className={styles.field}>
          <small>Especialidade</small>
          {s.services[0].title} ▾
        </span>
        <span className={styles.field}>
          <small>Quando</small>
          Amanhã, 9h ▾
        </span>
        <span className={styles.primary}>{s.cta}</span>
      </section>

      {!phone && (
        <section className={styles.cCards}>
          {s.services.map((item, i) => (
            <span key={item.title} className={styles.cCard} style={b(6 + i)}>
              <span className={styles.cIcon}>
                <SegmentIcon icon={s.icon} />
              </span>
              <strong>{item.title}</strong>
              <span>{item.meta}</span>
            </span>
          ))}
        </section>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Advocacia: editorial, só tipografia, áreas numeradas e fatos em linha
// ---------------------------------------------------------------------------
function Advocacia({ s, phone }: LayoutProps) {
  return (
    <div className={styles.advocacia}>
      <header className={styles.aNav} style={b(0)}>
        <Brand s={s} />
        {phone ? (
          <Burger />
        ) : (
          <span className={styles.links}>
            {s.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        )}
      </header>

      <section className={styles.aHero}>
        <div className={styles.copy}>
          <span className={styles.aKicker} style={b(1)}>
            {s.eyebrow}
          </span>
          <span className={styles.title} style={b(2)}>
            {s.headline}
          </span>
          <span className={styles.aRule} style={b(3)} />
          <span className={styles.sub} style={b(3)}>
            {s.sub}
          </span>
          <span className={styles.aLink} style={b(4)}>
            {s.cta} →
          </span>
        </div>

        <ol className={styles.aAreas}>
          {s.services.map((item, i) => (
            <li key={item.title} style={b(5 + i)}>
              <span className={styles.aNum}>0{i + 1}</span>
              <span>
                <strong>{item.title}</strong>
                <span>{item.meta}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {!phone && (
        <section className={styles.aFacts} style={b(8)}>
          <span>★ {s.rating}</span>
          {s.info.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </section>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Salão: foto em arco, galeria e preços em etiquetas
// ---------------------------------------------------------------------------
function Salao({ s, phone }: LayoutProps) {
  return (
    <div className={styles.salao}>
      <Nav s={s} phone={phone} />

      <section className={styles.sHero}>
        <Art s={s} className={styles.sArch} />
        <div className={styles.copy}>
          <span className={styles.kicker} style={b(1)}>
            {s.eyebrow}
          </span>
          <span className={styles.title} style={b(2)}>
            {s.headline}
          </span>
          {!phone && (
            <span className={styles.sub} style={b(3)}>
              {s.sub}
            </span>
          )}
          <span className={styles.sPrices} style={b(4)}>
            {s.services.slice(0, phone ? 2 : 3).map((item) => (
              <span key={item.title}>
                {item.title} <em>{item.meta.replace("a partir de ", "")}</em>
              </span>
            ))}
          </span>
          <span className={styles.primary} style={b(5)}>
            {s.cta}
          </span>
        </div>
      </section>

      <section className={styles.sGallery}>
        {[0, 1, 2, 3].slice(0, phone ? 3 : 4).map((i) => (
          <span key={i} className={styles.sTile} style={{ ...b(6 + i), "--tile": i } as CSSProperties} />
        ))}
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Loja: faixa de promoção, busca e carrinho, banner e grade de produtos
// ---------------------------------------------------------------------------
function Loja({ s, phone }: LayoutProps) {
  return (
    <div className={styles.loja}>
      <span className={styles.lPromo} style={b(0)}>
        Entrega grátis na Grande Vitória
      </span>
      <header className={styles.lNav} style={b(0)}>
        <Brand s={s} />
        {!phone && (
          <span className={styles.links}>
            {s.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        )}
        {!phone && <span className={styles.lSearch}>Buscar produtos</span>}
        <span className={styles.lCart}>
          <CartGlyph />
          <i>2</i>
        </span>
      </header>

      <section className={styles.lBanner} style={b(1)}>
        <div className={styles.copy}>
          <span className={styles.kicker} style={b(2)}>
            Coleção nova
          </span>
          <span className={styles.title} style={b(3)}>
            {s.headline}
          </span>
          <span className={styles.primary} style={b(4)}>
            {s.cta}
          </span>
        </div>
        <span className={styles.lBannerArt}>
          <SegmentIcon icon={s.icon} className={styles.icon} />
        </span>
      </section>

      <section className={styles.lGrid}>
        {s.services.slice(0, phone ? 2 : 3).map((item, i) => (
          <span key={item.title} className={styles.lProduct} style={b(5 + i)}>
            <span className={styles.lThumb}>
              <SegmentIcon icon={s.icon} className={styles.lThumbIcon} />
            </span>
            <strong>{item.title}</strong>
            <span className={styles.lPrice}>
              {item.meta.replace("a partir de ", "")}
              <i>+</i>
            </span>
          </span>
        ))}
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Serviços: título forte com checklist e formulário de orçamento ao lado
// ---------------------------------------------------------------------------
function Servicos({ s, phone }: LayoutProps) {
  return (
    <div className={styles.servicos}>
      <Nav s={s} phone={phone} />

      <section className={styles.split}>
        <div className={styles.copy}>
          <span className={styles.vTag} style={b(1)}>
            {s.eyebrow}
          </span>
          <span className={styles.title} style={b(2)}>
            {s.headline}
          </span>
          <ul className={styles.vChecks}>
            {s.services.map((item, i) => (
              <li key={item.title} style={b(3 + i)}>
                <i>✓</i>
                {item.title} {!phone && <span>· {item.meta}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.vForm} style={b(4)}>
          <strong>Peça seu orçamento</strong>
          <span className={styles.vInput}>Seu nome</span>
          <span className={styles.vInput}>WhatsApp</span>
          {!phone && <span className={styles.vInput}>Qual serviço? ▾</span>}
          <span className={styles.primary}>{s.cta}</span>
          <small>Resposta no mesmo dia</small>
        </div>
      </section>

      {!phone && (
        <section className={styles.vStrip} style={b(8)}>
          <span>Equipe própria</span>
          <span>Garantia nos serviços</span>
          <span>Orçamento sem compromisso</span>
        </section>
      )}
    </div>
  );
}

const layouts: Record<Segment["id"], (p: LayoutProps) => ReactNode> = {
  restaurante: Restaurante,
  clinica: Clinica,
  advocacia: Advocacia,
  salao: Salao,
  loja: Loja,
  servicos: Servicos,
};

// ---------------------------------------------------------------------------
// Peças comuns
// ---------------------------------------------------------------------------
function Brand({ s }: { s: Segment }) {
  const initials = s.business
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span className={styles.brand}>
      <span className={styles.mark}>{initials}</span>
      {s.business}
    </span>
  );
}

function Nav({ s, phone }: LayoutProps) {
  return (
    <header className={styles.nav} style={b(0)}>
      <Brand s={s} />
      {phone ? (
        <Burger />
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
  );
}

function Burger() {
  return (
    <span className={styles.burger}>
      <i />
      <i />
    </span>
  );
}

function Art({ s, className, children }: { s: Segment; className?: string; children?: ReactNode }) {
  return (
    <span className={clsx(styles.art, className)} style={b(2)}>
      <span className={styles.orb} />
      <SegmentIcon icon={s.icon} className={styles.icon} />
      {children}
    </span>
  );
}

function Rating({ s, className }: { s: Segment; className?: string }) {
  return (
    <span className={clsx(styles.rating, className)} style={b(5)}>
      <span className={styles.stars}>★★★★★</span>
      {s.rating}
    </span>
  );
}

function WhatsGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1Z" />
    </svg>
  );
}

function CartGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4h2l2.4 11h10.2L20 7H6.2" />
      <circle cx="9" cy="19.5" r="1.3" />
      <circle cx="17" cy="19.5" r="1.3" />
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
