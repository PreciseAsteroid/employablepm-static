import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // date may be absent on drafts; coerce "YYYY-MM-DD" strings to Date
    date: z.coerce.date().optional(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // LinkedIn-origin posts carry these two optional fields
    source: z.string().optional(),
    linkedin_url: z.string().url().optional(),
  }),
});

export const collections = { posts };
