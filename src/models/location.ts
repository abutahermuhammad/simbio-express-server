import * as z from "zod"
// import { CompleteBloodCenter, CompleteHospital, CompleteVersion, RelatedBloodCenterSchema, RelatedHospitalSchema, RelatedVersionSchema } from "./index"

export const LocationSchema = z.object({
  id: z.number().int(),
  latitude: z.number(),
  longitude: z.number(),
  version: z.string(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
})

// export interface CompleteLocation extends z.infer<typeof LocationSchema> {
//   BloodCenter: CompleteBloodCenter[]
//   Hospital: CompleteHospital[]
//   Version: CompleteVersion
// }

/**
 * RelatedLocationSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
// export const RelatedLocationSchema: z.ZodSchema<CompleteLocation> = z.lazy(() => LocationSchema.extend({
//   BloodCenter: RelatedBloodCenterSchema.array(),
//   Hospital: RelatedHospitalSchema.array(),
//   Version: RelatedVersionSchema,
// }))
