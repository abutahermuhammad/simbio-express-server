import { z } from 'zod';
import { ClubSchema } from './club.model';
import { DonationSchema } from './donation.model';
import { PersonSchema } from './person.model';
import { RequestSchema } from './request.model';
import { VersionSchema } from './version.model';


export const MemberSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    version: z.string(),
    allergies: z.string().nullable(),
    complications: z.string().nullable(),
    medications: z.string().nullable(),
    blood_disorders: z.string().nullable(),
    club_id: z.number().nullable(),
    infectious_diseases: z.string().nullable(),
    last_blood_donation: z.date().nullable(),
    medical_conditions: z.string().nullable(),
    person_id: z.number().nullable(),
    Donation: z.array(DonationSchema), // Define Donation schema
    Club: ClubSchema.optional(), // Define Club schema and mark it as optional
    Person: PersonSchema.optional(), // Define Person schema and mark it as optional
    Version: VersionSchema, // Define Version schema
    Request: z.array(RequestSchema), // Define Request schema
});

export type MemberSchemaType = z.infer<typeof MemberSchema>;



export const NewMemberSchema = z.object({
    personal: z.object({
        first_name: z.string().optional(),
        last_name: z.string().optional(),
        father_name: z.string().optional(),
        mother_name: z.string().optional(),
        profession: z.string().optional(),
        dob: z.date().optional(),
        gender: z.string().optional(),
        avatar: z.string().optional(),
        bid: z.string().optional(),
        driving: z.string().optional(),
        nid: z.string().optional(),
        passport: z.string().optional(),
    }),
    health: z.object({
        allergies: z.string().optional(),
        complications: z.string().optional(),
        medications: z.string().optional(),
        blood_disorders: z.string().optional(),
        infectious_diseases: z.string().optional(),
        last_blood_donation: z.date().optional(),
        medical_conditions: z.string().optional(),
    }),
    contact: z.object({
        address_line: z.string().optional(),
        address_line_1: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zip: z.string().optional(),
        country: z.string().optional(),
        phone: z.string().optional(),
        phone_1: z.string().optional(),
        fax: z.string().optional(),
        email: z.string().optional(),
        email_1: z.string().optional(),
        website: z.string().optional(),
        social_media: z.object({
            fb: z.string().optional(),
            fb_page: z.string().optional(),
            fb_group: z.string().optional(),
            instagram: z.string().optional(),
            linkedin: z.string().optional(),
            x: z.string().optional(),
            youtube: z.string().optional(),
        }).optional(),
    })
});
export type NewMemberSchemaType = z.infer<typeof MemberSchema>;