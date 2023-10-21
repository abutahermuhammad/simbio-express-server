import { z } from "zod";
import { MemberSchema } from "./member.model";
import { PersonSchema } from "./person.model";
import { VersionSchema } from "./version.model";


export const RequestSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    health_issue: z.string(),
    blood_group: z.enum(['A_POS', 'A_NEG', 'B_POS', 'B_NEG', 'O_POS', 'O_NEG', 'AB_POS', 'AB_NEG']),
    quantity: z.number().default(1),
    donation_type: z.string().max(30),
    datetime: z.date(),
    hospital_name: z.string().max(255),
    hospital_address: z.string().max(255),
    hospital_phone: z.string().max(255),
    hospital_email: z.string().max(255),
    version: z.string(),
    memberId: z.number().nullable(),
    personId: z.number(),
    referral: MemberSchema.optional(), // Define Member schema and mark it as optional
    patient: PersonSchema, // Define Person schema
    Version: VersionSchema, // Define Version schema
});

export type RequestSchemaType = z.infer<typeof RequestSchema>;



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