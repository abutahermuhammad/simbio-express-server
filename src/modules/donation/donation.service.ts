import config from "config";
import prisma from "../../../prisma/prisma-client";
import { TDonation } from "./donation.validation";

const APPLICATION_VERSION = config.get<string>("version");

export const createDonationService = async (payload: TDonation) => {
    const result = await prisma.donation.create({
        data: {
            updated_at: new Date(),
            ...payload,
            version: APPLICATION_VERSION
        }
    })

    return result;
}

export const getDonationsService = async () => {
    const result = await prisma.donation.findMany();

    return {
        data: result,
        offset: 0,
        limit: 10,
        total: result.length,
    };
}

export const getDonationService = async (id: number) => {
    const result = await prisma.donation.findUnique({
        where: {
            id
        },
    });

    return result;
}


export const updateDonationService = async (id: number, payload: TDonation) => {

    const result = await prisma.donation.update({
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



export const deleteDonationService = async (id: number) => {
    const result = await prisma.donation.delete({
        where: {
            id
        }
    })
    console.log("Deleted donation");

    return result
}