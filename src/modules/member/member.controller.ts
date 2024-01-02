import { Request, Response } from "express"
import { AppError } from "./../../utils/appError"
import sendResponse from "./../../utils/sendResponse.util"

/**
 * Creates a member controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function createMemberController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Create a member',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export function getMembersController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get members list',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Update member controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function updateMemberController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Update a member',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Retrieves the member controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void} Nothing is returned from this function.
 */
export function getMemberController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get a member',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Delete member controller function.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function deleteMemberController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Delete a member',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}