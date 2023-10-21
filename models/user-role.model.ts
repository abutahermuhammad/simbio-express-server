import { z } from "zod";

export const UserRoleSchema = z.object({
    id: z.number().optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
    name: z.string().optional(),
    user_id: z.number().optional(),
    version: z.string().optional()
})
export type UserRoleSchemaType = z.infer<typeof UserRoleSchema>;