import { omit } from "lodash";
import { MemberSchemaType } from "../models/member.model";
import { RequestQuerySchemaType } from "../models/request.model";
import { debug } from "../utils/debug.util";


/**
 * isExists
 * This function checks whether member with a given id is exists or not.
 * 
 * @param id 
 * @returns 
 * 
 * @since 1.0.0
 */
export const isExists = async (id: number) => {
    try {
        const isExists = await prisma.member.findUnique({
            where: {
                id: id
            }
        })

        return isExists ? true : false;
    } catch (error) {
        throw new Error('server error')
    }
}



/**
 * Get Contacts
 * @param param0 
 * @returns 
 */
export const getMembers = async ({
    search = "",
    filter = "",
    q = "",
    limit = "10",
    offset = "0",
    sortby = "id",
    order = "asc",
    include = "",
    exclude = "",
}:
    Partial<RequestQuerySchemaType>
) => {
    debug('A request was made to the root endpoint');

    try {
        const contacts = await prisma.member.findMany({
            // query: search as string || filter as string || q as string,
            skip: Number(offset),
            take: Number(limit),
            orderBy: {
                [sortby]: order
            },
            // where: {
            //     OR: [
            //         {
            //             address_line_0: {
            //                 contains: search || q,
            //             }
            //         },
            //         {
            //             address_line_1: {
            //                 contains: search || q,
            //             }

            //         },
            //         {
            //             state: {
            //                 contains: search || q,
            //             }

            //         },
            //         {
            //             city: {
            //                 contains: search || q,
            //             }

            //         },
            //         {
            //             zip: {
            //                 contains: search || q,
            //             }

            //         },
            //         {
            //             country: {
            //                 contains: search || q,
            //             }

            //         },
            //         {
            //             phone: {
            //                 contains: search || q,
            //             }

            //         },
            //         {
            //             phone_1: {
            //                 contains: search || q,
            //             }

            //         },
            //         {
            //             fax: {
            //                 contains: search || q,
            //             }

            //         },
            //         {
            //             email: {
            //                 contains: search || q,
            //             }

            //         },
            //         {
            //             email_1: {
            //                 contains: search || q,
            //             }

            //         }
            //     ]
            // }
        });

        return contacts;
    } catch (err) {
        return err;
    }
}

/**
 * Get Contacts
 * @param param0 
 * @returns 
 */
export const createMember = async (data: MemberSchemaType) => {
    try {
        const member = await prisma.member.create({
            data: omit(data, ['id']),
        });

        return member;
    } catch (error) {
        console.error("Error creating member :", error);
        throw new Error("Unable to create member");
    }
}


/**
* Retrieves a member and related data by their ID.
*
* @param {number} id - The ID of the member to retrieve.
* @returns {Promise<Member | null>} A promise that resolves to the retrieved member or null if not found.
* @throws {Error} If there's an issue with the database query.
*/
export const getMemberById = async (id: number) => {
    try {
        const member = await prisma.member.findUnique({
            where: {
                id: id,
            },
            include: {
                Person: true,
                Donation: true,
                Club: true,
                Request: true,
            },
        });

        return member;
    } catch (error) {
        // More specific error handling with descriptive message
        throw new Error(`Failed to retrieve member with ID ${id}: ${error.message}`);
    }
}


/**
 * updateMemberById
 * This will update a member with respected id.
 * 
 * @param id 
 * @returns 
 * 
 * @since 1.0.0
 */
export const updateMemberById = async (id: number, data: MemberSchemaType) => {
    try {
        const member = await prisma.member.update({
            where: {
                id
            },
            data: omit(data, [`id`]),
        });

        return member;
    } catch (error) {
        console.error("Error updating member:", error);
        throw new Error("Unable to update member");
    }
}



/**
 * deleteMemberById
 * This will delete Member matched with given id.
 * 
 * @param id 
 * @returns 
 * 
 * @since 1.0.0
 */
export const deleteMemberById = async (id: number) => {
    try {
        const response = await prisma.member.delete({
            where: {
                id: id
            }
        });

        return response;
    } catch (error) {
        throw new Error('server error')
    }
}