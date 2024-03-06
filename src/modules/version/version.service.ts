import config from "config";
import prisma from "../../../prisma/prisma-client";
import { TVersion } from "./version.validation";

const APPLICATION_VERSION = config.get<string>("version");

export const createVersionService = async (payload: TVersion) => {
    const result = await prisma.version.create({
        data: {
            updated_at: new Date(),
            ...payload,
            version: APPLICATION_VERSION
        }
    })

    return result;
}

export const getVersionsService = async () => {
    const result = await prisma.version.findMany();

    return {
        data: result,
        offset: 0,
        limit: 10,
        total: result.length,
    };
}

export const getVersionService = async (id: number) => {
    const result = await prisma.version.findUnique({
        where: {
            id
        },
    });

    return result;
}


export const updateVersionService = async (id: number, payload: TVersion) => {

    const result = await prisma.version.update({
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



export const deleteVersionService = async (id: number) => {
    const result = await prisma.version.delete({
        where: {
            id
        }
    })
    console.log("Deleted version");

    return result
}