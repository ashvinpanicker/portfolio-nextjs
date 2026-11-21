import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-6 py-10 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {site.socials.map((s) => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer me" className="hover:text-sand">
                {s.name}
              </a>
            </li>
          ))}
          <li>
            <a href={site.cv} className="hover:text-sand">CV</a>
          </li>
          <li>
            <Link href="/llms.txt" className="hover:text-sand">llms.txt</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
