"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { nav, site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, WhatsApp, Mail } from "@/components/ui/Icons";
import styles from "./Header.module.scss";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Esconde ao rolar para baixo, mostra ao rolar para cima
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        setHidden(y > 160 && y > lastY);
        lastY = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao trocar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Menu aberto: trava scroll, foca o 1º link, Esc fecha
  useEffect(() => {
    if (!open) return;
    const { style } = document.body;
    const previous = style.overflow;
    style.overflow = "hidden";
    firstLinkRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <>
      <header
        className={clsx(
          styles.header,
          scrolled && styles.scrolled,
          hidden && !open && styles.hidden,
          open && styles.menuOpen,
        )}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="AG Custom — página inicial">
            <Logo size={24} title="" />
            <span className={styles.wordmark}>AG Custom</span>
          </Link>

          <nav aria-label="Principal" className={styles.desktopNav}>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.navLink}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Button href="/contatos" size="md" icon={<ArrowUpRight size={16} />} className={styles.cta}>
              Começar um projeto
            </Button>

            <button
              ref={toggleRef}
              type="button"
              className={styles.toggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="visually-hidden">{open ? "Fechar menu" : "Abrir menu"}</span>
              <span className={styles.bars} aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={clsx(styles.menu, open && styles.menuVisible)}
        inert={!open}
        aria-hidden={!open}
      >
        <nav aria-label="Menu" className={styles.menuNav}>
          <ul>
            {[{ href: "/", label: "Início" }, ...nav].map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className={styles.menuLink}
                  onClick={() => setOpen(false)}
                  aria-current={item.href === pathname ? "page" : undefined}
                >
                  <span className={styles.menuIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.menuFooter}>
          <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
            <WhatsApp size={18} /> {site.whatsapp.display}
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail size={18} /> {site.email}
          </a>
        </div>
      </div>
    </>
  );
}
