import clsx from "clsx";
import type { ElementType, ReactNode } from "react";
import styles from "./Layout.module.scss";

type ContainerProps = {
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
  className?: string;
  as?: ElementType;
};

export function Container({ children, size = "default", className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={clsx(styles.container, styles[size], className)}>{children}</Tag>;
}

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: "default" | "deep" | "raised";
  className?: string;
  labelledBy?: string;
};

/** Seção com ritmo vertical padrão (--section-y) e tom de fundo. */
export function Section({ children, id, tone = "default", className, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={clsx(styles.section, styles[tone], className)}>
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
  aside?: ReactNode;
  className?: string;
};

/** Cabeçalho padrão de seção: "02 / Projetos" + título + lead opcional. */
export function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
  id,
  as: Heading = "h2",
  aside,
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={clsx(styles.header, className)}
      {...(Heading === "h1" ? { "data-enter": "" } : { "data-reveal": "" })}
    >
      <div className={styles.headerMain}>
        <p className={styles.eyebrow}>
          {index && <span className={styles.index}>{index}</span>}
          {index && <span aria-hidden="true">/</span>}
          <span>{eyebrow}</span>
        </p>
        <Heading id={id} className={Heading === "h1" ? styles.titleXl : styles.title}>
          {title}
        </Heading>
      </div>
      {(lead || aside) && (
        <div className={styles.headerAside}>
          {lead && <p className={styles.lead}>{lead}</p>}
          {aside}
        </div>
      )}
    </header>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={clsx(styles.eyebrow, className)}>{children}</p>;
}

export function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "accent" }) {
  return <span className={clsx(styles.tag, tone === "accent" && styles.tagAccent)}>{children}</span>;
}

/** Linha de metadados técnicos: "Sistema web · 2026 · Vue 3" */
export function Meta({ items, className }: { items: (string | number)[]; className?: string }) {
  return (
    <p className={clsx(styles.meta, className)}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`}>{item}</span>
      ))}
    </p>
  );
}
