// Serves the static export from ./out and handles the contact form.
// RESEND_API_KEY is a Worker secret (Settings → Variables and secrets).

const TO = 'agnjkafgh@gmail.com';

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

async function contact(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }
  const senderEmail = String(body?.senderEmail ?? '').trim();
  const message = String(body?.message ?? '').trim();
  if (!senderEmail || !message) return json({ error: 'Both senderEmail and message are required.' }, 400);
  if (senderEmail.length > 500 || message.length > 5000) return json({ error: 'Message too long.' }, 400);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [TO],
      reply_to: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail) ? senderEmail : undefined,
      subject: 'Message from Contact Form',
      html: `<p><strong>From:</strong> ${esc(senderEmail)}</p><p><strong>Message:</strong> ${esc(message).replace(/\n/g, '<br>')}</p>`,
    }),
  });
  if (!res.ok) return json({ error: 'Failed to send email.' }, 500);
  return json({ success: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      return request.method === 'POST' ? contact(request, env) : json({ error: 'Method not allowed.' }, 405);
    }
    // Old dynamic OG image URL, still cached by social sites.
    if (url.pathname === '/api/og') return Response.redirect(new URL('/og.png', url).toString(), 301);

    return env.ASSETS.fetch(request);
  },
};
