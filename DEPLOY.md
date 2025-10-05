Deployment guide — Render (backend) + Netlify (frontend)

This repository contains a combined Express + Vite React app. The backend serves API routes and, in production, serves the built client from dist/public.

What I'll provide here:
- a Render service manifest `render.yaml` (edit to add your repo URL)
- a Netlify config `netlify.toml` for building & publishing the client

Prerequisites
- A GitHub (or GitLab) repo with this project pushed. Render and Netlify pull from a Git provider.
- Render account and Netlify account.

Quick steps — push your code then connect to hosts

1) Push your repo to GitHub (if not already):

   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main

2) Backend — Render

- In Render dashboard > New > Web Service
- Connect your Git provider and select the repo + branch `main`.
- Set the Environment to "Node" (or leave default).
- Build Command: npm run build
- Start Command: npm start
- Set Environment Variables in Render (if you have any secrets). At minimum, ensure `NODE_ENV=production`.
- If you want, drop `render.yaml` into the repo root and use the Render Dashboard's "Import from repo" feature. Update the `repo` field in `render.yaml` to your repo URL before importing.

3) Frontend — Netlify

- In Netlify dashboard > Add new site > Import an existing repo.
- Connect your Git provider and select the repo + branch `main`.
- Build command: npm run build
- Publish directory: dist/public
- Environment variable: NODE_ENV=production

Notes and caveats
- The repo currently builds both client and server in the top-level `npm run build` command. Netlify will run `npm run build` in the repo root. That will run Vite's build which outputs static files to `dist/public` (matching the `publish` setting in netlify.toml).
- Render will run `npm run build` too and then `npm start` which expects server entry in `dist/index.js` (the project's build uses esbuild to bundle server/index.ts to dist/index.js).
- If you prefer to host both on Render (backend + static site) you can simply use the server to serve static files — no extra changes needed.
- If you prefer to host frontend on Netlify and backend on Render, set the API base URL in the frontend to the Render service URL (e.g. https://price-pulse-backend.onrender.com). The client uses relative API paths by default; you may need to set an environment variable in Netlify to point to the backend URL. Edit the client code to read from an env var like VITE_API_BASE.

Adding VITE_API_BASE (optional)

If you want the client to call the Render backend instead of relative paths, add an env var in the Netlify site settings named `VITE_API_BASE` and set it to the Render service URL, e.g. `https://your-backend.onrender.com`.

If you want me to finish the deployment for you, provide one of the following:
- A GitHub repo URL (public) I can craft PRs for and give exact config to connect.
- A Render service API key & Netlify personal access token (not recommended to share here). Better: I can provide the exact repo edits and you connect in the dashboards.
