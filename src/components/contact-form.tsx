"use client";

import { useState } from "react";
import clsx from "clsx";

const TOPICS = ["New project", "Collab", "Travel tips", "Just saying hi"] as const;

export default function ContactForm() {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("New project");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          name: fd.get("name"),
          email: fd.get("email"),
          link: fd.get("link"),
          message: fd.get("message"),
          company: fd.get("company"), // honeypot
        }),
      });
      if (!res.ok) throw new Error();
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  const field = "w-full rounded-xl border border-line bg-ink px-4 py-3 text-sand placeholder:text-mute focus:border-kite focus:outline-none";

  if (state === "sent")
    return (
      <div className="rounded-3xl border border-sea/40 bg-sea/10 p-8">
        <p className="font-display text-3xl">Got it, thanks.</p>
        <p className="mt-2 text-sand/70">I&apos;ll reply from my own inbox soon.</p>
      </div>
    );

  return (
    <form onSubmit={submit} className="space-y-4">
      <fieldset>
        <legend className="eyebrow mb-3">What&apos;s this about?</legend>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={t === topic}
              onClick={() => setTopic(t)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-sm transition",
                t === topic ? "border-kite bg-kite text-ink" : "border-line text-sand/80 hover:border-sand/40"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Name</span>
          <input name="name" required maxLength={120} placeholder="Name" className={field} autoComplete="name" />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" required maxLength={200} placeholder="Email" className={field} autoComplete="email" />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Website or link (optional)</span>
        <input name="link" maxLength={300} placeholder="Website / link (optional)" className={field} />
      </label>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea name="message" required maxLength={5000} rows={5} placeholder="What are you building?" className={field} />
      </label>
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex items-center gap-4">
        <button disabled={state === "sending"} className="rounded-full bg-kite px-6 py-3 font-medium text-ink transition hover:bg-sand disabled:opacity-50">
          {state === "sending" ? "Sending…" : "Send"}
        </button>
        {state === "error" && <p className="text-sm text-kite">That didn&apos;t go through. Email <a className="link" href="mailto:ashvin.panicker@gmail.com">ashvin.panicker@gmail.com</a> instead.</p>}
      </div>
    </form>
  );
}
