import { ContactSchemaType } from "../models/contact.model";
import { RequestQuerySchemaType } from "../models/request.model";
import prisma from '../prisma/prisma-client';
import { debug } from "../utils/debug.util";

/**
 * isExists
 * This function checks whether contact with a given id is exists or not.
 * 
 * @param id 
 * @returns 
 * 
 * @since 1.0.0
 */
export const isExists = async (id: number) => {
    try {
        const isExists = await prisma.contact.findUnique({
            where: {
                id: id
            }
        })

        return isExists ? true : false;
    } catch (error) {
        throw new Error('server error')
    }
}


/**
 * Get Contacts
 * @param param0 
 * @returns 
 */
export const getContacts = async ({
    search = "",
    filter = "",
    q = "",
    limit = "10",
    offset = 0,
    sortby = "",
    order = "",
    include = "",
    exclude = "",
}:
    Partial<RequestQuerySchemaType>
) => {
    debug('A request was made to the root endpoint');

    try {
        const contacts = await prisma.contact.findMany({
            // query: search as string || filter as string || q as string,
            skip: offset,
            take: parseInt(limit),
            // orderBy: {
            //     [sortby]: order
            // }
        });

        return contacts;
    } catch (err) {
        return err;
    }

    return [];
}

/**
 * Get Contacts
 * @param param0 
 * @returns 
 */
export const createContact = async (data: ContactSchemaType) => {
    try {
        const contact = await prisma.contact.create({
            data: data,
        });

        return contact;
    } catch (error) {
        console.error("Error updating contact:", error);
        throw new Error("Unable to update contact");
    }
}


/**
 * getContactById
 * This will parse contact matched with given id.
 * 
 * @param id 
 * @returns 
 * 
 * @since 1.0.0
 */
export const getContactById = async (id: number) => {
    try {
        const contact = await prisma.contact.findUnique({
            where: {
                id: id,
            }
        });

        return contact;
    } catch (error) {
        throw new Error('server error')
    }
}


/**
 * updateContactById
 * This will update a contact with respected id.
 * 
 * @param id 
 * @returns 
 * 
 * @since 1.0.0
 */
export const updateContactById = async (id: number, data: ContactSchemaType) => {
    try {

        const contact = await prisma.contact.update({
            where: {
                id
            },
            data: data,
        });

        return contact;
    } catch (error) {
        if (error.code === 'P2003') {
            console.error("Foreign key constraint violation:", error);
            throw new Error("Invalid country_id in the data.");
        } else {
            console.error("Error updating contact:", error);
            throw new Error("Unable to update contact");
        }
    }
}


/**
 * deleteContactById
 * This will delete contact matched with given id.
 * 
 * @param id 
 * @returns 
 * 
 * @since 1.0.0
 */
export const deleteContactById = async (id: number) => {
    try {
        const response = await prisma.contact.delete({
            where: {
                id: id
            }
        });

        return response;
    } catch (error) {
        throw new Error('server error')
    }
}