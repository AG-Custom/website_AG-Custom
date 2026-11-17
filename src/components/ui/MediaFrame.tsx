import Image from "next/image";
import clsx from "clsx";
import styles from "./MediaFrame.module.scss";

type MediaFrameProps = {
  src: string;
  alt: string;
  device?: "browser" | "phone";
  /** Texto exibido na barra de endereço (device="browser") */
  url?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Superfície clicável: ativa o reflexo que segue o cursor */
  interactive?: boolean;
};

/** Moldura para telas reais dos projetos (substitui as antigas ilustrações). */
export function MediaFrame({
  src,
  alt,
  device = "browser",
  url,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  priority,
  className,
  interactive,
}: MediaFrameProps) {
  const isPhone = device === "phone";
  return (
    <figure
      className={clsx(styles.frame, isPhone ? styles.phone : styles.browser, className)}
      data-sheen={interactive ? "" : undefined}
    >
      {!isPhone && (
        <div className={styles.bar} aria-hidden="true">
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          {url && <span className={styles.url}>{url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>}
        </div>
      )}
      {isPhone ? (
        <div className={styles.bezel}>
          <div className={styles.screen}>
            <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={styles.image} />
          </div>
        </div>
      ) : (
        <div className={styles.screen}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={styles.image} />
        </div>
      )}
    </figure>
  );
}
