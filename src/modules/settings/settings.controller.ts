import { Request, Response } from "express"
import { AppError } from "./../../utils/appError"
import sendResponse from "./../../utils/sendResponse.util"




export function getSettingsController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Application setting',
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
export function updateSettingsController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Update application settings',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export function getProfileSettingsController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get profile settings',
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
export function updateProfileSettingsController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Update profile settings',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}