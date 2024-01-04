import { Request, Response } from "express";
import { AppError } from "./../../utils/appError";
import sendResponse from "./../../utils/sendResponse.util";

/**
 * Creates a Club controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function createClubController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Create a Club",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

export function getClubsController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Get Clubs list",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Update Club controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function updateClubController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Update a Club",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Retrieves the Club controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void} Nothing is returned from this function.
 */
export function getClubController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Get a Club",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Delete Club controller function.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function deleteClubController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Delete a Club",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}
