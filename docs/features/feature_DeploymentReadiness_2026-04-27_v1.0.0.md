# Feature: Deployment Readiness (v1.0.0)

## Objective
Provide production deployment instructions for Vercel and improve visible runtime verification for both web and mobile applications.

## Changes Implemented

### 1. Deployment Documentation
- Added root-level `DEPLOYMENT.md` covering:
  - Convex deployment flow.
  - Vercel setup for Next.js app.
  - Required environment variables.
  - Better Auth production callback guidance.
  - Mobile deployment note with Expo/EAS.
  - Verification checklist and rollback strategy.

### 2. Web Verification Surface
- Added API endpoint: `apps/web/app/api/stack/status/route.ts`.
- Added UI component: `apps/web/components/stack/StackStatus.tsx`.
- Updated landing page to expose:
  - Environment readiness state.
  - Link to stack status API.
  - Better Auth and Dodo checkout action links.

### 3. Mobile Verification Surface
- Updated `apps/mobile/app/index.tsx` with:
  - Runtime environment status cards.
  - Action button to open web stack status endpoint.
  - Action button to open Dodo mobile integration documentation.

## Verification Strategy
1. Confirm `/api/stack/status` returns JSON with boolean environment state fields.
2. Confirm web homepage renders status card values.
3. Confirm mobile screen renders environment cards and opens action links.
