import { faq } from "@/content/home";
import { Plus } from "@/components/ui/Icons";
import styles from "./Faq.module.scss";

type FaqItem = { readonly question: string; readonly answer: string };
type Props = { limit?: number; items?: readonly FaqItem[] };

/** Perguntas frequentes com <details> nativo (acessível e sem JS). */
export function FaqList({ limit, items: source = faq }: Props) {
  const items = limit ? source.slice(0, limit) : source;
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
