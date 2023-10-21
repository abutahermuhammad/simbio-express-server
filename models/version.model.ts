import { z } from 'zod';
import { AmbulanceSchema } from './ambulance.model';
import { BloodCenterSchema } from './blood-center.model';
import { ClubSchema } from './club.model';
import { ContactSchema } from './contact.model';
import { CountrySchema } from './country.model';
import { DeviceSchema } from './device.model';
import { DonationSchema } from './donation.model';
import { HospitalSchema } from './hospital.model';
import { LocationSchema } from './location.model';
import { LoginRecordSchema } from './login-record.model';
import { MemberSchema } from './member.model';
import { OrganizationSettingsSchema } from './organization-settings.model';
import { OrganizationSchema } from './organization.model';
import { PersonSchema } from './person.model';
import { RequestSchema } from './request.model';
import { SecurityQuestionSchema } from './security-question.model';
import { SocialMediaLinksSchema } from './social-media-link.model';
import { SupportMessageSchema } from './support-message.model';
import { SupportSchema } from './support.model';
import { TeamSchema } from './team.model';
import { TwoFactorAuthSchema } from './two-factor-auth.model';
import { UserRoleSchema } from './user-role.model';
import { UserSettingsSchema } from './user-settings.model';
import { UserSchema } from './user.model';

export const VersionSchema: object = z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
    created_at: z.date(),
    updated_at: z.date(),
    version: z.string().optional(),
    Ambulance_Ambulance_versionToVersion: z.array(AmbulanceSchema), // Adjust the type according to your use case
    BloodCenter: z.array(BloodCenterSchema), // Adjust the type according to your use case
    Club: z.array(ClubSchema), // Adjust the type according to your use case
    Contact: z.array(ContactSchema), // Adjust the type according to your use case
    Country: z.array(CountrySchema), // Adjust the type according to your use case
    Device: z.array(DeviceSchema), // Adjust the type according to your use case
    Donation: z.array(DonationSchema), // Adjust the type according to your use case
    Hospital: z.array(HospitalSchema), // Adjust the type according to your use case
    Location: z.array(LocationSchema), // Adjust the type according to your use case
    LoginRecord: z.array(LoginRecordSchema), // Adjust the type according to your use case
    Member: z.array(MemberSchema), // Adjust the type according to your use case
    Organization: z.array(OrganizationSchema), // Adjust the type according to your use case
    OrganizationSettings: z.array(OrganizationSettingsSchema), // Adjust the type according to your use case
    Person: z.array(PersonSchema), // Adjust the type according to your use case
    Request: z.array(RequestSchema), // Adjust the type according to your use case
    SecurityQuestion: z.array(SecurityQuestionSchema), // Adjust the type according to your use case
    SocialMediaLinks: z.array(SocialMediaLinksSchema), // Adjust the type according to your use case
    Support: z.array(SupportSchema), // Adjust the type according to your use case
    SupportMessage: z.array(SupportMessageSchema), // Adjust the type according to your use case
    Team: z.array(TeamSchema), // Adjust the type according to your use case
    TwoFactorAuth: z.array(TwoFactorAuthSchema), // Adjust the type according to your use case
    User: z.array(UserSchema), // Adjust the type according to your use case
    UserRole: z.array(UserRoleSchema), // Adjust the type according to your use case
    UserSettings: z.array(UserSettingsSchema), // Adjust the type according to your use case
});

// Define the type for the Zod schema
export type VersionSchemaType = z.infer<typeof VersionSchema>;
