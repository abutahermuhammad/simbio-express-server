import { z } from "zod";
import { HttpRequestParamsSchema, HttpRequestQuerySchema, RequestBodySchema } from "../../models/request.model";

export const FacilityTypeSchema = z.enum(["HOSPITAL", "CLINIC", "OTHER"]);

export type TFacilityType = z.infer<typeof FacilityTypeSchema>;

// Define the Hospital schema
export const HospitalSchema = z.object({
    name: z.string(),
    founded_at: z.string(), // Adjust this based on the actual data type
    accreditation: z.string().optional(),
    bed_count: z.number().optional(),
    emergency_room: z.boolean().optional(),
    services: z.array(z.string()),
    specialties: z.array(z.string()),
    rating: z.number().optional(),
    facility_type: FacilityTypeSchema, // Assuming FacilityType is a string
    ownership: z.string().optional(),
    insurance_accepted: z.string().optional(),
    operating_hours: z.string().optional(),
    infrastructure: z.string().optional(),
    security_controls: z.string().optional(),
    // version: z.string(),
    location: z.number().optional(),
    contact: z.number().optional(),
    founder: z.number().optional(),
    director: z.number().optional(),
    chairman: z.number().optional(),
});

// Export the types for easier use
export type THospital = z.infer<typeof HospitalSchema>


/**
 * Route: POST /blood-requests
 */
export const PostHospitalRequestValidatorSchema = z.object({
    body: RequestBodySchema.extend(HospitalSchema.shape)
});


/**
 * Route: GET /blood-requests
 */
export const GetHospitalsRequestValidatorSchema = z.object({
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
 * Route: GET /blood-requests/{hospitalId}
 */
export const GetHospitalRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        hospitalId: z.string().min(1).max(8)
    })
});


/**
 * Route: PUT /blood-requests/{hospitalId}
 */
export const PutHospitalRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        hospitalId: z.string().min(1).max(8)
    }),
    body: HospitalSchema.partial()
})


/**
 * Route: DELETE /blood-requests/{hospitalId}
 */
export const DeleteHospitalRequestValidatorSchema = z.object({
    query: HttpRequestQuerySchema,
    params: HttpRequestParamsSchema.extend({
        hospitalId: z.string().min(1).max(8)
    })
});