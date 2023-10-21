import { z } from 'zod';
import { ContactSchema } from './contact.model';
import { VersionSchema } from './version.model';

export const CountrySchema = z.object({
    alpha_3: z.string().max(3),
    alpha_2: z.string().max(2),
    numeric: z.string().max(3),
    name: z.string().max(100),
    version: z.string(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
    Contact: z.array(ContactSchema), // Define Contact schema
    Version: VersionSchema, // Define Version schema
});

export type CountrySchemaType = z.infer<typeof CountrySchema>;
