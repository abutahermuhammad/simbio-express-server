import config from "config";
import prisma from "../../../prisma/prisma-client";
import { THospital } from "./hospital.validation";

const APPLICATION_VERSION = config.get<string>("version");

export const createHospitalService = async (payload: THospital) => {
    const result = await prisma.hospital.create({
        data: {
            updated_at: new Date(),
            ...payload,
            version: APPLICATION_VERSION
        }
    })

    return result;
}

export const getHospitalsService = async () => {
    const result = await prisma.hospital.findMany();

    return {
        data: result,
        offset: 0,
        limit: 10,
        total: result.length,
    };
}

export const getHospitalService = async (id: number) => {
    const result = await prisma.hospital.findUnique({
        where: {
            id
        },
    });

    return result;
}


export const updateHospitalService = async (id: number, payload: THospital) => {

    const result = await prisma.hospital.update({
        where: {
            id
        },
        data: {
            updated_at: new Date(),
            ...payload,
            version: APPLICATION_VERSION
        },
    })

    return { id, body: result }
}



export const deleteHospitalService = async (id: number) => {
    const result = await prisma.hospital.delete({
        where: {
            id
        }
    })
    console.log("Deleted hospital");

    return result
}