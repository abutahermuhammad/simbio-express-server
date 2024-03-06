import { Request, Response } from "express";
import { AppError } from "./../../utils/appError";
import sendResponse from "./../../utils/sendResponse.util";
import { mockUsers } from "./auth.constant";


export const registerController = (req: Request, res: Response) => {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'User registered',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export const verifyController = (req: Request, res: Response) => {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Verify route',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export const resendController = (req: Request, res: Response) => {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Resend route',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export const loginController = (req: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { query: { username, password } } = req;
    try {

        const findUser = mockUsers.find(user => user.username === username)

        if (!findUser || findUser.password !== password) return sendResponse(res, {
            statusCode: 401,
            success: false,
            message: 'Bad credentials',
            data: {}
        })

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'User registered',
            data: findUser
        })
    } catch (error) {
        throw new AppError()
    }
}


export const refreshController = (req: Request, res: Response) => {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Refresh route',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export const logoutController = (req: Request, res: Response) => {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Logout route',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export const forgotPasswordController = (req: Request, res: Response) => {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Forgot password route',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export const resetPasswordController = (req: Request, res: Response) => {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Reset password route',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}


export const successPageController = (req: Request, res: Response) => {
    try {
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Success page route',
            data: {}
        })
    } catch (error) {
        throw new AppError()
    }
}
