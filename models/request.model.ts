import { z } from "zod";

export const ListRequestParameterSchema = z.object({
    context: z.string(),
    search: z.string().optional(),
    filter: z.string().optional(),
    q: z.string().optional(),
    limit: z.number().optional(),
    offset: z.number().optional(),
    sortby: z.string().optional(),
    sortorder: z.string().optional(),
    exclude: z.string().optional(),
    include: z.string().optional()
})

export type ListRequestParameterType = z.infer<typeof ListRequestParameterSchema>;