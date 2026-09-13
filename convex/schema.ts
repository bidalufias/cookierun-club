import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  shops: defineTable({
    name: v.string(),
    area: v.string(),
    hours: v.string(),
    knownFor: v.string(),
    mapsUrl: v.string(),
    instagram: v.optional(v.string()),
    whatsapp: v.optional(v.string()),
    lateNight: v.boolean(),
  }).index("by_area", ["area"]),
});
