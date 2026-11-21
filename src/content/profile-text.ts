// Plain-text profile built from the content files. Used by /llms.txt and the AI assistant.
import { site } from "./site";
import { work, services, process, experience, skills, testimonials } from "./work";
import { indiaDestinations, worldDestinations } from "./life";

export function profileText() {
  const lines: string[] = [];
  lines.push(`# ${site.name}`, "", `> ${site.description}`, "");
  lines.push(`- Location: ${site.location}, ${site.timezone}. Works with clients worldwide`);
  lines.push(`- Contact: the form at ${site.url}/#contact`, `- CV: ${site.url}${site.cv}`);
  lines.push(`- Availability: ${site.available ? "taking on new projects" : "fully booked"}`, "");

  lines.push("## Services");
  for (const s of services) lines.push(`- ${s.name}: ${s.line} (${s.items.join(", ")})`);
  lines.push("", "## How engagements work");
  process.forEach(([step, line], i) => lines.push(`${i + 1}. ${step}: ${line}`));

  lines.push("", "## Work");
  for (const w of work) lines.push(`- ${w.title} [${w.kind}${w.year ? `, ${w.year}` : ""}]: ${w.summary} Tags: ${w.tags.join(", ")}.${w.url ? ` ${w.url}` : ""}`);

  lines.push("", "## Experience");
  for (const e of experience) lines.push(`- ${e.years}: ${e.role}, ${e.org}. ${e.line}`);

  lines.push("", "## Skills");
  for (const s of skills) lines.push(`- ${s.group}: ${s.items.join(", ")}`);

  lines.push("", "## Testimonials");
  for (const t of testimonials) lines.push(`- "${t.quote}" (${t.name}, ${t.role})`);

  lines.push("", "## Life");
  lines.push("- Kitesurfer; home spot Aqua Outback on the Thoothukudi coast, Tamil Nadu. Building a kite-control simulator with two pro riders.");
  lines.push("- Guitarist; used to teach beginners at Furtados School of Music. Recordings on SoundCloud.");
  lines.push("- Keeps a travel sheet for every trip and a daily activity log in Google Sheets.");
  lines.push(
    "- Travel picks: " +
      [...indiaDestinations, ...worldDestinations]
        .map((d) => `${d.name} (${d.picks.map((p) => p.name + (p.note ? `: ${p.note}` : "")).join("; ")})`)
        .join(" | ")
  );

  lines.push("", "## Pages");
  for (const [p, d] of [
    ["/", "Home"],
    ["/work", "All work"],
    ["/about", "About, experience, skills"],
    ["/life", "Kitesurfing, guitar, travel, productivity"],
    ["/travel", "Travel picks"],
    ["/log", "Daily activity log system"],
  ])
    lines.push(`- [${d}](${site.url}${p === "/" ? "" : p})`);
  return lines.join("\n");
}
