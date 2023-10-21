import { z } from 'zod';
import { LoginRecordSchema } from './login-record.model';
import { PersonSchema } from './person.model';
import { SecurityQuestionSchema } from './security-question.model';
import { SocialMediaLinksSchema } from './social-media-link.model';
import { TwoFactorAuthSchema } from './two-factor-auth.model';
import { UserSettingsSchema } from './user-settings.model';
import { VersionSchema } from './version.model';

export const UserSchema = z.object({
    id: z.number(),
    username: z.string().max(100).nullable(), // Assuming max length of username is 100
    email: z.string().max(100), // Assuming max length of email is 100
    password: z.string(),
    status: z.string(), // Consider using z.enum for AccountStatus if it's an enum type
    ip: z.string().max(100), // Assuming max length of IP is 100
    two_factor_auth: z.number(),
    social_login: z.number(),
    logins: z.number(),
    person: z.number(),
    settings: z.number(),
    version: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    securityQuestions: z.array(SecurityQuestionSchema), // Define SecurityQuestion schema
    LoginRecord: LoginRecordSchema, // Define LoginRecord schema
    Person: PersonSchema, // Define Person schema
    SocialMediaLinks: SocialMediaLinksSchema, // Define SocialMediaLinks schema
    TwoFactorAuth: TwoFactorAuthSchema, // Define TwoFactorAuth schema
    UserSettings: UserSettingsSchema, // Define UserSettings schema
    Version: VersionSchema, // Define Version schema
    role: z.array(z.string()), // Assuming role is an array of strings
});

export type UserSchemaType = z.infer<typeof UserSchema>;
