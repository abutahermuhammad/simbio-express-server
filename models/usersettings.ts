import * as z from "zod"
import * as imports from "../prisma/null"
import { Language, TimeFormat, DateFormat, Timezone, Theme } from "@prisma/client"
import { CompleteUser, RelatedUserSchema, CompleteLoginRecord, RelatedLoginRecordSchema, CompleteVersion, RelatedVersionSchema } from "./index"

export const UserSettingsSchema = z.object({
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
  login_record_id: z.number().int(),
  loginRecordId: z.number().int(),
  high_contrast_mode: z.boolean().nullish(),
  in_app_notifications: z.boolean().nullish(),
  key_board_shortcut: z.boolean().nullish(),
  notification_frequency: z.string().nullish(),
  notification_sound: z.string().nullish(),
  notification_vibrate: z.boolean().nullish(),
  password_reset: z.boolean().nullish(),
  security_answer: z.string().nullish(),
  security_question: z.string().nullish(),
  version: z.string(),
})

export interface CompleteUserSettings extends z.infer<typeof UserSettingsSchema> {
  User: CompleteUser[]
  login_records: CompleteLoginRecord
  Version: CompleteVersion
}

/**
 * RelatedUserSettingsSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserSettingsSchema: z.ZodSchema<CompleteUserSettings> = z.lazy(() => UserSettingsSchema.extend({
  User: RelatedUserSchema.array(),
  login_records: RelatedLoginRecordSchema,
  Version: RelatedVersionSchema,
}))
