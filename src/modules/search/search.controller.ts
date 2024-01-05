import { Request, Response } from "express"
import { AppError } from "./../../utils/appError"
import sendResponse from "./../../utils/sendResponse.util"




export function getSearchController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get search',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export function getSearchHistoryController(req: Request, res: Response) {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Get search history',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}

