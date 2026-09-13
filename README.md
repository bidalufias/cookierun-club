# Cookie Run Club

A mobile-first directory that connects cookie lovers to cookie shops across **Kuala Lumpur and the Klang Valley**.

The origin story: a 10pm cookie run so a founder’s 11-year-old daughter could wake up to something warm. No accounts, no payments, no delivery, no fake reviews — just shops, hours, and how to find them.

Live domain (planned): [cookierun.club](https://cookierun.club)

---

## Local setup

You need Node.js 18+ and a [Convex](https://www.convex.dev) account.

```bash
npm install
```

Start Convex (creates a deployment, writes `.env.local` with `VITE_CONVEX_URL`, and generates `convex/_generated`):

```bash
npx convex dev
```

In a second terminal:

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Seed shops

`convex/_generated` is a **placeholder** until Convex codegen runs. After `npx convex dev` is connected:

1. Open the [Convex dashboard](https://dashboard.convex.dev) for this project.
2. Run the `shops:seed` mutation once (Functions → `shops:seed` → Run).

It inserts **12 shops** and is a no-op if any shop already exists.

> **Seed data is plausible, not verified.** Names, areas, hours, Maps links, Instagram, and WhatsApp are starter records in the style of Famous Amos, Cookies by Crumble, and local KL / Klang Valley bakeries. Confirm hours and listings before treating them as live.

---

## Scripts

| Script | Command |
| --- | --- |
| Dev | `npm run dev` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |

---

## Netlify deploy

`netlify.toml` is already set:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- SPA fallback: all routes → `index.html`

### Convex env on Netlify

1. Run `npx convex deploy` (or create a production deployment in the Convex dashboard).
2. Copy the production Convex URL (`https://<deployment>.convex.cloud`).
3. In Netlify → Site configuration → Environment variables, set:

   ```
   VITE_CONVEX_URL=https://<your-deployment>.convex.cloud
   ```

4. Redeploy so Vite bakes the URL into the client bundle.

Do **not** commit `.env.local`. Use `.env.example` as the template.

### Netlify DNS for cookierun.club

1. Add the site in Netlify and complete the first deploy.
2. Domain management → **Add custom domain** → `cookierun.club` (and `www.cookierun.club` if you want it).
3. At your registrar, either:
   - **Use Netlify DNS:** set the domain’s nameservers to the four Netlify nameservers shown in the UI, **or**
   - **Keep current DNS:** add an **A** record for apex `@` to `75.2.60.5` (Netlify load balancer) and a **CNAME** for `www` to `<yoursite>.netlify.app`.
4. Enable HTTPS (Netlify provisions Let’s Encrypt once DNS is live).
5. Optional: set the primary domain to `cookierun.club` and redirect `www` → apex.

---

## Stack

- Vite + React + TypeScript
- Convex (`shops` table + `list` / `areas` / `seed`)
- Plain CSS, mobile-first
- Netlify static hosting

## Out of scope

Auth, payments, delivery, ratings, and user-generated reviews.
