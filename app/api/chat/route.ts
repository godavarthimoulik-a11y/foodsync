import { NextResponse } from "next/server"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function toGeminiRole(role: ChatMessage["role"]) {
  return role === "assistant" ? "model" : "user"
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { messages?: ChatMessage[] }

    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json({ error: "Missing messages" }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.gemini_api_key
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GEMINI_API_KEY (set it in .env.local)" },
        { status: 500 },
      )
    }

    const model = process.env.GEMINI_MODEL || "gemini-2.0-flash"

    const contents = body.messages
      .map((m) => ({
        role: toGeminiRole(m.role),
        parts: [{ text: String(m.content ?? "") }],
      }))
      .filter((c) => c.parts[0].text.trim().length > 0)

    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent` +
      `?key=${encodeURIComponent(apiKey)}`

    const geminiRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.6,
        },
      }),
    })

    const data = (await geminiRes.json()) as any

    if (!geminiRes.ok) {
      const message = data?.error?.message || "Gemini API error"
      return NextResponse.json({ error: message }, { status: geminiRes.status })
    }

    const replyText =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: any) => p?.text)
        .filter(Boolean)
        .join("")
        ?.trim() || ""

    return NextResponse.json({ reply: replyText })
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
