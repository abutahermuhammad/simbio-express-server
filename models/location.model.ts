import { z } from 'zod';
import { BloodCenterSchema } from './blood-center.model';
import { HospitalSchema } from './hospital.model';
import { VersionSchema } from './version.model';

export const LocationSchema = z.object({
    id: z.number(),
    latitude: z.number(),
    longitude: z.number(),
    version: z.string(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
    BloodCenter: z.array(BloodCenterSchema), // Define BloodCenter schema
    Hospital: z.array(HospitalSchema), // Define Hospital schema
    Version: VersionSchema, // Define Version schema
});

export type LocationSchemaType = z.infer<typeof LocationSchema>;
