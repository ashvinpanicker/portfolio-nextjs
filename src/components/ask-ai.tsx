"use client";

import { useState } from "react";
import clsx from "clsx";

const SUGGESTIONS = [
  "What kind of projects do you take on?",
  "Can you build my MVP in a few weeks?",
  "How do you use AI in your work?",
  "What's Ashvin like to work with?",
];

type Msg = { role: "user" | "assistant"; content: string };

export default function AskAI() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  async function ask(q: string) {
    const question = q.trim();
    if (!question || busy) return;
    const next: Msg[] = [...msgs, { role: "user", content: question }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-8) }),
      });
      const data = (await res.json().catch(() => ({}))) as { answer?: string };
      setMsgs([...next, { role: "assistant", content: data.answer ?? fallback }]);
    } catch {
      setMsgs([...next, { role: "assistant", content: fallback }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-3xl border border-line bg-ink-2 p-5 sm:p-8">
      <div className="max-h-[26rem] space-y-4 overflow-y-auto" aria-live="polite">
        {msgs.length === 0 && (
          <p className="text-sand/70">
            Ask anything about my work, how I build, or whether I&apos;m a fit for your project. Answers come from an AI that has read my
            portfolio. For anything serious, the contact form reaches me directly.
          </p>
        )}
        {msgs.map((m, i) => (
          <div key={i} className={clsx("flex", m.role === "user" ? "justify-end" : "justify-start")}>
            <p
              className={clsx(
                "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 leading-relaxed",
                m.role === "user" ? "bg-kite text-ink" : "bg-sand/[0.06] text-sand/90"
              )}
            >
              {m.content}
            </p>
          </div>
        ))}
        {busy && <p className="font-mono text-xs uppercase tracking-widest text-mute">Thinking…</p>}
      </div>

      {msgs.length === 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button key={s} onClick={() => ask(s)} className="rounded-full border border-line px-3 py-1.5 text-sm text-sand/80 transition hover:border-kite hover:text-sand">
              {s}
            </button>
          ))}
        </div>
      )}

      <form
        className="mt-5 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <label htmlFor="ask" className="sr-only">Ask a question</label>
        <input
          id="ask"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={500}
          placeholder="Ask my AI…"
          className="min-w-0 flex-1 rounded-full border border-line bg-ink px-5 py-3 text-sand placeholder:text-mute focus:border-kite focus:outline-none"
        />
        <button disabled={busy || !input.trim()} className="rounded-full bg-sand px-5 py-3 font-medium text-ink transition hover:bg-kite disabled:opacity-40">
          Ask
        </button>
      </form>
    </div>
  );
}

const fallback = "My AI is offline right now. Send a note through the contact form and the real me will reply.";
