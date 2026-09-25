import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const { societe, telephone, email } = data ?? {};
  if (!societe || !telephone || !email) {
    return NextResponse.json(
      { ok: false, error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  // NOTE (prototype): this logs the request instead of delivering it.
  // Wire this up to Signore Plast's mail/CRM (e.g. an SMTP provider via
  // env vars, or the existing PHP backend's endpoint) before going live.
  console.log("[devis] nouvelle demande de devis:", data);

  return NextResponse.json({ ok: true });
}
