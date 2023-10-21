import { z } from 'zod';
import { LoginRecordSchema } from './login-record.model';
import { VersionSchema } from './version.model';

export const DeviceSchema = z.object({
    id: z.number(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
    name: z.string().nullable(),
    mac_address: z.string().nullable(),
    model: z.string().nullable(),
    os: z.string().nullable(),
    os_version: z.string().nullable(),
    device_id: z.string().nullable(),
    brand: z.string().nullable(),
    manufacturer: z.string().nullable(),
    version: z.string(),
    Version: VersionSchema,
    LoginRecord: z.array(LoginRecordSchema).optional(),
});

export type DeviceSchemaType = z.infer<typeof DeviceSchema>;
