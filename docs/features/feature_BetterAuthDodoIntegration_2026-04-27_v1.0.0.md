# Feature: BetterAuth Dodo Integration (v1.0.0)

## Objective
Align payments implementation with the official Better Auth Dodo Payments plugin integration instead of relying only on a direct server-side SDK call.

## What Was Changed

### 1. Better Auth Server Integration
- Updated Convex Better Auth configuration in `packages/backend/convex/betterAuth/auth.ts`.
- Added Dodo plugin wiring using:
  - `dodopayments(...)`
  - `checkout(...)`
  - `portal(...)`
  - Conditional `webhooks(...)` when webhook secret exists.
- Added product slug mapping (`default-plan`) to support `checkoutSession` API.

### 2. Better Auth Client Integration
- Updated web auth client to include `dodopaymentsClient()`.
- Updated mobile auth client to include `dodopaymentsClient()`.

### 3. In-App Payment Verification Flow
- Added web client component `PaymentActions` to trigger:
  - `authClient.dodopayments.checkoutSession({ slug: "default-plan" })`
  - `authClient.dodopayments.customer.portal()`
- Added `payments/success` page for checkout success redirect target.

### 4. Dependencies
- Added `@dodopayments/better-auth` and `dodopayments` in backend.
- Added `@dodopayments/better-auth` in web and mobile clients.

## External Configuration TODO
1. Set Convex server variables:
   - `DODO_PAYMENTS_API_KEY`
   - `DODO_ENVIRONMENT` (`test_mode` or `live_mode`)
   - `DODO_DEFAULT_PRODUCT_ID` (must match dashboard product)
   - `DODO_PAYMENTS_WEBHOOK_SECRET` (recommended for webhook processing)
2. Configure Dodo webhook endpoint:
   - `https://<your-domain>/api/auth/dodopayments/webhooks`
3. Ensure Better Auth is reachable via your `/api/auth` route.
