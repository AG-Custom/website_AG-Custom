import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Layout";
import { ArrowRight } from "@/components/ui/Icons";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Services } from "@/components/sections/Services";
import { Differentials, Process } from "@/components/sections/Differentials";
import { About } from "@/components/sections/About";
import { FaqList } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { featuredProjects, projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />

      <Section id="projetos" labelledBy="projetos-title">
        <Container>
          <SectionHeader
            index="02"
            eyebrow="Projetos"
            id="projetos-title"
            title={
              <>
                Trabalho real, <span className="accent">em produção</span>.
              </>
            }
            lead="Sistemas, plataformas e sites que estão no ar e fazem parte da rotina dos nossos clientes."
            aside={
              <Button href="/projetos" variant="ghost" icon={<ArrowRight size={16} />}>
                Todos os {projects.length} projetos
              </Button>
            }
          />
          <ProjectShowcase projects={featuredProjects} />
        </Container>
      </Section>

      <Services />
      <Differentials />
      <Process />
      <About />

      <Section labelledBy="faq-title">
        <Container size="narrow">
          <SectionHeader
            index="07"
            eyebrow="Perguntas frequentes"
            id="faq-title"
            title="Antes de começar, talvez você queira saber."
          />
          <FaqList limit={4} />
          <div style={{ marginTop: "var(--space-8)" }}>
            <Button href="/faq" variant="ghost" icon={<ArrowRight size={16} />}>
              Ver todas as perguntas
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
