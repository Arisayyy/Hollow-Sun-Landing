# Hollow-Sun-Landing

Simple Astro landing page for Hollow Sun.

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the Astro development server |
| `pnpm build` | Build the Cloudflare Workers bundle to `dist/` |
| `pnpm preview` | Preview the Worker locally with Wrangler |
| `pnpm deploy` | Build and deploy to Cloudflare Workers |

## Cloudflare Workers

This project uses Astro's Cloudflare adapter and `wrangler.jsonc` so the built Worker entry point is `dist/_worker.js/index.js` and static assets are served from `dist/`.

