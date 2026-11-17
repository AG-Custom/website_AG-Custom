"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, WhatsApp } from "@/components/ui/Icons";
import { site } from "@/content/site";
import styles from "./contatos.module.scss";

type Status = "idle" | "sending" | "success" | "error";

const initial = { nome: "", email: "", telefone: "", mensagem: "", website: "" };

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nome,
          email: form.email,
          phone: form.telefone,
          assunto: form.mensagem,
          website: form.website, // honeypot
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={submit} className={styles.form} noValidate={false}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" autoComplete="name" required maxLength={120} value={form.nome} onChange={update} />
        </div>
        <div className={styles.field}>
          <label htmlFor="telefone">
            Telefone / WhatsApp <span className={styles.optional}>(opcional)</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={30}
            placeholder="(27) 99999-9999"
            value={form.telefone}
            onChange={update}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={160}
          placeholder="voce@empresa.com"
          value={form.email}
          onChange={update}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="mensagem">Sobre o projeto</label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          maxLength={4000}
          placeholder="O que você precisa? Site, aplicativo, sistema… Conte um pouco sobre o seu negócio."
          value={form.mensagem}
          onChange={update}
        />
      </div>

      {/* Honeypot anti-spam: invisível para pessoas */}
      <div className={styles.hp} aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
      </div>

      <div className={styles.formFooter}>
        <Button type="submit" size="lg" disabled={status === "sending"} icon={<ArrowUpRight size={18} />}>
          {status === "sending" ? "Enviando…" : "Enviar mensagem"}
        </Button>

        <p role="status" aria-live="polite" className={styles.status}>
          {status === "success" && (
            <span className={styles.success}>Mensagem enviada! Retornaremos em breve.</span>
          )}
          {status === "error" && (
            <span className={styles.error}>
              Não foi possível enviar agora.{" "}
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                <WhatsApp size={14} /> Fale pelo WhatsApp
              </a>
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
