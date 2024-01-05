import { Request, Response } from "express"
import { AppError } from "./../../utils/appError"
import sendResponse from "./../../utils/sendResponse.util"

/**
 * Creates a user controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function createUserController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Create a user',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export function getUsersController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get users list',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Update user controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function updateUserController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Update a user',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Retrieves the user controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void} Nothing is returned from this function.
 */
export function getUserController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get a user',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Delete user controller function.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function deleteUserController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Delete a user',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}