import { z, defineCollection } from "astro:content";

const blogsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        pubDate: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    blogs: blogsCollection,
};