import { z } from "zod";
import { BloodCenterSchema } from "./blood-center.model";
import { ClubSchema } from "./club.model";
import { CountrySchema } from "./country.model";
import { DonationSchema } from "./donation.model";
import { HospitalSchema } from "./hospital.model";
import { PersonSchema } from "./person.model";
import { VersionSchema } from "./version.model";


export const ContactSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    address_line: z.string().max(255),
    address_line_1: z.string().max(255).nullable(),
    state: z.string().max(32),
    city: z.string().max(32),
    zip: z.string().max(15),
    phone: z.string().max(15),
    phone_1: z.string().max(15).nullable(),
    fax: z.string().max(15).nullable(),
    email: z.string().max(100).nullable(),
    email_1: z.string().max(100).nullable(),
    website: z.string().max(100).nullable(),
    social_media: z.record(z.string()).nullable(),
    version: z.string(),
    country: z.string().nullable().max(2),
    person: z.number().nullable(),
    club: z.number().nullable(),
    blood_center: z.number().nullable(),
    donation: z.number().nullable(),
    hospital: z.number().nullable(),
    BloodCenter_BloodCenter_contactToContact: z.array(BloodCenterSchema), // Define BloodCenter schema
    Club_Club_contactToContact: z.array(ClubSchema), // Define Club schema
    BloodCenter_Contact_blood_centerToBloodCenter: BloodCenterSchema.optional(), // Define BloodCenter schema
    Club_Contact_clubToClub: ClubSchema.optional(), // Define Club schema
    Country: CountrySchema.optional(), // Define Country schema
    Donation: DonationSchema.optional(), // Define Donation schema
    Hospital_Contact_hospitalToHospital: HospitalSchema.optional(), // Define Hospital schema
    Person_Contact_personToPerson: PersonSchema.optional(), // Define Person schema
    Version: VersionSchema, // Define Version schema
    Hospital_Hospital_contactToContact: z.array(HospitalSchema), // Define Hospital schema
    Person: z.array(PersonSchema), // Define Person schema
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;


export const ContactsSchema = z.object({
    contacts: z.array(ContactSchema)
})
export type ContactsSchemaType = z.infer<typeof ContactsSchema>;


// Update Schema

export const MinimalContactSchema = z.object({
    address_line: z.string(),
    address_line_1: z.string().optional(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
    phone: z.string(),
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
    version: z.string().optional()
})
export type MinimalContactSchemaType = z.infer<typeof ContactSchema>;