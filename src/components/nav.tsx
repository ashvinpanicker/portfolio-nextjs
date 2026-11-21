import Link from "next/link";
import { nav } from "@/content/site";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-tight text-sand hover:text-kite">
          Ashvin<span className="text-kite">.</span>
        </Link>
        <ul className="flex items-center gap-1 rounded-full border border-line bg-ink/60 px-2 py-1 text-sm backdrop-blur-md">
          {nav.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block rounded-full px-3 py-1.5 text-sand/80 transition hover:bg-sand/10 hover:text-sand">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
