# mateussgn.com

Personal site of Mateus Santana, Senior Software Engineer.

Built with Next.js (App Router), React and TypeScript, exported as a static site. No server is needed, so the same build runs on GitHub Pages and on Hostinger.

## Environments

| Environment | URL | Indexed by search engines |
| --- | --- | --- |
| Staging | https://mateussgn.github.io | No |
| Production | https://mateussgn.com | Yes |

The difference lives in two build-time variables, never in code:

| Variable | Staging | Production |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_ENV` | `staging` | `production` |
| `NEXT_PUBLIC_SITE_URL` | `https://mateussgn.github.io` | `https://mateussgn.com` |

Staging is deployed by `.github/workflows/deploy.yml` on every push to `master`. Pull requests only run the build as a check.

## Running locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm start        # serves out/ to check the production build
```

## Editing content

Text and data live in `src/content/`, separate from the layout:

- `profile.ts`: name, headline, intro, hero tags and links
- `stack.ts`: the tech stack chips, in display order
- `work.ts`: the Key projects cards (each names the drawing it shows)
- `experience.ts`: jobs for the Experience list (newest first, dates as `YYYY-MM`)
- `about.ts`: the About text, education and certification

`principles.ts` and the `freelance` export in `about.ts` aren't shown right now; they're kept so those sections can come back.

## Light and dark

The site follows the visitor's device setting, and the sun/moon button in the header overrides it (the choice is stored in the browser). Both palettes are CSS variables at the top of `src/app/globals.css`; components only use the variables.

## CV and photo

- CV: put the PDF at `public/cv/Mateus-Santana-CV.pdf`. The "Download CV" links appear only once that file exists.
- Photo: put a square JPEG (600 × 600 px or more) at `public/photo/mateus-santana.jpg`. Until then, the hero shows the msgn logo in its place.

## Project layout

```
src/
  app/          layout, page, robots.txt and sitemap
  components/   one component per section, each with its CSS module
  content/      editable content and its types
  lib/          dates, fonts for generated images and environment settings
```
