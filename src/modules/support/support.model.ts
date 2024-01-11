import * as z from "zod"
import { CompleteOrganization, CompletePerson, CompleteSupport, CompleteSupportMessage, CompleteVersion, RelatedOrganizationSchema, RelatedPersonSchema, RelatedSupportMessageSchema, RelatedSupportSchema, RelatedVersionSchema } from "./index"

export const SupportSchema = z.object({
    id: z.number().int(),
    created_at: z.date(),
    updated_at: z.date(),
    version: z.string(),
    organization: z.number().int(),
    messages: z.string().nullish(),
    status: z.string().nullish(),
    priority: z.number().int(),
    subject: z.string().nullish(),
})

export interface CompleteSupport extends z.infer<typeof SupportSchema> {
    Organization: CompleteOrganization
    Version: CompleteVersion
    SupportMessage: CompleteSupportMessage[]
}

/**
 * RelatedSupportSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSupportSchema: z.ZodSchema<CompleteSupport> = z.lazy(() => SupportSchema.extend({
    Organization: RelatedOrganizationSchema,
    Version: RelatedVersionSchema,
    SupportMessage: RelatedSupportMessageSchema.array(),
}))

export const SupportMessageSchema = z.object({
    id: z.number().int(),
    created_at: z.date(),
    updated_at: z.date(),
    organization: z.number().int(),
    support: z.number().int(),
    message: z.string(),
    author: z.number().int(),
    version: z.string(),
})

export interface CompleteSupportMessage extends z.infer<typeof SupportMessageSchema> {
    Person: CompletePerson
    Organization: CompleteOrganization
    Support: CompleteSupport
    Version: CompleteVersion
}

/**
 * RelatedSupportMessageSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSupportMessageSchema: z.ZodSchema<CompleteSupportMessage> = z.lazy(() => SupportMessageSchema.extend({
    Person: RelatedPersonSchema,
    Organization: RelatedOrganizationSchema,
    Support: RelatedSupportSchema,
    Version: RelatedVersionSchema,
}))
