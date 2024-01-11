import httpStatus from "http-status";
import catchAsync from "./../../utils/catchAsync";
import sendResponse from "./../../utils/sendResponse.util";

export const getRootController = catchAsync((req, res) => {
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Servers running properly",
    })
});