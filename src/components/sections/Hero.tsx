import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";
import { CursorField } from "./CursorField";
import styles from "./Hero.module.scss";

const highlights = ["Site no ar em até 24h", "Fale direto com quem desenvolve", "Manutenção contínua"];

export function Hero() {
  const desktop = getProject("vae-mobility")!;
  const phone = getProject("psicologa-amanda-rudio")!;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <CursorField />
      <div className={styles.glow} aria-hidden="true" />

      <Container className={styles.inner}>
        <p className={styles.eyebrow} data-enter>
          <span className={styles.dot} aria-hidden="true" />
          Estúdio digital · {site.city}, {site.state}
        </p>

        <h1 id="hero-title" className={styles.title} data-enter style={{ "--enter": 1 } as React.CSSProperties}>
          Sites, aplicativos e sistemas <span className="accent">sob&nbsp;medida.</span>
        </h1>

        <div className={styles.grid}>
          <div className={styles.copy} data-enter style={{ "--enter": 2 } as React.CSSProperties}>
            <p className={styles.lead}>
              Transformamos ideias e necessidades de negócio em soluções digitais funcionais,
              estratégicas e com identidade própria. Você cuida do negócio; nós cuidamos de toda a
              parte técnica, da ideia à entrega.
            </p>

            <div className={styles.actions}>
              <Button href="/contatos" size="lg" icon={<ArrowUpRight size={18} />}>
                Começar um projeto
              </Button>
              <Button href="/projetos" size="lg" variant="secondary" icon={<ArrowRight size={18} />}>
                Ver projetos
              </Button>
            </div>

            <ul className={styles.highlights}>
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className={styles.visual} data-enter style={{ "--enter": 3 } as React.CSSProperties}>
            <MediaFrame
              src={desktop.images.desktop}
              alt={desktop.images.alt}
              url={desktop.url}
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className={styles.browser}
            />
            <MediaFrame
              src={phone.images.mobile}
              alt={phone.images.alt}
              device="phone"
              sizes="200px"
              className={styles.phone}
            />
            <p className={styles.caption}>
              <span>Em produção</span> {desktop.name} · {phone.name}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
