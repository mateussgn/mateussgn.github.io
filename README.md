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

- `profile.ts`: name, headline, intro, quick facts and links
- `experience.ts`: jobs for the career timeline (newest first, dates as `YYYY-MM`)
- `work.ts`: selected work cases
- `principles.ts`: the "How I work" section
- `skills.ts`: skill groups
- `about.ts`: about text, education and languages, and the freelance section

The timeline positions are computed from the dates, so adding a job is just adding an entry.

## CV

Put the PDF at `public/cv/Mateus-Santana-CV.pdf`. The "Download CV" links appear only once that file exists.

## Project layout

```
src/
  app/          layout, page, robots.txt and sitemap
  components/   one component per section, each with its CSS module
  content/      editable content and its types
  lib/          dates, timeline layout and environment settings
```
