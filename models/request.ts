import * as z from "zod"
import * as imports from "../prisma/null"
import { BloodGroup } from "@prisma/client"
import { CompleteMember, RelatedMemberSchema, CompletePerson, RelatedPersonSchema, CompleteVersion, RelatedVersionSchema } from "./index"

export const RequestSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  health_issue: z.string(),
  blood_group: z.nativeEnum(BloodGroup),
  quantity: z.number().int(),
  donation_type: z.string(),
  datetime: z.date(),
  hospital_name: z.string(),
  hospital_address: z.string(),
  hospital_phone: z.string(),
  hospital_email: z.string(),
  version: z.string(),
  memberId: z.number().int().nullish(),
  personId: z.number().int(),
})

export interface CompleteRequest extends z.infer<typeof RequestSchema> {
  referral?: CompleteMember | null
  patient: CompletePerson
  Version: CompleteVersion
}

/**
 * RelatedRequestSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRequestSchema: z.ZodSchema<CompleteRequest> = z.lazy(() => RequestSchema.extend({
  referral: RelatedMemberSchema.nullish(),
  patient: RelatedPersonSchema,
  Version: RelatedVersionSchema,
}))
