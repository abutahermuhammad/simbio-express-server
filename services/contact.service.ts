import { omit } from "lodash";
import prisma from '../prisma/prisma-client';
import { ContactSchemaType, MinimalContactSchemaType } from "../src/models/contact.model";
import { RequestQuerySchemaType } from "../src/models/request.model";
import { debug } from "../src/utils/debug.util";

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
    offset = "0",
    sortby = "id",
    order = "asc",
    include = "",
    exclude = "",
}:
    Partial<RequestQuerySchemaType>
) => {
    debug('A request was made to the root endpoint');

    try {
        const contacts = await prisma.contact.findMany({
            // query: search as string || filter as string || q as string,
            skip: Number(offset),
            take: Number(limit),
            orderBy: {
                [sortby]: order
            },
            where: {
                OR: [
                    {
                        address_line: {
                            contains: search || q,
                        }
                    },
                    {
                        address_line_1: {
                            contains: search || q,
                        }

                    },
                    {
                        state: {
                            contains: search || q,
                        }

                    },
                    {
                        city: {
                            contains: search || q,
                        }

                    },
                    {
                        zip: {
                            contains: search || q,
                        }

                    },
                    {
                        country: {
                            contains: search || q,
                        }

                    },
                    {
                        phone: {
                            contains: search || q,
                        }

                    },
                    {
                        phone_1: {
                            contains: search || q,
                        }

                    },
                    {
                        fax: {
                            contains: search || q,
                        }

                    },
                    {
                        email: {
                            contains: search || q,
                        }

                    },
                    {
                        email_1: {
                            contains: search || q,
                        }

                    }
                ]
            }
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
export const createContact = async (data: MinimalContactSchemaType) => {
    try {
        const contact = await prisma.contact.create({
            data: omit(data, ['id']),
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
            data: omit(data, [`id`]),
        });

        return contact;
    } catch (error) {
        console.error("Error updating contact:", error);
        throw new Error("Unable to update contact");
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