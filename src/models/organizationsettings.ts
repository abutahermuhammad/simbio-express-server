import * as z from "zod"
import * as imports from "../prisma/null"
import { Language, TimeFormat, DateFormat, Timezone, Theme } from "@prisma/client"
import { CompleteOrganization, RelatedOrganizationSchema, CompleteLoginRecord, RelatedLoginRecordSchema, CompleteVersion, RelatedVersionSchema } from "./index"

export const OrganizationSettingsSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  language: z.nativeEnum(Language),
  time_format: z.nativeEnum(TimeFormat),
  date_format: z.nativeEnum(DateFormat),
  timezone: z.nativeEnum(Timezone),
  theme: z.nativeEnum(Theme).nullish(),
  email_notifications: z.boolean(),
  phone_notification: z.boolean(),
  push_notifications: z.boolean(),
  two_factor_auth: z.boolean().nullish(),
  loginRecordId: z.number().int().nullish(),
  accountDeactivation: z.boolean().nullish(),
  avatar: z.string().nullish(),
  clearBrowsingData: z.boolean().nullish(),
  contactSupportLink: z.string().nullish(),
  dataRetentionDays: z.number().int().nullish(),
  dataSharing: z.boolean().nullish(),
  helpCenterLink: z.string().nullish(),
  high_contrast_mode: z.boolean().nullish(),
  in_app_notifications: z.boolean().nullish(),
  key_board_shortcut: z.boolean().nullish(),
  notification_frequency: z.string().nullish(),
  notification_sound: z.string().nullish(),
  notification_vibrate: z.boolean().nullish(),
  password_reset: z.boolean().nullish(),
  security_answer: z.string().nullish(),
  security_question: z.string().nullish(),
  username: z.string().nullish(),
  version: z.string(),
})

export interface CompleteOrganizationSettings extends z.infer<typeof OrganizationSettingsSchema> {
  Organization: CompleteOrganization[]
  LoginRecord?: CompleteLoginRecord | null
  Version: CompleteVersion
}

/**
 * RelatedOrganizationSettingsSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrganizationSettingsSchema: z.ZodSchema<CompleteOrganizationSettings> = z.lazy(() => OrganizationSettingsSchema.extend({
  Organization: RelatedOrganizationSchema.array(),
  LoginRecord: RelatedLoginRecordSchema.nullish(),
  Version: RelatedVersionSchema,
}))
