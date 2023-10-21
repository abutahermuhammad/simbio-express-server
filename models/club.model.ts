import { z } from 'zod';
import { ContactSchema } from './contact.model';
import { MemberSchema } from './member.model';
import { OrganizationSchema } from './organization.model';
import { PersonSchema } from './person.model';
import { VersionSchema } from './version.model';

export const ClubSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    name: z.string().max(255),
    established_at: z.date(),
    contact: z.number(),
    version: z.string(),
    chairman: z.number(),
    founder: z.number(),
    vice_chairman: z.number(),
    Person_Club_chairmanToPerson: PersonSchema, // Define Person schema
    Contact_Club_contactToContact: ContactSchema, // Define Contact schema
    Person_Club_founderToPerson: PersonSchema, // Define Person schema
    Version: VersionSchema, // Define Version schema
    Person_Club_vice_chairmanToPerson: PersonSchema, // Define Person schema
    Contact_Contact_clubToClub: z.array(ContactSchema), // Define Contact schema
    member_list: z.array(MemberSchema), // Define Member schema
    Organization: z.array(OrganizationSchema), // Define Organization schema
});

export type ClubSchemaType = z.infer<typeof ClubSchema>;
