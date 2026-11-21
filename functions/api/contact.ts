interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string; // inbox that receives messages
  CONTACT_FROM?: string; // verified Resend sender
}

const TOPICS = ["New project", "Collab", "Travel tips", "Just saying hi"];
const esc = (v: string) => v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO) return json({ error: "not_configured" }, 503);

  const b = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  if (str(b.company, 100)) return json({ ok: true }); // honeypot: pretend success

  const name = str(b.name, 120);
  const email = str(b.email, 200);
  const link = str(b.link, 300);
  const message = str(b.message, 5000);
  const topic = TOPICS.includes(str(b.topic, 40)) ? str(b.topic, 40) : "General";
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "invalid" }, 400);

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
        to: [env.CONTACT_TO],
        reply_to: email,
        subject: `[${topic}] ${name} via ashvinpanicker.com`,
        html: `<p><b>Topic:</b> ${esc(topic)}<br><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}${link ? `<br><b>Link:</b> ${esc(link)}` : ""}</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
      }),
    });
  } catch {
    return json({ error: "upstream" }, 502);
  }
  return res.ok ? json({ ok: true }) : json({ error: "send_failed" }, 502);
};
