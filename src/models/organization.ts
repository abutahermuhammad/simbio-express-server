import * as z from "zod"
import * as imports from "../prisma/null"
import { OrgType } from "@prisma/client"
import { CompleteAmbulance, RelatedAmbulanceSchema, CompleteDonation, RelatedDonationSchema, CompleteClub, RelatedClubSchema, CompleteOrganizationSettings, RelatedOrganizationSettingsSchema, CompletePerson, RelatedPersonSchema, CompleteVersion, RelatedVersionSchema, CompleteSupport, RelatedSupportSchema, CompleteSupportMessage, RelatedSupportMessageSchema, CompleteTeam, RelatedTeamSchema } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const OrganizationSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  org_type: z.nativeEnum(OrgType),
  org_id: z.number().int(),
  Volunteer: jsonSchema,
  personId: z.number().int(),
  organizationSettingsId: z.number().int(),
  clubId: z.number().int().nullish(),
  version: z.string(),
})

export interface CompleteOrganization extends z.infer<typeof OrganizationSchema> {
  Ambulance: CompleteAmbulance[]
  Donation: CompleteDonation[]
  Club?: CompleteClub | null
  settings: CompleteOrganizationSettings
  Ambassador: CompletePerson
  Version: CompleteVersion
  Support: CompleteSupport[]
  SupportMessage: CompleteSupportMessage[]
  Team: CompleteTeam[]
}

/**
 * RelatedOrganizationSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrganizationSchema: z.ZodSchema<CompleteOrganization> = z.lazy(() => OrganizationSchema.extend({
  Ambulance: RelatedAmbulanceSchema.array(),
  Donation: RelatedDonationSchema.array(),
  Club: RelatedClubSchema.nullish(),
  settings: RelatedOrganizationSettingsSchema,
  Ambassador: RelatedPersonSchema,
  Version: RelatedVersionSchema,
  Support: RelatedSupportSchema.array(),
  SupportMessage: RelatedSupportMessageSchema.array(),
  Team: RelatedTeamSchema.array(),
}))
