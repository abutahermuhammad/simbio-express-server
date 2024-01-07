import * as z from "zod";

export const UserInfoSchema = z.object({
    first_name: z.string().min(3).max(20).refine((value) => /^[A-Z]/.test(value), {
        message: 'First Name must start with a capital letter',
    }),
    last_name: z.string().min(3).max(20).refine((value) => /^[A-Z]/.test(value), {
        message: 'Last Name must start with a capital letter',
    }),
    dob: z.string().optional(),
    gender: z.enum(["male", "female", "trans"]),
    father_name: z.string().min(3).max(20).refine((value) => /^[A-Z]/.test(value), {
        message: 'Father Name must start with a capital letter',
    }),
    mother_name: z.string().min(3).max(20).refine((value) => /^[A-Z]/.test(value), {
        message: 'Mother Name must start with a capital letter',
    }).nullish(),
    profession: z.string().max(50).nullish(),
});

export type TUgerInfo = z.infer<typeof UserInfoSchema>;

export const UserContactInfoSchema = z.object({
    address: z.string().min(3).max(100),
    city: z.string().min(3).max(50),
    state: z.string().min(3).max(50),
    country: z.string().min(3).max(50),
    postal_code: z.string().min(3).max(20),
    phone: z.string().min(8).max(15),
    email: z.string().min(3).max(50).nullish(),
})

export type TUserContactInfo = z.infer<typeof UserContactInfoSchema>;

export const MemberIdSchema = z.object({
    passport: z.string().min(3).max(20).nullish(),
    national_id: z.string().min(3).max(20).nullish(),
    national_id_type: z.string().min(3).max(20).nullish(),
    driving_license: z.string().min(3).max(20).nullish(),
    birth_certificate: z.string().min(3).max(20).nullish()
})

export type TMemberId = z.infer<typeof MemberIdSchema>;

export const MemberHealthSchema = z.object({
    allergies: z.string().min(3).max(200).nullish(),
    complications: z.string().min(3).max(200).nullish(),
    medications: z.string().min(3).max(200).nullish(),
    blood_disorders: z.string().min(3).max(200).nullish(),
    infectious_diseases: z.string().min(3).max(200).nullish(),
    last_blood_donation: z.string().min(3).max(200).nullish(),
    medical_conditions: z.string().min(3).max(200).nullish(),
})

export type TMemberHealth = z.infer<typeof MemberHealthSchema>;



export const MemberSchema = z.object({
    id: z.number().int(),
    created_at: z.date(),
    updated_at: z.date(),
    version: z.string(),

    // Reference
    ref_id: z.string(),

})

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


export const CreateMemberValidationSchema = z.object({
    body: z.object({
        ref_id: z.string(),
        ...UserInfoSchema.shape,
        ...UserContactInfoSchema.shape,
        ...MemberIdSchema.shape,
        ...MemberHealthSchema.shape,
    }),
});

export type TCreateMember = z.infer<typeof CreateMemberValidationSchema>;