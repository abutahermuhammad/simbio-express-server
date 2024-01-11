import * as z from "zod"
import * as imports from "../prisma/null"
import { Gender } from "@prisma/client"
import { CompleteAmbulance, RelatedAmbulanceSchema, CompleteBloodCenter, RelatedBloodCenterSchema, CompleteBloodDonation, RelatedBloodDonationSchema, CompleteClub, RelatedClubSchema, CompleteContact, RelatedContactSchema, CompleteDonation, RelatedDonationSchema, CompleteMember, RelatedMemberSchema, CompleteOrganization, RelatedOrganizationSchema, CompleteTeam, RelatedTeamSchema, CompleteVersion, RelatedVersionSchema, CompleteRequest, RelatedRequestSchema, CompleteSupportMessage, RelatedSupportMessageSchema, CompleteUser, RelatedUserSchema } from "./index"

export const PersonSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  first_name: z.string(),
  last_name: z.string().nullish(),
  father_name: z.string().nullish(),
  mother_name: z.string().nullish(),
  profession: z.string().nullish(),
  dob: z.date().nullish(),
  gender: z.nativeEnum(Gender).nullish(),
  version: z.string(),
  avatar: z.string().nullish(),
  contact_id: z.number().int(),
  teamId: z.number().int().nullish(),
  bid: z.string().nullish(),
  driving: z.string().nullish(),
  nid: z.string().nullish(),
  passport: z.string().nullish(),
})

export interface CompletePerson extends z.infer<typeof PersonSchema> {
  Ambulance: CompleteAmbulance[]
  BloodCenter: CompleteBloodCenter[]
  BloodDonation: CompleteBloodDonation[]
  Club_Club_chairmanToPerson: CompleteClub[]
  Club_Club_founderToPerson: CompleteClub[]
  Club_Club_vice_chairmanToPerson: CompleteClub[]
  Contact_Contact_personToPerson: CompleteContact[]
  Donation: CompleteDonation[]
  Member: CompleteMember[]
  Organization: CompleteOrganization[]
  Contact_Person_contact_idToContact: CompleteContact
  Team_Person_teamIdToTeam?: CompleteTeam | null
  Version: CompleteVersion
  Request: CompleteRequest[]
  SupportMessage: CompleteSupportMessage[]
  Team_Team_membersToPerson: CompleteTeam[]
  User: CompleteUser[]
}

/**
 * RelatedPersonSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPersonSchema: z.ZodSchema<CompletePerson> = z.lazy(() => PersonSchema.extend({
  Ambulance: RelatedAmbulanceSchema.array(),
  BloodCenter: RelatedBloodCenterSchema.array(),
  BloodDonation: RelatedBloodDonationSchema.array(),
  Club_Club_chairmanToPerson: RelatedClubSchema.array(),
  Club_Club_founderToPerson: RelatedClubSchema.array(),
  Club_Club_vice_chairmanToPerson: RelatedClubSchema.array(),
  Contact_Contact_personToPerson: RelatedContactSchema.array(),
  Donation: RelatedDonationSchema.array(),
  Member: RelatedMemberSchema.array(),
  Organization: RelatedOrganizationSchema.array(),
  Contact_Person_contact_idToContact: RelatedContactSchema,
  Team_Person_teamIdToTeam: RelatedTeamSchema.nullish(),
  Version: RelatedVersionSchema,
  Request: RelatedRequestSchema.array(),
  SupportMessage: RelatedSupportMessageSchema.array(),
  Team_Team_membersToPerson: RelatedTeamSchema.array(),
  User: RelatedUserSchema.array(),
}))
