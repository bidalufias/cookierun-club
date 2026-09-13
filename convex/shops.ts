import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {
    area: v.optional(v.string()),
    lateNightOnly: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    let shops = await ctx.db.query("shops").collect();

    if (args.area && args.area !== "All") {
      shops = shops.filter((s) => s.area === args.area);
    }

    if (args.lateNightOnly) {
      shops = shops.filter((s) => s.lateNight);
    }

    return shops.sort((a, b) => a.name.localeCompare(b.name));
  },
});

export const areas = query({
  args: {},
  handler: async (ctx) => {
    const shops = await ctx.db.query("shops").collect();
    const unique = [...new Set(shops.map((s) => s.area))].sort();
    return unique;
  },
});

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("shops").first();
    if (existing) {
      return { seeded: false, message: "Shops already exist — skip seed." };
    }

    const shops = [
      {
        name: "Famous Amos Mid Valley",
        area: "Mid Valley / Bangsar",
        hours: "10:00 AM – 10:00 PM",
        knownFor: "Chocolate chip classics & gift tins",
        mapsUrl: "https://maps.google.com/?q=Famous+Amos+Mid+Valley+KL",
        instagram: "https://instagram.com/famousamosmalaysia",
        whatsapp: undefined,
        lateNight: false,
      },
      {
        name: "Famous Amos Pavilion KL",
        area: "Bukit Bintang",
        hours: "10:00 AM – 10:00 PM",
        knownFor: "Warm chocolate chip & macadamia",
        mapsUrl: "https://maps.google.com/?q=Famous+Amos+Pavilion+KL",
        instagram: "https://instagram.com/famousamosmalaysia",
        whatsapp: undefined,
        lateNight: false,
      },
      {
        name: "Cookies by Crumble KL",
        area: "TTDI",
        hours: "11:00 AM – 9:00 PM",
        knownFor: "Thick gooey stuffed cookies",
        mapsUrl: "https://maps.google.com/?q=Cookies+by+Crumble+TTDI",
        instagram: "https://instagram.com/cookiesbycrumble",
        whatsapp: "https://wa.me/60123456701",
        lateNight: false,
      },
      {
        name: "The Cookie Project Bangsar",
        area: "Mid Valley / Bangsar",
        hours: "12:00 PM – 11:00 PM",
        knownFor: "Late-night soft-batch & brown butter",
        mapsUrl: "https://maps.google.com/?q=Bangsar+Village+cookies",
        instagram: "https://instagram.com/thecookieprojectkl",
        whatsapp: "https://wa.me/60123456702",
        lateNight: true,
      },
      {
        name: "Dough & Co. Subang",
        area: "Subang Jaya",
        hours: "10:00 AM – 10:30 PM",
        knownFor: "Sourdough cookies & oat raisin",
        mapsUrl: "https://maps.google.com/?q=Subang+Jaya+bakery+cookies",
        instagram: "https://instagram.com/doughandcokl",
        whatsapp: "https://wa.me/60123456703",
        lateNight: true,
      },
      {
        name: "Butter Batch Petaling Jaya",
        area: "Petaling Jaya",
        hours: "9:00 AM – 8:00 PM",
        knownFor: "Butter cookies & festive boxes",
        mapsUrl: "https://maps.google.com/?q=Petaling+Jaya+cookie+bakery",
        instagram: "https://instagram.com/butterbatchpj",
        whatsapp: "https://wa.me/60123456704",
        lateNight: false,
      },
      {
        name: "Night Oven Mont Kiara",
        area: "Mont Kiara",
        hours: "2:00 PM – 12:00 AM",
        knownFor: "Midnight cookie runs & hot cocoa",
        mapsUrl: "https://maps.google.com/?q=Mont+Kiara+bakery",
        instagram: "https://instagram.com/nightovenmk",
        whatsapp: "https://wa.me/60123456705",
        lateNight: true,
      },
      {
        name: "Klang Cookie Co.",
        area: "Klang",
        hours: "10:00 AM – 9:00 PM",
        knownFor: "Pandantastic & gula melaka chips",
        mapsUrl: "https://maps.google.com/?q=Klang+cookies+bakery",
        instagram: "https://instagram.com/klangcookieco",
        whatsapp: "https://wa.me/60123456706",
        lateNight: false,
      },
      {
        name: "Crumble Lab Cheras",
        area: "Cheras",
        hours: "11:00 AM – 11:00 PM",
        knownFor: "NY-style thick cookies, late open",
        mapsUrl: "https://maps.google.com/?q=Cheras+cookie+shop",
        instagram: "https://instagram.com/crumblelabcheras",
        whatsapp: "https://wa.me/60123456707",
        lateNight: true,
      },
      {
        name: "Oven Stories Shah Alam",
        area: "Shah Alam",
        hours: "10:00 AM – 9:30 PM",
        knownFor: "Homestyle chocolate chunk",
        mapsUrl: "https://maps.google.com/?q=Shah+Alam+bakery+cookies",
        instagram: "https://instagram.com/ovenstoriessa",
        whatsapp: "https://wa.me/60123456708",
        lateNight: false,
      },
      {
        name: "Sweet Crumb Damansara",
        area: "Damansara",
        hours: "11:00 AM – 10:00 PM",
        knownFor: "Assorted tins & custom orders",
        mapsUrl: "https://maps.google.com/?q=Damansara+Utama+cookies",
        instagram: "https://instagram.com/sweetcrumbdamansara",
        whatsapp: "https://wa.me/60123456709",
        lateNight: false,
      },
      {
        name: "Midnight Batch Puchong",
        area: "Puchong",
        hours: "3:00 PM – 1:00 AM",
        knownFor: "True late-night cookie drops",
        mapsUrl: "https://maps.google.com/?q=Puchong+bakery+late+night",
        instagram: "https://instagram.com/midnightbatchpuchong",
        whatsapp: "https://wa.me/60123456710",
        lateNight: true,
      },
    ];

    for (const shop of shops) {
      await ctx.db.insert("shops", shop);
    }

    return { seeded: true, count: shops.length };
  },
});
