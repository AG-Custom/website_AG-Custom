"use client";

import clsx from "clsx";
import type { MouseEvent, ReactNode } from "react";
import { attributionCode, whatsappHref } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/tracking";
import { oferta } from "@/content/oferta";
import { ArrowUpRight, WhatsApp } from "@/components/ui/Icons";
import buttonStyles from "@/components/ui/Button.module.scss";

type Props = {
  children: ReactNode;
  /** Onde o botão está (vai no evento de conversão): "hero", "preco", "sticky"… */
  placement: string;
  message?: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary";
  icon?: "arrow" | "whatsapp";
  className?: string;
  id?: string;
};

/**
 * Botão da oferta que abre o WhatsApp. O href inicial já funciona sem JS;
 * no clique, acrescenta o código de origem do anúncio (UTM) e dispara a conversão.
 */
export function WhatsAppCta({
  children,
  placement,
  message = oferta.whatsappMessage,
  size = "lg",
  variant = "primary",
  icon = "arrow",
  className,
  id,
}: Props) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const code = attributionCode();
    e.currentTarget.href = whatsappHref(`${message} (cód. ${code})`);
    trackWhatsAppClick(placement, code);
  };

  return (
    <a
      id={id}
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={clsx(buttonStyles.button, buttonStyles[variant], buttonStyles[size], className)}
      data-sheen
    >
      <span className={buttonStyles.label}>{children}</span>
      <span className={buttonStyles.icon}>
        {icon === "whatsapp" ? <WhatsApp size={18} /> : <ArrowUpRight size={18} />}
      </span>
    </a>
  );
}
