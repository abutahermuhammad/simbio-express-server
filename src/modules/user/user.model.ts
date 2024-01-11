import { AccountStatus } from "@prisma/client"
import * as z from "zod"
import { CompleteLoginRecord, CompletePerson, CompleteSecurityQuestion, CompleteSocialMediaLinks, CompleteTwoFactorAuth, CompleteUser, CompleteUserRole, CompleteUserSettings, CompleteVersion, RelatedLoginRecordSchema, RelatedPersonSchema, RelatedSecurityQuestionSchema, RelatedSocialMediaLinksSchema, RelatedTwoFactorAuthSchema, RelatedUserRoleSchema, RelatedUserSchema, RelatedUserSettingsSchema, RelatedVersionSchema } from "./index"

export const UserSchema = z.object({
    id: z.number().int(),
    username: z.string().nullish(),
    email: z.string(),
    password: z.string(),
    status: z.nativeEnum(AccountStatus),
    ip: z.string(),
    two_factor_auth: z.number().int(),
    social_login: z.number().int(),
    logins: z.number().int(),
    person: z.number().int(),
    settings: z.number().int(),
    version: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserSchema> {
    securityQuestions: CompleteSecurityQuestion[]
    LoginRecord: CompleteLoginRecord
    Person: CompletePerson
    SocialMediaLinks: CompleteSocialMediaLinks
    TwoFactorAuth: CompleteTwoFactorAuth
    UserSettings: CompleteUserSettings
    Version: CompleteVersion
    role: CompleteUserRole[]
}

/**
 * RelatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() => UserSchema.extend({
    securityQuestions: RelatedSecurityQuestionSchema.array(),
    LoginRecord: RelatedLoginRecordSchema,
    Person: RelatedPersonSchema,
    SocialMediaLinks: RelatedSocialMediaLinksSchema,
    TwoFactorAuth: RelatedTwoFactorAuthSchema,
    UserSettings: RelatedUserSettingsSchema,
    Version: RelatedVersionSchema,
    role: RelatedUserRoleSchema.array(),
}))



export const UserRoleSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    userId: z.number().int(),
    created_at: z.date(),
    updated_at: z.date(),
    version: z.string(),
})

export interface CompleteUserRole extends z.infer<typeof UserRoleSchema> {
    User: CompleteUser
    Version: CompleteVersion
}

/**
 * RelatedUserRoleSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserRoleSchema: z.ZodSchema<CompleteUserRole> = z.lazy(() => UserRoleSchema.extend({
    User: RelatedUserSchema,
    Version: RelatedVersionSchema,
}))

import { DateFormat, Language, Theme, TimeFormat, Timezone } from "@prisma/client"

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
