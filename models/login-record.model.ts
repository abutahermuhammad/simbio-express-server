import { z } from 'zod';
import { DeviceSchema } from './device.model';
import { OrganizationSettingsSchema } from './organization-settings.model';
import { AUTHENTICATION_METHOD } from './others.model';
import { UserSettingsSchema } from './user-settings.model';
import { UserSchema } from './user.model';
import { VersionSchema } from './version.model';

export const LoginRecordSchema: object = z.object({
    id: z.number(),
    user: z.number(),
    ip_address: z.string(),
    user_agent: z.string(),
    login_status: z.string(),
    session_id: z.string().nullable(),
    location: z.string().nullable(),
    authentication: AUTHENTICATION_METHOD,
    security_tokens: z.string(),
    logout_timestamp: z.date().nullable(),
    version: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    devices: z.number().optional(),
    Device: DeviceSchema.optional(),
    OrganizationSettings: z.array(OrganizationSettingsSchema).optional(),
    User: z.array(UserSchema).optional(),
    UserSettings: z.array(UserSettingsSchema).optional(),
    Version: VersionSchema,
});

export type LoginRecordSchemaType = z.infer<typeof LoginRecordSchema>;
