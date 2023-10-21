import { z } from 'zod';
import { ContactSchema } from './contact.model';
import { LocationSchema } from './location.model';
import { VersionSchema } from './version.model';

export const HospitalSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    name: z.string(),
    founded_at: z.date(),
    accreditation: z.string().nullable(),
    bed_count: z.number().optional(),
    emergency_room: z.boolean().optional(),
    services: z.array(z.string()),
    specialties: z.array(z.string()),
    rating: z.number().optional(),
    facility_type: FacilityTypeSchema.optional(),
    ownership: z.string().nullable(),
    insurance_accepted: z.string().nullable(),
    operating_hours: z.string().nullable(),
    infrastructure: z.string().nullable(),
    security_controls: z.string().nullable(),
    version: z.string(),
    location: z.number().optional(),
    contact: z.number().optional(),
    founder: z.number().optional(),
    director: z.number().optional(),
    chairman: z.number().optional(),
    Contact_Contact_hospitalToHospital: z.array(ContactSchema).optional(),
    Contact_Hospital_contactToContact: ContactSchema.optional(),
    Location: LocationSchema.optional(),
    Version: VersionSchema,
});

export type HospitalSchemaType = z.infer<typeof HospitalSchema>;
