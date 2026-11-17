import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/** Layout do site institucional: header com navegação completa + footer. */
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  );
}
