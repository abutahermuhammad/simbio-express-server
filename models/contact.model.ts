import { z } from "zod";

export const ContactSchema = z.object({
    id: z.number().optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),

    // Address
    address_line_0: z.string().optional(),
    address_line_1: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    country_id: z.string().optional(),
    phone: z.string().optional(),
    phone_1: z.string().optional(),
    fax: z.string().optional(),
    email: z.string().optional(),
    email_1: z.string().optional(),
    website: z.string().optional(),

    // Social Medias
    // fb: z.string().optional(),
    // fbGroup: z.string().optional(),
    // fbPage: z.string().optional(),
    // linkedin: z.string().optional(),
    // twitter: z.string().optional(),
    // instagram: z.string().optional(),
    // youtube: z.string().optional(),
    social_media: z.object({
        fb: z.string().optional(),
        fb_page: z.string().optional(),
        fb_group: z.string().optional(),
        instagram: z.string().optional(),
        linkedin: z.string().optional(),
        x: z.string().optional(),
        youtube: z.string().optional(),
    }).optional(),

    // Other 
    version: z.string().optional()
})
export type ContactSchemaType = z.infer<typeof ContactSchema>;

export const ContactsSchema = z.object({
    contacts: z.array(ContactSchema)
})
export type ContactsSchemaType = z.infer<typeof ContactsSchema>;
