import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteContact, RelatedContactSchema, CompleteOrganization, RelatedOrganizationSchema, CompletePerson, RelatedPersonSchema, CompleteVersion, RelatedVersionSchema } from "./index"

export const AmbulanceSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  vehicle_number: z.string(),
  ambulance_type: z.string().nullish(),
  person: z.number().int(),
  version: z.string(),
  organization: z.number().int().nullish(),
  equipment: z.string().array(),
  contact: z.number().int().nullish(),
  color: z.string().nullish(),
})

export interface CompleteAmbulance extends z.infer<typeof AmbulanceSchema> {
  Contact?: CompleteContact | null
  Organization?: CompleteOrganization | null
  Person: CompletePerson
  Version: CompleteVersion
}

/**
 * RelatedAmbulanceSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAmbulanceSchema: z.ZodSchema<CompleteAmbulance> = z.lazy(() => AmbulanceSchema.extend({
  Contact: RelatedContactSchema.nullish(),
  Organization: RelatedOrganizationSchema.nullish(),
  Person: RelatedPersonSchema,
  Version: RelatedVersionSchema,
}))
