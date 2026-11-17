import { Container, Section } from "@/components/ui/Layout";
import { about } from "@/content/home";
import { site, stats } from "@/content/site";
import { AboutTabs } from "./AboutTabs";
import styles from "./About.module.scss";

/** Sobre: introdução curta à esquerda + painel de vidro com abas à direita. */
export function About() {
  const [intro, ...history] = about.paragraphs;

  const tabs = [
    {
      id: "historia",
      label: "História",
      content: history.map((p, i) => <p key={i}>{p}</p>),
    },
    ...about.pillars.map((pillar) => ({
      id: pillar.label.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(), // sem acentos
      label: pillar.label,
      content: <p className={styles.statement}>{pillar.text}</p>,
    })),
    {
      id: "valores",
      label: "Valores",
      content: (
        <dl className={styles.values}>
          {about.values.map((v) => (
            <div key={v.label}>
              <dt>{v.label}</dt>
              <dd>{v.text}</dd>
            </div>
          ))}
        </dl>
      ),
    },
  ];

  return (
    <Section id="sobre" tone="deep" labelledBy="sobre-title">
      <Container>
        <div className={styles.grid}>
          <header className={styles.header} data-reveal>
            <p className={styles.eyebrow}>
              <span>06</span> / Sobre
            </p>
            <h2 id="sobre-title" className={styles.title}>
              {about.title}
            </h2>
            <p className={styles.intro}>{intro}</p>
            <ul className={styles.facts}>
              <li>
                <strong>{site.foundedYear}</strong> fundação
              </li>
              <li>
                <strong>{stats[2].value}</strong> anos de experiência
              </li>
              <li>
                <strong>
                  {site.city}, {site.state}
                </strong>{" "}
                atendemos todo o Brasil
              </li>
            </ul>
          </header>

          <div data-reveal data-reveal-delay="120">
            <AboutTabs tabs={tabs} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
