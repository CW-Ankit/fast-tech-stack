# Fast Tech Stack

A production-oriented monorepo starter built with Turborepo + pnpm using:

- Next.js (web)
- Expo (mobile)
- Convex (database + backend)
- Better Auth (authentication)
- Tailwind CSS + shadcn/ui style baseline
- Dodo Payments (checkout integration)

## Repository Structure

```text
apps/
  web/                # Next.js web app
  mobile/             # Expo mobile app
packages/
  backend/            # Convex backend + Better Auth component setup
  ui/                 # Shared design tokens/utilities package
docs/
  features/           # Feature implementation notes
```

## Quick Start

1. Install dependencies:

```bash
pnpm install
```

2. Configure environment variables:

- `apps/web/.env.local`
- `apps/mobile/.env`
- Convex environment variables via CLI (`BETTER_AUTH_SECRET`, `SITE_URL`, provider secrets)

3. Start local development:

```bash
pnpm dev
```

## Workspace Commands

```bash
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
pnpm test
```

## Verification Surfaces

### Web
- Home page includes a `Stack Status` panel.
- API health-style endpoint at `/api/stack/status`.
- Checkout action using Dodo route: `/api/payments/checkout`.

### Mobile
- Expo home screen displays environment readiness values.
- Quick links are provided to validate endpoint reachability and Dodo docs.

## Convex + Better Auth Setup Notes

The backend package includes Convex + Better Auth integration scaffolding based on current integration docs.

After linking your Convex project, run:

```bash
pnpm --filter @FastTechStack/backend dev
pnpm --filter @FastTechStack/backend auth:generate
```

## Deployment

Use `DEPLOYMENT.md` for production deployment on Vercel, Convex, and Expo/EAS.

## Additional Documentation

- `docs/StackUsageGuide.md`
- `docs/features/feature_MonorepoInitialization_2026-04-27_v1.0.0.md`
- `docs/features/feature_DeploymentReadiness_2026-04-27_v1.0.0.md`
