import { Request, Response } from "express"
import { AppError } from "./../../utils/appError"
import sendResponse from "./../../utils/sendResponse.util"

/**
 * Creates a team controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function createTeamController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Create a team',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export function getTeamsController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get teams list',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Update team controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function updateTeamController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Update a team',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Retrieves the team controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void} Nothing is returned from this function.
 */
export function getTeamController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get a team',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Delete team controller function.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function deleteTeamController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Delete a team',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}