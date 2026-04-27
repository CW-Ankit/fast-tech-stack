# Feature: Monorepo Initialization (v1.0.0)

## Scope
This repository is initialized as a pnpm workspace monorepo powered by Turborepo with:

- `apps/web`: Next.js 16 web application.
- `apps/mobile`: Expo Router mobile application.
- `packages/backend`: Convex backend with Better Auth component wiring.
- `packages/ui`: Shared UI tokens package.

## Architecture
- Turborepo orchestrates `dev`, `build`, `lint`, `typecheck`, and `test` tasks.
- Convex hosts data and Better Auth endpoints.
- Web and mobile clients connect to the same Convex deployment.
- Dodo Payments checkout session is created server-side in the web app route handler.

## Key Integrations
1. **Convex + Better Auth**
   - Convex component configured at `packages/backend/convex/betterAuth`.
   - Better Auth route registration in `packages/backend/convex/http.ts`.
   - Next.js auth proxy handler in `apps/web/app/api/auth/[...all]/route.ts`.

2. **UI Stack**
   - Tailwind CSS configured in `apps/web/app/globals.css` via `@tailwindcss/postcss`.
   - shadcn-compatible config available at `apps/web/components.json`.

3. **Payments**
   - Dodo Payments SDK integrated in `apps/web/app/api/payments/checkout/route.ts`.

## Required Follow-Up
1. Run Convex code generation and Better Auth schema generation once environment variables are populated.
2. Add real Dodo product IDs and key material.
3. Add auth UI screens and session-aware routes for both web and mobile.
