import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { ArrowRight } from "@/components/ui/Icons";
import styles from "./pages.module.scss";

export default function NotFound() {
  return (
    <div className={styles.pageTop}>
      <Container size="narrow">
        <p style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", marginBottom: "var(--space-6)" }}>
          Erro 404
        </p>
        <h1 style={{ fontSize: "var(--text-h1)", lineHeight: 1.05, letterSpacing: "var(--tracking-tight)" }}>
          Esta página não existe (ainda).
        </h1>
        <p style={{ color: "var(--color-text-muted)", margin: "var(--space-6) 0 var(--space-8)" }}>
          O endereço pode ter mudado. Que tal voltar ao início ou ver nossos projetos?
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
          <Button href="/">Voltar ao início</Button>
          <Button href="/projetos" variant="secondary" icon={<ArrowRight size={16} />}>
            Ver projetos
          </Button>
        </div>
      </Container>
    </div>
  );
}
