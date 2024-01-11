import config from "config";
import { Response } from 'express';

const PROJECT_VERSION = config.get<string>('version');

type TResponse<UserData, UserError> = {
    statusCode: number;
    success?: boolean;
    message: string;
    data?: UserData;
    error?: UserError;
};

const sendResponse = <UserData, UserError>(res: Response, data: TResponse<UserData, UserError>): void => {
    res.status(data?.statusCode).json({
        success: data.success || false,
        message: data.message,
        data: data?.data || {},
        error: data?.error || [],
        version: PROJECT_VERSION
    });
};

export default sendResponse;
