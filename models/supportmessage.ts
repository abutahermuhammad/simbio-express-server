import * as z from "zod"
import * as imports from "../prisma/null"
import { CompletePerson, RelatedPersonSchema, CompleteOrganization, RelatedOrganizationSchema, CompleteSupport, RelatedSupportSchema, CompleteVersion, RelatedVersionSchema } from "./index"

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
