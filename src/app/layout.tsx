import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { GlassPointer } from "@/components/ui/GlassPointer";
import { site } from "@/content/site";
import "@/styles/globals.scss";

// Fonte provisória (licença da PP Supply ainda não definida): Geist Sans + Geist Mono (OFL).
// Para trocar, altere aqui e mantenha as variáveis --font-geist-*; os tokens usam essas variáveis.
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  icons: { icon: "/logo.svg" },
};

export const viewport: Viewport = {
  themeColor: "#181A1C",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: `+${site.whatsapp.number}`,
  foundingDate: String(site.foundedYear),
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: "BR",
  },
  sameAs: [site.social.instagram.href, site.social.github.href],
};

const LENS_MAP =
  "data:image/svg+xml," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' preserveAspectRatio='none'>" +
      "<linearGradient id='x'><stop offset='0' stop-color='#800000'/><stop offset='0.08' stop-color='#cc0000'/>" +
      "<stop offset='0.5' stop-color='#800000'/><stop offset='0.92' stop-color='#330000'/><stop offset='1' stop-color='#800000'/></linearGradient>" +
      "<linearGradient id='y' x2='0' y2='1'><stop offset='0' stop-color='#008000'/><stop offset='0.22' stop-color='#00a800'/>" +
      "<stop offset='0.5' stop-color='#008000'/><stop offset='0.78' stop-color='#005700'/><stop offset='1' stop-color='#008000'/></linearGradient>" +
      "<rect width='1' height='1' fill='url(#x)'/><rect width='1' height='1' fill='url(#y)' style='mix-blend-mode:screen'/></svg>",
  );

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca JS disponível antes da 1ª pintura (evita "pisca" nas animações de entrada) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');setTimeout(function(){d.classList.add('reveal-fallback')},4000);" +
              // refração Liquid Glass: só Chromium (suporta SVG em backdrop-filter) e sem "reduzir transparência"
              "try{var u=navigator.userAgentData;if(u&&u.brands.some(function(b){return /Chromium/.test(b.brand)})&&!matchMedia('(prefers-reduced-transparency: reduce)').matches)d.classList.add('liquid')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="ambient" aria-hidden="true" />
        {/* Refração de lente do vidro "liquid" (backdrop-filter: url(#liquid-glass), só Chromium).
            Mapa: canal R desloca no eixo X, G no eixo Y. Neutro (#80) no centro, forte perto da borda. */}
        <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
          <filter id="liquid-glass" x="0" y="0" width="1" height="1" colorInterpolationFilters="sRGB">
            <feImage href={LENS_MAP} preserveAspectRatio="none" result="map" />
            <feDisplacementMap in="SourceGraphic" in2="map" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <RevealObserver />
        <GlassPointer />
      </body>
    </html>
  );
}
