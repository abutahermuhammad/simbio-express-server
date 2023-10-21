import { z } from 'zod';
import { ContactSchema } from './contact.model';
import { MemberSchema } from './member.model';
import { OrganizationSchema } from './organization.model';
import { PersonSchema } from './person.model';
import { VersionSchema } from './version.model';

export const DonationSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    amount: z.number().default(0),
    donated_at: z.date(),
    version: z.string(),
    person: z.number(),
    member: z.number(),
    organization: z.number(),
    Contact: z.array(ContactSchema), // Define Contact schema
    Member: MemberSchema, // Define Member schema
    Organization: OrganizationSchema, // Define Organization schema
    Person: PersonSchema, // Define Person schema
    Version: VersionSchema, // Define Version schema
});

export type DonationSchemaType = z.infer<typeof DonationSchema>;
