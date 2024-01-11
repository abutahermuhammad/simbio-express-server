import { z } from "zod";
import { HttpRequestParamsSchema, HttpRequestQuerySchema, RequestBodySchema } from "../../models/request.model";

export const SocialMediaSchema = z.object({
    facebook: z.string().max(255).optional(),
    instagram: z.string().max(255).optional(),
    x: z.string().max(255).optional(),
    linkedin: z.string().max(255).optional(),
})
export type TSocialMedia = z.infer<typeof SocialMediaSchema>;

// Define the Contact schema
export const ContactSchema = z.object({
    address_line: z.string().max(255),
    address_line_1: z.string().max(255).optional(),
    state: z.string().max(32),
    city: z.string().max(32),
    zip: z.string().max(15),
    phone: z.string().max(15),
    phone_1: z.string().max(15).optional(),
    fax: z.string().max(15).optional(),
    email: z.string().max(100).optional(),
    email_1: z.string().max(100).optional(),
    website: z.string().max(100).optional(),
    social_media: SocialMediaSchema.optional(), // You may need to define a more specific schema for social_media
    // version: z.string().default('v1').max(255),
    country: z.string().max(2).optional(),
    person: z.number().optional(),
    club: z.number().optional(),
    blood_center: z.number().optional(),
    donation: z.number().optional(),
    hospital: z.number().optional(),
});

// Export the types for easier use
export type TContact = z.infer<typeof ContactSchema>;


/**
 * Route: POST /blood-requests
 */
export const PostContactRequestValidatorSchema = z.object({
    body: RequestBodySchema.extend(ContactSchema.shape)
});


/**
 * Route: GET /blood-requests
 */
export const GetContactsRequestValidatorSchema = z.object({
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
 * Route: GET /blood-requests/{contactId}
 */
export const GetContactRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        contactId: z.string().min(1).max(8)
    })
});


/**
 * Route: PUT /blood-requests/{contactId}
 */
export const PutContactRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        contactId: z.string().min(1).max(8)
    }),
    body: ContactSchema.partial()
})


/**
 * Route: DELETE /blood-requests/{contactId}
 */
export const DeleteContactRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        contactId: z.string().min(1).max(8)
    })
});