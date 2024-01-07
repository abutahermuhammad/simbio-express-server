import { z } from "zod";


// Request Parameter Schema Model
// This defines all the possible parameters.
export const RequestQuerySchema = z.object({
    context: z.enum(["web", "tauri"], {
        required_error: "Context is required"
    }),
    search: z.string().nullish(),
    filter: z.string().nullish(),
    q: z.string().nullish(),
    limit: z.string().nullish(),
    offset: z.string().nullish(),
    sortby: z.string().nullish(),
    order: z.string().nullish(),
    exclude: z.string().nullish(),
    include: z.string().nullish()
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