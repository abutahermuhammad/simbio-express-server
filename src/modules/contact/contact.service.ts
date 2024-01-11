import config from "config";
import prisma from "../../../prisma/prisma-client";
import { TContact } from "./contact.validation";

const APPLICATION_VERSION = config.get<string>("version");

export const createContactService = async (payload: TContact) => {
    const result = await prisma.contact.create({
        data: {
            updated_at: new Date(),
            ...payload,
            version: APPLICATION_VERSION
        }
    })

    return result;
}

export const getContactsService = async () => {
    const result = await prisma.contact.findMany();

    return {
        data: result,
        offset: 0,
        limit: 10,
        total: result.length,
    };
}

export const getContactService = async (id: number) => {
    const result = await prisma.contact.findUnique({
        where: {
            id
        },
    });

    return result;
}


export const updateContactService = async (id: number, payload: TContact) => {

    const result = await prisma.contact.update({
        where: {
            id
        },
        data: {
            updated_at: new Date(),
            ...payload
        },
    })

    return { id, body: result }
}



export const deleteContactService = async (id: number) => {
    const result = await prisma.contact.delete({
        where: {
            id
        }
    })
    console.log("Deleted contact");

    return result
}