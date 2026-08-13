# LA Pokerbots

Site for UCLA's LA Pokerbots competition. Next.js (App Router) + Tailwind CSS v4 + shadcn/ui + Motion.

## Run locally

```sh
npm install
npm run dev
```

Then visit `http://localhost:3000`.

```sh
npm run build   # production build
npm run lint
```

## Layout

| Path | What's there |
| --- | --- |
| `app/` | One folder per route: `/`, `/about`, `/competition`, `/sponsors`, `/join` |
| `app/globals.css` | Design tokens (`@theme`), the `wrap` / `grid-overlay` / `full-bleed` utilities, and the marquee keyframes |
| `components/` | Site components — header, footer, card grid, sponsor ticker, timeline, etc. |
| `components/ui/` | shadcn/ui primitives. Add more with `npx shadcn@latest add <name>` |
| `content/` | Editable site data — see below |
| `public/sponsors/` | Sponsor logos |

## Editing content

Most seasonal edits happen in `content/`, not in the page files:

- `site.ts` — email, Luma event URL, GitHub link, year, nav items
- `sponsors.ts` — the sponsor roster; feeds **both** the sponsors grid and the home-page ticker
- `schedule.ts` — competition timeline
- `prizes.ts` — prize tiers
- `rules.ts` — competition rules

To add a sponsor, drop the logo in `public/sponsors/` and add one entry to `sponsors.ts`. The grid fills its 8 tiles with placeholders for whatever isn't confirmed yet.

Headings and body copy live inline in the page files under `app/`.

## Notes

- The site is dark-only. Colors come from the `@theme` block in `app/globals.css`; shadcn's semantic tokens (`--primary`, `--border`, …) are aliased onto the same palette, so shadcn components inherit it automatically.
- Competitor registration uses the Luma event, embedded on `/about`. `/join` is for organizing-team applications and has a disabled placeholder until the Google Form exists.
- All animation is gated on `prefers-reduced-motion`.
- Every route prerenders as static, so the site can move to a static export (`output: 'export'` + `images.unoptimized`) without code changes.
