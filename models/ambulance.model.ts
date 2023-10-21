import { z } from 'zod';
import { OrganizationSchema } from './organization.model';
import { PersonSchema } from './person.model';
import { VersionSchema } from './version.model';

export const AmbulanceSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    vehicle_number: z.string().max(10),
    ambulance_type: z.string().max(50).nullable(),
    person_id: z.number(),
    version: z.string(),
    organization: z.number().nullable(),
    Organization: OrganizationSchema.optional(), // Define Organization schema
    Person: PersonSchema, // Define Person schema
    Version_Ambulance_versionToVersion: VersionSchema, // Define Version schema
});

export type AmbulanceSchemaType = z.infer<typeof AmbulanceSchema>;
