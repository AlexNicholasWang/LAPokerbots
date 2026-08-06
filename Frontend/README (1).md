# LA Pokerbots

Static multi-page site for UCLA's LA Pokerbots competition.

## Run locally

No build step or dependencies are required. Open `index.html` directly, or serve the folder with any static file server, for example:

```sh
python -m http.server 4173
```

Then visit `http://127.0.0.1:4173`.

Pages are split into `index.html`, `about.html`, `competition.html`, `sponsors.html`, and `join.html`. Shared presentation and navigation behavior live in `styles.css` and `site.js`.

Sponsor placeholders are in `sponsors.html`. Competitor registration uses the existing Luma event, including the live embed on `about.html`. The separate `join.html` page is for organizing-team applications and currently has a disabled placeholder for the future Google Form.
