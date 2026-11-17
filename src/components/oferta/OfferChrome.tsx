import Link from "next/link";
import { Container } from "@/components/ui/Layout";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";
import { oferta } from "@/content/oferta";
import { WhatsAppCta } from "./WhatsAppCta";
import styles from "./OfferChrome.module.scss";

/** Header mínimo da landing page: só marca + WhatsApp. Sem menu, para manter um único objetivo. */
export function OfferHeader() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <a href="#topo" className={styles.brand} aria-label={`${site.name}: voltar ao topo`}>
            <Logo size={22} title={site.name} />
            <span className={styles.plan}>{oferta.planName}</span>
          </a>
          <WhatsAppCta placement="header" size="md" variant="secondary" icon="whatsapp" className={styles.headerCta}>
            WhatsApp
          </WhatsAppCta>
        </div>
      </Container>
    </header>
  );
}

/** Rodapé mínimo: quem somos, onde estamos e como falar com a gente (sinais de confiança). */
export function OfferFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerInner}>
        <p>
          <strong>{site.name}</strong> · {site.city}/{site.state} · WhatsApp {site.whatsapp.display}
        </p>
        <p className={styles.footerMeta}>
          © {year} {site.name}. Sites, aplicativos e sistemas sob medida.{" "}
          <Link href="/">Conheça a AG Custom</Link>
        </p>
      </Container>
    </footer>
  );
}
