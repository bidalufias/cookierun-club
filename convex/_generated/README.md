# Convex `_generated`

This folder is produced by `npx convex dev` (or `npx convex codegen`).

Until you run Convex locally, TypeScript may complain about missing imports from
`./_generated/server` and `./_generated/api`. That is expected — start Convex
with `npx convex dev` to generate `api.d.ts`, `api.js`, `server.d.ts`, `server.js`,
and related files.

Do not hand-edit files that Convex regenerates.
