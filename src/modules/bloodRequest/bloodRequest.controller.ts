import { Request, Response } from "express";
import { AppError } from "./../../utils/appError";
import sendResponse from "./../../utils/sendResponse.util";

/**
 * Creates a blood request controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function createBloodRequestController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Create a blood request",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

export function getBloodRequestsController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Get blood requests list",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Update blood request controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function updateBloodRequestController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Update a blood request",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Retrieves the blood request controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void} Nothing is returned from this function.
 */
export function getBloodRequestController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Get a blood request",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Delete blood request controller function.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function deleteBloodRequestController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Delete a blood request",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}
