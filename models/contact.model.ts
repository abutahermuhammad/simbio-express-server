import { z } from "zod";

export const ContactSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),

    // Address
    addressLine0: z.string().optional(),
    addressLine1: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    country: z.string().optional(),
    phone: z.string().optional(),
    phone1: z.string().optional(),
    email: z.string().optional(),
    email1: z.string().optional(),
    website: z.string().optional(),

    // Social Medias
    fb: z.string().optional(),
    fbGroup: z.string().optional(),
    fbPage: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),

    // Other 
    version: z.string().optional()
})

export type ContactSchemaType = z.infer<typeof ContactSchema>;