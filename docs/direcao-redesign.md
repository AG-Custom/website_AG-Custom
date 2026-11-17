# Direção do redesign — AG Custom

_Complementa e **substitui a seção 6** do [estudo de caso](estudo-de-caso-redesign.md). Escrito em 16/11/2026 a partir do feedback do dono do projeto._

> **AG Custom — Digital, com personalidade.**
> Uma empresa profissional que desenvolve soluções digitais, e não um portfólio de programador.

---

## 1. Posicionamento visual

### O risco que corrigimos
A primeira versão do estudo sugeria uma estética de "editor de código" (ASCII, terminal, visual generativo como peça central). Isso aproxima o site de um **portfólio pessoal de dev** e afasta o cliente que queremos: o dono de negócio que precisa confiar numa empresa.

**Nova regra:** elementos técnicos são **tempero, não prato principal**. Eles aparecem em detalhes (numeração de seção, labels, linhas de grid, metadados de projeto), nunca como a imagem principal de uma seção.

### Os três eixos

| Eixo | O que significa na prática | Como aparece no site |
|---|---|---|
| **Editorial e sofisticado** | Tipografia como protagonista, composição pensada, respiro | Títulos grandes (display), textos curtos, imagens grandes, layouts assimétricos, muito espaço negativo |
| **Tecnológico e preciso** | Grid rigoroso, detalhes exatos, interfaces reais | Grid de 12 colunas visível em detalhes, numeração `01 / Projetos`, metadados (`Next.js · 2025 · Website`), telas reais dos projetos |
| **Minimalismo funcional** | Hierarquia clara, nada decorativo sem função | Um destaque por tela, uma ação primária por seção, poucas cores, animação só onde explica |

### Características da direção visual (aprovadas)
- Fundo escuro sofisticado (`#181A1C` + superfícies sutis, sem cinzas lavados).
- **Violeta como destaque controlado:** só em ação primária, uma palavra-chave por título e estados de foco/hover. Nunca blocos grandes de violeta.
- Índigo `#29339B` como cor de marca de apoio (menu, superfícies institucionais, gradientes discretos).
- Tipografia expressiva e hierarquia forte.
- Interfaces reais dos projetos no lugar de ilustrações.
- Composições assimétricas.
- Animações elegantes e intencionais.
- Elementos técnicos sutis.
- Navegação extremamente bem resolvida.

### Tensão a resolver: uma fonte mono para tudo
"Editorial" pede contraste tipográfico, e hoje existe uma só fonte (PP Supply Mono). Mono em **tamanho display** fica ótima e bem característica; mono em **parágrafos longos** cansa.

Opções, sem trocar a identidade:
1. **Só PP Supply Mono** (mais fiel). Compensar com escala forte, corpo maior (17–18 px), `line-height` 1.6+, parágrafos curtos e largura máxima de ~60 caracteres.
2. **PP Supply Mono + PP Supply Sans** (recomendado, se a licença permitir). É a mesma família da Pangram Pangram, então a identidade continua igual. Mono fica nos títulos, labels e números; Sans fica nos textos corridos.

→ Decisão pendente (ver [pendencias.md](pendencias.md)).

---

## 2. O site precisa vender

Em até **5 segundos na primeira tela**, a pessoa tem que entender as cinco respostas abaixo. Cada uma tem um lugar fixo no site:

| Pergunta | Onde responde | Rascunho (a validar) |
|---|---|---|
| **O que a AG Custom desenvolve?** | Headline do hero | "Sites, aplicativos e sistemas sob medida." |
| **Para quem?** | Subtítulo do hero | "Para pequenas e médias empresas e profissionais liberais que querem crescer no digital." |
| **Qual problema resolve?** | Subtítulo do hero + seção Serviços | "Você cuida do negócio; nós cuidamos de toda a parte técnica, da ideia à entrega." (evolução de "Chega de quebrar a cabeça") |
| **Por que a AG Custom?** | Faixa de diferenciais + projetos + depoimentos | Ex.: atendimento direto com quem desenvolve, projeto 100% sob medida, suporte após a entrega (**precisa vir de vocês**) |
| **Como começo?** | CTA primário fixo no header + seção Processo + CTA final | "Começar um projeto" leva a um formulário curto, com WhatsApp como alternativa |

### Arquitetura comercial da Home
1. **Hero:** headline com a proposta de valor, subtítulo, CTA primário "Começar um projeto" e CTA secundário "Ver projetos". Ao lado, ou abaixo, uma tela real de projeto em destaque.
2. **Prova rápida:** faixa com nomes/logos de clientes ou "4 projetos entregues · Sites · Apps · Sistemas" (números só se forem reais).
3. **Projetos em destaque** (seção 3): o portfólio vem cedo, porque é o melhor argumento.
4. **Serviços:** o que é, para quem e o que o cliente recebe. Cada serviço leva aos projetos daquele tipo.
5. **Processo:** 4 etapas (Conversa → Proposta → Design e desenvolvimento → Entrega e suporte). Tira o medo de "como funciona contratar".
6. **Depoimentos** (se houver).
7. **CTA final + FAQ curto** (prazo, preço médio/forma de orçamento, manutenção, hospedagem).

### Formulário que qualifica o contato
Além de nome/email/telefone/mensagem, sugerimos campos opcionais de **tipo de projeto** (Site / App / Sistema / Não sei) e **prazo desejado**. Isso exige saber se a API externa aceita campos novos; se não aceitar, juntamos tudo no campo `assunto` (ver pendências).

---

## 3. Portfólio como diferencial

### Listagem e destaques
- **Projetos em destaque com imagens grandes**: cada projeto ocupa quase a largura toda da tela.
- **Alternância de composições**: imagem grande à esquerda e texto curto à direita, depois imagem sangrando a borda, depois mockup mobile + desktop sobrepostos. Nada de zigue-zague idêntico.
- **Informações técnicas discretas**: linha de metadados em mono, pequena e em cinza (`01 · Website · Next.js · 2025`).
- **Transições suaves**: imagem com leve parallax/zoom no scroll, hover que revela "Ver case ↗", e transição da imagem do card para o topo da página do case.
- **Navegação para estudos de caso completos**.
- Filtro por tipo (Site / App / Sistema) quando houver mais de ~6 projetos.

### Página de case (`/projetos/[slug]`)
Estrutura padrão para todos os projetos:
1. Capa: nome, uma linha de descrição, imagem hero grande, metadados (cliente, ano, tipo, stack, links).
2. **Desafio**: o problema do cliente.
3. **Solução**: o que foi feito e as decisões principais.
4. Galeria de telas reais (desktop + mobile, com vídeo curto se houver).
5. **Resultado**: número, depoimento ou "o que mudou para o cliente".
6. Próximo projeto (navegação contínua) + CTA.

### Material atual dos projetos
| Projeto | Temos | Falta |
|---|---|---|
| BarberMap | 1 mockup de celular (dentro de um SVG de 4 MB); link do Figma e do GitHub | Telas individuais em alta, contexto (é protótipo/estudo: deixar isso claro) |
| Portfólio de Arquitetura (Brunelly Baiocco) | 1 mockup de desktop (SVG de 7 MB); site no ar; Figma | Capturas desktop/mobile, texto do case, autorização/depoimento |
| Ceci's | 1 PNG; site no ar | Capturas, texto do case, logo, depoimento |
| Psicóloga Amanda | 1 PNG; site no ar | Capturas, texto do case, depoimento |

> Para os 3 sites que estão no ar, **eu consigo gerar capturas de tela limpas** (desktop e mobile) diretamente. Com isso, o que falta de vocês são textos, autorizações e vídeos.

---

## 4. Referências e o que tirar de cada uma

| Referência | O que aproveitar | O que **não** copiar |
|---|---|---|
| **Locomotive** | Direção de arte, tipografia gigante, scroll suave, transições entre páginas | Excesso de efeitos que pesam no mobile |
| **Resn** | Coragem de ter 1–2 momentos interativos memoráveis (ex.: hero) | Experiências 3D/WebGL pesadas como base do site inteiro |
| **BASIC/DEPT** | Como apresentam cases: imagem grande, composição, consistência de marca em todas as páginas | Volume de conteúdo de agência grande |
| **Linear** | Precisão, hierarquia, dark UI refinada, brilhos/gradientes sutis, interface real do produto como hero, tipografia rigorosa | Visual "SaaS" genérico demais |
| **Growthy (tema Astro)** | Estrutura de agência pronta para referência: numeração de seções (`01 / Studio`), eyebrow + título curto ("Proof, not promises"), faixa de clientes em marquee, cards de projeto numerados com tags e ano, processo em etapas, contadores, rodapé focado em conversão, **todo o conteúdo em arquivos de dados centralizados**, reduced-motion e SEO completos | Os contadores dele mostram "00" como placeholder: só usar números reais. É um tema pago em Astro; usamos como **referência de estrutura**, não de código nem de visual |

---

## 5. Viabilidade técnica (tudo dentro da stack atual: Next.js 15 + React 19 + TS + SCSS)

| Ideia | Viável? | Como | Esforço | Observações |
|---|---|---|---|---|
| Projetos reais no lugar de ilustrações | ✅ Sim | `next/image` com AVIF/WebP, mockups em molduras CSS | Baixo (técnico), depende de material | Bloqueado por capturas e textos |
| Design System de verdade | ✅ Sim | CSS custom properties + SCSS + componentes base + página interna `/design-system` | Médio | Ver [design-system.md](design-system.md) |
| Tipografia expressiva / composição assimétrica | ✅ Sim | Grid de 12 colunas, `clamp()` para escala fluida | Baixo | Depende da decisão sobre a fonte |
| Páginas de case `/projetos/[slug]` | ✅ Sim | Dados em `src/content/projects.ts` (ou MDX) + `generateStaticParams` | Médio | Geradas estaticamente, ótimo para SEO |
| Animações elegantes de scroll/reveal | ✅ Sim | **Motion** (`motion/react`) + CSS | Baixo/Médio | ~1 dependência; sempre com `prefers-reduced-motion` |
| Scroll suave estilo Locomotive | ✅ Sim, com cautela | **Lenis** | Baixo | Desligar no touch e com reduced-motion; não pode quebrar âncoras nem acessibilidade |
| Transições entre páginas | ⚠️ Parcial | Fade/slide com Motion via `template.tsx`; View Transitions API do Next 15 ainda é **experimental** | Médio | Começar simples; transição "imagem do card vira capa do case" fica para uma 2ª etapa |
| Marquee de clientes | ✅ Sim | CSS puro | Baixo | Precisa de logos e autorização |
| Contadores / números | ✅ Sim | Componente com Motion | Baixo | **Só com números reais** |
| Momento interativo no hero (cursor, grid reativo) | ✅ Sim | Canvas/SVG leve | Médio | Opcional; deve ser sutil e ter fallback estático |
| Formulário qualificado (tipo, prazo) | ⚠️ Depende | Novos campos no front; API externa precisa aceitar | Baixo | Pendência: contrato da API |
| WhatsApp como canal | ✅ Sim | Link `wa.me` | Trivial | Precisa do número oficial |
| 3D/WebGL pesado | ❌ Não recomendado | — | Alto | Prejudica mobile e performance; foge do minimalismo funcional |

**Orçamento de performance (meta):** Lighthouse ≥ 90 no mobile, LCP < 2,5 s, nenhuma imagem acima de ~300 KB, JS de animação < 60 KB gzip.

---

## 6. Como isso muda o plano de fases

- **Fase 0 (limpeza)** e **Fase 1 (fundação)**: continuam iguais. A Fase 1 passa a seguir o [design-system.md](design-system.md).
- **Fase 1.5 (novo) — Conteúdo e material:** reunir o que está em [pendencias.md](pendencias.md), gerar as capturas dos sites no ar e escrever os cases.
- **Fase 2 (redesign):** wireframes da Home, Projetos, Case e Contato seguindo as seções 2 e 3 deste documento, depois o visual final.
- **Fase 3:** igual (SEO, analytics, API endurecida, CI).
