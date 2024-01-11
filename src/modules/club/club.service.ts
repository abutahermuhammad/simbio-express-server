import config from "config";
import prisma from "../../../prisma/prisma-client";
import { TClub } from "./club.validation";

const APPLICATION_VERSION = config.get<string>("version");

export const createClubService = async (payload: TClub) => {
    const result = await prisma.club.create({
        data: {
            updated_at: new Date(),
            ...payload,
            version: APPLICATION_VERSION
        }
    })

    return result;
}

export const getClubsService = async () => {
    const result = await prisma.club.findMany();

    return {
        data: result,
        offset: 0,
        limit: 10,
        total: result.length,
    };
}

export const getClubService = async (id: number) => {
    const result = await prisma.club.findUnique({
        where: {
            id
        },
    });

    return result;
}


export const updateClubService = async (id: number, payload: TClub) => {

    const result = await prisma.club.update({
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



export const deleteClubService = async (id: number) => {
    const result = await prisma.club.delete({
        where: {
            id
        }
    })
    console.log("Deleted club");

    return result
}