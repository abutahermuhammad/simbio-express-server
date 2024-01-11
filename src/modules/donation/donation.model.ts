import * as z from "zod"
import { CompleteContact, CompleteMember, CompleteOrganization, CompletePerson, CompleteVersion, RelatedContactSchema, RelatedMemberSchema, RelatedOrganizationSchema, RelatedPersonSchema, RelatedVersionSchema } from "./index"

export const DonationSchema = z.object({
    id: z.number().int(),
    created_at: z.date(),
    updated_at: z.date(),
    amount: z.number().int(),
    donated_at: z.date(),
    version: z.string(),
    person: z.number().int(),
    member: z.number().int(),
    organization: z.number().int(),
})

export interface CompleteDonation extends z.infer<typeof DonationSchema> {
    Contact: CompleteContact[]
    Member: CompleteMember
    Organization: CompleteOrganization
    Person: CompletePerson
    Version: CompleteVersion
}

/**
 * RelatedDonationSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDonationSchema: z.ZodSchema<CompleteDonation> = z.lazy(() => DonationSchema.extend({
    Contact: RelatedContactSchema.array(),
    Member: RelatedMemberSchema,
    Organization: RelatedOrganizationSchema,
    Person: RelatedPersonSchema,
    Version: RelatedVersionSchema,
}))
