// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// ── Blog collection ──────────────────────────────────────────────────────────
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    category:    z.enum([
      '高嫚世界觀',
      '精神指引',
      '英文懶人包',
      'PDF攻略',
      '黃金系列',
    ]),
    tags:        z.array(z.string()).default([]),
    author:      z.string().default('高嫚老師'),
    draft:       z.boolean().default(false),
    ogImage:     z.string().optional(),
    readingTime: z.number().optional(),
    // SEO承接舊路由用
    legacySlug:  z.string().optional(),
  }),
});

// ── Testimonials collection ──────────────────────────────────────────────────
const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name:      z.string(),
    role:      z.string(),
    avatar:    z.string().default(''),
    featured:  z.boolean().default(false),
    sortOrder: z.number().default(99),
    tags:      z.array(z.string()).default([]),
    result:    z.string().optional(),
  }),
});

export const collections = { blog, testimonials };
