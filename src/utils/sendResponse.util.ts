import { Response } from 'express';

type TResponse<UserData, UserError> = {
    statusCode: number;
    success?: boolean;
    message: string;
    data?: UserData;
    error?: UserError;
};

const sendResponse = <UserData, UserError>(res: Response, data: TResponse<UserData, UserError>) => {
    res.status(data?.statusCode).json({
        success: data.success || false,
        message: data.message,
        data: data?.data || {},
        error: data?.error || [],
    });
};

export default sendResponse;
