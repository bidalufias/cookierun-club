/**
 * Placeholder types until Convex codegen runs.
 * `npx convex dev` will replace this file.
 */
import type { FunctionReference } from "convex/server";

export declare const api: {
  shops: {
    list: FunctionReference<"query">;
    areas: FunctionReference<"query">;
    seed: FunctionReference<"mutation">;
  };
};

export declare const internal: Record<string, never>;
