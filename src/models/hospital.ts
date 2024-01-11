import { FacilityType } from "@prisma/client"
import * as z from "zod"
// import { CompleteContact, CompleteLocation, CompleteVersion, RelatedContactSchema, RelatedLocationSchema, RelatedVersionSchema } from "./index"

export const HospitalSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  name: z.string(),
  founded_at: z.date(),
  accreditation: z.string().nullish(),
  bed_count: z.number().int().nullish(),
  emergency_room: z.boolean().nullish(),
  services: z.string().array(),
  specialties: z.string().array(),
  rating: z.number().nullish(),
  facility_type: z.nativeEnum(FacilityType).nullish(),
  ownership: z.string().nullish(),
  insurance_accepted: z.string().nullish(),
  operating_hours: z.string().nullish(),
  infrastructure: z.string().nullish(),
  security_controls: z.string().nullish(),
  version: z.string(),
  location: z.number().int().nullish(),
  contact: z.number().int().nullish(),
  founder: z.number().int().nullish(),
  director: z.number().int().nullish(),
  chairman: z.number().int().nullish(),
})

// export interface CompleteHospital extends z.infer<typeof HospitalSchema> {
//   Contact_Contact_hospitalToHospital: CompleteContact[]
//   Contact_Hospital_contactToContact?: CompleteContact | null
//   Location?: CompleteLocation | null
//   Version: CompleteVersion
// }

/**
 * RelatedHospitalSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
// export const RelatedHospitalSchema: z.ZodSchema<CompleteHospital> = z.lazy(() => HospitalSchema.extend({
//   Contact_Contact_hospitalToHospital: RelatedContactSchema.array(),
//   Contact_Hospital_contactToContact: RelatedContactSchema.nullish(),
//   Location: RelatedLocationSchema.nullish(),
//   Version: RelatedVersionSchema,
// }))
