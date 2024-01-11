import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from './../utils/sendResponse.util';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFound = (req: Request, res: Response, next: NextFunction) => {
    return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        message: 'API Not Found!',

    })
};

export default notFound;
