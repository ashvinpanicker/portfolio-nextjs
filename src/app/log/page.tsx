import type { Metadata } from "next";
import clsx from "clsx";
import PageHeader from "@/components/page-header";
import { TEMPLATES, logExample, logStatuses } from "@/content/life";

export const metadata: Metadata = {
  title: "Daily activity log",
  description: "The simple Google Sheets system I use to plan each day, track what got done and keep a journal habit.",
  alternates: { canonical: "/log" },
};

const rules = [
  ["One tab per month", "Columns are days. Each day is a Task + Status pair."],
  ["A few tasks a day", "Work, health, life admin, people. Small enough to finish."],
  ["Four statuses", "Done, Doing, Not Done, Cancelled. Cancelling counts as a decision, not a failure."],
  ["Journal is always the last row", "Same task every day, so the gaps are obvious."],
  ["Roll over honestly", "Not done? Copy it to tomorrow or cancel it."],
];

export default function LogPage() {
  return (
    <>
      <PageHeader eyebrow="Productivity" title={<>Daily activity <em className="text-kite">log.</em></>}>
        <p>No app or streaks, just one spreadsheet. Plan the day in the morning, mark it at night.</p>
        {TEMPLATES.log && (
          <a href={TEMPLATES.log} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-kite px-5 py-2.5 font-medium text-ink">
            Copy the template →
          </a>
        )}
      </PageHeader>
      <div className="container-x space-y-16 pb-28">
        <section className="overflow-x-auto rounded-3xl border border-line bg-ink-2 p-5">
          <p className="eyebrow mb-4">Example week · made-up tasks</p>
          <div className="grid min-w-[40rem] grid-cols-3 gap-4">
            {logExample.map((d) => (
              <div key={d.day}>
                <p className="mb-2 font-semibold">{d.day}</p>
                <ul className="space-y-1.5 text-sm">
                  {d.tasks.map(([task, status]) => (
                    <li key={task} className="flex items-center justify-between gap-2 rounded-lg bg-sand/[0.04] px-3 py-2">
                      <span className={clsx(status === "Cancelled" && "line-through opacity-60")}>{task}</span>
                      <span className={clsx("shrink-0 rounded-full px-2 py-0.5 text-[11px]", logStatuses[status])}>{status}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-8 font-display text-5xl">The rules</h2>
          <ol className="grid gap-8 sm:grid-cols-2">
            {rules.map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="font-mono text-sm text-kite">0{i + 1}</span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sand/70">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
