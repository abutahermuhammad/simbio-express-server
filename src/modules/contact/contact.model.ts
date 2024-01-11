import * as z from "zod"
import { CompleteBloodCenter, CompleteClub, CompleteCountry, CompleteDonation, CompleteHospital, CompletePerson, CompleteVersion, RelatedBloodCenterSchema, RelatedClubSchema, RelatedCountrySchema, RelatedDonationSchema, RelatedHospitalSchema, RelatedPersonSchema, RelatedVersionSchema } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const ContactSchema = z.object({
    id: z.number().int(),
    created_at: z.date(),
    updated_at: z.date(),
    address_line: z.string(),
    address_line_1: z.string().nullish(),
    state: z.string(),
    city: z.string(),
    zip: z.string(),
    phone: z.string(),
    phone_1: z.string().nullish(),
    fax: z.string().nullish(),
    email: z.string().nullish(),
    email_1: z.string().nullish(),
    website: z.string().nullish(),
    social_media: jsonSchema,
    version: z.string(),
    country: z.string().nullish(),
    person: z.number().int().nullish(),
    club: z.number().int().nullish(),
    blood_center: z.number().int().nullish(),
    donation: z.number().int().nullish(),
    hospital: z.number().int().nullish(),
})

export interface CompleteContact extends z.infer<typeof ContactSchema> {
    BloodCenter_BloodCenter_contactToContact: CompleteBloodCenter[]
    Club_Club_contactToContact: CompleteClub[]
    BloodCenter_Contact_blood_centerToBloodCenter?: CompleteBloodCenter | null
    Club_Contact_clubToClub?: CompleteClub | null
    Country?: CompleteCountry | null
    Donation?: CompleteDonation | null
    Hospital_Contact_hospitalToHospital?: CompleteHospital | null
    Person_Contact_personToPerson?: CompletePerson | null
    Version: CompleteVersion
    Hospital_Hospital_contactToContact: CompleteHospital[]
    Person: CompletePerson[]
}

/**
 * RelatedContactSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedContactSchema: z.ZodSchema<CompleteContact> = z.lazy(() => ContactSchema.extend({
    BloodCenter_BloodCenter_contactToContact: RelatedBloodCenterSchema.array(),
    Club_Club_contactToContact: RelatedClubSchema.array(),
    BloodCenter_Contact_blood_centerToBloodCenter: RelatedBloodCenterSchema.nullish(),
    Club_Contact_clubToClub: RelatedClubSchema.nullish(),
    Country: RelatedCountrySchema.nullish(),
    Donation: RelatedDonationSchema.nullish(),
    Hospital_Contact_hospitalToHospital: RelatedHospitalSchema.nullish(),
    Person_Contact_personToPerson: RelatedPersonSchema.nullish(),
    Version: RelatedVersionSchema,
    Hospital_Hospital_contactToContact: RelatedHospitalSchema.array(),
    Person: RelatedPersonSchema.array(),
}))
