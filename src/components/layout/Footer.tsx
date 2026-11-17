import Link from "next/link";
import { nav, site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Layout";
import { Github, Instagram, Mail, MapPin, WhatsApp } from "@/components/ui/Icons";
import styles from "./Footer.module.scss";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand} aria-label="AG Custom — página inicial">
              <Logo size={30} title="" />
            </Link>
            <p className={styles.tagline}>
              Sites, aplicativos e sistemas sob medida.
              <br />
              Digital, com personalidade.
            </p>
          </div>

          <nav aria-label="Rodapé" className={styles.col}>
            <p className={styles.colTitle}>Navegação</p>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <p className={styles.colTitle}>Contato</p>
            <ul>
              <li>
                <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                  <WhatsApp size={16} /> {site.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>
                  <Mail size={16} /> {site.email}
                </a>
              </li>
              <li>
                <span>
                  <MapPin size={16} /> {site.city}, {site.state}
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Redes</p>
            <ul>
              <li>
                <a href={site.social.instagram.href} target="_blank" rel="noopener noreferrer">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href={site.social.github.href} target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p className={styles.coords} aria-hidden="true">
            20.3194° S · 40.3378° W
          </p>
        </div>
      </Container>
    </footer>
  );
}
