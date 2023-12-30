import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteContact, RelatedContactSchema, CompletePerson, RelatedPersonSchema, CompleteLocation, RelatedLocationSchema, CompleteVersion, RelatedVersionSchema } from "./index"

export const BloodCenterSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  established_at: z.date(),
  version: z.string(),
  founder: z.number().int().nullish(),
  contact: z.number().int().nullish(),
  location: z.number().int().nullish(),
})

export interface CompleteBloodCenter extends z.infer<typeof BloodCenterSchema> {
  Contact_BloodCenter_contactToContact?: CompleteContact | null
  Person?: CompletePerson | null
  Location?: CompleteLocation | null
  Version: CompleteVersion
  Contact_Contact_blood_centerToBloodCenter: CompleteContact[]
}

/**
 * RelatedBloodCenterSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBloodCenterSchema: z.ZodSchema<CompleteBloodCenter> = z.lazy(() => BloodCenterSchema.extend({
  Contact_BloodCenter_contactToContact: RelatedContactSchema.nullish(),
  Person: RelatedPersonSchema.nullish(),
  Location: RelatedLocationSchema.nullish(),
  Version: RelatedVersionSchema,
  Contact_Contact_blood_centerToBloodCenter: RelatedContactSchema.array(),
}))
