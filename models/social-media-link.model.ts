import { z } from 'zod';
import { UserSchema } from './user.model';
import { VersionSchema } from './version.model';

export const SocialMediaLinksSchema = z.object({
    id: z.number(),
    facebook: z.string().nullable(),
    twitter: z.string().nullable(),
    instagram: z.string().nullable(),
    userId: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    version: z.string(),
    Version: VersionSchema, // Define the Version schema
    User: z.array(UserSchema), // Define the User schema
});

export type SocialMediaLinksSchemaType = z.infer<typeof SocialMediaLinksSchema>;
