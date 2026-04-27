# Fast Tech Stack Usage Guide

## 1. Prerequisites
- Node.js 20+
- pnpm 10+
- Convex account
- Dodo Payments account

## 2. Install Dependencies
```bash
pnpm install
```

## 3. Environment Configuration
### Web (`apps/web/.env.local`)
```bash
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CONVEX_SITE_URL=
DODO_PAYMENTS_API_KEY=
DODO_ENVIRONMENT=test_mode
DODO_DEFAULT_PRODUCT_ID=
```

### Mobile (`apps/mobile/.env`)
```bash
EXPO_PUBLIC_CONVEX_URL=
EXPO_PUBLIC_CONVEX_SITE_URL=
```

### Convex Server Environment
Set server-side secrets through Convex CLI or dashboard:

```bash
pnpm --filter @FastTechStack/backend dev
# In another terminal after convex project is linked:
pnpm --filter @FastTechStack/backend exec convex env set BETTER_AUTH_SECRET "<GeneratedSecret>"
pnpm --filter @FastTechStack/backend exec convex env set SITE_URL "http://localhost:3000"
```

## 4. Run Development
```bash
pnpm dev
```

This runs all workspace `dev` tasks via Turborepo.

## 5. Convex + Better Auth Generation Workflow
After first Convex initialization:

```bash
pnpm --filter @FastTechStack/backend dev
pnpm --filter @FastTechStack/backend auth:generate
```

- Keep `convex dev` running during development to keep generated API types updated.

## 6. Dodo Payments Flow
- Browser calls `GET /api/payments/checkout?productId=<DodoProductId>`.
- Server route creates a hosted checkout session using the Dodo SDK.
- User is redirected to Dodo checkout.
- Dodo returns to `/payments/return` URL with checkout query parameters.

## 7. Runtime Verification
### Web
- Open `/` and verify the "Stack Status" panel.
- Open `/api/stack/status` and confirm JSON output.
- Trigger `/api/payments/checkout` and verify checkout redirect behavior.

### Mobile
- Open Expo app index screen.
- Confirm environment status cards show configured values.
- Use "Open Web Stack Status Endpoint" to validate end-to-end URL accessibility.

## 8. Deployment
Use root `DEPLOYMENT.md` for production deployment steps on Vercel + Convex.
