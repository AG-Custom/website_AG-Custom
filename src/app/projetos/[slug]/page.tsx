import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container, Section, Tag } from "@/components/ui/Layout";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { CtaBand } from "@/components/sections/CtaBand";
import { getNextProject, getProject, projects } from "@/content/projects";
import styles from "./case.module.scss";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.category}`,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: { images: [{ url: project.images.desktop, width: 2400, height: 1500 }] },
  };
}

export default async function CasePage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(project.slug);
  const index = projects.findIndex((p) => p.slug === project.slug) + 1;

  return (
    <>
      <article>
        <header className={styles.top}>
          <Container>
            <Link href="/projetos" className={styles.back}>
              <ArrowRight size={16} className={styles.backIcon} /> Todos os projetos
            </Link>

            <div className={styles.headGrid}>
              <div data-enter>
                <p className={styles.eyebrow}>
                  <span>{String(index).padStart(2, "0")}</span> / {project.category}
                </p>
                <h1 className={styles.title}>{project.name}</h1>
              </div>
              <p className={styles.lead} data-enter style={{ "--enter": 1 } as React.CSSProperties}>
                {project.tagline}
              </p>
            </div>

            <dl className={styles.facts} data-enter style={{ "--enter": 2 } as React.CSSProperties}>
              <div>
                <dt>Tipo</dt>
                <dd>{project.kind}</dd>
              </div>
              <div>
                <dt>Ano</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Papel da AG Custom</dt>
                <dd>Design e desenvolvimento</dd>
              </div>
              <div>
                <dt>Online</dt>
                <dd>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.extLink}>
                    {project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                    <ArrowUpRight size={14} />
                  </a>
                </dd>
              </div>
            </dl>
          </Container>
        </header>

        <Container size="wide">
          <div data-enter style={{ "--enter": 3 } as React.CSSProperties}>
            <MediaFrame
              src={project.images.desktop}
              alt={project.images.alt}
              url={project.url}
              priority
              sizes="(min-width: 1536px) 1536px, 100vw"
            />
          </div>
        </Container>

        <Section>
          <Container>
            <div className={styles.body}>
              <section aria-labelledby="visao-geral" data-reveal>
                <h2 id="visao-geral" className={styles.label}>
                  Visão geral
                </h2>
                <p className={styles.summary}>{project.summary}</p>
              </section>

              <section aria-labelledby="funcionalidades" data-reveal data-reveal-delay="120">
                <h2 id="funcionalidades" className={styles.label}>
                  Funcionalidades
                </h2>
                <ol className={styles.features}>
                  {project.features.map((f, i) => (
                    <li key={f}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {f}
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <div className={styles.split}>
              <div className={styles.phoneWrap} data-reveal>
                <MediaFrame
                  src={project.images.mobile}
                  alt={`${project.name} no celular`}
                  device="phone"
                  sizes="320px"
                />
              </div>
              <div className={styles.stack} data-reveal data-reveal-delay="120">
                <h2 className={styles.label}>Tecnologias</h2>
                <ul className={styles.tags}>
                  {project.stack.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
                <p className={styles.note}>
                  Responsivo de verdade: pensado para funcionar tão bem no celular quanto no computador.
                </p>
                <Button href={project.url} external variant="secondary" icon={<ArrowUpRight size={16} />}>
                  Visitar {project.name}
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </article>

      <nav aria-label="Próximo projeto" className={styles.next}>
        <Container>
          <Link href={`/projetos/${next.slug}`} className={styles.nextLink}>
            <span className={styles.nextLabel}>Próximo projeto</span>
            <span className={styles.nextName}>
              {next.name} <ArrowRight size={32} />
            </span>
            <span className={styles.nextThumb} aria-hidden="true">
              <Image src={next.images.desktop} alt="" fill sizes="320px" />
            </span>
          </Link>
        </Container>
      </nav>

      <CtaBand
        title={
          <>
            Quer um projeto <span className="accent">como este</span>?
          </>
        }
      />
    </>
  );
}
