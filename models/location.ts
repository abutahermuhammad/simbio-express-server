import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteHospital, RelatedHospitalSchema, CompleteVersion, RelatedVersionSchema } from "./index"

export const LocationSchema = z.object({
  id: z.number().int(),
  latitude: z.number(),
  longitude: z.number(),
  version: z.string(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
})

export interface CompleteLocation extends z.infer<typeof LocationSchema> {
  Hospital: CompleteHospital[]
  Version: CompleteVersion
}

/**
 * RelatedLocationSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedLocationSchema: z.ZodSchema<CompleteLocation> = z.lazy(() => LocationSchema.extend({
  Hospital: RelatedHospitalSchema.array(),
  Version: RelatedVersionSchema,
}))
