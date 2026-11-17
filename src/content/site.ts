// Dados institucionais. Edite aqui — todo o site lê deste arquivo.

const whatsappNumber = "5527997255016";

export const site = {
  name: "AG Custom",
  url: "https://www.agcustom.com.br",
  title: "AG Custom — Sites, aplicativos e sistemas sob medida",
  description:
    "Criamos sites, aplicativos e sistemas sob medida para transformar ideias e necessidades de negócio em soluções digitais funcionais, estratégicas e com identidade própria.",
  locale: "pt_BR",
  foundedYear: 2025,
  city: "Vitória",
  state: "ES",
  email: "agcustomltda@gmail.com",
  whatsapp: {
    number: whatsappNumber,
    display: "(27) 99725-5016",
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Olá, AG Custom! Quero conversar sobre um projeto.",
    )}`,
  },
  social: {
    instagram: { handle: "@ag.custonn", href: "https://www.instagram.com/ag.custonn/" },
    github: { handle: "AG-Custom", href: "https://github.com/AG-Custom" },
  },
} as const;

export const nav = [
  { href: "/projetos", label: "Projetos" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/faq", label: "FAQ" },
  { href: "/contatos", label: "Contato" },
] as const;

export const stats = [
  { value: "+10", label: "projetos entregues" },
  { value: "+10", label: "clientes atendidos" },
  { value: "6", label: "anos de experiência da equipe" },
  { value: "24h", label: "para colocar seu site no ar" },
] as const;
