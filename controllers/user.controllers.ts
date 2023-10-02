import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";
import { AppId, ContextOptions, SortType } from "../type";


const prisma = new PrismaClient();

export type GetMembersParams = {
    context?: ContextOptions;
    search?: string;
    filter?: string;
    q?: string;
    limit?: number;
    offset?: number;
    sortedBy?: string;
    sortOrder?: SortType;
    exclude?: AppId[];
    include?: AppId[];
}

/**
 * Get a new user.
 * 
 * @param {Request} request
 * @param {Response} response
 * 
 * @since 1.0.0
 */
export const getUsers = async (request: Request, response: Response) => {
    try { 
        const users = await prisma.user.findMany();

        response.status(200).send(users);
    } catch (error) { 
        console.error(error);
        response.status(500).json('Server error!');
    }
 }


/**
 * Create a new user.
 * 
 * @param request 
 * @param response 
 */
export const postUser = async (request: Request, response: Response) => {
    try {
        const user = await prisma.user.create({
            data:request.body
        });

        response.status(201).send(user);
    } catch (error) {
        console.error(error);
        response.status(500).send('Server error!');
    }

        // Perform database query to retrieve members with pagination and filtering.
        // Example: const members = await MemberModel.find({ filter }).limit(limit).skip(offset);

        // Respond with the retrieved members.
        // response.json({ message: "Members retrieved successfully", query: query });
    // } catch (error) {
    //     console.error(error);
    //     response.status(500).json({ message: "Internal server error" });
    // }
};

