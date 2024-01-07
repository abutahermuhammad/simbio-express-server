import * as z from "zod";

export const UserInfoSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    dob: z.string(),
    gender: z.enum(["male", "female", "trans"]),
    father_name: z.string(),
    mother_name: z.string().nullish(),
    profession: z.string().nullish(),
});

export type TUgerInfo = z.infer<typeof UserInfoSchema>;

export const UserContactInfoSchema = z.object({
    address: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postal_code: z.string(),
    phone: z.string(),
    email: z.string().nullish(),
})

export type TUserContactInfo = z.infer<typeof UserContactInfoSchema>;

export const MemberIdSchema = z.object({
    passport: z.string().nullish(),
    national_id: z.string().nullish(),
    national_id_type: z.string().nullish(),
    driving_license: z.string().nullish(),
    birth_certificate: z.string().nullish()
})

export type TMemberId = z.infer<typeof MemberIdSchema>;

export const MemberHealthSchema = z.object({
    allergies: z.string().nullish(),
    complications: z.string().nullish(),
    medications: z.string().nullish(),
    blood_disorders: z.string().nullish(),
    club_id: z.number().int().nullish(),
    infectious_diseases: z.string().nullish(),
    last_blood_donation: z.string().nullish(),
    medical_conditions: z.string().nullish(),
    person_id: z.number().int().nullish(),

})

export type TMemberHealth = z.infer<typeof MemberHealthSchema>;



export const MemberSchema = z.object({
    id: z.number().int(),
    created_at: z.date(),
    updated_at: z.date(),
    version: z.string(),

    // Reference
    ref_id: z.string(),
    ...UserInfoSchema.shape,
    ...UserContactInfoSchema.shape,
    ...MemberIdSchema.shape,
    ...MemberHealthSchema.shape,

})

export type TMember = z.infer<typeof MemberSchema>;

// export interface CompleteMember extends z.infer<typeof MemberSchema> {
//     Donation: CompleteDonation[]
//     Club?: CompleteClub | null
//     Person?: CompletePerson | null
//     Version: CompleteVersion
//     Request: CompleteRequest[]
// }

/**
 * RelatedMemberSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
// export const RelatedMemberSchema: z.ZodSchema<CompleteMember> = z.lazy(() => MemberSchema.extend({
//     Donation: RelatedDonationSchema.array(),
//     Club: RelatedClubSchema.nullish(),
//     Person: RelatedPersonSchema.nullish(),
//     Version: RelatedVersionSchema,
//     Request: RelatedRequestSchema.array(),
// }))


export const CreateMemberRequestSchema = z.object({
    body: z.object({
        ...UserInfoSchema.shape,
        ...UserContactInfoSchema.shape,
        ...MemberIdSchema.shape,
        ...MemberHealthSchema.shape,
        ref_id: z.string(),
    }),
});