# LA Pokerbots — Enhanced LA Theme

Responsive Next.js frontend for LA Pokerbots with the Los Angeles sunset / skyline visual system.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## What was improved

- Rebuilt responsive typography so titles and long words do not clip on desktop, tablet, or mobile.
- Added safer grid sizing (`minmax(0, ...)`) and text wrapping for sponsors, email addresses, prize labels, and team cards.
- Made the hero cards/sun scale fluidly instead of relying on fixed pixel sizes.
- Relaxed overly-tight display line heights that were cropping serif letters.
- Improved spacing at 1080px, 820px, 560px, and 390px breakpoints.
- Preserved the LA sunset, skyline, palms, poker cards, and West Coast color palette.

A standalone `preview.html` is included for quick viewing without installing dependencies.


## v2 visual fixes
- Removed the yellow ticker strip below the hero.
- Repositioned/resized the oversized background LA so the A stays visible.
- Added safer title spacing and line-height so the foreground LA does not clip at desktop or mobile widths.
