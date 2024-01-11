import * as z from "zod"
// import { CompleteOrganization, CompletePerson, CompleteVersion, RelatedOrganizationSchema, RelatedPersonSchema, RelatedVersionSchema } from "./index"

export const AmbulanceSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  vehicle_number: z.string(),
  ambulance_type: z.string().nullish(),
  person_id: z.number().int(),
  version: z.string(),
  organization: z.number().int().nullish(),
})

// export interface CompleteAmbulance extends z.infer<typeof AmbulanceSchema> {
//   Organization?: CompleteOrganization | null
//   Person: CompletePerson
//   Version_Ambulance_versionToVersion: CompleteVersion
// }

/**
 * RelatedAmbulanceSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
// export const RelatedAmbulanceSchema: z.ZodSchema<CompleteAmbulance> = z.lazy(() => AmbulanceSchema.extend({
//   Organization: RelatedOrganizationSchema.nullish(),
//   Person: RelatedPersonSchema,
//   Version_Ambulance_versionToVersion: RelatedVersionSchema,
// }))
