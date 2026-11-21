"use client";

import { useWind, compass, kiteFor } from "@/lib/wind";
import { windSpot } from "@/content/site";

export default function LiveWind() {
  const w = useWind();
  const stats = [
    ["Wind", `${w.kn} kn`],
    ["Gusts", w.gust !== null ? `${w.gust} kn` : "—"],
    ["From", compass(w.from)],
    ["My kite", kiteFor(w.kn)],
  ];
  return (
    <div className="rounded-3xl border border-line bg-ink-2 p-6">
      <p className="eyebrow">
        <span className={w.live ? "text-sea" : ""}>{w.live ? "● Live" : "○ Demo"}</span> · {windSpot.name} right now
      </p>
      <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {stats.map(([k, v]) => (
          <div key={k}>
            <dt className="text-sm text-mute">{k}</dt>
            <dd className="font-display text-4xl">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-sand/70">{w.kn >= 12 ? "Kiteable. If you can't reach me, this is why." : "Too light to ride. I'm probably at my desk."}</p>
    </div>
  );
}
