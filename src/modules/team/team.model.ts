import * as z from "zod"
import { CompleteOrganization, CompletePerson, CompleteVersion, RelatedOrganizationSchema, RelatedPersonSchema, RelatedVersionSchema } from "./index"

export const TeamSchema = z.object({
    id: z.number().int(),
    created_at: z.date(),
    updated_at: z.date(),
    started_at: z.date(),
    ended_at: z.date(),
    organization: z.number().int(),
    version: z.string(),
    members: z.number().int(),
    status: z.string(),
})

export interface CompleteTeam extends z.infer<typeof TeamSchema> {
    Person: CompletePerson[]
    Person_Team_membersToPerson: CompletePerson
    Organization: CompleteOrganization
    Version: CompleteVersion
}

/**
 * RelatedTeamSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTeamSchema: z.ZodSchema<CompleteTeam> = z.lazy(() => TeamSchema.extend({
    Person: RelatedPersonSchema.array(),
    Person_Team_membersToPerson: RelatedPersonSchema,
    Organization: RelatedOrganizationSchema,
    Version: RelatedVersionSchema,
}))
