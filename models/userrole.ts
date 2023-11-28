import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteUser, RelatedUserSchema, CompleteVersion, RelatedVersionSchema } from "./index"

export const UserRoleSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  userId: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  version: z.string(),
})

export interface CompleteUserRole extends z.infer<typeof UserRoleSchema> {
  User: CompleteUser
  Version: CompleteVersion
}

/**
 * RelatedUserRoleSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserRoleSchema: z.ZodSchema<CompleteUserRole> = z.lazy(() => UserRoleSchema.extend({
  User: RelatedUserSchema,
  Version: RelatedVersionSchema,
}))
