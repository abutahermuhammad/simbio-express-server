import { Request, Response } from "express"
import { AppError } from "./../../utils/appError"
import sendResponse from "./../../utils/sendResponse.util"



export function getNotificationsController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get notifications list',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Update notification controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export function updateNotificationController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Update a notification',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


/**
 * Retrieves the notification controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void} Nothing is returned from this function.
 */
export function getNotificationController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get a notification',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}
