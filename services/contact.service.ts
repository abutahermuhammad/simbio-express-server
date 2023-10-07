import { ListRequestParameterType } from "@/models/request.model";

export const getContacts = async (params: Partial<ListRequestParameterType>) => {
    console.log("SERVICE: ", params);

    try {
        const contacts = await prisma.contact.findMany();

        return contacts;
    } catch (err) {
        return err;
    }

    return null;
}