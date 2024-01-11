import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteContact, RelatedContactSchema, CompletePerson, RelatedPersonSchema, CompleteVersion, RelatedVersionSchema, CompleteBloodDonation, RelatedBloodDonationSchema } from "./index"

export const BloodCenterSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  established_at: z.date(),
  version: z.string(),
  founder: z.number().int(),
  contact: z.number().int().nullish(),
  title: z.string(),
})

export interface CompleteBloodCenter extends z.infer<typeof BloodCenterSchema> {
  Contact_BloodCenter_contactToContact?: CompleteContact | null
  Person: CompletePerson
  Version: CompleteVersion
  BloodDonation: CompleteBloodDonation[]
  Contact_Contact_blood_centerToBloodCenter: CompleteContact[]
}

/**
 * RelatedBloodCenterSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBloodCenterSchema: z.ZodSchema<CompleteBloodCenter> = z.lazy(() => BloodCenterSchema.extend({
  Contact_BloodCenter_contactToContact: RelatedContactSchema.nullish(),
  Person: RelatedPersonSchema,
  Version: RelatedVersionSchema,
  BloodDonation: RelatedBloodDonationSchema.array(),
  Contact_Contact_blood_centerToBloodCenter: RelatedContactSchema.array(),
}))
