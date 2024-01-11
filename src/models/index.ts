import { z } from "zod"

export * as AmbulanceModel from "./ambulance"
export * from './blood'
export * as CountryModel from "./country"
export * from "./device"
export * from "./hospital"
export * as LocationModel from "./location"
export * from "./loginrecord"
export * from "./organization"
export * from "./person"
export * as RequestModel from "./request"
export * from "./socialmedialinks"
export * from "./twofactorauth"
export * from "./version"

// Define the Gender enum
export const GenderEnum = z.enum(['MALE', 'FEMALE', 'TRANS']);

export type TGender = z.infer<typeof GenderEnum>;