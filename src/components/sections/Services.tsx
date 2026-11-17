import Link from "next/link";
import { Container, Section, SectionHeader } from "@/components/ui/Layout";
import { ArrowUpRight, Cloud, Layers, Monitor, Smartphone, Wrench } from "@/components/ui/Icons";
import { services } from "@/content/home";
import styles from "./Services.module.scss";

const icons = {
  sites: Monitor,
  apps: Smartphone,
  sistemas: Layers,
  manutencao: Wrench,
  hospedagem: Cloud,
} as const;

/** Serviços em grid "bento": cards de vidro clicáveis (levam ao contato). */
export function Services() {
  return (
    <Section id="servicos" labelledBy="servicos-title">
      <Container>
        <SectionHeader
          index="03"
          eyebrow="Serviços"
          id="servicos-title"
          title={
            <>
              Do primeiro clique à <span className="accent">evolução</span> contínua.
            </>
          }
          lead="Para qualquer segmento: se o seu negócio precisa estar no digital, construímos a solução e cuidamos dela depois."
        />

        <ul className={styles.grid}>
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <li key={service.title} className={styles.cell} data-reveal data-reveal-delay={i * 70}>
                <Link href="/contatos" className={styles.card} data-sheen>
                  <span className={styles.top}>
                    <span className={styles.icon}>
                      <Icon size={22} />
                    </span>
                    <span className={styles.corner}>
                      <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                      <span className={styles.more}>
                        Orçamento <ArrowUpRight size={14} />
                      </span>
                    </span>
                  </span>
                  <span className={styles.title}>{service.title}</span>
                  <span className={styles.description}>{service.description}</span>
                  <span className={styles.items}>
                    {service.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
