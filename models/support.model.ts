import { z } from 'zod';
import { OrganizationSchema } from './organization.model';
import { SupportMessageSchema } from './support-message.model';
import { VersionSchema } from './version.model';


export const SupportSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    version: z.string(),
    organization: z.number(),
    messages: z.string().max(255).nullable(),
    status: z.string().max(10).nullable(),
    priority: z.number(),
    subject: z.string().max(255).nullable(),
    Organization: OrganizationSchema, // Define Organization schema
    Version: VersionSchema, // Define Version schema
    SupportMessage: z.array(SupportMessageSchema), // Define SupportMessage schema as an array
});

export type SupportSchemaType = z.infer<typeof SupportSchema>;
