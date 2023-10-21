import { z } from 'zod';
import { OrganizationSchema } from './organization.model';
import { PersonSchema } from './person.model';
import { VersionSchema } from './version.model';

export const TeamSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    started_at: z.date(),
    ended_at: z.date(),
    organization: z.number(),
    version: z.string(),
    members: z.number(),
    status: z.string(),
    Person: z.array(PersonSchema), // You need to define the Person schema accordingly
    Person_Team_membersToPerson: PersonSchema, // Define the Person schema
    Organization: OrganizationSchema, // Define the Organization schema
    Version: VersionSchema, // Define the Version schema
});

export type TeamSchemaType = z.infer<typeof TeamSchema>;
