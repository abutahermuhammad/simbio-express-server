import { z } from 'zod';
import { OrganizationSchema } from './organization.model';
import { PersonSchema } from './person.model';
import { SupportSchema } from './support.model';

export const SupportMessageSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    organization: z.number(),
    support: z.number(),
    message: z.string(),
    author: z.number(),
    version: z.string(),
    Person: PersonSchema, // Define the Person schema
    Organization: OrganizationSchema, // Define the Organization schema
    Support: SupportSchema, // Define the Support schema
});

export type SupportMessageSchemaType = z.infer<typeof SupportMessageSchema>;
