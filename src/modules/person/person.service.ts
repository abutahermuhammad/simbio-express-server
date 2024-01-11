import config from "config";
import prisma from "../../../prisma/prisma-client";
import { TPerson } from "./person.validation";

const APPLICATION_VERSION = config.get<string>("version");

export const createPersonService = async (payload: TPerson) => {
    const result = await prisma.person.create({
        data: {
            updated_at: new Date(),
            ...payload,
            version: APPLICATION_VERSION
        }
    })

    return result;
}

export const getPersonsService = async () => {
    const result = await prisma.person.findMany();

    return {
        data: result,
        offset: 0,
        limit: 10,
        total: result.length,
    };
}

export const getPersonService = async (id: number) => {
    const result = await prisma.person.findUnique({
        where: {
            id
        },
        include: {
            Member: true,
        }
    });

    return result;
}


export const updatePersonService = async (id: number, payload: TPerson) => {

    const result = await prisma.person.update({
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



export const deletePersonService = async (id: number) => {
    const result = await prisma.person.delete({
        where: {
            id
        }
    })
    console.log("Deleted person");

    return result
}