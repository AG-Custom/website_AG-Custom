import { NextRequest, NextResponse } from "next/server";

// Contrato com a API externa mantido: { name, email, phone, assunto } + header x-api-key.
// Requer API_URL e API_KEY no ambiente.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  // Honeypot: bots preenchem o campo oculto. Responde sucesso sem enviar.
  if (str(body.website, 200)) {
    return NextResponse.json({ success: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 160);
  const phone = str(body.phone, 30);
  const assunto = str(body.assunto, 4000);

  if (!name || !email || !assunto) {
    return NextResponse.json({ error: "Campos obrigatórios: name, email, assunto" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
  }

  const apiUrl = process.env.API_URL;
  if (!apiUrl) {
    console.error("API_URL não configurada: formulário de contato indisponível");
    return NextResponse.json({ error: "Serviço indisponível" }, { status: 503 });
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY ?? "",
      },
      body: JSON.stringify({ name, email, phone, assunto }),
    });

    if (!response.ok) {
      console.error("Erro da API externa:", response.status, await response.text());
      return NextResponse.json({ error: "Erro ao enviar" }, { status: 502 });
    }

    const data = await response.json().catch(() => null);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro na API route:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
