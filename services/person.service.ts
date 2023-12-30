import { omit } from "lodash";
import { PersonSchemaType } from "../src/models/person.model";

/**
 * Get Contacts
 * @param param0
 * @returns
 */
export const createPerson = async (data: PersonSchemaType) => {
    try {
        const person = await prisma.person.create({
            data: omit(data, ['id']),
        });

        return person;
    } catch (error) {
        console.error("Error creating person :", error);
        throw new Error("Unable to create person");
    }
}