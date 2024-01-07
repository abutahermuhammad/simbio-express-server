import { TMember } from "./member.model";

export const createMemberService = (data: TMember) => {
    console.log("Created new member");
    console.log("MEMBER: ", data)

    return { timestamp: new Date() }
}

export const getMembersService = () => {
    return {
        data: [],
        offset: 0,
        limit: 10,
        total: 100,
    };
}

export const updateMemberService = (id: string, data: TMember) => {
    console.log("Created updated member");
    console.log("MEMBER: ", data)

    return { id, body: data }
}


export const getMemberService = (id: string) => {
    console.log("Fetched member");

    return { id }
}


export const deleteMemberService = (id: string) => {
    console.log("Deleted member");

    return { id }
}