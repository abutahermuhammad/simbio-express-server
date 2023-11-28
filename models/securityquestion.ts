import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteUser, RelatedUserSchema, CompleteVersion, RelatedVersionSchema } from "./index"

export const SecurityQuestionSchema = z.object({
  id: z.number().int(),
  question: z.string(),
  answer: z.string(),
  userId: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  version: z.string(),
})

export interface CompleteSecurityQuestion extends z.infer<typeof SecurityQuestionSchema> {
  user: CompleteUser
  Version: CompleteVersion
}

/**
 * RelatedSecurityQuestionSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSecurityQuestionSchema: z.ZodSchema<CompleteSecurityQuestion> = z.lazy(() => SecurityQuestionSchema.extend({
  user: RelatedUserSchema,
  Version: RelatedVersionSchema,
}))
