import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteVersion, RelatedVersionSchema, CompleteUser, RelatedUserSchema } from "./index"

export const TwoFactorAuthSchema = z.object({
  id: z.number().int(),
  isEnabled: z.boolean(),
  secretKey: z.string().nullish(),
  userId: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  version: z.string(),
})

export interface CompleteTwoFactorAuth extends z.infer<typeof TwoFactorAuthSchema> {
  Version: CompleteVersion
  User: CompleteUser[]
}

/**
 * RelatedTwoFactorAuthSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTwoFactorAuthSchema: z.ZodSchema<CompleteTwoFactorAuth> = z.lazy(() => TwoFactorAuthSchema.extend({
  Version: RelatedVersionSchema,
  User: RelatedUserSchema.array(),
}))
