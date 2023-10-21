import { z } from "zod";
import { DATE_FORMAT, LANGUAGES, THEME, TIMEZONE, TIME_FORMAT } from "./others.model";

export const UserSettingsSchema = z.object({
    id: z.number().optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
    language: LANGUAGES.optional(),
    time_format: TIME_FORMAT.optional(),
    date_format: DATE_FORMAT.optional(),
    timezone: TIMEZONE.optional(),
    theme: THEME.optional(),
    email_notifications: z.boolean().optional(),
    phone_notification: z.boolean().optional(),
    push_notifications: z.boolean().optional(),
    two_factor_auth: z.boolean().optional(),
    login_record_id: z.number().optional(),
    high_contrast_mode: z.boolean().optional(),
    in_app_notifications: z.boolean().optional(),
    key_board_shortcut: z.boolean().optional(),
    notification_frequency: z.string().optional(),
    notification_sound: z.string().optional(),
    notification_vibrate: z.boolean().optional(),
    password_reset: z.boolean().optional(),
    security_answer: z.string().optional(),
    security_question: z.string().optional(),
    version: z.string().optional()
});
export type UserSettingsSchemaType = z.infer<typeof UserSettingsSchema>;