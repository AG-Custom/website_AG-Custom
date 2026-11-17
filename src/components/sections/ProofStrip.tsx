import { Container } from "@/components/ui/Layout";
import { projects } from "@/content/projects";
import { stats } from "@/content/site";
import styles from "./ProofStrip.module.scss";

/** Números reais + faixa com os clientes atendidos. */
export function ProofStrip() {
  const names = projects.map((p) => p.name);

  return (
    <section className={styles.strip} aria-label="A AG Custom em números">
      <Container>
        <dl className={styles.stats}>
          {stats.map((s, i) => (
            <div key={s.label} className={styles.stat} data-reveal data-reveal-delay={i * 80}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <div className={styles.marquee} aria-label="Clientes atendidos">
        <ul className={styles.track}>
          {[...names, ...names].map((name, i) => (
            <li key={`${name}-${i}`} aria-hidden={i >= names.length ? true : undefined}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
