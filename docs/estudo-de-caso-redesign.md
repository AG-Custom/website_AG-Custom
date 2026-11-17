# Estudo de caso — Website AG Custom (estado atual → redesign)

_Análise feita em 16/11/2026 sobre o branch `main` (commit `d8c72d6`). Site rodado localmente e inspecionado em desktop e mobile._

---

## 1. Resumo executivo

O site é pequeno (3 páginas + 1 rota de API, ~10 componentes, ~2.500 linhas de SCSS) e **funciona**: compila sem erros de TypeScript, passa no lint, o formulário de contato envia para uma API externa sem expor a chave. A identidade — **fundo grafite + fonte mono PP Supply Mono + índigo/violeta** — é boa e tem personalidade de "estúdio de tecnologia". Isso fica.

O problema não é a identidade, é a **execução**:

1. **Visual datado e estático.** Layout "texto à esquerda / ilustração à direita" repetido em todas as seções, ilustrações genéricas de banco (estilo _Open Peeps_), pouca hierarquia e quase nenhum movimento significativo.
2. **Sem sistema de design.** ~40 cores hardcoded espalhadas, dois "roxos principais" disputando (`#29339B` vs `#8b5cf6`), botões reimplementados em cada seção, breakpoints inconsistentes.
3. **Conteúdo preso no JSX e duplicado.** Os 4 projetos estão escritos duas vezes (desktop e mobile) e já divergiram.
4. **Performance e acessibilidade abaixo do aceitável para um estúdio que vende sites.** ~11 MB de imagens na página de projetos, fonte carregada de um domínio de terceiros (CodePen), menu inacessível por teclado, zoom bloqueado no mobile.

O redesign deve ser tratado como **reconstrução do front-end em cima da mesma stack** (Next.js + TS + SCSS), começando por fundação (tokens, dados, componentes) e só depois visual.

---

## 2. Inventário do que existe hoje

| Página | Conteúdo | Observações |
|---|---|---|
| `/` Home | Hero ("Chega de **Quebrar a cabeça!**" + ilustração), Serviços (3 cards: Web Sites, Mobile Apps, Sistemas), CTA ("Tire suas ideias do papel" + ilustração) | Hero e CTA são o mesmo layout espelhado |
| `/projetos` | 4 projetos (BarberMap, Portfólio de Arquitetura, Ceci's, Psicóloga Amanda) em zigue-zague; versão mobile separada em cards | Página inteira é client-side; troca desktop/mobile via JS |
| `/contatos` | Lista de contatos (email, telefone, GitHub) + ilustração + formulário (nome, email, telefone, mensagem) | `<h1>` vazio no topo |
| `POST /api/contact` | Proxy para API externa com `x-api-key` | Validação mínima |
| Global | Header (logo + hambúrguer → menu fullscreen com 4 faixas azuis), Footer (© 2025 + logo) | Header some ao rolar para baixo |

**Funcionalidades/efeitos existentes:** menu overlay animado em faixas; header que se esconde no scroll; botão com borda SVG que "se desenha" no hover; cards de serviço com hover atrasado (500 ms); título do hero com "tremidinha" infinita; reveal de projetos com `IntersectionObserver`; formulário com estados _enviando / sucesso / erro_.

**Arquivos sem uso:** `components/ui/Button.tsx`, `components/ui/Title.tsx`, `styles/components/_button.scss`, `_title.scss`, `types/index.ts`, `lib/formatDate.ts`, `app/dev-config.ts`, e em `public/`: `next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`, `ag_custom.png`.

---

## 3. Pontos positivos (manter / aproveitar)

### Identidade e conteúdo
- **Paleta coesa no conceito:** grafite escuro + índigo + violeta passa "tech, sério, mas com personalidade". Combina com o público (pequenos negócios querendo presença digital).
- **Fonte monoespaçada (PP Supply Mono)** é o maior diferencial visual do site — remete a código sem ser clichê. Vale explorar mais (ASCII, grids, contadores, "terminal").
- **Copy direta e humana** ("Chega de quebrar a cabeça!", "Tire suas ideias do papel"). Tom certo, só precisa de mais prova (projetos, processo, resultados).
- **Portfólio real** com clientes reais e links para site, protótipo e repositório — é o ativo mais valioso do site.

### Front-end / técnica
- Stack atual e mantida: **Next.js 15 App Router, React 19, TypeScript strict**. Não há motivo para trocar.
- **CSS Modules** isolam estilos das seções; nomes BEM legíveis.
- **Rota de API como proxy** do formulário: a `API_KEY` fica no servidor. Formulário tem `label` associado a cada campo, `required`, `type="email"`/`tel"` e feedback de estado.
- Uso de `next/image`, `alt` descritivos em português, `lang="pt-BR"`.
- Reveal com `IntersectionObserver` (sem lib) e respeito parcial a `prefers-reduced-motion`.
- Menu overlay em faixas com stagger é uma ideia de interação **memorável** — vale reinterpretar, não descartar.
- `tsc` e `eslint` passam limpos.

---

## 4. Pontos negativos

### 4.1 Visual / UX
- **Composição repetitiva:** hero, CTA, projetos e contato usam o mesmo esquema 50/50 texto + imagem. Não há ritmo, quebra de grid ou seção de impacto.
- **Ilustrações genéricas e datadas** (`Illustration - messy.svg`, `unboxing.svg`, `jumping.svg`) — estilo "pessoa desenhada à mão" muito usado entre 2019–2021; não conversam com a fonte mono nem mostram trabalho real.
- **Hierarquia fraca:** tudo em mono, corpo pequeno e denso, títulos sem escala clara. Parágrafos longos em mono cansam a leitura (principalmente em Serviços e Projetos).
- **Dois roxos competindo:** `#8b5cf6` (hero, CTA, serviços) e `#29339B` (contato, menu, botões). O usuário vê um site "violeta" na home e "azul" no contato.
- **Movimento sem propósito:** a tremidinha infinita do título distrai; o hover de 500 ms nos cards parece travado; não há transição entre páginas nem micro-interações de scroll na home.
- **Página de projetos** começa visualmente "apagada" (conteúdo aparece só após o observer disparar) e não tem página de detalhe/case.
- **Prova social ausente:** sem depoimentos, logos de clientes, processo de trabalho, tecnologias, números.
- **Contato:** e-mail `@gmail.com` reduz percepção profissional; não há WhatsApp (canal dominante no público-alvo); `<h1>`/subtítulo vazios deixam um vão no topo.
- Footer mínimo: sem links de navegação, redes sociais, CNPJ/local; ano "© 2025" hardcoded.

### 4.2 Arquitetura / código
- **Conteúdo hardcoded e duplicado:** os 4 projetos existem em `ProjetosSection.tsx` **e** `ProjetosMobile.tsx` (~200 linhas cada). Já há divergência: a URL do site da Bruna é `website-brunelly-baiocco.vercel.app` num e `...-ivory.vercel.app` no outro; links do desktop não abrem em nova aba e os do mobile sim.
- **Responsividade via JavaScript** em `/projetos` (`useState(isMobile)` + `resize`): força a página inteira a ser client-side, renderiza a versão desktop no servidor e "pula" para a mobile após hidratar. Responsividade deve ser CSS.
- **`"use client"` em excesso:** Hero e CTA são client só para usar `router.push` num botão — deveria ser `<Link>` em Server Component.
- **Sem design tokens:** nenhuma variável SCSS/CSS; cores, espaçamentos, raios e sombras repetidos à mão. Breakpoints misturam `min-width`/`max-width` em 768/640/480/360.
- **Componentes de UI reimplementados:** o botão com borda SVG está copiado no Hero, no CTA e em `_button.scss`, mas o `Button.tsx` não é usado em lugar nenhum.
- **Mistura de estratégias de CSS:** header com SCSS global (`Header.scss`, 480 linhas de classes globais como `.open-overlay`), seções com Modules, `body` com `style` inline no layout.
- **Navegação com `window.location.href`** (reload completo, perde as vantagens do Next) e logo com `onClick` em `div`.
- `dangerouslySetInnerHTML` para negrito nos serviços (desnecessário; JSX resolve).
- Código morto (seção 2) e `next.config.ts` com polling de webpack para dev (workaround de ambiente, não deveria estar no repo).
- README é o padrão do `create-next-app` (fala em porta 3000 e Geist).

### 4.3 Performance
- **`barbermap_cell.svg` = 4,2 MB e `bruna_arch_desktop.svg` = 7 MB.** São SVGs que embutem PNG em base64; `next/image` não otimiza SVG, então vão inteiros para o navegador (inclusive no 4G). Só essa página baixa ~11 MB.
- **Fonte servida de `assets.codepen.io`:** domínio de terceiros (pode sair do ar, sem cache controlado, bloqueável por adblock) e provável questão de licença — PP Supply Mono é fonte comercial da Pangram Pangram.
- Ilustração do hero com 150 KB e `priority` em imagens abaixo da dobra (CTA, contato).

### 4.4 Acessibilidade
- `maximum-scale=1` no viewport **bloqueia zoom** no mobile (falha WCAG 1.4.4).
- Botão do menu é `<div>`: não recebe foco, não abre com Enter/Espaço, sem `aria-expanded`/`aria-label`; menu fechado continua no DOM com links focáveis invisíveis; sem `Esc` nem trap de foco.
- Hierarquia de headings quebrada: `/contatos` tem `<h1>` vazio; `/projetos` desktop começa em `<h2>`.
- Animações infinitas sem checagem de `prefers-reduced-motion` (hero) e conteúdo que depende do observer para ficar visível.
- Contraste de textos cinza (`#888`) sobre `#1a1a1a` fica no limite.

### 4.5 SEO e operação
- Metadata mínima (título "AG Custom", descrição "Portfolio AG Custom"), igual em todas as páginas; sem Open Graph, favicon próprio, `sitemap.xml`, `robots.txt` ou dados estruturados (`Organization`/`LocalBusiness`).
- Sem analytics/medição de conversão do formulário.
- `/api/contact` sem validação de formato/tamanho, sem rate limit nem anti-spam (honeypot/captcha); se `API_URL` faltar, faz `fetch('')` e quebra com 500 genérico.
- Sem testes nem CI.

---

## 5. Funcionalidades: manter, repensar, descartar

| Item | Decisão | Motivo |
|---|---|---|
| Paleta (grafite + índigo + violeta) | **Manter** (consolidar em tokens) | Pedido explícito; identidade boa |
| Fonte PP Supply Mono | **Manter** (self-host com licença) | Pedido explícito; principal diferencial |
| Formulário + `/api/contact` | **Manter e endurecer** | Funciona; falta validação e anti-spam |
| Menu overlay em faixas | **Repensar** | Ideia boa; reimplementar acessível e com as cores dos tokens |
| Header que some no scroll | **Manter** | Bom padrão; implementar como `<header>` fixo real |
| Botão com borda SVG animada | **Repensar** | Vira variante do componente `Button` único |
| Reveal no scroll | **Manter, padronizar** | Um hook/componente reutilizável, respeitando reduced-motion |
| Tremidinha infinita no título | **Descartar** | Distrai, sem significado |
| Hover atrasado nos cards | **Descartar** | Parece lag |
| Versões desktop/mobile separadas de Projetos | **Descartar** | Um componente responsivo por CSS |
| Ilustrações atuais | **Substituir** | Ver seção 6.3 |

---

## 6. Direção do redesign

> ⚠️ **Seção substituída** por [direcao-redesign.md](direcao-redesign.md) (posicionamento "Digital, com personalidade", estratégia comercial, portfólio, referências e viabilidade) e [design-system.md](design-system.md). Mantida abaixo só como histórico. Em especial, a estética de "editor de código"/ASCII foi rebaixada a detalhe sutil, para o site não parecer portfólio de programador.

### 6.1 Princípios
1. **Mostrar, não ilustrar.** O produto é software: o site deve exibir trabalho real (telas, mockups, vídeos curtos) em vez de bonecos.
2. **A fonte mono é o estilo.** Explorar grid técnico, numeração (`01 / 02 / 03`), labels tipo `// serviços`, cursor piscando, contadores — estética "editor de código" elegante.
3. **Movimento com intenção.** Animações explicam (entrada de seção, hover que revela informação, transição entre páginas), nunca loops decorativos.
4. **Uma cor de ação.** Definir qual roxo é o _primary_ (sugestão: violeta `#8b5cf6` para ação/destaque, índigo `#29339B` para superfícies de marca/menu) e respeitar em todo o site.
5. **Mobile primeiro, acessível por padrão.**

### 6.2 Arquitetura de informação proposta
- **Home:** Hero com headline + visual dinâmico → faixa de clientes/logos → Serviços (com o "como" de cada um) → Projetos em destaque (2–3) → Processo ("Como trabalhamos": descoberta → design → desenvolvimento → entrega) → Depoimentos → CTA final.
- **Projetos:** grid filtrável (Site / App / Sistema) → **página de case por projeto** (`/projetos/[slug]`: problema, solução, stack, telas, link).
- **Contato:** formulário + WhatsApp + e-mail de domínio próprio; sem ilustração genérica.
- **Footer completo:** navegação, redes, contato, ano dinâmico.
- Opcional depois: `/sobre` (quem são os sócios), FAQ.

### 6.3 Substituir as ilustrações (opções, da mais simples à mais elaborada)
- **Mockups reais dos projetos** em molduras de device com leve parallax/tilt no hover (já existem imagens dos 4 projetos — só precisam ser reexportadas em WebP/AVIF).
- **Visual generativo da marca** em `<canvas>`/SVG: grid de pontos ou caracteres mono que reage ao cursor nas cores índigo/violeta (leve, sem asset pesado).
- **Arte ASCII / dithering** de elementos da marca (logo AG, devices) usando a própria fonte mono.
- **Linhas/paths SVG animados** (`stroke-dashoffset`) desenhando wireframes de telas — conversa com o botão de borda animada que já existe.
- Evitar novo pack de ilustração de terceiros: envelhece igual ao atual.

### 6.4 Movimento
- Base em CSS (transições, `@keyframes`, _scroll-driven animations_ onde suportado) + um hook único de reveal.
- Para coreografias mais ricas (hero, transições de página, menu), considerar **Motion** (`motion/react`) — uma dependência só, bem integrada a React 19.
- Toda animação condicionada a `prefers-reduced-motion: no-preference`.

---

## 7. Arquitetura técnica alvo

```
src/
  app/
    (site)/layout.tsx         # Header/Footer, next/font/local, metadata base
    page.tsx                  # Server Component; compõe seções
    projetos/page.tsx         # Server; lista a partir de content/projects.ts
    projetos/[slug]/page.tsx  # case de cada projeto + generateStaticParams + generateMetadata
    contatos/page.tsx
    api/contact/route.ts      # validação (zod ou manual), honeypot, rate limit simples
    sitemap.ts, robots.ts, opengraph-image.tsx
  components/
    ui/        Button, Link, Container, Section, Tag, Card, Input…  (um só de cada)
    layout/    Header, MobileMenu, Footer
    sections/  Hero, Services, FeaturedProjects, Process, Testimonials, CTA…
    motion/    Reveal (hook/componente), etc.
  content/
    projects.ts   services.ts   site.ts (contatos, redes)   # dados tipados, fonte única
  styles/
    tokens.scss   # CSS custom properties: cores, tipografia, espaço, raio, sombra, breakpoints
    globals.scss  # reset, base, tipografia
  fonts/PPSupplyMono-*.woff2
```

**Regras:**
- Server Components por padrão; `"use client"` só onde há estado/efeito (menu, formulário, animações).
- Responsividade só em CSS, com mixins de breakpoint únicos (ex.: `sm 640`, `md 768`, `lg 1024`, `xl 1280`), _mobile-first_ (`min-width`).
- Cores sempre via `var(--color-…)`; nada de hex solto em componentes.
- Navegação sempre com `next/link`.
- Imagens raster em WebP/AVIF com `width/height` reais; SVG só para vetores de verdade.

**Tokens iniciais sugeridos (a partir das cores já usadas):**

| Token | Valor |
|---|---|
| `--color-bg` | `#181A1C` |
| `--color-surface` | `#1F2124` (unifica `#1a1a1a` / `#2a2a2a` / `rgba(44,48,57,.6)`) |
| `--color-border` | `rgba(255,255,255,.1)` |
| `--color-text` | `#FFFFFF` |
| `--color-text-muted` | `#B0B3B8` |
| `--color-accent` | `#8B5CF6` (ação/destaque) |
| `--color-accent-soft` | `#AB87FF` |
| `--color-brand` | `#29339B` (+ `--color-brand-deep: #1E2670`) |
| `--font-mono` | `PPSupplyMono, ui-monospace, monospace` |

_(`#007acc` do contato sai — está fora da paleta.)_

---

## 8. Plano em fases

**Fase 0 — Limpeza (rápida, sem mudança visual)**
- Remover código e assets mortos; tirar polling do `next.config.ts`; README real.
- Self-host da fonte com `next/font/local` (confirmar licença da PP Supply Mono).
- Reexportar `barbermap_cell` e `bruna_arch_desktop` como WebP/AVIF.
- Corrigir viewport (remover `maximum-scale`), `<h1>` vazio, links divergentes dos projetos.

**Fase 1 — Fundação**
- `tokens.scss` + `globals.scss` + mixins de breakpoint.
- Extrair conteúdo para `src/content/*` (projetos, serviços, contatos).
- Componentes base: `Button`, `Container`, `Section`, `Card`, `Tag`, `Input`, `Reveal`.
- Header/menu acessível (button real, `aria-expanded`, Esc, foco), navegação com `next/link`.

**Fase 2 — Redesign visual**
- Definir direção (moodboard/Figma) com os princípios da seção 6.
- Home nova, listagem de projetos, páginas de case, contato, footer.
- Novo visual do hero (substituto das ilustrações).

**Fase 3 — Qualidade e crescimento**
- Metadata por página, OG images, `sitemap`/`robots`, dados estruturados.
- Endurecer `/api/contact` (validação, honeypot, rate limit) + analytics de conversão.
- Lighthouse ≥ 90 em todas as categorias; checagem de contraste e teclado.
- CI simples (lint + typecheck + build no PR).

---

## 9. Decisões em aberto (precisam do dono do projeto)

> Lista atualizada e completa (decisões + material a enviar) em [pendencias.md](pendencias.md). Já decidido: **violeta = destaque controlado / ação**, **índigo = marca de apoio**, **projetos reais no lugar de ilustrações**.

1. ~~Qual roxo é o primário de ação~~ → violeta, com uso controlado.
2. ~~Direção visual do hero~~ → interfaces reais dos projetos.
3. Há licença web da **PP Supply Mono** (necessária para hospedar o arquivo)?
4. Existe domínio próprio para e-mail (ex.: `contato@agcustom...`) e número de WhatsApp para o site?
5. Há depoimentos/logos de clientes que podem ser publicados?
6. Os textos de case (problema → solução → resultado) de cada projeto serão escritos por vocês?
