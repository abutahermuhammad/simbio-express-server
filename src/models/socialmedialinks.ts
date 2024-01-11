import * as z from "zod"
// import { CompleteUser, CompleteVersion, RelatedUserSchema, RelatedVersionSchema } from "./index"

export const SocialMediaLinksSchema = z.object({
  id: z.number().int(),
  facebook: z.string().nullish(),
  twitter: z.string().nullish(),
  instagram: z.string().nullish(),
  userId: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  version: z.string(),
})

// export interface CompleteSocialMediaLinks extends z.infer<typeof SocialMediaLinksSchema> {
//   Version: CompleteVersion
//   User: CompleteUser[]
// }

/**
 * RelatedSocialMediaLinksSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
// export const RelatedSocialMediaLinksSchema: z.ZodSchema<CompleteSocialMediaLinks> = z.lazy(() => SocialMediaLinksSchema.extend({
//   Version: RelatedVersionSchema,
//   User: RelatedUserSchema.array(),
// }))
