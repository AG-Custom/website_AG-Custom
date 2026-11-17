// Portfólio. Para adicionar um projeto: inclua um item aqui e as imagens em
// public/projects/<slug>/desktop.webp (2400px) e mobile.webp (780px).
// As imagens atuais são capturas provisórias dos sites em produção.

export type ProjectKind = "Sistema web" | "Plataforma SaaS" | "Site institucional";

export type Project = {
  slug: string;
  name: string;
  category: string; // linha de contexto: "Sistema web · Gestão agrícola"
  kind: ProjectKind;
  tagline: string; // uma frase curta para cards
  summary: string; // parágrafo de visão geral
  features: string[];
  stack: string[];
  year: number;
  url: string;
  images: {
    desktop: string;
    mobile: string;
    alt: string;
  };
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "agropulse",
    name: "AgroPulse",
    category: "Sistema web · Gestão agrícola",
    kind: "Sistema web",
    tagline: "Gestão agrícola integrada, do campo à decisão.",
    summary:
      "Sistema de gestão agrícola integrada. Reúne empresas, unidades e operações, com indicadores para decisão no dia a dia do campo.",
    features: [
      "Gestão integrada de empresas, unidades e operações",
      "Indicadores para decisão",
      "Fluxos pensados para a rotina do campo",
      "Emissão de nota fiscal",
      "Conciliação bancária",
    ],
    stack: ["Vue 3", "Quasar", "TypeScript", ".NET 10", "SQL Server"],
    year: 2026,
    url: "https://www.agropulse.net.br/",
    images: {
      desktop: "/projects/agropulse/desktop.webp",
      mobile: "/projects/agropulse/mobile.webp",
      alt: "Tela de acesso do AgroPulse, com o resumo dos recursos de gestão agrícola",
    },
    featured: true,
  },
  {
    slug: "ag-clinical",
    name: "AG Clinical",
    category: "Plataforma SaaS · Gestão de clínicas",
    kind: "Plataforma SaaS",
    tagline: "A clínica inteira em um só lugar: agenda, prontuário e financeiro.",
    summary:
      "Plataforma para gerenciar a clínica, com agenda, prontuário eletrônico do paciente e financeiro ligado à operação.",
    features: [
      "Agenda e agendamentos integrados",
      "Prontuário eletrônico do paciente",
      "Financeiro conectado à operação",
      "Cadastro aberto e convite de membros por e-mail",
    ],
    stack: ["Vue 3", "Quasar", "FullCalendar", ".NET 10", "SQL Server"],
    year: 2026,
    url: "https://clinical.agcustom.com.br/",
    images: {
      desktop: "/projects/ag-clinical/desktop.webp",
      mobile: "/projects/ag-clinical/mobile.webp",
      alt: "Tela de entrada do AG Clinical com agenda, prontuário e financeiro em destaque",
    },
    featured: true,
  },
  {
    slug: "vae-mobility",
    name: "VAE Mobility",
    category: "Site institucional e catálogo",
    kind: "Site institucional",
    tagline: "Catálogo de motocicletas e triciclos elétricos com atendimento pelo WhatsApp.",
    summary:
      "Site da VAE Mobility para apresentar motocicletas e triciclos elétricos, com catálogo de modelos e atendimento pelo WhatsApp.",
    features: [
      "Catálogo por categoria: motocicletas e triciclos",
      "Modelos em destaque com preço ou “consulte”",
      "Ficha técnica por modelo: motor, bateria e autonomia",
      "Pedido de orçamento e contato pelo WhatsApp",
      "Perguntas frequentes",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", ".NET 10"],
    year: 2026,
    url: "https://www.vaemobility.com.br/",
    images: {
      desktop: "/projects/vae-mobility/desktop.webp",
      mobile: "/projects/vae-mobility/mobile.webp",
      alt: "Página inicial da VAE Mobility com uma scooter elétrica em destaque",
    },
    featured: true,
  },
  {
    slug: "alexandre-baiocco-trafego",
    name: "Alexandre Baiocco",
    category: "Site institucional · Gestão de tráfego",
    kind: "Site institucional",
    tagline: "Estratégia para transformar atenção em crescimento.",
    summary:
      "Site de gestão de tráfego para negócios locais, marcas e profissionais, com foco em Meta Ads, Google Ads e rastreamento.",
    features: [
      "Apresentação do método: diagnóstico, planejamento, campanhas, medição e otimização",
      "Serviços de Meta Ads, Google Ads e rastreamento",
      "Seção sobre o profissional e perguntas frequentes",
      "Chamada para análise estratégica pelo WhatsApp",
    ],
    stack: ["Vue", "Vite"],
    year: 2026,
    url: "https://trafego.agcustom.com.br/",
    images: {
      desktop: "/projects/alexandre-baiocco-trafego/desktop.webp",
      mobile: "/projects/alexandre-baiocco-trafego/mobile.webp",
      alt: "Página inicial do site de gestão de tráfego de Alexandre Baiocco",
    },
    featured: false,
  },
  {
    slug: "psicologa-amanda-rudio",
    name: "Psicóloga Amanda Rudio",
    category: "Site institucional · Saúde mental",
    kind: "Site institucional",
    tagline: "Psicoterapia online com acolhimento, do primeiro clique à primeira sessão.",
    summary:
      "Site de psicoterapia online da psicóloga Amanda Rudio, com foco em autoestima, autoconfiança e atendimento para mulheres adultas e idosas.",
    features: [
      "Apresentação dos serviços e da abordagem terapêutica",
      "Blog com área administrativa para publicar e arquivar posts",
      "Página da mentoria Mulher Radiante",
      "Quiz interativo",
      "Contato direto para agendamento",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    year: 2025,
    url: "https://psi-amanda.rudio1.com.br/",
    images: {
      desktop: "/projects/psicologa-amanda-rudio/desktop.webp",
      mobile: "/projects/psicologa-amanda-rudio/mobile.webp",
      alt: "Página inicial do site da psicóloga Amanda Rudio",
    },
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
