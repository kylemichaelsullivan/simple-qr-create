# Simple QR Create

A small browser app for turning any text or URL into a QR code, with customizable size and colors and a one-click PNG download.

## Features

- **Encode anything** — Enter plain text or a URL; the QR appears after you submit the form.
- **Style** — Set foreground and background colors and the size in pixels (defaults: 128px, black on white).
- **Export** — The preview is a download link for a PNG named with a short unique id.

Everything runs in the client; nothing is sent to a server.

## Quick start

```sh
bun install
bun run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`). Production build output goes to `dist/`.

## Stack

- [Bun](https://bun.sh/) — installs and script runner; lockfile is `bun.lock`
- [React](https://react.dev/) 18 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) 5 with [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (Fast Refresh via SWC)
- [Tailwind CSS](https://tailwindcss.com/) 3 + [PostCSS](https://postcss.org/) and [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Biome](https://biomejs.dev/) 2.x — formatting, import organization, linting, and Tailwind-oriented class sorting (`useSortedClasses`)
- [react-hook-form](https://react-hook-form.com/) — form state and validation
- [react-qr-code](https://github.com/rosskhanas/react-qr-code) — SVG QR rendering
- [html-to-image](https://github.com/bubkoo/html-to-image) — PNG export from the rendered QR

## Requirements

- [Bun](https://bun.sh/) (latest stable recommended)

## Scripts

| Command | Description |
| ------- | ----------- |
| `bun install` | Install dependencies |
| `bun run dev` | Start the Vite dev server (HMR) |
| `bun run build` | Type-check (`tsc`) and production build |
| `bun run preview` | Serve the `dist/` build locally |
| `bun run lint` | `biome check .` (format, lint, imports) |
| `bun run lint:fix` | `biome check --write .` (safe fixes + write) |

## Project layout

| Path | Role |
| ---- | ---- |
| `biome.json` | Biome formatter and linter |
| `index.html` | HTML shell and document title |
| `vite.config.ts` | Vite + React (SWC) |
| `tailwind.config.js` | Tailwind content paths and theme |
| `postcss.config.js` | Tailwind + Autoprefixer |
| `tsconfig.json`, `tsconfig.node.json` | TypeScript project options |
| `src/main.tsx` | App mount |
| `src/App.tsx` | Layout, page title prop |
| `src/components/` | `Title`, `Body`, `Form`, `QR` |
| `src/placeholders.ts` | Default form placeholders |
| `src/scripts.ts` | Small helpers (e.g. id for downloads) |
| `src/types.ts` | Shared types (e.g. color unions) |
| `src/styles.css` | Component styles |
| `src/index.css` | Tailwind entry imports |

## License

Private project (`"private": true` in `package.json`).
