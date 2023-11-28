import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteDonation, RelatedDonationSchema, CompleteClub, RelatedClubSchema, CompletePerson, RelatedPersonSchema, CompleteVersion, RelatedVersionSchema, CompleteRequest, RelatedRequestSchema } from "./index"

export const MemberSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  version: z.string(),
  allergies: z.string().nullish(),
  complications: z.string().nullish(),
  medications: z.string().nullish(),
  blood_disorders: z.string().nullish(),
  club_id: z.number().int().nullish(),
  infectious_diseases: z.string().nullish(),
  last_blood_donation: z.date().nullish(),
  medical_conditions: z.string().nullish(),
  person_id: z.number().int().nullish(),
})

export interface CompleteMember extends z.infer<typeof MemberSchema> {
  Donation: CompleteDonation[]
  Club?: CompleteClub | null
  Person?: CompletePerson | null
  Version: CompleteVersion
  Request: CompleteRequest[]
}

/**
 * RelatedMemberSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMemberSchema: z.ZodSchema<CompleteMember> = z.lazy(() => MemberSchema.extend({
  Donation: RelatedDonationSchema.array(),
  Club: RelatedClubSchema.nullish(),
  Person: RelatedPersonSchema.nullish(),
  Version: RelatedVersionSchema,
  Request: RelatedRequestSchema.array(),
}))
