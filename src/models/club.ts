import * as z from "zod"
import * as imports from "../prisma/null"
import { CompletePerson, RelatedPersonSchema, CompleteContact, RelatedContactSchema, CompleteVersion, RelatedVersionSchema, CompleteMember, RelatedMemberSchema, CompleteOrganization, RelatedOrganizationSchema } from "./index"

export const ClubSchema = z.object({
  id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  name: z.string(),
  established_at: z.date(),
  contact: z.number().int(),
  version: z.string(),
  chairman: z.number().int(),
  founder: z.number().int(),
  vice_chairman: z.number().int(),
})

export interface CompleteClub extends z.infer<typeof ClubSchema> {
  Person_Club_chairmanToPerson: CompletePerson
  Contact_Club_contactToContact: CompleteContact
  Person_Club_founderToPerson: CompletePerson
  Version: CompleteVersion
  Person_Club_vice_chairmanToPerson: CompletePerson
  Contact_Contact_clubToClub: CompleteContact[]
  member_list: CompleteMember[]
  Organization: CompleteOrganization[]
}

/**
 * RelatedClubSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedClubSchema: z.ZodSchema<CompleteClub> = z.lazy(() => ClubSchema.extend({
  Person_Club_chairmanToPerson: RelatedPersonSchema,
  Contact_Club_contactToContact: RelatedContactSchema,
  Person_Club_founderToPerson: RelatedPersonSchema,
  Version: RelatedVersionSchema,
  Person_Club_vice_chairmanToPerson: RelatedPersonSchema,
  Contact_Contact_clubToClub: RelatedContactSchema.array(),
  member_list: RelatedMemberSchema.array(),
  Organization: RelatedOrganizationSchema.array(),
}))
