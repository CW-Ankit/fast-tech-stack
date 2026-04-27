import { createClient } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import type { GenericCtx } from "@convex-dev/better-auth/utils";
import type { BetterAuthOptions } from "better-auth";
import { betterAuth } from "better-auth";

import { components } from "../_generated/api";
import type { DataModel } from "../_generated/dataModel";
import AuthConfig from "../auth.config";
import BetterAuthSchema from "./schema";

export const authComponent = createClient<DataModel, typeof BetterAuthSchema>(
  components.betterAuth,
  {
    local: { schema: BetterAuthSchema },
    verbose: false
  }
);

export const createAuthOptions = (
  ctx: GenericCtx<DataModel>
): BetterAuthOptions => ({
  appName: "FastTechStack",
  baseURL: process.env.SITE_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: authComponent.adapter(ctx),
  emailAndPassword: {
    enabled: true
  },
  plugins: [convex({ authConfig: AuthConfig })]
});

export const options = createAuthOptions({} as GenericCtx<DataModel>);

export const createAuth = (ctx: GenericCtx<DataModel>) => {
  return betterAuth(createAuthOptions(ctx));
};
