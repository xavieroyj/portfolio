import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
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
