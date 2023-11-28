import { z } from "zod";
import { MemberSchema } from "./member.model";
import { BLOOD_GROUP } from "./others.model";
import { PersonSchema } from "./person.model";
import { VersionSchema } from "./version.model";

export const SpecialRequestSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    health_issue: z.string(),
    blood_group: BLOOD_GROUP,
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

export type SpecialRequestSchemaType = z.infer<typeof SpecialRequestSchema>;
