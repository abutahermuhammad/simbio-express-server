import * as z from "zod"
import * as imports from "../prisma/null"
import { AuthenticationMethod } from "@prisma/client"
import { CompleteDevice, RelatedDeviceSchema, CompleteVersion, RelatedVersionSchema, CompleteOrganizationSettings, RelatedOrganizationSettingsSchema, CompleteUser, RelatedUserSchema, CompleteUserSettings, RelatedUserSettingsSchema } from "./index"

export const LoginRecordSchema = z.object({
  id: z.number().int(),
  user: z.number().int(),
  ip_address: z.string(),
  user_agent: z.string(),
  login_status: z.string(),
  session_id: z.string().nullish(),
  location: z.string().nullish(),
  authentication: z.nativeEnum(AuthenticationMethod).nullish(),
  security_tokens: z.string().nullish(),
  logout_timestamp: z.date().nullish(),
  version: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  devices: z.number().int().nullish(),
})

export interface CompleteLoginRecord extends z.infer<typeof LoginRecordSchema> {
  Device?: CompleteDevice | null
  Version: CompleteVersion
  OrganizationSettings: CompleteOrganizationSettings[]
  User: CompleteUser[]
  UserSettings: CompleteUserSettings[]
}

/**
 * RelatedLoginRecordSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedLoginRecordSchema: z.ZodSchema<CompleteLoginRecord> = z.lazy(() => LoginRecordSchema.extend({
  Device: RelatedDeviceSchema.nullish(),
  Version: RelatedVersionSchema,
  OrganizationSettings: RelatedOrganizationSettingsSchema.array(),
  User: RelatedUserSchema.array(),
  UserSettings: RelatedUserSettingsSchema.array(),
}))
