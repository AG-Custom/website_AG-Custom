import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Button.module.scss";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

/**
 * Botão único do site. Com `href` renderiza link (interno via next/link,
 * externo com `external`); sem `href`, renderiza <button>.
 * Formato pílula com tratamento de vidro; o reflexo segue o cursor (data-sheen).
 */
export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", icon, className } = props;
  const classes = clsx(styles.button, styles[variant], styles[size], className);

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if (props.href !== undefined) {
    if (props.external) {
      return (
        <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer" data-sheen>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} data-sheen>
        {content}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _v, size: _s, icon: _i, className: _c, children: _ch, ...rest } = props;
  return (
    <button type="button" className={classes} data-sheen {...rest}>
      {content}
    </button>
  );
}
