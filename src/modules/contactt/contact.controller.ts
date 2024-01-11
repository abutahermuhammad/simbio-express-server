import { Request, Response } from "express";
import { AppError } from "../../utils/appError";
import sendResponse from "../../utils/sendResponse.util";

/**
 * Creates a contact controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function createContactController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Create a contact",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

export function getContactsController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Get contacts list",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Update contact controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function updateContactController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Update a contact",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Retrieves the contact controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void} Nothing is returned from this function.
 */
export function getContactController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Get a contact",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Delete contact controller function.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function deleteContactController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Delete a contact",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}


import { omit } from "lodash";
import prisma from '../prisma/prisma-client';
import { ContactSchemaType, MinimalContactSchemaType } from "../src/models/contact.model";
import { TRequestQuery } from "../src/models/request.model";
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
    Partial<TRequestQuery>
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


