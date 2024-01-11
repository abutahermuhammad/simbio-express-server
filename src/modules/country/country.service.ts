import config from "config";
import prisma from "../../../prisma/prisma-client";
import { TCountry } from "./country.validation";

const APPLICATION_VERSION = config.get<string>("version");

export const createCountryService = async (payload: TCountry) => {
    const result = await prisma.country.create({
        data: {
            updated_at: new Date(),
            ...payload,
            version: APPLICATION_VERSION
        }
    })

    return result;
}

export const getCountriesService = async () => {
    const result = await prisma.country.findMany();

    return {
        data: result,
        offset: 0,
        limit: 10,
        total: result.length,
    };
}

export const getCountryService = async (alpha_3: string) => {
    const result = await prisma.country.findUnique({
        where: {
            alpha_3
        },
    });

    return result;
}


export const updateCountryService = async (alpha_3: string, payload: TCountry) => {

    const result = await prisma.country.update({
        where: {
            alpha_3
        },
        data: {
            updated_at: new Date(),
            ...payload
        },
    })

    return { alpha_3, body: result }
}



export const deleteCountryService = async (alpha_3: string) => {
    const result = await prisma.country.delete({
        where: {
            alpha_3
        }
    })
    console.log("Deleted country");

    return result
}