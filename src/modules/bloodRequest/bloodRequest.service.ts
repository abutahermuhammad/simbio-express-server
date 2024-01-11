import config from "config";
import prisma from "./../../../prisma/prisma-client";
import { TBloodRequestSchema } from "./bloodRequest.validation";


const APPLICATION_VERSION = config.get<string>("version");


export const createBloodRequestService = async (id: number, payload: TBloodRequestSchema) => {
    const result = await prisma.request.create({
        data: {
            updated_at: new Date(),
            health_issue: payload.health_issue,
            blood_group: payload.blood_group,
            quantity: payload.quantity,
            donation_type: payload.donation_type,
            datetime: payload.datetime,
            hospital_name: payload.hospital_name,
            hospital_address: payload.hospital_address,
            hospital_phone: payload.hospital_phone,
            hospital_email: payload.hospital_email,
            version: APPLICATION_VERSION,
            memberId: payload.memberId,
            personId: payload.personId,
        },
        include: {
            Member: true,
            Person: true,
            Version: true
        }
    })

    return result;
}

export const getBloodRequestsService = async () => {
    const result = await prisma.request.findMany();

    return {
        data: result,
        offset: 0,
        limit: 10,
        total: result.length,
    };
}

export const getBloodRequestService = async (id: number) => {
    const result = await prisma.request.findUnique({
        where: {
            id
        },
        include: {
            Member: true,
            Person: true,
        }
    });

    return result;
}


export const updateBloodRequestService = async (id: number, payload: TBloodRequestSchema) => {

    const result = await prisma.request.update({
        where: {
            id
        },
        data: {
            updated_at: new Date(),
            health_issue: payload.health_issue,
            blood_group: payload.blood_group,
            quantity: payload.quantity,
            donation_type: payload.donation_type,
            datetime: payload.datetime,
            hospital_name: payload.hospital_name,
            hospital_address: payload.hospital_address,
            hospital_phone: payload.hospital_phone,
            hospital_email: payload.hospital_email,
            version: APPLICATION_VERSION,
            memberId: payload.memberId,
            personId: payload.personId,
        },
        include: {
            Member: true,
            Person: true,
            Version: true
        }
    })

    return { id, body: result }
}



export const deleteBloodRequestService = async (id: number) => {
    const result = await prisma.request.delete({
        where: {
            id
        }
    })
    console.log("Deleted member");

    return result
}