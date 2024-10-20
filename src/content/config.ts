import { z, defineCollection } from "astro:content";

const blogsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        pubDate: z.date(),
        draft: z.boolean(),
        keywords: z.array(z.string()).optional(),
        heroImage: z.string().optional(),
    }),
});

export const collections = {
    blogs: blogsCollection,
};