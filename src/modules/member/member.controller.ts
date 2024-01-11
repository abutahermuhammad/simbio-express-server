import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "./../../utils/catchAsync";
import sendResponse from "./../../utils/sendResponse.util";
import { createMemberService, deleteMemberService, getMemberService, getMembersService, updateMemberService } from "./member.service";

/**
 * Creates a member controller.
 *
 * @param {Request} req - The request object.
 * @param {Response<void>} res - The response object.
 * @returns {void}
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const createMemberController = catchAsync((req: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = createMemberService(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Member created successfully',
        data: result
    });
});


// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const getMembersController = catchAsync(async (_req: Request, res: Response): Promise<void> => {
    const result = await getMembersService();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Fetched members successfully',
        data: result
    })
})


/**
 * Retrieves the member controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void} Nothing is returned from this function.
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const getMemberController = catchAsync(async (req: Request, res: Response) => {
    const { memberId } = req.params;

    const result = await getMemberService(Number(memberId));

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Get a member',
        data: result
    })
});


/**
 * Update member controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export const updateMemberController = catchAsync((req: Request, res: Response) => {
    const { memberId } = req.params;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = updateMemberService(Number(memberId), req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Updated the member',
        data: result
    })
})



/**
 * Delete member controller function.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
export const deleteMemberController = catchAsync((req: Request, res: Response) => {
    // TODO:
    // - Need to add soft-delete.
    const { memberId } = req.params;

    const result = deleteMemberService(Number(memberId));

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Delete a member',
        data: result
    })
})