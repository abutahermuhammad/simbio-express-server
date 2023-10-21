import { z } from 'zod';
import { AmbulanceSchema } from './ambulance.model';
import { ClubSchema } from './club.model';
import { DonationSchema } from './donation.model';
import { OrganizationSettingsSchema } from './organization-settings.model';
import { PersonSchema } from './person.model';
import { SupportMessageSchema } from './support-message.model';
import { SupportSchema } from './support.model';
import { TeamSchema } from './team.model';
import { VersionSchema } from './version.model';

export const OrganizationSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    org_type: z.string(), // Define OrgType schema
    org_id: z.number(),
    Volunteer: z.record(z.any()), // You can adjust this to match the expected structure of Volunteer
    personId: z.number(),
    organizationSettingsId: z.number(),
    clubId: z.number().nullable(),
    version: z.string(),
    Ambulance: z.array(AmbulanceSchema), // Define Ambulance schema
    Donation: z.array(DonationSchema), // Define Donation schema
    Club: ClubSchema.optional(), // Define Club schema
    settings: OrganizationSettingsSchema, // Define OrganizationSettings schema
    Ambassador: PersonSchema, // Define Person schema
    Support: z.array(SupportSchema), // Define Support schema
    SupportMessage: z.array(SupportMessageSchema), // Define SupportMessage schema
    Team: z.array(TeamSchema), // Define Team schema
    Version: VersionSchema, // Define Version schema
});

export type OrganizationSchemaType = z.infer<typeof OrganizationSchema>;
