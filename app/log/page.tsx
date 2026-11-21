import Link from "next/link";
import clsx from "clsx";
import { TEMPLATES, logExample, logStatuses } from "@/lib/life";

export const metadata = {
  title: "Daily activity log | Ashvin Panicker",
  description:
    "The simple Google Sheets system I use to plan each day, track what got done and keep a journal habit. Free template.",
  alternates: { canonical: "https://ashvinpanicker.com/log" },
};

const statusClass = (s: string) => logStatuses.find((x) => x.label === s)?.className ?? "";

const rules = [
  ["One tab per month", "Columns are days. Each day is a Task + Status pair."],
  ["A few tasks a day", "Work, health, life admin, people. Small enough to finish."],
  ["Four statuses", "Done, Doing, Not Done, Cancelled. Cancelling counts as a decision, not a failure."],
  ["Journal is always the last row", "Same task every day, so the gaps are obvious."],
  ["Roll over honestly", "Not done? Copy it to tomorrow or cancel it."],
];

export default function LogPage() {
  return (
    <main className="mx-auto w-full max-w-[56rem] px-4 pb-28">
      <Link href="/#life" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white">
        ← Back
      </Link>
      <header className="mt-6 mb-12">
        <h1 className="font-display text-5xl sm:text-6xl">Daily activity log</h1>
        <p className="mt-4 max-w-[38rem] text-lg text-gray-600 dark:text-white/70">
          No app or streaks, just one spreadsheet. I plan the day in the morning, mark it at night, and
          the colours show me what I actually spend time on.
        </p>
        {TEMPLATES.log && (
          <a
            href={TEMPLATES.log}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-gray-900 px-6 py-3 text-white transition hover:scale-105 dark:bg-white dark:text-gray-900"
          >
            Copy the template →
          </a>
        )}
      </header>

      <section className="mb-14 overflow-x-auto rounded-2xl border border-black/5 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
        <p className="mb-3 text-xs uppercase tracking-wider text-gray-500">Example week (made-up tasks)</p>
        <div className="grid min-w-[36rem] grid-cols-3 gap-3">
          {logExample.map((d) => (
            <div key={d.day}>
              <p className="mb-2 font-semibold">{d.day}</p>
              <ul className="space-y-1.5 text-sm">
                {d.tasks.map(([task, status]) => (
                  <li key={task} className="flex items-center justify-between gap-2 rounded-lg bg-gray-50 px-2.5 py-1.5 dark:bg-white/5">
                    <span className={clsx(status === "Cancelled" && "line-through opacity-60")}>{task}</span>
                    <span className={clsx("shrink-0 rounded-full px-2 py-0.5 text-[11px]", statusClass(status))}>{status}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display mb-6 text-3xl">The rules</h2>
        <ol className="space-y-4">
          {rules.map(([title, body], i) => (
            <li key={title} className="flex gap-4">
              <span className="font-display text-2xl text-gray-400">{i + 1}</span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-gray-600 dark:text-white/70">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
