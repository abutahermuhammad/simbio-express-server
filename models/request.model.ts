import { z } from "zod";


// Request Parameter Schema Model
// This defines all the possible parameters.
export const RequestQuerySchema = z.object({
    context: z.enum(["web", "tauri"], {
        required_error: "Context is required"
    }),
    search: z.string().optional(),
    filter: z.string().optional(),
    q: z.string().optional(),
    limit: z.string().optional(),
    offset: z.string().optional(),
    sortby: z.string().optional(),
    order: z.string().optional(),
    exclude: z.string().optional(),
    include: z.string().optional()
});

export type RequestQuerySchemaType = z.infer<typeof RequestQuerySchema>;


// Request Parameter Schema Model
// This defines all the possible parameters.
export const RequestParameterSchema = z.object({});
export type RequestParameterSchemaType = z.infer<typeof RequestParameterSchema>;


export const RequestCookieSchema = z.object({});
export type RequestCookieSchemaType = z.infer<typeof RequestCookieSchema>;


// Single Page

// Request Parameter Schema Model
// This defines all the possible parameters.
export const SinglePageRequestParameterSchema = z.object({
    id: z.string()
});
export type SinglePageRequestParameterSchemaType = z.infer<typeof SinglePageRequestParameterSchema>;