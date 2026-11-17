# Estudo de caso: oferta "Site por R$ 150/mês" (landing page para tráfego pago)

_Escrito em 17/11/2026. Base para criar a página de oferta dentro do site da AG Custom. Segue o [design-system.md](design-system.md) e a [direcao-redesign.md](direcao-redesign.md)._

> **A oferta em uma frase:** a AG Custom cria o site do seu negócio **sem cobrar pela criação**. Você paga só **R$ 150 por mês**, e isso inclui hospedagem, manutenção e suporte.

Itens marcados com **⚠️ decidir** são decisões de negócio que mudam o texto da página. Deixei uma recomendação em cada um, mas a palavra final é de vocês (resumo na [seção 11](#11-decisões-pendentes)).

---

## 1. Diagnóstico: quem chega pelo anúncio e o que essa pessoa pensa

### Quem é
Como a oferta não tem nicho, o público é **qualquer dono de pequeno negócio ou profissional autônomo** que ainda não tem site, ou tem um site ruim ou desatualizado. Exemplos: clínica, salão, restaurante, advogado, loja de bairro, prestador de serviço, psicólogo, personal trainer.

### Em que estado chega
Tráfego pago (Meta e Google) traz gente **fria ou morna**. Ela viu um anúncio, clicou por curiosidade e vai decidir em poucos segundos se fica. Quase sempre está **no celular**.

### As objeções que a página precisa derrubar
Uma oferta barata gera **desconfiança** antes de gerar interesse. A pessoa pensa "qual é a pegadinha?". A página vence quando responde a essas perguntas antes de alguém precisar fazê-las:

| # | Objeção (o que a pessoa pensa) | Onde a página responde |
|---|---|---|
| 1 | "R$ 150? Deve ser template feio." | Portfólio real + exemplos por segmento |
| 2 | "Tem taxa escondida? Taxa de criação?" | Card de preço: **R$ 0 de criação**, tudo listado |
| 3 | "Vou ficar preso pra sempre?" | Fidelidade e cancelamento escritos na página |
| 4 | "O site/domínio é meu?" | Seção "O que é seu" + FAQ |
| 5 | "Quanto tempo leva?" | Hero (prazo) + "Como funciona" |
| 6 | "E se eu precisar mudar algo?" | Card "incluso": alterações mensais |
| 7 | "Essa empresa existe? É confiável?" | Projetos reais, números reais, CNPJ/cidade, WhatsApp |
| 8 | "Não sei o que colocar no site." | "Como funciona": a gente monta com você no WhatsApp |

**Regra de ouro da página:** transparência total sobre o preço. Preço baixo + letra miúda = desconfiança. Preço baixo + tudo explicado = conversão.

---

## 2. A oferta (pacote)

Antes da página, a oferta precisa estar fechada. Proposta de pacote:

### Incluso nos R$ 150/mês (recomendação)
- **Criação do site sem custo**: site de uma página (one-page) com até ~6 seções, design com a identidade do negócio (logo, cores, fotos)
- Versão para celular, tablet e computador
- Botão de WhatsApp, mapa (Google Maps), links das redes sociais
- **Hospedagem** rápida + **certificado de segurança (cadeado/HTTPS)**
- **Manutenção** e atualizações técnicas
- **Até N alterações por mês** (textos, fotos, preços) ⚠️ decidir o N; sugestão: 2 pedidos/mês
- Suporte direto pelo WhatsApp com quem desenvolve (já é um diferencial da AG Custom)
- SEO básico: título, descrição, Google indexando o site

### Não incluso (mostrar na página, isso gera confiança)
- **Domínio** (`seunegocio.com.br`): custa cerca de R$ 40/ano no Registro.br e fica **no nome do cliente** ⚠️ decidir se a AG Custom registra pelo cliente e repassa ou se inclui no plano
- Páginas extras, loja virtual, blog, sistema de agendamento: viram **upgrades** (ver abaixo)

### Regras comerciais ⚠️ decidir
| Regra | Recomendação | Por quê |
|---|---|---|
| Fidelidade | **12 meses** | Sem taxa de criação, o trabalho de criação só se paga com o tempo. A fidelidade protege o custo de produção e o custo do anúncio. Escrever claramente: "12 meses = R$ 1.800 no total". |
| Cancelamento depois de 12 meses | Aviso de 30 dias, sem multa | Remove o medo de "ficar preso pra sempre". |
| Cancelamento antes de 12 meses | Paga as mensalidades restantes **ou** uma multa fixa | Precisa estar no contrato e no FAQ. |
| O que acontece ao cancelar | O site sai do ar; o domínio continua do cliente; opção de **comprar o site** por um valor fixo para levar a outra hospedagem | "O domínio é seu" é um argumento de confiança muito forte. |
| Primeiro pagamento | **Só depois de aprovar o layout** | É a melhor reversão de risco possível: "você só paga quando gostar". |
| Forma de pagamento | Cobrança recorrente (cartão ou Pix/boleto mensal) | Usar uma plataforma de assinatura (Asaas, Mercado Pago, Stripe etc.). |
| Preço | **R$ 150 fixo** e não "a partir de" | Para tráfego, preço fixo converte melhor. Hoje o FAQ do site diz "a partir de R$ 150" ([pendencias.md](pendencias.md)), então os dois precisam ficar iguais. |

### Upgrades (aumentam o ticket depois da venda)
Páginas extras, e-mail profissional, loja/catálogo, agendamento online, Google Meu Negócio, **gestão de tráfego** (já existe o projeto de tráfego do Alexandre Baiocco no portfólio, então dá para oferecer junto), sistemas sob medida. Na landing page isso aparece em **uma linha só** ("Precisa de mais? Também fazemos lojas, sistemas e tráfego"), para não distrair.

### Conta de viabilidade (preencher com números reais)
- **Receita mínima por cliente** = 12 × R$ 150 = **R$ 1.800**
- **Custo por cliente** = horas de criação × valor da hora + hospedagem por mês × 12 + tempo de suporte
- **CAC máximo** (quanto pode custar trazer um cliente com anúncio) = receita mínima − custo por cliente − margem desejada
- **Taxa de fechamento necessária** = custo por conversa no WhatsApp ÷ CAC máximo

> ⚠️ **Hospedagem:** o plano **Hobby (grátis) da Vercel não permite uso comercial**. Os sites dos clientes precisam de um plano pago (Vercel Pro, que hospeda vários projetos no mesmo time) ou de outra hospedagem que permita uso comercial no plano gratuito (ex.: Cloudflare Pages). Isso entra no custo por cliente.

> ⚠️ **Escala:** R$ 150/mês só dá lucro se o site for produzido **muito rápido**. Recomendo uma **base única** de site (biblioteca de seções + um arquivo de conteúdo por cliente). Assim o "no ar em 24h" vira processo, e não esforço heroico. Ver [seção 9](#9-operação-por-trás-da-página).

---

## 3. Posicionamento: proteger a marca AG Custom

O site institucional vende **"sob medida, com personalidade"**. Uma oferta de R$ 150 pode baratear essa imagem se for misturada à navegação principal.

**Recomendação:**
- Dar um nome de **plano** para a oferta, por exemplo **"Site Essencial"** ou **"AG Custom Essencial"**. Fica claro que é uma linha de produto, não "a AG Custom é barata".
- A landing page fica **fora do menu** e só recebe tráfego de anúncio (e um link discreto no FAQ/serviços).
- O visual segue o design system (escuro, Geist, violeta controlado). Isso já diferencia de concorrentes de "site barato", que costumam ter visual genérico. **A própria página é a prova de qualidade.**

---

## 4. Arquitetura da página

### Princípios de landing page para tráfego
1. **Uma página, um objetivo, um botão.** Toda ação leva ao WhatsApp. Sem menu de navegação, sem link para outras páginas (taxa de atenção 1:1).
2. **Message match:** o que o anúncio promete aparece igual na primeira tela. Se o anúncio diz "site por R$ 150/mês", o título diz o mesmo.
3. **O preço aparece na primeira tela.** Em oferta de preço baixo, esconder o preço é perder a melhor arma.
4. **Mobile primeiro:** quase todo o tráfego de Meta vem do celular. Desenhar em 375 px e depois expandir.
5. **CTA sempre a um toque:** barra fixa de WhatsApp no celular depois do hero.
6. **Cada seção derruba uma objeção** (tabela da seção 1).

### Ordem das seções

```
00  Header mínimo ............ logo + botão "Falar no WhatsApp" (sem menu)
01  Hero ..................... promessa + preço + CTA + mockup "site se montando"
02  Prova rápida ............. números reais + logos/nomes de clientes
03  Exemplos ................. "Funciona para qualquer negócio": seletor de segmento
04  Como funciona ............ 3 passos (conversa → criação → no ar)
05  Preço .................... card único: R$ 0 criação + R$ 150/mês + o que inclui
06  Comparativo .............. modelo tradicional × Site Essencial
07  Portfólio ................ sites reais rodando (marquee)
08  O que é seu / garantias .. domínio no seu nome, aprova antes de pagar, cancelamento
09  FAQ ...................... objeções restantes
10  CTA final ................ repete a oferta + botão grande
    Rodapé mínimo ............ AG Custom · Vitória/ES · WhatsApp · política de privacidade
    Barra fixa mobile ........ "R$ 150/mês · Quero meu site →" (aparece depois do hero)
```

### Detalhe de cada seção

#### 00 · Header mínimo
Logo à esquerda; à direita, botão pequeno "WhatsApp" (vidro `strong`, segundo o design system). **Sem menu.** O logo não leva a lugar nenhum (ou leva, no máximo, ao topo da própria página).

#### 01 · Hero (a seção mais importante)
Wireframe mobile:

```
┌─────────────────────────────┐
│ [AG]              [WhatsApp]│
│                             │
│ SITE ESSENCIAL · AG CUSTOM  │  ← eyebrow (mono)
│                             │
│ Seu site profissional       │
│ por R$ 150/mês.             │  ← "R$ 150/mês" é a palavra de destaque (violeta)
│ Sem pagar pela criação.     │
│                             │
│ A gente cria, hospeda e     │
│ cuida de tudo. Você só      │
│ paga a mensalidade.         │
│                             │
│ [ Quero meu site  → ]       │  ← CTA primário, abre o WhatsApp
│ ✓ R$ 0 de criação           │
│ ✓ No ar em até 24h*         │  ← microcopy de redução de risco
│ ✓ Você aprova antes de pagar│
│                             │
│ ┌───────────────────────┐   │
│ │ ● ● ●  seunegocio.com.br│ │  ← mockup "site se montando" (animação)
│ │ ░░░░░░░░  [WhatsApp]   │   │
│ └───────────────────────┘   │
└─────────────────────────────┘
```

- **Desktop:** duas colunas. Texto à esquerda, mockup (desktop + celular sobrepostos) à direita.
- **Headline:** curta, com preço. Variações para teste A/B na [seção 6](#6-copy-textos-prontos).
- **3 bullets de risco zero** logo abaixo do botão: é ali que o olho para antes de decidir clicar.
- \* "24h" já aparece no site (`stats` em `src/content/site.ts`), mas a condição está pendente ("depois que recebemos o conteúdo"). Se usar, escrever a condição na página.

#### 02 · Prova rápida
Faixa fina com **números reais** que já existem em `site.ts`: "+10 projetos entregues · +10 clientes · 6 anos de experiência da equipe" + nomes/logos dos projetos (VAE Mobility, AG Clinical, AgroPulse…). **Não inventar números nem depoimentos.** Quando os primeiros clientes do plano aprovarem, colocar depoimentos aqui (é o item de maior impacto a coletar).

#### 03 · Exemplos por segmento ("serve para o meu negócio?")
Como a oferta é para todos, a pessoa precisa **se enxergar**. Linha de chips:

`Restaurante · Clínica · Advogado · Salão · Loja · Serviços · Outro`

Ao tocar num chip, o mockup troca para um layout de exemplo daquele segmento (cores, foto, título, botão). Título da seção: **"Funciona para qualquer negócio."**
- São **layouts de exemplo** e não clientes reais. Rotular com "Exemplo de layout".
- É a interação que mais aumenta o interesse: a pessoa "brinca" e já imagina o próprio site.

#### 04 · Como funciona (3 passos)
1. **Conversa no WhatsApp:** você conta sobre o seu negócio e manda logo, fotos e textos (ou a gente ajuda a escrever).
2. **Criamos e você aprova:** você recebe o layout e pede ajustes. **Só paga quando aprovar.**
3. **Site no ar:** publicamos no seu domínio. A partir daí, R$ 150/mês com tudo incluso.

Uma linha conecta os 3 passos e "se desenha" com a rolagem (ver animações).

#### 05 · Preço (card único)
É o centro da página. Um card grande, em vidro `base`:

```
┌──────────────────────────────────────┐
│ SITE ESSENCIAL                        │
│                                       │
│ Criação do site     R$ 1.xxx  → R$ 0  │  ← âncora riscada (só se for o preço real da AG)
│                                       │
│ R$ 150 /mês                           │  ← grande, mono
│ Fidelidade de 12 meses · total R$ 1.800│ ← transparência
│                                       │
│ ✓ Site completo de 1 página           │
│ ✓ Celular, tablet e computador        │
│ ✓ Hospedagem + cadeado de segurança   │
│ ✓ Botão de WhatsApp, mapa e redes     │
│ ✓ 2 alterações por mês                │
│ ✓ Manutenção e suporte no WhatsApp    │
│ ✓ Google encontrando seu site         │
│ ─────────────────────────────────     │
│ Não incluso: domínio (~R$ 40/ano,     │
│ fica no seu nome)                     │
│                                       │
│ [ Quero meu site por R$ 150/mês → ]   │
│ Você só paga depois de aprovar.       │
└──────────────────────────────────────┘
```

- **Âncora de preço:** riscar o valor de criação só se for **o preço real** que a AG Custom cobra por um site avulso (⚠️ decidir o valor). Âncora inventada é propaganda enganosa e o público percebe.
- Mostrar o total de 12 meses parece arriscado, mas **aumenta a confiança**: a pessoa sente que nada está escondido.

#### 06 · Comparativo
Tabela simples de 2 colunas (sem citar concorrentes pelo nome):

| | Site tradicional | Site Essencial AG Custom |
|---|---|---|
| Pagamento para criar | À vista ou parcelado | **R$ 0** |
| Hospedagem | Contrata e paga à parte | **Inclusa** |
| Manutenção e mudanças | Cobradas por pedido | **Inclusas (2/mês)** |
| Problema técnico | Você resolve | **A gente resolve** |
| Suporte | Varia | **WhatsApp direto com o dev** |

#### 07 · Portfólio
Marquee horizontal infinito com capturas reais dos sites (já existem em `public/projects/`), preferindo os **sites** (VAE Mobility, Psicóloga Amanda, Tráfego), que são o que a oferta vende. Legenda curta: nome + tipo. **Sem link para fora**: o objetivo é mostrar qualidade, não tirar a pessoa da página.

#### 08 · O que é seu / garantias
Três cards curtos:
- **O domínio é seu.** Registrado no seu nome, sempre.
- **Você aprova antes de pagar.** Não gostou do layout? Não paga nada.
- **Sem surpresa.** R$ 150/mês, fidelidade de 12 meses e nada além disso.

#### 09 · FAQ
Usar `<details>` com JSON-LD `FAQPage`. Perguntas (respostas dependem das decisões):
1. Tem alguma taxa além dos R$ 150?
2. Por que não cobram pela criação?  _(resposta honesta: "porque preferimos uma relação de longo prazo; a mensalidade cobre criação, hospedagem e manutenção ao longo do contrato")_
3. Tem fidelidade? E se eu quiser cancelar?
4. O site e o domínio ficam no meu nome?
5. Quanto tempo leva para ficar pronto?
6. O que preciso enviar?
7. Posso pedir mudanças depois?
8. Funciona para o meu tipo de negócio?
9. Preciso de mais páginas / loja / agendamento. Dá?
10. Como é feito o pagamento?

#### 10 · CTA final
Repete a promessa em uma frase + botão grande + "Resposta em até X minutos no horário comercial" (⚠️ decidir: só prometer se for cumprir).

---

## 5. WhatsApp no lugar de formulário

### Link com mensagem pronta
Cada botão abre `https://wa.me/5527997255016?text=...` com uma mensagem pré-preenchida que **diz de onde a pessoa veio**:

> Olá! Vi o Site Essencial por R$ 150/mês e quero saber mais. (cód. SE-META-01)

- O **código** no final (`SE` = Site Essencial, origem, número do anúncio/variante) vem dos parâmetros UTM da URL. Assim, ao responder no WhatsApp, vocês sabem qual anúncio gerou cada conversa, sem formulário e sem CRM.
- Opcional: botões diferentes mandam mensagens diferentes ("Quero ver exemplos do meu segmento: Restaurante"). O chip escolhido na seção 03 entra na mensagem e a conversa já começa qualificada.

### Medição do clique
O clique no botão é a **conversão** da página. Ele dispara:
- Meta: evento `Contact` (ou `Lead`)
- Google Ads: conversão "Clique WhatsApp"
- GA4: evento `generate_lead`

⚠️ Clique não é conversa: parte das pessoas abre o WhatsApp e não envia. Comparar toda semana os **cliques medidos** com as **conversas recebidas** (pelos códigos). Depois de algumas vendas, subir as vendas como **conversões offline** para o algoritmo otimizar para quem compra, não só para quem clica.

---

## 6. Copy (textos prontos)

### Headlines para teste A/B
| Variante | Ângulo | Headline |
|---|---|---|
| A | Preço direto | **Seu site profissional por R$ 150/mês.** Sem pagar pela criação. |
| B | Risco zero | **Seu site pronto antes de você pagar qualquer coisa.** Depois, só R$ 150/mês. |
| C | Tudo incluso | **Site, hospedagem e manutenção por R$ 150/mês.** A gente cuida de tudo. |
| D | Dor | **Seu cliente procurou no Google e não te achou.** Resolva com um site por R$ 150/mês. |

Recomendo começar com **A** (clareza máxima, combina com anúncio de preço) contra **B** (reversão de risco).

### CTAs
- Principal: **"Quero meu site"** (primeira pessoa e desejo; converte mais que "Saiba mais" ou "Enviar")
- Alternativos: "Falar no WhatsApp", "Ver exemplos para o meu negócio"
- Microcopy embaixo do botão: "Resposta rápida · Sem compromisso · Você só paga depois de aprovar"

### Tom
Direto, simples, segunda pessoa ("seu negócio"), frases curtas, sem jargão técnico ("hospedagem" ok, "deploy" não). O lado técnico aparece no visual (labels mono, numeração), não no texto.

---

## 7. Animações e interações

Regras do projeto continuam valendo: **CSS + IntersectionObserver, sem biblioteca de animação**, tudo respeitando `prefers-reduced-motion`, `data-enter` acima da dobra e `data-reveal` abaixo.

**Regra extra para landing page de tráfego:** nenhuma animação pode **atrasar a leitura do título, do preço ou do botão**. O título do hero aparece já visível no primeiro frame. Elemento com `opacity: 0` não conta para o LCP até aparecer, então animar a opacidade do título piora o LCP. Anime só `transform` e o resto (mockup, bullets).

| # | Onde | Animação | Por que ajuda a vender | Técnica |
|---|---|---|---|---|
| 1 | Hero | **"Site se montando"**: dentro de uma moldura de navegador, os blocos (cabeçalho, foto, texto, botão de WhatsApp) entram em sequência; a URL digita `seunegocio.com.br`; o botão de WhatsApp dá um "pulso" no fim. Depois troca de segmento a cada ~4 s. | Mostra o produto sendo feito em 2 segundos. É a promessa visualizada. | CSS keyframes + `--enter`; troca de segmento num componente client pequeno |
| 2 | Exemplos | **Seletor de segmento** troca o mockup com transição suave | A pessoa se enxerga | View Transitions API (`document.startViewTransition`), troca instantânea onde não houver suporte |
| 3 | Como funciona | Linha que **se desenha** ligando os 3 passos conforme a rolagem | Guia o olho; dá sensação de processo simples | `animation-timeline: view()` (progressive enhancement) com fallback em `data-reveal` |
| 4 | Preço | Valor da criação **riscado** com uma linha que se desenha, e o "R$ 0" entra; brilho (sheen) leve no card | Momento "uau" no ponto de decisão | `data-reveal` + `stroke-dashoffset` / `scaleX` + mixin `glass` com `$sheen` |
| 5 | Portfólio | **Marquee** infinito de sites reais; pausa no hover/toque | Volume de trabalho real sem ocupar espaço | CSS `@keyframes` com lista duplicada; parado em reduced-motion |
| 6 | Mobile | **Barra fixa de WhatsApp** aparece quando o CTA do hero sai da tela e some perto do CTA final | CTA sempre a um toque, sem cobrir o conteúdo | IntersectionObserver |
| 7 | FAQ | Acordeão abrindo com altura animada | Acabamento | `<details>` + `interpolate-size: allow-keywords` (progressive) |
| 8 | Botões | `glass-lift` e hover do design system; no celular, feedback de toque (`:active`) | Sensação de produto premium | Mixins existentes |
| 9 | Hero (desktop) | `CursorField` (cursor reativo) que já existe | Consistência com a marca | Componente existente |

**Não fazer:** contador animado de preço (atrasa a informação principal), pop-up de saída (irrita e o Meta penaliza experiências ruins), autoplay de vídeo com som, carrossel automático no hero.

---

## 8. Tecnologia e implementação

### Onde fica no projeto
```
src/
  app/
    (oferta)/                       # route group: layout próprio, sem Header/Footer do site
      layout.tsx                    # header e rodapé mínimos + scripts de tracking
      site-essencial/page.tsx       # a landing page  → agcustom.com.br/site-essencial
  content/
    oferta.ts                       # TODOS os textos, preço, inclusos, FAQ e segmentos
  components/
    oferta/                         # Hero, SegmentPicker (client), PriceCard, Steps,
                                    # Comparison, Marquee, Guarantees, StickyCta (client)
  lib/
    whatsapp.ts                     # monta o link wa.me com mensagem + código UTM
    tracking.ts                     # dispara eventos Meta/GA4/Google Ads
```

- **Página 100% estática** (SSG). Só são client components o seletor de segmento, a barra fixa e o captador de UTM.
- Hoje o `app/layout.tsx` renderiza Header/Footer para todas as rotas. Para a landing page ter layout próprio, mover as páginas atuais para um route group `(site)` com o layout institucional e criar o `(oferta)`. As URLs não mudam.
- **Preço e textos num lugar só** (`content/oferta.ts`) e **o FAQ do site institucional lendo o mesmo preço**, para nunca ficarem diferentes.
- **SEO:** a página pode ser indexada (busca "site por mensalidade" é tráfego grátis), mas variantes de teste A/B (`/site-essencial/b`) ficam com `noindex`.

### Performance (o anúncio fica mais caro em página lenta)
Metas no celular em 4G: **LCP < 2,5 s, INP < 200 ms, CLS < 0,1**.
- `next/image` com `priority` só no mockup do hero; demais imagens com lazy load, AVIF/WebP.
- Mockups do hero feitos em **HTML/CSS** (não em imagem), então são leves e animáveis.
- Scripts de tracking com `next/script` em `afterInteractive`/`lazyOnload`; nada bloqueando a renderização.
- Medir com **Vercel Speed Insights** (dados reais de usuário) + PageSpeed Insights antes de ligar o anúncio.

### Tracking (hoje o site não tem nenhum analytics)
| Ferramenta | Para quê | Prioridade |
|---|---|---|
| **Meta Pixel + API de Conversões (CAPI)** | Otimizar anúncio para quem clica no WhatsApp; a CAPI (enviada pelo servidor, num route handler) recupera eventos que bloqueadores e iOS perdem. Deduplicar com `event_id`. | Obrigatório antes de rodar Meta |
| **Google Ads tag + GA4** | Conversão de Google Ads e análise de funil | Obrigatório antes de rodar Google |
| **Google Tag Manager** (opcional) | Deixa o gestor de tráfego mexer nas tags sem deploy | Recomendado se o tráfego for gerido por outra pessoa |
| **Microsoft Clarity** (grátis) | Gravações de sessão e mapa de calor: mostra onde as pessoas param de rolar e o que tocam | Muito recomendado nas primeiras semanas |
| **Captura de UTM** | Guardar `utm_*`, `fbclid` e `gclid` em `sessionStorage` e colocar o código na mensagem do WhatsApp | Obrigatório |

**LGPD:** com pixels de anúncio, a página precisa de **política de privacidade** (Meta e Google também exigem) e banner de consentimento com Consent Mode. Hoje o site não tem política de privacidade: criar `/privacidade`.

---

## 9. Operação por trás da página

A página converte; a operação fecha a venda e sustenta a margem.

### Atendimento no WhatsApp (WhatsApp Business)
- **Velocidade de resposta é a tática nº 1 de conversão de lead.** Um lead de anúncio esfria em minutos. Mensagem de saudação automática + resposta humana rápida no horário comercial; mensagem de ausência fora dele.
- **Etiquetas** por etapa (Novo · Qualificado · Layout enviado · Fechado · Perdido) e **respostas rápidas** com o roteiro abaixo.
- **Catálogo** do WhatsApp Business com o "Site Essencial" e os upgrades.

### Roteiro sugerido
1. Saudação + "Qual o nome e o tipo do seu negócio?"
2. Qualificar: tem logo? fotos? Instagram? já tem domínio?
3. Enviar 2–3 exemplos do mesmo segmento (prints ou links).
4. Resumir a oferta em uma mensagem (preço, incluso, fidelidade, "só paga depois de aprovar").
5. Pedir o material e combinar o prazo, ou agendar uma chamada de 10 minutos.
6. Follow-up em 24 h e em 72 h para quem não respondeu.

### Produção em escala
- **Base única** de site para clientes: biblioteca de seções (hero, serviços, sobre, galeria, depoimentos, mapa, contato) + um arquivo de conteúdo por cliente + paletas pré-definidas. Novo cliente = preencher conteúdo + ajustar cores e logo.
- Hospedar todos no mesmo time/conta (ver alerta sobre o Vercel Hobby na seção 2).
- Contrato simples (1 página) com preço, fidelidade, alterações inclusas e regra de cancelamento. ⚠️ **Hoje a AG Custom não tem CNPJ** (ver pendencias.md). Para cobrança recorrente e nota fiscal, vale abrir (MEI ou outro enquadramento). Confirmar com um contador.

---

## 10. Tráfego: táticas para a pessoa chegar já interessada

### Meta Ads (Instagram/Facebook)
- **Objetivo:** campanha de **Vendas/Leads otimizada para o evento `Contact`** (clique no WhatsApp) da landing page. Em paralelo, testar uma campanha **"clique para WhatsApp"** direto (sem página) e comparar custo por **venda**, não por clique.
- **Message match:** o criativo mostra o mesmo preço e a mesma promessa da headline.
- **Criativos que funcionam para essa oferta:**
  - Gravação de tela do "site se montando" com o preço por cima (reaproveita a animação do hero).
  - "Antes e depois": Instagram/negócio sem site → site pronto no celular.
  - Carrossel por segmento ("Restaurante? Clínica? Salão? Seu site por R$ 150/mês").
  - Vídeo curto de um dos sócios falando direto para a câmera: "a gente não cobra pela criação, e eu te explico por quê".
  - Ganchos: "Quanto custa um site em 2026?", "Pare de pagar R$ X à vista por um site", "Seu negócio aparece no Google?".
- **Público:** começar amplo (região/estado ou Brasil, 25–60, interesses de pequenos negócios/empreendedorismo) e deixar o algoritmo otimizar pelo evento. Testar 3–5 criativos por conjunto.
- **Remarketing:** quem visitou a página e não clicou → anúncio de objeção ("Você só paga depois de aprovar", "O domínio é seu").

### Google Ads (Pesquisa)
Intenção mais alta e público já procurando.
- **Palavras-chave:** "criar site para empresa", "site profissional preço", "quanto custa um site", "site para pequena empresa", "fazer site para meu negócio", "site barato" e combinações com cidade ("criação de site Vitória").
- **Negativas:** grátis, gratuito, curso, como fazer, sozinho, wix, wordpress tutorial, emprego, vaga.
- O anúncio já mostra o preço no título ("Site Profissional por R$ 150/mês"), o que filtra quem não é público e reduz cliques inúteis.

### Funil e métricas (acompanhar toda semana)
```
Impressões → Clique no anúncio (CTR) → Visita na página → Clique no WhatsApp (taxa de conversão da página)
→ Conversa iniciada → Qualificado → Layout aprovado → Pagamento (taxa de fechamento)
```
- **Métrica que manda:** custo por cliente fechado (CAC) comparado com o CAC máximo da seção 2.
- Rodar 1–2 semanas antes de concluir qualquer coisa; mudar **uma variável por vez** (headline, criativo ou público).
- Clarity mostra onde a página perde gente. Se pouca gente chega ao card de preço, subir o preço na página ou encurtá-la.

---

## 11. Decisões pendentes

> **Decidido em 17/11/2026 (já aplicado na página):** sem fidelidade, cancela quando quiser e sem multa; alterações sem limite mensal por enquanto; o site não mostra valor de domínio, só que ele fica no nome do cliente. As recomendações de fidelidade, limite de alterações e custo do domínio nas seções 2 e 4 ficam como histórico.

- [ ] **Nome do plano** (ex.: "Site Essencial")
- [ ] **Preço fixo** R$ 150 (e atualizar o FAQ atual, que diz "a partir de")
- [ ] **Fidelidade** (recomendado: 12 meses) e **regra de cancelamento** antes/depois
- [ ] **O que inclui**: número de seções/páginas e **alterações por mês**
- [ ] **Domínio**: cliente paga e fica no nome dele (recomendado), ou incluso no plano
- [ ] **"Só paga depois de aprovar o layout"**: vão oferecer? (recomendado)
- [ ] **Prazo** prometido e condição ("24h depois de receber o material"?)
- [ ] **Preço real de um site avulso** da AG Custom (para a âncora no card de preço; se não houver, não usar âncora)
- [ ] **Tempo de resposta** no WhatsApp que conseguem cumprir
- [ ] **Hospedagem dos sites dos clientes** (Vercel Pro, Cloudflare Pages…) e custo por site
- [ ] **CNPJ / forma de cobrança recorrente / nota fiscal**
- [ ] **Quem gere o tráfego** (define se vale usar GTM)
- [ ] Depoimentos: pedir aos primeiros clientes do plano assim que o site for ao ar

---

## 12. Plano de execução

| Fase | Entrega | Depende de |
|---|---|---|
| 1 | Fechar a oferta (decisões da seção 11) | Vocês |
| 2 | Route groups `(site)`/`(oferta)`, `content/oferta.ts`, layout mínimo, todas as seções estáticas com a copy da variante A | Fase 1 |
| 3 | Animações (hero, seletor de segmento, preço, marquee, barra fixa) + layouts de exemplo por segmento | Fase 2 |
| 4 | WhatsApp com código UTM, política de privacidade, consentimento, Pixel + CAPI, GA4/Google Ads, Clarity, Speed Insights | Contas de anúncio (IDs do pixel/tag) |
| 5 | Teste em celular real, PageSpeed, eventos chegando no Gerenciador de Eventos/Google Ads; publicar | Fase 4 |
| 6 | Rodar anúncios, revisar números toda semana, testar variante B da headline | — |
| Em paralelo | Base única de site para produzir os clientes rápido | Decisão de hospedagem |
