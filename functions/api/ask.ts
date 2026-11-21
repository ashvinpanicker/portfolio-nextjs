import { profileText } from "../../src/content/profile-text";

interface Env {
  ANTHROPIC_API_KEY?: string;
}
type Msg = { role: "user" | "assistant"; content: string };

const MODEL = "claude-haiku-5-5";

const SYSTEM = (profile: string) => `You are the AI assistant on Ashvin Panicker's portfolio website. Visitors are mostly potential clients.

Rules:
- Answer only from the profile below. If it isn't there, say you don't know and suggest the contact form.
- Never quote prices, rates or exact timelines. Explain that Ashvin scopes each project on a short call and proposes a fixed fee.
- Never invent clients, numbers, results or promises.
- Be warm, direct and brief: 2–5 sentences, plain text, no markdown headings.
- Refer to him as "Ashvin". You are not Ashvin.
- If the visitor sounds like a real lead, end by inviting them to use the contact form on the homepage.
- Politely decline unrelated requests (coding help, essays, other topics): you're only here to talk about Ashvin's work.

PROFILE
${profile}`;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.ANTHROPIC_API_KEY) return json({ error: "not_configured" }, 503);

  let messages: Msg[];
  try {
    const body = (await request.json()) as { messages?: Msg[] };
    messages = (body.messages ?? [])
      .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-8)
      .map((m) => ({ role: m.role, content: m.content.slice(0, 1000) }));
  } catch {
    return json({ error: "bad_request" }, 400);
  }
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") return json({ error: "bad_request" }, 400);

  let res: Response;
  try {
    res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 400, system: SYSTEM(profileText()), messages }),
    });
  } catch {
    return json({ error: "upstream" }, 502);
  }
  if (!res.ok) return json({ error: "upstream" }, 502);
  const data = (await res.json()) as { content?: { type: string; text?: string }[] };
  const answer = data.content?.filter((c) => c.type === "text").map((c) => c.text).join("").trim();
  return answer ? json({ answer }) : json({ error: "empty" }, 502);
};
