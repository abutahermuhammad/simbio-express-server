import * as z from "zod"
// import { CompleteLoginRecord, CompleteVersion, RelatedLoginRecordSchema, RelatedVersionSchema } from "./index"

export const DeviceSchema = z.object({
  id: z.number().int(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
  name: z.string().nullish(),
  mac_address: z.string().nullish(),
  model: z.string().nullish(),
  os: z.string().nullish(),
  os_version: z.string().nullish(),
  device_id: z.string().nullish(),
  brand: z.string().nullish(),
  manufacturer: z.string().nullish(),
  version: z.string(),
})

// export interface CompleteDevice extends z.infer<typeof DeviceSchema> {
//   Version: CompleteVersion
//   LoginRecord: CompleteLoginRecord[]
// }

/**
 * RelatedDeviceSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
// export const RelatedDeviceSchema: z.ZodSchema<CompleteDevice> = z.lazy(() => DeviceSchema.extend({
//   Version: RelatedVersionSchema,
//   LoginRecord: RelatedLoginRecordSchema.array(),
// }))
