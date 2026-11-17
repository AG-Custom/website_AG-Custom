// Oferta "Site Essencial" — landing page de tráfego pago (/site-essencial).
// TODO o texto, preço e regras da oferta ficam aqui. Ver docs/estudo-oferta-site-mensal.md.
// Valores marcados com "decidir" seguem as recomendações do estudo e ainda podem mudar.

export const oferta = {
  slug: "/site-essencial",
  planName: "Site Essencial",
  price: 150, // R$/mês — preço fixo
  setupFee: 0, // taxa de criação
  // Sem fidelidade (cancela quando quiser) e alterações sem limite fixo por enquanto.
  deliveryPromise: "até 24h", // depois de receber o material (decidir a condição)

  whatsappMessage: "Olá! Vi o Site Essencial por R$ 150/mês e quero saber mais.",

  hero: {
    eyebrow: "Site Essencial · AG Custom",
    // Variante A do estudo (preço direto). Variante B: "Seu site pronto antes de você pagar qualquer coisa."
    titleBefore: "Seu site profissional por",
    titleAccent: "R$ 150/mês.",
    titleAfter: "Sem pagar pela criação.",
    lead: "A gente cria, hospeda e cuida de tudo. Você só paga a mensalidade, e só depois de aprovar o layout.",
    cta: "Quero meu site",
    risk: ["R$ 0 de criação", "No ar em até 24h depois do material", "Você aprova antes de pagar"],
  },

  // "Como funciona": 3 passos em linguagem do dia a dia (o público não é da área de tecnologia).
  steps: [
    {
      icon: "whatsapp",
      when: "Hoje",
      title: "Chame no WhatsApp",
      text: "Conte sobre o seu negócio e mande seu logo e algumas fotos.",
    },
    {
      icon: "approve",
      when: "Em até 24h",
      title: "Veja e aprove",
      text: "Mostramos o seu site pronto. Quer mudar algo? A gente ajusta até você gostar.",
    },
    {
      icon: "live",
      when: "Depois que você aprovar",
      title: "Seu site no ar",
      text: "Só agora você começa a pagar: R$ 150 por mês, com tudo incluso.",
    },
  ],
  stepsNote: {
    title: "Você só paga depois de aprovar.",
    text: "Não gostou? Não paga nada.",
  },

  included: [
    "Site completo de 1 página com a sua marca",
    "Versão para celular, tablet e computador",
    "Hospedagem rápida + cadeado de segurança (HTTPS)",
    "Botão de WhatsApp, mapa e redes sociais",
    "Alterações sempre que precisar (textos, fotos, preços)",
    "Manutenção e suporte direto com quem desenvolve",
    "Google encontrando o seu site (SEO básico)",
  ],
  notIncluded: "Domínio (seunegocio.com.br), registrado sempre no seu nome.",

  comparison: {
    columns: ["Site tradicional", "Site Essencial"],
    rows: [
      { label: "Pagamento para criar", traditional: "À vista ou parcelado", ours: "R$ 0" },
      { label: "Hospedagem", traditional: "Você contrata e paga à parte", ours: "Inclusa" },
      { label: "Mudanças no site", traditional: "Cobradas por pedido", ours: "Inclusas, sempre que precisar" },
      { label: "Problema técnico", traditional: "Você resolve", ours: "A gente resolve" },
      { label: "Suporte", traditional: "Varia", ours: "WhatsApp direto com o dev" },
    ],
  },

  guarantees: [
    { title: "O domínio é seu.", text: "Registrado no seu nome, sempre. Se um dia sair, o endereço vai com você." },
    { title: "Você aprova antes de pagar.", text: "Não gostou do layout? Não paga nada." },
    {
      title: "Sem surpresa.",
      text: "R$ 150/mês, sem fidelidade. Cancele quando quiser, sem multa.",
    },
  ],

  faq: [
    {
      question: "Tem alguma taxa além dos R$ 150 por mês?",
      answer:
        "Não. A criação custa R$ 0. O único custo à parte é o domínio (seunegocio.com.br), registrado no seu nome.",
    },
    {
      question: "Por que vocês não cobram pela criação?",
      answer:
        "Porque preferimos uma relação de longo prazo. A mensalidade cobre a criação, a hospedagem e a manutenção enquanto o site estiver no ar, e você não precisa desembolsar um valor alto de uma vez.",
    },
    {
      question: "Tem fidelidade? E se eu quiser cancelar?",
      answer:
        "Não tem fidelidade. Você pode cancelar quando quiser, sem multa.",
    },
    {
      question: "O site e o domínio ficam no meu nome?",
      answer:
        "O domínio fica sempre no seu nome. Se cancelar, você pode comprar o site para levar a outra hospedagem. Combinamos o valor na conversa.",
    },
    {
      question: "Quanto tempo leva para ficar pronto?",
      answer:
        "Até 24 horas depois que recebemos o seu material (logo, fotos e textos). Se você ainda não tem textos, ajudamos a escrever e o prazo é combinado na conversa.",
    },
    {
      question: "O que eu preciso enviar?",
      answer:
        "Logo (se tiver), fotos do seu negócio ou dos seus produtos, os serviços que você oferece, endereço, horários e redes sociais. A gente organiza tudo.",
    },
    {
      question: "Posso pedir mudanças depois que o site estiver no ar?",
      answer:
        "Pode. Você pede alterações sempre que precisar, como trocar textos, fotos ou preços. Mudanças maiores (novas páginas, por exemplo) são orçadas à parte.",
    },
    {
      question: "Funciona para o meu tipo de negócio?",
      answer:
        "Sim. Já criamos projetos para saúde, agro, comércio e serviços. O layout é feito com a sua marca, não é um modelo genérico igual para todo mundo.",
    },
    {
      question: "Preciso de mais páginas, loja ou agendamento. Dá?",
      answer:
        "Dá. Também fazemos lojas, sistemas sob medida e gestão de tráfego. Fale com a gente pelo WhatsApp e montamos uma proposta.",
    },
    {
      question: "Como é feito o pagamento?",
      answer: "Por cobrança mensal recorrente, que só começa depois que você aprova o layout do site.",
    },
  ],
} as const;

/**
 * Sites de EXEMPLO por segmento (negócios fictícios, não são clientes) para o hero e o seletor
 * da landing page. Avaliações e preços também são fictícios e a página sempre rotula "Exemplo".
 * As cores e a fonte são do site do exemplo, não do design system da AG Custom.
 */
export const segments = [
  {
    id: "restaurante",
    label: "Restaurante",
    icon: "food",
    business: "Cantina da Praça",
    domain: "cantinadapraca.com.br",
    eyebrow: "Cozinha italiana · desde 2009",
    headline: "Massa fresca feita todos os dias",
    sub: "Almoço executivo, jantar à la carte e delivery no bairro.",
    cta: "Ver cardápio",
    secondary: "Reservar mesa",
    rating: "4,9 · 1.240 avaliações",
    info: ["Aberto hoje · 11h às 23h", "Praia do Canto"],
    nav: ["Cardápio", "Delivery", "Contato"],
    services: [
      { title: "Massas artesanais", meta: "a partir de R$ 42" },
      { title: "Almoço executivo", meta: "seg a sex · R$ 39" },
      { title: "Delivery", meta: "raio de 5 km" },
    ],
    font: "serif",
    palette: { bg: "#1c1410", surface: "#2a1d16", text: "#f6ead9", accent: "#e0703a", art: "#7a2e12" },
  },
  {
    id: "clinica",
    label: "Clínica",
    icon: "health",
    business: "Clínica Bem Estar",
    domain: "clinicabemestar.com.br",
    eyebrow: "Clínica médica · 12 especialidades",
    headline: "Cuidado completo para a sua saúde",
    sub: "Consultas, exames e retorno no mesmo lugar, com agenda pelo WhatsApp.",
    cta: "Agendar consulta",
    secondary: "Convênios",
    rating: "4,8 · 860 avaliações",
    info: ["Seg a sáb · 7h às 19h", "Jardim da Penha"],
    nav: ["Especialidades", "Convênios", "Equipe"],
    services: [
      { title: "Clínico geral", meta: "consulta em até 48h" },
      { title: "Cardiologia", meta: "exames no local" },
      { title: "Pediatria", meta: "atendimento infantil" },
    ],
    font: "sans",
    palette: { bg: "#f3f8f7", surface: "#ffffff", text: "#12302d", accent: "#14917f", art: "#bfe5df" },
  },
  {
    id: "advocacia",
    label: "Advocacia",
    icon: "law",
    business: "Martins Advocacia",
    domain: "martinsadvocacia.com.br",
    eyebrow: "OAB/ES · 15 anos de atuação",
    headline: "Orientação jurídica clara e próxima",
    sub: "Família, trabalhista e consumidor, com atendimento presencial ou online.",
    cta: "Falar com um advogado",
    secondary: "Áreas de atuação",
    rating: "5,0 · 210 avaliações",
    info: ["Seg a sex · 9h às 18h", "Enseada do Suá"],
    nav: ["Atuação", "Escritório", "Contato"],
    services: [
      { title: "Família", meta: "divórcio, guarda e pensão" },
      { title: "Trabalhista", meta: "rescisão e horas extras" },
      { title: "Consumidor", meta: "cobranças e contratos" },
    ],
    font: "serif",
    palette: { bg: "#11131a", surface: "#1b1e29", text: "#ecebe6", accent: "#c8a45a", art: "#3a3220" },
  },
  {
    id: "salao",
    label: "Salão",
    icon: "beauty",
    business: "Studio Aura",
    domain: "studioaura.com.br",
    eyebrow: "Cabelo · unhas · estética",
    headline: "Seu momento de cuidado, do seu jeito",
    sub: "Corte, coloração e tratamentos com hora marcada pelo WhatsApp.",
    cta: "Agendar horário",
    secondary: "Ver preços",
    rating: "4,9 · 530 avaliações",
    info: ["Ter a sáb · 9h às 20h", "Mata da Praia"],
    nav: ["Serviços", "Galeria", "Preços"],
    services: [
      { title: "Corte e escova", meta: "a partir de R$ 80" },
      { title: "Coloração", meta: "a partir de R$ 160" },
      { title: "Manicure", meta: "a partir de R$ 35" },
    ],
    font: "serif",
    palette: { bg: "#fbf3f5", surface: "#ffffff", text: "#3b1d2a", accent: "#c2477c", art: "#f2c9d8" },
  },
  {
    id: "loja",
    label: "Loja",
    icon: "shop",
    business: "Casa Bonita Decor",
    domain: "casabonitadecor.com.br",
    eyebrow: "Decoração e presentes",
    headline: "Decoração que deixa sua casa com a sua cara",
    sub: "Peças selecionadas, entrega na Grande Vitória e retirada na loja.",
    cta: "Ver produtos",
    secondary: "Como comprar",
    rating: "4,8 · 390 avaliações",
    info: ["Seg a sáb · 9h às 19h", "Centro de Vila Velha"],
    nav: ["Produtos", "Novidades", "Loja"],
    services: [
      { title: "Almofadas", meta: "a partir de R$ 59" },
      { title: "Vasos e cachepôs", meta: "a partir de R$ 45" },
      { title: "Quadros", meta: "a partir de R$ 89" },
    ],
    font: "sans",
    palette: { bg: "#14150f", surface: "#212318", text: "#f1f0e4", accent: "#b5c64f", art: "#3b4318" },
  },
  {
    id: "servicos",
    label: "Serviços",
    icon: "tools",
    business: "Fix Reformas",
    domain: "fixreformas.com.br",
    eyebrow: "Reformas residenciais e comerciais",
    headline: "Reformas sem dor de cabeça, no prazo",
    sub: "Orçamento sem compromisso, equipe própria e garantia em todos os serviços.",
    cta: "Pedir orçamento",
    secondary: "Obras feitas",
    rating: "4,9 · 180 avaliações",
    info: ["Seg a sáb · 8h às 18h", "Toda a Grande Vitória"],
    nav: ["Serviços", "Obras", "Orçamento"],
    services: [
      { title: "Pintura", meta: "interna e externa" },
      { title: "Elétrica e hidráulica", meta: "pequenos reparos" },
      { title: "Reforma completa", meta: "com projeto" },
    ],
    font: "sans",
    palette: { bg: "#0f141c", surface: "#18202c", text: "#e8eef7", accent: "#f2a33a", art: "#3d2a10" },
  },
] as const;

export type Segment = (typeof segments)[number];

export const formatPrice = (value: number) => `R$ ${value.toLocaleString("pt-BR")}`;
