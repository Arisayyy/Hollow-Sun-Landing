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

This project uses Astro's Cloudflare adapter and `wrangler.jsonc` so the Worker entry point is Astro's Cloudflare adapter entry point (`@astrojs/cloudflare/entrypoints/server`) and static assets are served from `dist/`.

