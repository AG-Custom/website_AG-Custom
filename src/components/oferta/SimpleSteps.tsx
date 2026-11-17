import { oferta } from "@/content/oferta";
import { ArrowRight, CheckCircle, Globe, WhatsApp } from "@/components/ui/Icons";
import { WhatsAppCta } from "./WhatsAppCta";
import styles from "./SimpleSteps.module.scss";

const icons = {
  whatsapp: WhatsApp,
  approve: CheckCircle,
  live: Globe,
} as const;

/**
 * "Como funciona" para quem não é da área: 3 passos grandes, uma frase cada,
 * quando acontece e o destaque "só paga depois de aprovar". Dá para entender só batendo o olho.
 */
export function SimpleSteps() {
  return (
    <div className={styles.wrap}>
      <ol className={styles.steps}>
        {oferta.steps.map((step, i) => {
          const Icon = icons[step.icon];
          const last = i === oferta.steps.length - 1;
          return (
            <li key={step.title} className={styles.step} data-reveal data-reveal-delay={i * 140}>
              <div className={styles.top}>
                <span className={styles.icon}>
                  <Icon size={26} />
                </span>
                <span className={styles.when}>{step.when}</span>
              </div>
              <p className={styles.number}>Passo {i + 1}</p>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
              {!last && (
                <span className={styles.arrow} aria-hidden="true">
                  <ArrowRight size={18} />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <div className={styles.note} data-reveal data-reveal-delay="420">
        <span className={styles.noteIcon} aria-hidden="true">
          <CheckCircle size={28} />
        </span>
        <p className={styles.noteText}>
          <strong>{oferta.stepsNote.title}</strong> {oferta.stepsNote.text}
        </p>
        <WhatsAppCta placement="como-funciona" size="md" icon="whatsapp" className={styles.noteCta}>
          Começar agora
        </WhatsAppCta>
      </div>
    </div>
  );
}
