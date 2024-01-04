import { Request, Response } from "express";
import { AppError } from "./../../utils/appError";
import sendResponse from "./../../utils/sendResponse.util";

/**
 * Creates a collection center controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function createCollectionCenterController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Create a collection center",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

export function getCollectionCentersController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Get collection centers list",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Update collection center controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function updateCollectionCenterController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Update a collection center",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Retrieves the collection center controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void} Nothing is returned from this function.
 */
export function getCollectionCenterController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Get a collection center",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}

/**
 * Delete collection center controller function.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function deleteCollectionCenterController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Delete a collection center",
            data: {},
        });
    } catch (error) {
        throw new AppError();
    }
}
