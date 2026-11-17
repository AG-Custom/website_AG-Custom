import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container, Meta, SectionHeader, Tag } from "@/components/ui/Layout";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Logo } from "@/components/ui/Logo";
import { ArrowRight, ArrowUpRight, WhatsApp } from "@/components/ui/Icons";
import { FaqList } from "@/components/sections/Faq";
import { projects } from "@/content/projects";
import pageStyles from "../pages.module.scss";
import styles from "./ds.module.scss";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

const colors = [
  ["--color-bg", "Fundo"],
  ["--color-bg-deep", "Fundo profundo"],
  ["--color-surface", "Superfície"],
  ["--color-surface-raised", "Superfície elevada"],
  ["--color-text", "Texto"],
  ["--color-text-muted", "Texto secundário"],
  ["--color-text-subtle", "Metadados"],
  ["--color-accent", "Destaque / ação"],
  ["--color-accent-hover", "Destaque hover"],
  ["--color-brand", "Marca (índigo)"],
  ["--color-brand-deep", "Marca escura"],
  ["--color-success", "Sucesso"],
];

const type = [
  ["--text-display", "Display", "Sob medida."],
  ["--text-h1", "H1", "Título de página"],
  ["--text-h2", "H2", "Título de seção"],
  ["--text-h3", "H3", "Título de card"],
  ["--text-lg", "Lead", "Texto de apoio com mais destaque."],
  ["--text-base", "Corpo", "Texto corrido em Geist Sans, 17px, entrelinha 1.65."],
  ["--text-sm", "Pequeno", "Legendas e textos auxiliares."],
];

export default function DesignSystemPage() {
  const sample = projects[0];
  return (
    <div className={pageStyles.pageTop}>
      <Container>
        <SectionHeader
          as="h1"
          index="DS"
          eyebrow="Documentação viva · uso interno"
          title={
            <>
              Design System <span className="accent">AG Custom</span>.
            </>
          }
          lead="Tokens em src/styles/tokens.scss e componentes em src/components/ui. Especificação completa em docs/design-system.md."
        />

        <section className={styles.block}>
          <h2 className={styles.h}>Cor</h2>
          <div className={styles.swatches}>
            {colors.map(([token, label]) => (
              <div key={token} className={styles.swatch}>
                <span className={styles.chip} style={{ background: `var(${token})` }} />
                <strong>{label}</strong>
                <code>{token}</code>
              </div>
            ))}
          </div>
          <p className={styles.note}>
            Regra do violeta: no máximo um destaque violeta por tela, além do foco (CTA principal ou uma
            palavra-chave do título).
          </p>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h}>Vidro (dark glass)</h2>
          <p className={styles.note}>
            Mixin <code>@include glass($level)</code> + <code>glass-lift</code>. O vidro marca hierarquia:
            navegação, painéis, cards e ações. Texto corrido nunca fica sobre vidro muito transparente.
            Com &ldquo;reduzir transparência&rdquo; ativo no sistema, o vidro fica bem mais opaco e sem
            refração. A refração (<code>$liquid: true</code>) só aparece em navegadores Chromium.
          </p>
          <div className={styles.glassStage}>
            <div className={styles.glassSubtle}>
              <strong>subtle</strong>
              <code>chips, tags, campos</code>
            </div>
            <div className={styles.glassBase}>
              <strong>base</strong>
              <code>cards e painéis</code>
            </div>
            <div className={styles.glassStrong}>
              <strong>strong</strong>
              <code>header, menus</code>
            </div>
            <a href="#" className={styles.glassInteractive} data-sheen>
              <strong>interativo</strong>
              <code>base + reflexo + elevação</code>
            </a>
          </div>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h}>Tipografia</h2>
          <p className={styles.note}>
            Títulos, labels e números: <code>--font-display</code> / <code>--font-mono</code> (Geist Mono).
            Texto corrido: <code>--font-body</code> (Geist Sans). Fontes provisórias até a definição da licença.
          </p>
          <div className={styles.typeList}>
            {type.map(([token, label, text], i) => (
              <div key={token} className={styles.typeRow}>
                <code>
                  {label} · {token}
                </code>
                <p
                  style={{
                    fontSize: `var(${token})`,
                    fontFamily: i < 4 ? "var(--font-display)" : "var(--font-body)",
                    letterSpacing: i < 2 ? "var(--tracking-tight)" : undefined,
                    lineHeight: i < 4 ? 1.1 : undefined,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h}>Botões</h2>
          <div className={styles.row}>
            <Button href="#" icon={<ArrowUpRight size={18} />}>
              Primary
            </Button>
            <Button href="#" variant="secondary" icon={<ArrowRight size={18} />}>
              Secondary
            </Button>
            <Button href="#" variant="ghost" icon={<ArrowUpRight size={16} />}>
              Ghost
            </Button>
            <Button href="#" size="lg" icon={<WhatsApp size={18} />}>
              Primary large
            </Button>
            <Button disabled>Desabilitado</Button>
          </div>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h}>Tags, metadados e marca</h2>
          <div className={styles.row}>
            <Tag>Vue 3</Tag>
            <Tag>.NET 10</Tag>
            <Tag tone="accent">Em produção</Tag>
          </div>
          <Meta items={[2026, "Sistema web", "Vue 3", "Quasar"]} />
          <div className={styles.row}>
            <Logo size={56} />
            <span style={{ color: "var(--color-text-muted)" }}>
              <Logo size={40} />
            </span>
          </div>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h}>MediaFrame</h2>
          <div className={styles.media}>
            <MediaFrame src={sample.images.desktop} alt="" url={sample.url} sizes="60vw" />
            <div className={styles.phone}>
              <MediaFrame src={sample.images.mobile} alt="" device="phone" sizes="200px" />
            </div>
          </div>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h}>Cabeçalho de seção</h2>
          <SectionHeader
            index="02"
            eyebrow="Projetos"
            title={
              <>
                Título com <span className="accent">destaque</span>.
              </>
            }
            lead="Lead opcional à direita no desktop."
          />
        </section>

        <section className={styles.block}>
          <h2 className={styles.h}>Acordeão (FAQ)</h2>
          <FaqList limit={2} />
        </section>
      </Container>
    </div>
  );
}
