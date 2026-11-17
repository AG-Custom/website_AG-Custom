import Link from "next/link";
import clsx from "clsx";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Meta } from "@/components/ui/Layout";
import { ArrowUpRight } from "@/components/ui/Icons";
import type { Project } from "@/content/projects";
import styles from "./ProjectShowcase.module.scss";

type Props = {
  projects: Project[];
  headingLevel?: "h2" | "h3";
};

const layouts = ["left", "right", "wide"] as const;

/** Lista editorial de projetos com composições alternadas. */
export function ProjectShowcase({ projects, headingLevel: Heading = "h3" }: Props) {
  return (
    <ol className={styles.list}>
      {projects.map((project, i) => {
        const layout = layouts[i % layouts.length];
        const href = `/projetos/${project.slug}`;
        return (
          <li key={project.slug} className={clsx(styles.item, styles[layout])}>
            <article className={styles.article}>
              <Link href={href} className={styles.media} tabIndex={-1} aria-hidden="true" data-reveal>
                <MediaFrame
                  src={project.images.desktop}
                  alt=""
                  url={project.url}
                  sizes={layout === "wide" ? "100vw" : "(min-width: 1024px) 66vw, 100vw"}
                  className={styles.browser}
                  interactive
                />
                <MediaFrame
                  src={project.images.mobile}
                  alt=""
                  device="phone"
                  sizes="180px"
                  className={styles.phone}
                />
              </Link>

              <div className={styles.text} data-reveal data-reveal-delay="120">
                <p className={styles.index}>
                  <span>{String(i + 1).padStart(2, "0")}</span> {project.category}
                </p>
                <Heading className={styles.name}>
                  <Link href={href} className={styles.titleLink}>
                    {project.name}
                  </Link>
                </Heading>
                <p className={styles.tagline}>{project.tagline}</p>
                <Meta items={[project.year, ...project.stack.slice(0, 3)]} />
                <span className={styles.more} aria-hidden="true">
                  Ver estudo de caso <ArrowUpRight size={16} />
                </span>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
