import { faq } from "@/content/home";
import { Plus } from "@/components/ui/Icons";
import styles from "./Faq.module.scss";

type Props = { limit?: number };

/** Perguntas frequentes com <details> nativo (acessível e sem JS). */
export function FaqList({ limit }: Props) {
  const items = limit ? faq.slice(0, limit) : faq;
  return (
    <div className={styles.list}>
      {items.map((item, i) => (
        <details key={item.question} className={styles.item} data-reveal data-reveal-delay={i * 60}>
          <summary className={styles.summary}>
            <span>{item.question}</span>
            <Plus size={20} className={styles.icon} />
          </summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
