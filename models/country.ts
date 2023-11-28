import * as z from "zod"
import * as imports from "../prisma/null"
import { CompleteContact, RelatedContactSchema, CompleteVersion, RelatedVersionSchema } from "./index"

export const CountrySchema = z.object({
  alpha_3: z.string(),
  alpha_2: z.string(),
  numeric: z.string(),
  name: z.string(),
  version: z.string(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
})

export interface CompleteCountry extends z.infer<typeof CountrySchema> {
  Contact: CompleteContact[]
  Version: CompleteVersion
}

/**
 * RelatedCountrySchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCountrySchema: z.ZodSchema<CompleteCountry> = z.lazy(() => CountrySchema.extend({
  Contact: RelatedContactSchema.array(),
  Version: RelatedVersionSchema,
}))
