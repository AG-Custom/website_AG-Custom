# Pendências — material e decisões para o redesign

## Status após a implementação (16/11/2026)

O redesign foi implementado no branch `redesign` com as respostas abaixo. **Ainda em aberto / a confirmar:**

- [ ] **Fonte:** sem licença da PP Supply, usei **Geist Mono + Geist Sans** (gratuitas, mesma lógica Mono + Sans). Confirmar se aprovam ou se preferem comprar a PP Supply.
- [ ] **Preço:** o FAQ diz "Sites **a partir de** R$ 150". Confirmar se é preço fixo ou "a partir de".
- [ ] **Prazo:** "Sites ficam prontos em até 24 horas **depois que recebemos as informações e o conteúdo**". Confirmar a condição.
- [ ] **Papel da AG Custom** nos cases está como "Design e desenvolvimento" em todos. Ajustar onde não for o caso.
- [ ] **Anos de experiência:** exibido como "6 anos de experiência da equipe" (a empresa é de 2025). Confirmar a redação.
- [ ] **E-mail:** mantive `agcustomltda@gmail.com`. Se criarem `contato@agcustom.com.br`, troque em `src/content/site.ts`.
- [ ] **Telefone antigo** `(27) 99792-0801` foi removido; o site usa só o WhatsApp `(27) 99725-5016`.
- [ ] **Imagens dos projetos:** são capturas provisórias que tirei dos sites em produção. Para AgroPulse e AG Clinical mostram a tela de login. Enviar telas internas (dashboards, agenda etc.) melhora muito esses cases.
- [ ] **Stack do site de tráfego** detectada como Vue + Vite (não há repositório local). Confirmar.
- [ ] **Desafio/resultado** de cada case: hoje cada página mostra visão geral, funcionalidades e tecnologias. Quando houver textos de resultado e depoimentos, há espaço previsto em `src/content/projects.ts`.
- [ ] **API do formulário:** mantida como estava (precisa de `API_URL` e `API_KEY` na Vercel). Se ficar fora do ar, o formulário oferece o WhatsApp.

---


_Checklist do que preciso receber para seguir com o redesign. Marque `[x]` conforme for enviando. Itens com 🔴 bloqueiam a Fase 2; 🟡 melhoram muito o resultado; ⚪ são opcionais._

Pode mandar tudo numa pasta (Drive, ZIP etc.) com uma subpasta por projeto. Textos podem vir em rascunho, eu reviso e padronizo o tom.

---

## 1. Decisões

- [X] 🔴 **Fonte do texto corrido:** só PP Supply Mono, ou Mono (títulos) + **PP Supply Sans** (textos)? Ver [direcao-redesign.md §1](direcao-redesign.md).
- [Definir alternativa] 🔴 **Licença da fonte:** vocês têm licença web da PP Supply Mono (e da Sans, se for usar)? Se sim, enviar os arquivos `.woff2`/`.otf` da licença. Se não, comprar na Pangram Pangram ou definir uma alternativa.
- [Sem Segmento. Oferecemos para todos.] 🟡 **Público principal:** confirmar para quem é o site (ex.: pequenos e médios negócios, profissionais liberais, saúde, gastronomia…). Algum segmento que vocês querem atrair mais?
- [ Continuam os mesmos e adicione manutencao e hospedagem] 🟡 **Serviços:** continuam Sites, Apps e Sistemas? Algum novo (manutenção, hospedagem, identidade visual, SEO)?
- [Cursor reativo] ⚪ Momento interativo no hero: querem algo sutil (grid/cursor reativo) ou hero 100% estático com tela de projeto?
- [FAQ] ⚪ Páginas extras: **Sobre/Equipe** e **FAQ** entram nesta versão?

## 2. Textos institucionais

- [Criamos sites, aplicativos e sistemas sob medida para transformar ideias e necessidades de negócio em soluções digitais funcionais, estratégicas e com identidade própria.] 🔴 **Proposta de valor** em 1 frase: o que fazem + para quem. Tenho um rascunho em [direcao-redesign.md §2](direcao-redesign.md) para vocês ajustarem.
- [Contato diretamente com desenvolvedores, duvidas e etc.] 🔴 **Diferenciais (3 a 4):** por que contratar a AG Custom e não outra empresa ou um freelancer? Coisas concretas (ex.: falar direto com quem desenvolve, prazo, suporte pós-entrega, código próprio sem template).
- [Sites em até 24h e Sistemas a estipular ainda] 🟡 **Processo de trabalho:** como um projeto acontece de verdade, do primeiro contato à entrega. Etapas, prazo médio e o que o cliente precisa fornecer.
- [Quanto tempo leva, Quanto custa - Site 150 reais, sistemas a verificar, fazemos manuntencao, corrigimos bugs, implementamos novas features] 🟡 **FAQ:** 4 a 6 perguntas que clientes sempre fazem (quanto custa, quanto tempo leva, fazem manutenção, cuidam de hospedagem/domínio, o site é meu?).
- [Sobre a Organização
Fundada em 2025 por dois colegas da área de Tecnologia da Informação, a AG Custom nasceu com o propósito de oferecer soluções digitais sob medida, como websites, aplicativos e sistemas personalizados.

Nosso foco é entregar produtos de alta qualidade, combinando uma excelente experiência do usuário, escalabilidade e desempenho de alto nível. Acreditamos que a tecnologia deve ser acessível, eficiente e adaptada às necessidades de cada cliente.

Estamos sempre atentos às tendências e inovações do mercado, buscando incorporar as melhores práticas e tecnologias em nossos projetos. Assim, garantimos soluções modernas, sustentáveis e prontas para crescer junto com os nossos clientes.

Visão
Ser referência nacional em soluções digitais personalizadas, reconhecida pela inovação, qualidade técnica e compromisso com o sucesso dos nossos clientes.

Missão
Entregar produtos digitais sob medida que unam design, tecnologia e performance, proporcionando aos nossos clientes soluções eficientes, escaláveis e de alto impacto no mercado.

Valores
Excelência: Buscamos sempre a máxima qualidade em cada entrega.
Inovação: Estamos em constante evolução, adotando as melhores tecnologias e práticas do mercado.
Compromisso: Assumimos cada projeto como uma parceria de sucesso.] ⚪ **Sobre:** história da AG Custom (ano de fundação, cidade), quem são os sócios, mini-bio e papel de cada um.
- [Projetos entregue= +10, Clientes atendidos = +10, anos de experiencia = 6] ⚪ **Números reais**, se existirem: projetos entregues, anos de experiência, clientes atendidos. Não vamos inventar números.

## 3. Projetos (para cada um)

Enviar para **BarberMap, Portfólio de Arquitetura (Brunelly Baiocco), Ceci's e Psicóloga Amanda**, e para qualquer projeto novo que queiram incluir:

(Vou alterar os projetos aqui. Na verdade nao sao mais esses.)

Segue:
Sistema web · Gestão agrícola

AgroPulse
Sistema de gestão agrícola integrada. Reúne empresas, unidades e operações, com indicadores para decisão no dia a dia do campo.

Funcionalidades

Gestão integrada de empresas, unidades e operações
Indicadores para decisão
Fluxos pensados para a rotina do campo
Nota fiscal
Conciliacao bancaria

Link: https://www.agropulse.net.br/


Plataforma SaaS · Gestão de clínicas

AG Clinical
Plataforma para gerenciar a clínica, com agenda, prontuário eletrônico do paciente e financeiro ligado à operação.

Funcionalidades

Agenda e agendamentos integrados
Prontuário eletrônico do paciente
Financeiro conectado à operação
Cadastro aberto e convite de membros por e-mail

Link: https://clinical.agcustom.com.br/


Site institucional e catálogo

VAE Mobility
Site da VAE Mobility para apresentar motocicletas e triciclos elétricos, com catálogo de modelos e atendimento pelo WhatsApp.

Funcionalidades

Catálogo por categoria: motocicletas e triciclos
Modelos em destaque com preço ou “consulte”
Ficha técnica por modelo: motor, bateria e autonomia
Pedido de orçamento e contato pelo WhatsApp
Perguntas frequentes

Link:https://www.vaemobility.com.br/


Alexandre Baiocco — Gestão de Tráfego
Site de gestão de tráfego para negócios locais, marcas e profissionais, com foco em Meta Ads, Google Ads e rastreamento.

https://trafego.agcustom.com.br/

Psicóloga Amanda Rudio
Site de psicoterapia online da psicóloga Amanda Rudio, com foco em autoestima, autoconfiança e atendimento para mulheres adultas e idosas.

https://psi-amanda.rudio1.com.br/

Pode olhar as funcionalidades diretamente em cada projeto. Eles estao em.
C:\Users\Guilherme\Documents\Agropulse
C:\Users\Guilherme\Documents\VaeMobilty
C:\Users\Guilherme\Documents\Amanda
C:\Users\Guilherme\Documents\ClinicalBackEnd
C:\Users\Guilherme\Documents\ClinicalFrontEnd

- [X] 🟡 **Resultado:** o que mudou para o cliente (número, feedback, "passou a receber agendamentos pelo site" etc.).
- [Verifique em cada projeto] 🔴 **Metadados:** ano, tipo (site/app/sistema), stack usada, duração, o papel da AG Custom.
- [X] 🟡 **Autorização** do cliente para exibir o projeto e o nome (principalmente os de saúde).
- [Por enquanto sem] 🟡 **Depoimento** curto do cliente, com nome e cargo/negócio.
- [ ] 🟡 **Imagens:**
  Por enquanto Sem, depois te envio. As logos voce pode buscar diretamente nos projetos.

## 4. Marca

- [X] 🟡 **Logo AG Custom em vetor (SVG)** nas versões completa, só símbolo, branca e escura. Hoje só existe o `logo_footer.svg`.


## 5. Contato e dados da empresa

- [x] 🔴 **E-mail de contato oficial:** manter `agcustomltda@gmail.com` ou usar um de domínio próprio?
- [27997255016] 🔴 **WhatsApp comercial** (número e se pode ir no site com link direto). 
- [https://www.instagram.com/ag.custonn/] 🟡 **Redes sociais:** Instagram, LinkedIn, Behance/Dribbble (se tiverem).
- [https://www.agcustom.com.br/] 🟡 **Domínio final** do site (para SEO, Open Graph e sitemap).
- [Sem cnpj, Vitoria ES] ⚪ CNPJ, cidade/estado para o rodapé e para os dados estruturados (`LocalBusiness`).

## 6. Técnico

- [Por enquanto ignore essa comunicacao Externa] 🟡 **API externa do formulário** (`API_URL`): quem mantém? Aceita campos novos (tipo de projeto, prazo, orçamento)? Para onde vão os contatos (e-mail, CRM, planilha)?
- [Nao usamos] 🟡 **Analytics:** usam algum hoje? Preferência (Vercel Analytics, Google Analytics, Plausible)?
- [Posso liberar] ⚪ Acesso ao projeto na **Vercel** (para preview por branch durante o redesign).
- [Nao] ⚪ Vão desenhar no **Figma** antes de codar, ou prefere que eu vá direto para protótipo em código?

---

### O que eu consigo adiantar sem esperar nada
- Fase 0 (limpeza técnica) e Fase 1 (tokens, componentes, `/design-system`, header acessível).
- Capturas de tela dos 3 sites no ar, assim que as URLs forem confirmadas.
- Wireframes de baixa fidelidade das páginas com textos provisórios.
