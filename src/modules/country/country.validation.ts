import { z } from "zod";
import { HttpRequestParamsSchema, HttpRequestQuerySchema, RequestBodySchema } from "../../models/request.model";


// Define the Country schema
export const CountrySchema = z.object({
    alpha_3: z.string(),
    alpha_2: z.string(),
    numeric: z.string(),
    name: z.string(),
    // version: z.string(),
});

// Export the types for easier use
export type TCountry = z.infer<typeof CountrySchema>;


/**
 * Route: POST /blood-requests
 */
export const PostCountryRequestValidatorSchema = z.object({
    body: RequestBodySchema.extend(CountrySchema.shape)
});


/**
 * Route: GET /blood-requests
 */
export const GetCountriesRequestValidatorSchema = z.object({
    // Define your schemas for query, params, body, and cookies here
    query: HttpRequestQuerySchema.extend({
        search: z.string().nullish(),
        filter: z.string().nullish(),
        q: z.string().nullish(),
        limit: z.string().nullish(),
        offset: z.string().nullish(),
        sortby: z.string().nullish(),
        order: z.string().nullish(),
        exclude: z.string().nullish(),
        include: z.string().nullish()
    }),
    // body: z.object({}).optional(),
    // cookies: RequestCookieSchema,
});


/**
 * Route: GET /blood-requests/{countryId}
 */
export const GetCountryRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        countryId: z.string().min(1).max(8)
    })
});


/**
 * Route: PUT /blood-requests/{countryId}
 */
export const PutCountryRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        countryId: z.string().min(1).max(8)
    }),
    body: CountrySchema.partial()
})


/**
 * Route: DELETE /blood-requests/{countryId}
 */
export const DeleteCountryRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        countryId: z.string().min(1).max(8)
    })
});