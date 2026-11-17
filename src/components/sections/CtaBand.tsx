import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { site } from "@/content/site";
import styles from "./CtaBand.module.scss";

type Props = {
  title?: React.ReactNode;
  text?: string;
};

export function CtaBand({
  title = (
    <>
      Tem uma ideia? <span className="accent">Vamos tirar do papel.</span>
    </>
  ),
  text = "Conte o que você precisa. Respondemos rápido e sem compromisso, direto com quem vai desenvolver.",
}: Props) {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <div className={styles.glow} aria-hidden="true" />
      <Container>
        <div className={styles.inner} data-reveal>
          <p className={styles.eyebrow}>Próximo passo</p>
          <h2 id="cta-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            <Button href={site.whatsapp.href} external size="lg" icon={<WhatsApp size={18} />}>
              Chamar no WhatsApp
            </Button>
            <Button href="/contatos" variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
              Enviar uma mensagem
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
