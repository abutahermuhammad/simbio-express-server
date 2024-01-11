import { z } from "zod";


// Request Parameter Schema Model
// This defines all the possible parameters.
export const HttpRequestQuerySchema = z.object({
    context: z.enum(["web", "tauri"], {
        required_error: "Context is required"
    }),

    // Route specific params
    // Moved to individual route validator.
    // search: z.string().nullish(),
    // filter: z.string().nullish(),
    // q: z.string().nullish(),
    // limit: z.string().nullish(),
    // offset: z.string().nullish(),
    // sortby: z.string().nullish(),
    // order: z.string().nullish(),
    // exclude: z.string().nullish(),
    // include: z.string().nullish()
});



// Request Parameter Schema Model
// This defines all the possible parameters.
export const HttpRequestParamsSchema = z.object({});


export const RequestCookiesSchema = z.object({});

export const RequestBodySchema = z.object({})