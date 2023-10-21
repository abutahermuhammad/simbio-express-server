import { z } from 'zod';
import { UserSchema } from './user.model';
import { VersionSchema } from './version.model';

export const TwoFactorAuthSchema = z.object({
    id: z.number(),
    isEnabled: z.boolean(),
    secretKey: z.string().nullable(),
    userId: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    version: z.string(),
    Version: VersionSchema.optional(),
    User: z.array(UserSchema).optional(),
});
export type TwoFactorAuthSchemaType = z.infer<typeof TwoFactorAuthSchema>;
