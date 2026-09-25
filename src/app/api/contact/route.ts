import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const { societe, email, telephone, message } = data ?? {};
  if (!societe || !email || !telephone || !message) {
    return NextResponse.json(
      { ok: false, error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  // NOTE (prototype): this logs the message instead of delivering it.
  // Wire this up to Signore Plast's mail/CRM before going live.
  console.log("[contact] nouveau message:", data);

  return NextResponse.json({ ok: true });
}
