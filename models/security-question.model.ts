import { z } from 'zod';
import { UserSchema } from './user.model';
import { VersionSchema } from './version.model';

export const SecurityQuestionSchema = z.object({
    id: z.number(),
    question: z.string(),
    answer: z.string(),
    userId: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    version: z.string(),
    user: UserSchema, // Define the User schema
    Version: VersionSchema, // Define the Version schema
});

export type SecurityQuestionSchemaType = z.infer<typeof SecurityQuestionSchema>;
