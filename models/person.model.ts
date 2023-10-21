import { z } from 'zod';
import { AmbulanceSchema } from './ambulance.model';
import { BloodCenterSchema } from './blood-center.model';
import { ClubSchema } from './club.model';
import { ContactSchema } from './contact.model';
import { DonationSchema } from './donation.model';
import { MemberSchema } from './member.model';
import { OrganizationSchema } from './organization.model';
import { GENDER } from './others.model';
import { RequestSchema } from './request.model';
import { SupportMessageSchema } from './support-message.model';
import { TeamSchema } from './team.model';
import { UserSchema } from './user.model';
import { VersionSchema } from './version.model';

export const PersonSchema = z.object({
    id: z.number(),
    created_at: z.date(),
    updated_at: z.date(),
    first_name: z.string(),
    last_name: z.string().nullable(),
    father_name: z.string().nullable(),
    mother_name: z.string().nullable(),
    profession: z.string().nullable(),
    dob: z.date().nullable(),
    gender: GENDER,
    version: z.string(),
    avatar: z.string().nullable(),
    contact_id: z.number(),
    teamId: z.number().optional(),
    bid: z.string().nullable(),
    driving: z.string().nullable(),
    nid: z.string().nullable(),
    passport: z.string().nullable(),
    Ambulance: z.array(AmbulanceSchema).optional(),
    BloodCenter: z.array(BloodCenterSchema).optional(),
    Club_Club_chairmanToPerson: z.array(ClubSchema).optional(),
    Club_Club_founderToPerson: z.array(ClubSchema).optional(),
    Club_Club_vice_chairmanToPerson: z.array(ClubSchema).optional(),
    Contact_Contact_personToPerson: z.array(ContactSchema).optional(),
    Donation: z.array(DonationSchema).optional(),
    Member: z.array(MemberSchema).optional(),
    Organization: z.array(OrganizationSchema).optional(),
    contact: ContactSchema,
    Team: TeamSchema.optional(),
    Request: z.array(RequestSchema).optional(),
    SupportMessage: z.array(SupportMessageSchema).optional(),
    Team_Team_membersToPerson: z.array(TeamSchema).optional(),
    User: z.array(UserSchema).optional(),
    Version: VersionSchema,
});

export type PersonSchemaType = z.infer<typeof PersonSchema>;
