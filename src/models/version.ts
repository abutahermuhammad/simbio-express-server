import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteAmbulance, RelatedAmbulanceSchema, CompleteBloodCenter, RelatedBloodCenterSchema, CompleteClub, RelatedClubSchema, CompleteContact, RelatedContactSchema, CompleteCountry, RelatedCountrySchema, CompleteDevice, RelatedDeviceSchema, CompleteDonation, RelatedDonationSchema, CompleteHospital, RelatedHospitalSchema, CompleteLocation, RelatedLocationSchema, CompleteLoginRecord, RelatedLoginRecordSchema, CompleteMember, RelatedMemberSchema, CompleteOrganization, RelatedOrganizationSchema, CompleteOrganizationSettings, RelatedOrganizationSettingsSchema, CompletePerson, RelatedPersonSchema, CompleteRequest, RelatedRequestSchema, CompleteSecurityQuestion, RelatedSecurityQuestionSchema, CompleteSocialMediaLinks, RelatedSocialMediaLinksSchema, CompleteSupport, RelatedSupportSchema, CompleteSupportMessage, RelatedSupportMessageSchema, CompleteTeam, RelatedTeamSchema, CompleteTwoFactorAuth, RelatedTwoFactorAuthSchema, CompleteUser, RelatedUserSchema, CompleteUserRole, RelatedUserRoleSchema, CompleteUserSettings, RelatedUserSettingsSchema } from "./index"

export const VersionSchema = z.object({
  id: z.number().int(),
  slug: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
  version: z.string().nullish(),
})

export interface CompleteVersion extends z.infer<typeof VersionSchema> {
  Ambulance_Ambulance_versionToVersion: CompleteAmbulance[]
  BloodCenter: CompleteBloodCenter[]
  Club: CompleteClub[]
  Contact: CompleteContact[]
  Country: CompleteCountry[]
  Device: CompleteDevice[]
  Donation: CompleteDonation[]
  Hospital: CompleteHospital[]
  Location: CompleteLocation[]
  LoginRecord: CompleteLoginRecord[]
  Member: CompleteMember[]
  Organization: CompleteOrganization[]
  OrganizationSettings: CompleteOrganizationSettings[]
  Person: CompletePerson[]
  Request: CompleteRequest[]
  SecurityQuestion: CompleteSecurityQuestion[]
  SocialMediaLinks: CompleteSocialMediaLinks[]
  Support: CompleteSupport[]
  SupportMessage: CompleteSupportMessage[]
  Team: CompleteTeam[]
  TwoFactorAuth: CompleteTwoFactorAuth[]
  User: CompleteUser[]
  UserRole: CompleteUserRole[]
  UserSettings: CompleteUserSettings[]
}

/**
 * RelatedVersionSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVersionSchema: z.ZodSchema<CompleteVersion> = z.lazy(() => VersionSchema.extend({
  Ambulance_Ambulance_versionToVersion: RelatedAmbulanceSchema.array(),
  BloodCenter: RelatedBloodCenterSchema.array(),
  Club: RelatedClubSchema.array(),
  Contact: RelatedContactSchema.array(),
  Country: RelatedCountrySchema.array(),
  Device: RelatedDeviceSchema.array(),
  Donation: RelatedDonationSchema.array(),
  Hospital: RelatedHospitalSchema.array(),
  Location: RelatedLocationSchema.array(),
  LoginRecord: RelatedLoginRecordSchema.array(),
  Member: RelatedMemberSchema.array(),
  Organization: RelatedOrganizationSchema.array(),
  OrganizationSettings: RelatedOrganizationSettingsSchema.array(),
  Person: RelatedPersonSchema.array(),
  Request: RelatedRequestSchema.array(),
  SecurityQuestion: RelatedSecurityQuestionSchema.array(),
  SocialMediaLinks: RelatedSocialMediaLinksSchema.array(),
  Support: RelatedSupportSchema.array(),
  SupportMessage: RelatedSupportMessageSchema.array(),
  Team: RelatedTeamSchema.array(),
  TwoFactorAuth: RelatedTwoFactorAuthSchema.array(),
  User: RelatedUserSchema.array(),
  UserRole: RelatedUserRoleSchema.array(),
  UserSettings: RelatedUserSettingsSchema.array(),
}))
