# Compound Automation Website

Marketing site for [compoundautomation.dev](https://compoundautomation.dev) — CRE automation for brokerages.

## Stack

- React (Vite) + React Router
- Express (production static server)
- Framer Motion
- Plain CSS (no Tailwind, no component libraries)

## Setup

```bash
# Install dependencies (root, client, and server)
npm run install:all

# Copy environment variables
cp .env.example client/.env
# Edit client/.env with your Cal.com and LinkedIn URLs
```

### Environment variables

| Variable | Description |
|----------|-------------|
| `VITE_CAL_LINK` | Cal.com booking URL |
| `VITE_LINKEDIN_URL` | LinkedIn profile URL |

## Development

Runs the Vite dev server on port **3000** and Express on port **3001**:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

Express serves the built app from `client/build` on port **3001** (or `PORT`).

## Deploy

### Vercel

- Framework: Vite
- Root directory: `client`
- Build command: `npm run build`
- Output directory: `build`
- Add `VITE_CAL_LINK` and `VITE_LINKEDIN_URL` in project settings

### Render

- Build: `npm run install:all && npm run build`
- Start: `npm start`
- Set `NODE_ENV=production` and env vars above

## Project structure

```
client/
  index.html     Vite entry (dev + build)
  src/           React components and assets
server/          Express production server
package.json     Root scripts (dev, build, start)
```
