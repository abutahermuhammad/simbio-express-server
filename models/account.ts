import * as z from "zod"
import * as imports from "../prisma/null"

export const AccountSchema = z.object({
  userId: z.string().nullish(),
  type: z.string().nullish(),
  provider: z.string().nullish(),
  providerAccountId: z.string().nullish(),
  refresh_token: z.string().nullish(),
  access_token: z.string().nullish(),
  expires_at: z.bigint().nullish(),
  scope: z.string().nullish(),
  id_token: z.string(),
  session_state: z.string().nullish(),
})
