import { omit } from "lodash";
import prisma from "./../../../prisma/prisma-client";
import { TMember } from "./member.model";

export const createMemberService = async (data: TMember) => {
    const member = await prisma.member.create({
        data: omit(data, ['id']),
    });

    return member;
}

export const getMembersService = async () => {
    const result = await prisma.member.findMany({
        include: {
            Person: true
        },
    });

    return {
        data: result,
        offset: 0,
        limit: 10,
        total: result.length,
    };
}

export const getMemberService = async (id: number) => {
    const result = await prisma.member.findUnique({
        where: {
            id
        },
        include: {
            Person: true,
            Club: true,
            Donation: true,
            Request: true
        }
    });

    return result;
}


export const updateMemberService = async (id: number, data: TMember) => {
    const result = await prisma.member.update({
        where: {
            id
        },
        data: omit(data, [`id`]),
    });

    return { id, body: result }
}



export const deleteMemberService = async (id: number) => {
    const result = await prisma.member.delete({
        where: {
            id
        }
    })
    console.log("Deleted member");

    return result
}