import Image from "next/image";
import type { Work } from "@/content/work";

export default function WorkCard({ item, priority = false }: { item: Work; priority?: boolean }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 transition hover:-translate-y-1 hover:border-kite/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-sea/30 via-ink-2 to-kite/20">
        {item.image ? (
          <Image
            src={item.image}
            alt={`${item.title} screenshot`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={priority}
            className="object-cover object-top opacity-85 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-8 text-center font-display text-4xl text-sand/90 sm:text-5xl">
            {item.title}
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-sand/80 backdrop-blur">
          {item.kind}
          {item.year && ` · ${item.year}`}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="flex items-center justify-between gap-3 text-xl font-semibold">
          {item.title}
          <span aria-hidden className="text-mute transition group-hover:translate-x-1 group-hover:text-kite">↗</span>
        </h3>
        <p className="mt-2 text-sand/70">{item.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {item.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-mute">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
