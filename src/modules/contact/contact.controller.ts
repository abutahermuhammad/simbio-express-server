import { Request, Response } from "express";
import { AppError } from "./../../utils/appError";
import sendResponse from "./../../utils/sendResponse.util";

/**
 * Creates a contact controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function createContactController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Create a contact",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

export function getContactsController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Get contacts list",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Update contact controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function updateContactController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Update a contact",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Retrieves the contact controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void} Nothing is returned from this function.
 */
export function getContactController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Get a contact",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Delete contact controller function.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function deleteContactController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Delete a contact",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}
