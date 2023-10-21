import { z } from 'zod';
import { LoginRecordSchema } from './login-record.model';
import { OrganizationSchema } from './organization.model';
import { VersionSchema } from './version.model';

export const OrganizationSettingsSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    language: z.string(), // Define Language schema
    time_format: z.string(), // Define TimeFormat schema
    date_format: z.string(), // Define DateFormat schema
    timezone: z.string(), // Define Timezone schema
    theme: z.string().nullable(), // Define Theme schema
    email_notifications: z.boolean(),
    phone_notification: z.boolean(),
    push_notifications: z.boolean(),
    two_factor_auth: z.boolean().nullable(),
    loginRecordId: z.number().nullable(),
    accountDeactivation: z.boolean().nullable(),
    avatar: z.string().nullable(),
    clearBrowsingData: z.boolean().nullable(),
    contactSupportLink: z.string().nullable(),
    dataRetentionDays: z.number().nullable(),
    dataSharing: z.boolean().nullable(),
    helpCenterLink: z.string().nullable(),
    high_contrast_mode: z.boolean().nullable(),
    in_app_notifications: z.boolean().nullable(),
    key_board_shortcut: z.boolean().nullable(),
    notification_frequency: z.string().nullable(),
    notification_sound: z.string().nullable(),
    notification_vibrate: z.boolean().nullable(),
    password_reset: z.boolean().nullable(),
    security_answer: z.string().nullable(),
    security_question: z.string().nullable(),
    username: z.string().max(100).nullable(),
    version: z.string(),
    Organization: z.array(OrganizationSchema), // Define Organization schema
    LoginRecord: LoginRecordSchema.optional(), // Define LoginRecord schema
    Version: VersionSchema, // Define Version schema
});

export type OrganizationSettingsSchemaType = z.infer<typeof OrganizationSettingsSchema>;
