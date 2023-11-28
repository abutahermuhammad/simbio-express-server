import * as z from "zod"
import * as imports from "../prisma/null"
import { AccountStatus } from "@prisma/client"
import { CompleteSecurityQuestion, RelatedSecurityQuestionSchema, CompleteLoginRecord, RelatedLoginRecordSchema, CompletePerson, RelatedPersonSchema, CompleteSocialMediaLinks, RelatedSocialMediaLinksSchema, CompleteTwoFactorAuth, RelatedTwoFactorAuthSchema, CompleteUserSettings, RelatedUserSettingsSchema, CompleteVersion, RelatedVersionSchema, CompleteUserRole, RelatedUserRoleSchema } from "./index"

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
