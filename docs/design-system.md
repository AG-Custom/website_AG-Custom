# Design System — AG Custom (v1)

_**Implementado** no branch `redesign` (v1.1: camada de vidro, seção 0): tokens em `src/styles/tokens.scss`, mixins em `src/styles/_mixins.scss`, componentes em `src/components/ui/` e documentação viva em `/design-system`. Quando código e este documento divergirem, vale o código._

> **Mudança em relação à v0:** sem licença da PP Supply, a tipografia usa provisoriamente **Geist Mono** (display, labels, números) + **Geist Sans** (texto), ambas OFL, via `next/font`. A estrutura "Mono nos títulos + Sans no texto" foi mantida. Para trocar, basta alterar `src/app/layout.tsx`. Escala display final: `clamp(2.5rem, 6.2vw, 5.75rem)`.

## Por que um Design System (e não só "deixar bonito")
Hoje existem ~40 cores hardcoded, 3 cópias do mesmo botão, 5 breakpoints diferentes e dois componentes de UI que ninguém usa. Um Design System resolve isso com **uma única fonte de verdade**:

1. **Tokens:** os valores da marca (cor, tipo, espaço, raio, sombra, movimento).
2. **Componentes base:** construídos só com tokens.
3. **Padrões:** seções e composições que usam os componentes.
4. **Documentação viva:** uma página interna `/design-system` (fora do sitemap, `noindex`) que renderiza tudo. Não usamos Storybook por enquanto, para não adicionar uma ferramenta inteira a um site pequeno.

Regra de ouro: **nenhum componente usa hex, px solto ou breakpoint inventado**, só `var(--…)` e mixins.

---

## 0. Vidro (dark glass), adotado em nov/2026

Direção: vidro escuro inspirado no **Apple Liquid Glass** (reflexos, borda de luz, refração) e no **Microsoft Fluent Acrylic** (menus e painéis). Regra da Nielsen Norman Group: **o vidro cria hierarquia; nem tudo é translúcido**, e a legibilidade vem primeiro.

**Onde usar:**

| Tipo de superfície | Tratamento | Exemplos |
|---|---|---|
| Navegação e menus | `glass(strong, $liquid: true)` | header-pílula, menu mobile |
| Painéis e cards informativos | `glass(base)` | números, diferenciais, missão/visão/valores, FAQ, CTA, formulário, ficha do case |
| Superfícies clicáveis | `glass(base, $sheen: true)` + `glass-lift` + atributo `data-sheen` | canais de contato, moldura dos projetos |
| Detalhes | `glass(subtle)` | selo do hero, tags, botão secundário |
| Texto corrido, seções, rodapé | **sólido** | parágrafos, lista de serviços, footer |

**Camadas de uma superfície de vidro** (tokens em `tokens.scss`):
1. `--glass-gloss`: brilho especular no topo.
2. `--glass-tint`: tingimento violeta/índigo leve.
3. `--glass-*-bg` com `backdrop-filter: blur(22px) saturate(180%) brightness(1.08)`.
4. `::before` com `--glass-edge`: borda de luz, forte no canto superior esquerdo, com reflexo no inferior direito.
5. `--glass-highlight`: bisel interno (linha de luz no topo e brilho difuso embaixo).
6. Opcional: `::after` com `--glass-sheen`, o reflexo que segue o cursor (componente `GlassPointer`).
7. Grão (`--glass-noise`) nos níveis base e strong: o grão do Fluent Acrylic, para áreas grandes não parecerem um JPEG borrado.
8. Opcional: refração de **lente** `$liquid: true` (técnica do kube.io e do Liquid Glass Button da AI CSS Animations). Um mapa de deslocamento com dois gradientes (R para o eixo X, G para o eixo Y, em `layout.tsx`) amplia o centro e comprime a borda. Usa `backdrop-filter: url(#liquid-glass) blur(2px)`. **Só em elementos pequenos** (botão secundário, selo do hero), porque o filtro amostra o fundo a cada quadro. Funciona apenas em Chromium (classe `.liquid` no `<html>`); nos outros navegadores fica o vidro fosco.

**Referências estudadas (nov/2026):** AI CSS Animations, "12 Glassmorphism Examples" (Liquid Glass Button, Frosted Glass Panel, Glass Header on Scroll); NN/g, "Glassmorphism: Definition and Best Practices"; Venstyler (componentes em WebGL e shaders, descartados por peso). O que foi adotado: borda especular por duas sombras internas, grão, refração de lente só em elementos pequenos, hover com "mola" (`cubic-bezier(0.34, 1.56, 0.64, 1)`) nos botões, nunca animar o raio do blur e fallback sólido.

**Mockups de celular:** o `MediaFrame device="phone"` usa container query units (`cqi`), então raio e espessura da moldura escalam com a largura, sempre reto. As capturas mobile precisam ter **390×844 com DPR 3** (iPhone). O Chrome headless sem emulação monta a página mais larga e corta a lateral, por isso use emulação via DevTools Protocol. Se trocar uma imagem mantendo o nome, apague `.next/cache/images`.

**Para o vidro aparecer**, ele precisa de algo atrás. Por isso existe a `.ambient`, uma luz violeta/índigo fixa e lenta atrás da página. Seções "deep" escurecem essa luz sem apagá-la.

**Acessibilidade e fallbacks:**
- `prefers-reduced-transparency: reduce` (no Windows, "Efeitos de transparência" desligado): o vidro fica 78–90% opaco, com menos blur e sem refração. A identidade se mantém e o texto fica ainda mais legível.
- Sem suporte a `backdrop-filter`: superfície sólida `--color-surface`.
- `prefers-reduced-motion`: sem elevação, sem deriva da luz, sem reflexo.

**Armadilha:** `@include glass(...)` gera regras aninhadas. Coloque-o **depois** das declarações comuns do bloco; senão o Sass avisa e o vidro pode sobrescrever sua `box-shadow`. Se precisar sobrescrever algo do vidro, use um `& { ... }` depois do include.

## 1. Tokens

Implementados como **CSS custom properties** em `src/styles/tokens.scss` (funcionam em SCSS, CSS Modules e inline) e expostos ao TypeScript quando necessário (ex.: duração de animação no Motion).

### 1.1 Cor

**Primitivos** (a paleta crua, só usada para definir os semânticos):

| Token | Valor | Origem |
|---|---|---|
| `--gray-950` | `#0F1113` | gradiente atual do contato |
| `--gray-900` | `#181A1C` | fundo atual |
| `--gray-850` | `#1F2124` | unifica `#1a1a1a`/`#2a2a2a` |
| `--gray-800` | `#2C3039` | cards do contato |
| `--gray-400` | `#B0B3B8` | texto secundário atual |
| `--gray-500` | `#888B90` | ajuste de `#888` para passar contraste |
| `--white` | `#FFFFFF` | |
| `--violet-500` | `#8B5CF6` | destaque atual |
| `--violet-300` | `#AB87FF` | hover atual |
| `--indigo-600` | `#29339B` | marca atual |
| `--indigo-800` | `#1E2670` | marca escura |
| `--indigo-ramp-1…4` | `#2828B3 #1E1EA1 #14148F #0A0A7D` | faixas do menu |

**Semânticos** (o que os componentes usam):

| Token | Aponta para | Uso |
|---|---|---|
| `--color-bg` | gray-900 | fundo da página |
| `--color-bg-deep` | gray-950 | seções de contraste, rodapé |
| `--color-surface` | gray-850 | cards, inputs |
| `--color-surface-raised` | gray-800 | hover de card, menus |
| `--color-border` | `rgba(255,255,255,.08)` | divisórias, contornos |
| `--color-border-strong` | `rgba(255,255,255,.16)` | hover/foco de contornos |
| `--color-text` | white | texto principal |
| `--color-text-muted` | gray-400 | texto secundário |
| `--color-text-subtle` | gray-500 | metadados, legendas |
| `--color-accent` | violet-500 | **ação primária, palavra de destaque, foco** (uso controlado) |
| `--color-accent-hover` | violet-300 | hover da ação |
| `--color-brand` | indigo-600 | superfícies de marca, menu, gradientes sutis |
| `--color-brand-deep` | indigo-800 | |
| `--color-success` / `--color-danger` | `#22C55E` / `#EF4444` | feedback de formulário (já usados) |

**Regra do violeta:** no máximo **um** elemento violeta por viewport além do foco (o CTA ou a palavra destacada do título).

### 1.2 Tipografia ⚠️

| Token | Valor |
|---|---|
| `--font-display` | `"PP Supply Mono", ui-monospace, monospace` |
| `--font-body` | ⚠️ `"PP Supply Sans", system-ui, sans-serif` **ou** igual ao display (decisão pendente) |
| `--font-mono` | `"PP Supply Mono", ui-monospace, monospace` (labels, metadados, números) |

Escala fluida com `clamp()` (mobile → desktop):

| Token | Tamanho | Uso |
|---|---|---|
| `--text-display` | `clamp(3rem, 8vw, 7.5rem)` | headline do hero, título de case |
| `--text-h1` | `clamp(2.25rem, 5vw, 4.5rem)` | título de página |
| `--text-h2` | `clamp(1.75rem, 3.5vw, 3rem)` | título de seção |
| `--text-h3` | `clamp(1.25rem, 2vw, 1.75rem)` | título de card |
| `--text-lg` | `1.25rem` | lead/subtítulo |
| `--text-base` | `1.0625rem` (17 px) | corpo |
| `--text-sm` | `0.875rem` | apoio |
| `--text-xs` | `0.75rem` | eyebrow, metadados (uppercase, `letter-spacing: .08em`) |

Também: `--leading-tight: 1.05` (display), `--leading-snug: 1.25`, `--leading-body: 1.65`, `--tracking-tight: -0.02em` (display) e `--measure: 60ch` (largura máxima de parágrafo).

### 1.3 Espaço, layout e forma

- **Espaço** (base 4 px): `--space-1` 4 · `2` 8 · `3` 12 · `4` 16 · `6` 24 · `8` 32 · `12` 48 · `16` 64 · `24` 96 · `32` 128 · `40` 160.
- **Ritmo de seção:** `--section-y: clamp(var(--space-24), 12vw, var(--space-40))`.
- **Container:** `--container-max: 1280px`, `--gutter: clamp(16px, 4vw, 48px)`.
- **Grid:** 12 colunas no desktop, 6 no tablet e 4 no mobile, com `gap: var(--space-6)`. Composições assimétricas usam spans (ex.: imagem 7 colunas + texto 4, com 1 coluna vazia).
- **Breakpoints** (mixins mobile-first, `min-width`): `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`. Substituem os atuais 360/480/640/768.
- **Raio:** `--radius-sm 6px`, `--radius-md 12px`, `--radius-lg 20px`, `--radius-full 999px`.
- **Sombra/brilho:** `--shadow-card` (sombra discreta) e `--glow-accent: 0 0 0 1px var(--color-accent), 0 8px 32px rgb(139 92 246 / .25)` (só em hover de CTA).
- **Z-index:** `--z-header 50`, `--z-menu 60`, `--z-toast 70`.

### 1.4 Movimento

| Token | Valor | Uso |
|---|---|---|
| `--duration-fast` | `150ms` | hover, foco |
| `--duration-base` | `300ms` | troca de estado |
| `--duration-slow` | `600ms` | reveal, entrada de seção |
| `--duration-page` | `800ms` | transição de página/menu |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | entradas |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | menu, transições |

**Princípios:**
- Anima `transform` e `opacity`, nunca layout.
- Reveal de no máximo `24px` de deslocamento.
- Stagger de 60–80 ms.
- Nada em loop infinito, exceto o marquee, que pausa no hover.
- Com `prefers-reduced-motion: reduce`, tudo vira fade simples ou estado final imediato.

---

## 2. Componentes base (`src/components/ui/`)

| Componente | Variantes / props | Notas |
|---|---|---|
| `Button` | `primary` (violeta) · `secondary` (contorno) · `ghost` · `link`; `sm/md/lg`; `as` link ou button; `icon` | Reaproveita o efeito de borda SVG que se desenha, agora numa variante só e respeitando reduced-motion |
| `Container` | `size: default/narrow/wide` | Aplica max-width + gutter |
| `Section` | `eyebrow`, `index` (ex.: `02`), `title`, `tone: default/deep/brand` | Padroniza `01 / Projetos` + título + ritmo vertical |
| `Heading` | `level`, `size` (independentes) | Substitui o `Title` não usado; separa semântica de visual |
| `Text` | `size`, `tone: default/muted/subtle`, `measure` | |
| `Eyebrow` / `Meta` | — | Label mono uppercase; linha de metadados `Website · Next.js · 2025` |
| `Tag` | `neutral/accent` | Tipo do projeto, stack |
| `Card` | `interactive` | Superfície + borda + hover |
| `MediaFrame` | `device: browser/phone/none`, `ratio` | Moldura para telas reais dos projetos (substitui as ilustrações) |
| `Reveal` | `delay`, `stagger` | Wrapper de animação de entrada (Motion), com reduced-motion |
| `Marquee` | `speed` | Faixa de clientes |
| `Field` / `Input` / `Textarea` / `Select` | `label`, `hint`, `error` | Formulário acessível, estados claros |
| `Icon` | set fixo de ícones SVG inline | Substitui os SVGs colados no JSX |

## 3. Componentes de layout e padrões

- **`Header`**: fixo, some ao rolar para baixo e volta ao subir; logo + links principais visíveis no desktop + CTA "Começar um projeto"; hambúrguer só no mobile. Usa `<button aria-expanded>`, fecha com `Esc`, prende o foco no menu aberto e navega com `next/link`.
- **`MobileMenu`**: reinterpretação das faixas atuais com a rampa índigo dos tokens.
- **`Footer`**: CTA grande, navegação, contatos, redes, ano dinâmico.
- **Padrões de seção:** `Hero`, `ClientsStrip`, `FeaturedProjects`, `ServicesList`, `Process`, `Testimonials`, `CTA`, `FAQ`, `CaseHeader`, `CaseGallery`, `NextProject`.

## 4. Conteúdo como dado
O Design System só funciona se o conteúdo estiver separado da apresentação:

```ts
// src/content/projects.ts
export type Project = {
  slug: string;
  name: string;
  tagline: string;
  type: 'website' | 'app' | 'sistema';
  year: number;
  stack: string[];
  client?: string;
  cover: StaticImageData;
  gallery: { src: StaticImageData; device: 'browser' | 'phone'; alt: string }[];
  challenge: string;
  solution: string;
  result?: string;
  testimonial?: { quote: string; author: string; role: string };
  links: { site?: string; figma?: string; repo?: string };
  featured: boolean;
};
```

O mesmo vale para `services.ts`, `process.ts`, `testimonials.ts` e `site.ts` (contatos, redes, CNPJ).

## 5. Acessibilidade embutida
- Contraste mínimo AA: texto ≥ 4,5:1, texto grande ≥ 3:1. Os tokens `text-muted`/`text-subtle` serão validados contra `bg` e `surface`.
- Foco visível em todo elemento interativo (`outline: 2px solid var(--color-accent); outline-offset: 3px`).
- Áreas de toque ≥ 44 × 44 px.
- Zoom liberado e headings em ordem.

## 6. Ordem de implementação
1. `tokens.scss` + `globals.scss` + mixins + fonte self-hosted.
2. `Container`, `Section`, `Heading`, `Text`, `Button`, `Eyebrow/Meta`, `Tag`.
3. `/design-system` (página de documentação viva).
4. `Header`/`MobileMenu`/`Footer`.
5. `Card`, `MediaFrame`, `Reveal`, `Field`s, `Marquee`.
6. Migrar seções existentes para os componentes e apagar o SCSS antigo.
