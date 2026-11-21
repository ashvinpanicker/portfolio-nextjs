# ashvinpanicker.com

Personal site + AI assistant. Static Next.js on Cloudflare Pages, with two Pages Functions.

## Stack
- Next.js 16 (App Router, `output: "export"`), React 19, TypeScript
- Tailwind CSS 4, Motion, self-hosted fonts (Inter, Instrument Serif)
- Cloudflare Pages + Functions: `/api/ask` (Claude), `/api/contact` (Resend)
- Live wind from Open-Meteo (client-side, no key)

## Edit content
Everything lives in `src/content/`. Pages, SEO, `llms.txt` and the AI all read from it.

| File | What |
|---|---|
| `site.ts` | Name, links, availability, nav, wind spot |
| `work.ts` | Projects, services, process, experience, skills, testimonials |
| `life.ts` | Travel picks, log example, template links |

## Commands
```bash
npm i
npm run dev        # localhost:3000 (API routes need `npm run preview`)
npm run build      # static site → out/
npm run preview    # build + wrangler pages dev (functions included)
npm run lint && npm run typecheck
```
Local secrets for `preview` go in `.dev.vars` (git-ignored).

## Deploy (Cloudflare Pages)
1. Pages → Create → Connect to Git → this repo.
2. Framework preset: none · Build: `npm run build` · Output: `out` · Env `NODE_VERSION=22`.
3. Settings → Variables (encrypt): `ANTHROPIC_API_KEY`, `RESEND_API_KEY`, `CONTACT_TO`, optional `CONTACT_FROM`.
4. Custom domain: `ashvinpanicker.com`.
5. Recommended: Security → WAF → rate-limit `/api/*` (e.g. 10 req/min per IP).

Without the keys the site still works; the AI box and form show a fallback to email.
