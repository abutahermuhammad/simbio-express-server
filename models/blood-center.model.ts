import { z } from 'zod';
import { ContactSchema } from './contact.model';
import { LocationSchema } from './location.model';
import { PersonSchema } from './person.model';
import { VersionSchema } from './version.model';

export const BloodCenterSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    established_at: z.date(),
    version: z.string(),
    founder: z.number().nullable(),
    contact: z.number().nullable(),
    location: z.number().nullable(),
    Contact_BloodCenter_contactToContact: ContactSchema.optional(), // Define Contact schema
    Person: PersonSchema.optional(), // Define Person schema
    Location: LocationSchema.optional(), // Define Location schema
    Version: VersionSchema, // Define Version schema
    Contact_Contact_blood_centerToBloodCenter: z.array(ContactSchema), // Define Contact schema
});

export type BloodCenterSchemaType = z.infer<typeof BloodCenterSchema>;
