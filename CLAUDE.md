# CLAUDE.md — Website AG Custom

Site institucional/portfólio da **AG Custom** (estúdio em Vitória/ES que desenvolve sites, aplicativos e sistemas sob medida). Conteúdo e UI em **português (pt-BR)**. Domínio: `https://www.agcustom.com.br`.

> O redesign completo foi implementado no branch `redesign` (nov/2026). Documentos de referência:
> - [docs/design-system.md](docs/design-system.md): tokens e componentes. **Código novo deve seguir esta especificação.**
> - [docs/direcao-redesign.md](docs/direcao-redesign.md): posicionamento ("Digital, com personalidade"), estratégia comercial, portfólio e referências
> - [docs/pendencias.md](docs/pendencias.md): material e decisões ainda em aberto
> - [docs/estudo-de-caso-redesign.md](docs/estudo-de-caso-redesign.md): diagnóstico do site antigo (histórico)
>
> Direção em uma linha: editorial e sofisticado + tecnológico e preciso + minimalismo funcional; violeta só como destaque controlado; projetos reais no lugar de ilustrações; elementos técnicos (mono, numeração, grid) como detalhe, nunca como estética de "portfólio de programador".

## Stack

- **Next.js 15.3 (App Router)** + **React 19** + **TypeScript 5.8** (`strict`)
- **SCSS**: tokens globais (CSS custom properties) + CSS Modules por componente. `clsx` para classes.
- Fontes: **Geist Sans** (texto) + **Geist Mono** (títulos, labels, números) via `next/font/google`. São provisórias, até definirem a licença da PP Supply. Para trocar, edite só `src/app/layout.tsx`.
- Sem libs de UI, animação ou ícones (animações em CSS + IntersectionObserver; ícones em `components/ui/Icons.tsx`).
- Deploy: Vercel. Alias: `@/*` → `src/*`.

## Comandos

```bash
npm run dev     # http://localhost:7000 (porta 7000)
npm run build   # pare o dev server antes: os dois usam a pasta .next
npm run lint
npx tsc --noEmit
```

Não há testes automatizados nem CI.

## Estrutura

```
src/
  app/
    layout.tsx               # fontes, metadata/OG base, JSON-LD (ProfessionalService), Header/Footer, RevealObserver
    page.tsx                 # Home: Hero, ProofStrip, Projetos, Serviços, Diferenciais, Processo, Sobre, FAQ, CTA
    projetos/page.tsx        # lista completa
    projetos/[slug]/page.tsx # estudo de caso (SSG via generateStaticParams)
    contatos/                # página + ContactForm (client) 
    faq/page.tsx             # FAQ completo + JSON-LD FAQPage
    design-system/page.tsx   # documentação viva (noindex, bloqueada no robots)
    api/contact/route.ts     # valida, honeypot, repassa à API externa (API_URL + API_KEY)
    sitemap.ts, robots.ts, opengraph-image.tsx, not-found.tsx
  content/                   # TODO o conteúdo editável: site.ts, projects.ts, home.ts
  components/
    ui/        Button, Layout (Container, Section, SectionHeader, Tag, Meta, Eyebrow), MediaFrame, Logo, Icons, RevealObserver
    layout/    Header (client: menu mobile acessível), Footer
    sections/  Hero (+ CursorField client), ProofStrip, ProjectShowcase, Services, Differentials (+ Process), About, Faq, CtaBand
  styles/      tokens.scss, _mixins.scss (up/down/motion/hover/label), globals.scss
public/
  logo.svg
  projects/<slug>/desktop.webp (2400px) + mobile.webp (780px)
```

## Regras do Design System

- **Cores, tipos, espaços, raios e durações só via tokens** (`var(--color-accent)`, `var(--space-6)`…). Nada de hex solto em componentes.
- Breakpoints **mobile-first** com `@include up(md)` (sm 640, md 768, lg 1024, xl 1280). Nunca use JS para responsividade.
- **Violeta (`--color-accent`)**: só na ação primária, numa palavra de destaque (`<span className="accent">`) e no foco. No máximo um destaque por viewport.
- Server Components por padrão; `"use client"` só para Header, CursorField, ContactForm e RevealObserver.
- Navegação interna sempre com `next/link` (o `Button` com `href` já faz isso; `external` abre em nova aba).
- Animação:
  - **acima da dobra**: `data-enter` (CSS puro, ordem via `style={{ "--enter": n }}`);
  - **abaixo da dobra**: `data-reveal` (+ `data-reveal-delay="120"`), observado pelo `RevealObserver`.
  - Tudo respeita `prefers-reduced-motion`.
- `SectionHeader` com `as="h1"` usa `data-enter`; com h2, usa `data-reveal`.
- **Vidro (dark glass):** use os mixins `glass($level, $sheen, $radius, $liquid)` e `glass-lift` (em `_mixins.scss`). Nunca recrie blur/borda à mão. O vidro marca hierarquia: navegação e menus `strong`, painéis `base`, detalhes `subtle`. Texto corrido e footer continuam sólidos. Superfície clicável = `$sheen: true` + `glass-lift` + atributo `data-sheen`. Detalhes na seção 0 do docs/design-system.md.

## Conteúdo

- **Projetos**: edite `src/content/projects.ts`. Cada projeto precisa de `public/projects/<slug>/desktop.webp` e `mobile.webp`. As imagens atuais são **capturas provisórias** dos sites em produção (Chrome headless). Substitua quando o cliente enviar as definitivas.
- Textos institucionais, serviços, diferenciais, processo, sobre e FAQ: `src/content/home.ts`. Contatos e números: `src/content/site.ts`.
- Não invente números, depoimentos ou resultados: só use o que estiver nos arquivos de conteúdo ou em `docs/pendencias.md`.

## Armadilhas conhecidas

- **Especificidade em CSS Modules:** uma classe de quem usa `Button`/`MediaFrame` tem o mesmo peso que a do componente, e a ordem de carregamento decide. Para sobrescrever `display`/`position`, aumente a especificidade (ex.: `.actions .cta`). Por isso o `MediaFrame` não define `position`.
- O `RevealObserver` marca com o **atributo** `data-revealed` (não com classe), porque o React reescreve o `className` em re-renders. Se o JS não iniciar em 4 s, a classe `reveal-fallback` mostra tudo.
- `/api/contact` mantém o contrato da API externa `{ name, email, phone, assunto }`. Sem `API_URL`, a rota responde 503 e o formulário oferece o WhatsApp. O campo `website` é honeypot.
- **Vidro "não aparece" no Windows:** com "Efeitos de transparência" desligado (Configurações > Personalização > Cores), o navegador envia `prefers-reduced-transparency: reduce` e o vidro fica quase opaco, de propósito. Para testar o efeito completo, ligue essa opção.
- `@include glass(...)` vai **depois** das declarações do bloco (senão o Sass avisa e a sua `box-shadow` é sobrescrita).
- `npm run build` com o dev server ligado corrompe o `.next` do dev (erro "Cannot find module './447.js'"). Pare o dev, apague `.next` e reinicie.
