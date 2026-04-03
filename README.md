# Simple QR Create

A small browser app for turning any text or URL into a QR code, with customizable size and colors and a one-click PNG download.

## Features

- **Encode anything** — Enter plain text or a URL; the QR updates when you submit the form.
- **Style** — Set foreground and background colors and the width/height in pixels (default size is 128px).
- **Export** — After submitting, the preview doubles as a download link for a PNG named with a short unique id.

Everything runs in the client; nothing is sent to a server.

## Stack

- [React](https://react.dev/) 18 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev and production builds
- [Tailwind CSS](https://tailwindcss.com/) for layout and styling
- [react-hook-form](https://react-hook-form.com/) for the form
- [react-qr-code](https://github.com/rosskhanas/react-qr-code) for rendering
- [html-to-image](https://github.com/bubkoo/html-to-image) for PNG export

## Requirements

- Node.js (LTS recommended)

## Scripts

| Command      | Description                          |
| ------------ | ------------------------------------ |
| `npm install` | Install dependencies                 |
| `npm run dev` | Start the dev server (with HMR)      |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint                           |

## Project layout

- `src/App.tsx` — App shell and page title
- `src/components/` — `Form`, `QR`, `Body` (state + context), `Title`
- `src/placeholders.ts` — Default colors, size, and input placeholder text

## License

Private project (`"private": true` in `package.json`).
