import type { Metadata } from "next";
import { Container, SectionHeader } from "@/components/ui/Layout";
import { ArrowUpRight, Github, Instagram, Mail, MapPin, WhatsApp } from "@/components/ui/Icons";
import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";
import pageStyles from "../pages.module.scss";
import styles from "./contatos.module.scss";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a AG Custom pelo WhatsApp, e-mail ou formulário. Respondemos rápido, direto com quem vai desenvolver o seu projeto.",
  alternates: { canonical: "/contatos" },
};

const channels = [
  {
    label: "WhatsApp",
    value: site.whatsapp.display,
    href: site.whatsapp.href,
    icon: <WhatsApp size={20} />,
    external: true,
    primary: true,
  },
  { label: "E-mail", value: site.email, href: `mailto:${site.email}`, icon: <Mail size={20} /> },
  {
    label: "Instagram",
    value: site.social.instagram.handle,
    href: site.social.instagram.href,
    icon: <Instagram size={20} />,
    external: true,
  },
  {
    label: "GitHub",
    value: site.social.github.handle,
    href: site.social.github.href,
    icon: <Github size={20} />,
    external: true,
  },
];

export default function ContatosPage() {
  return (
    <div className={pageStyles.pageTop}>
      <Container>
        <SectionHeader
          as="h1"
          index="01"
          eyebrow="Contato"
          title={
            <>
              Vamos conversar sobre o seu <span className="accent">projeto</span>.
            </>
          }
          lead="Conte sua ideia ou necessidade. Você fala direto com quem vai desenvolver, sem intermediários."
        />

        <div className={styles.grid}>
          <aside className={styles.channels} aria-label="Canais de contato">
            <ul>
              {channels.map((c, i) => (
                <li key={c.label} data-reveal data-reveal-delay={i * 60}>
                  <a
                    href={c.href}
                    className={c.primary ? `${styles.channel} ${styles.primary}` : styles.channel}
                    data-sheen
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className={styles.channelIcon}>{c.icon}</span>
                    <span className={styles.channelText}>
                      <span className={styles.channelLabel}>{c.label}</span>
                      <span className={styles.channelValue}>{c.value}</span>
                    </span>
                    <ArrowUpRight size={18} className={styles.channelArrow} />
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.location}>
              <MapPin size={16} /> {site.city}, {site.state} · atendemos todo o Brasil
            </p>
          </aside>

          <div className={styles.formCard} data-reveal data-reveal-delay="120">
            <h2 className={styles.formTitle}>Envie uma mensagem</h2>
            <p className={styles.formText}>Respondemos o mais rápido possível pelo e-mail ou telefone informado.</p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
