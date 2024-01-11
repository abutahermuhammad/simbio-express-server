import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteBloodCenter, RelatedBloodCenterSchema, CompletePerson, RelatedPersonSchema, CompleteVersion, RelatedVersionSchema } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const BloodDonationSchema = z.object({
  id: z.number().int(),
  donor_id: z.number().int(),
  organization_id: z.number().int(),
  amount: z.number().int(),
  version: z.string(),
  donated_at: z.date(),
  referred_by: z.string().nullish(),
  test_done: jsonSchema,
  bags: z.string().array(),
  media_done: z.string().nullish(),
  media_used: z.string().nullish(),
  incubation: z.string().nullish(),
  note: z.string().nullish(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
  cabin_no: z.string().nullish(),
  reg_no: z.string().nullish(),
})

export interface CompleteBloodDonation extends z.infer<typeof BloodDonationSchema> {
  BloodCenter: CompleteBloodCenter
  Person: CompletePerson
  Version: CompleteVersion
}

/**
 * RelatedBloodDonationSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBloodDonationSchema: z.ZodSchema<CompleteBloodDonation> = z.lazy(() => BloodDonationSchema.extend({
  BloodCenter: RelatedBloodCenterSchema,
  Person: RelatedPersonSchema,
  Version: RelatedVersionSchema,
}))
