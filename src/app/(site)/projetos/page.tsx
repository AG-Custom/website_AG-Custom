import type { Metadata } from "next";
import { Container, SectionHeader } from "@/components/ui/Layout";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { CtaBand } from "@/components/sections/CtaBand";
import { projects } from "@/content/projects";
import styles from "../pages.module.scss";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Sistemas web, plataformas SaaS e sites desenvolvidos pela AG Custom: AgroPulse, AG Clinical, VAE Mobility e mais.",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
  return (
    <>
      <div className={styles.pageTop}>
        <Container>
          <SectionHeader
            as="h1"
            index="01"
            eyebrow="Projetos"
            title={
              <>
                Prova, <span className="accent">não promessa</span>.
              </>
            }
            lead="Cada projeto nasceu de uma necessidade real de negócio. Veja o que construímos e como cada solução funciona."
          />
          <ProjectShowcase projects={projects} headingLevel="h2" />
        </Container>
      </div>
      <CtaBand />
    </>
  );
}
