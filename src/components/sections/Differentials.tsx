import { Container, Section, SectionHeader } from "@/components/ui/Layout";
import { process } from "@/content/home";
import { DifferentialsShowcase } from "./DifferentialsShowcase";
import styles from "./Differentials.module.scss";

export function Differentials() {
  return (
    <Section tone="deep" labelledBy="diferenciais-title">
      <Container>
        <SectionHeader
          index="04"
          eyebrow="Por que a AG Custom"
          id="diferenciais-title"
          title={
            <>
              Tecnologia séria, conversa <span className="accent">direta</span>.
            </>
          }
        />

        <DifferentialsShowcase />
      </Container>
    </Section>
  );
}

export function Process() {
  return (
    <Section labelledBy="processo-title">
      <Container>
        <SectionHeader
          index="05"
          eyebrow="Como funciona"
          id="processo-title"
          title="Da ideia ao ar, sem complicação."
          lead="Um processo simples e transparente. Você sabe o que vai acontecer em cada etapa."
        />

        <ol className={styles.steps}>
          {process.map((step, i) => (
            <li key={step.title} className={styles.step} data-reveal data-reveal-delay={i * 100}>
              <span className={styles.stepNum}>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
