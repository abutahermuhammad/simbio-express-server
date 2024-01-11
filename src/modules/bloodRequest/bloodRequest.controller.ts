import httpStatus from "http-status";
import catchAsync from "./../../utils/catchAsync";
import sendResponse from "./../../utils/sendResponse.util";
import { createBloodRequestService, deleteBloodRequestService, getBloodRequestService, getBloodRequestsService, updateBloodRequestService } from "./bloodRequest.service";
import { TBloodRequestSchema } from "./bloodRequest.validation";


/**
 * Creates a blood request controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const createBloodRequestController = catchAsync(async (req, res): Promise<void> => {
    const { requestId } = req.params;
    const payload = req.body as TBloodRequestSchema;

    // Steps:
    // 1. Validate the request body
    // 2. Validate referral data with the database, if there is a mismatch, raise an update request for the `Referral` data in the admin panel.
    // 3. Create `Person` record with patient's personal information.
    // 3. Separate `Hospital` information from the request body and cross check data with the database. If there is a mismatch, raise an update request for the `Hospital` data in the admin panel.
    // 4. Create `Request` record with `Person` and `Hospital` information.

    const result = await createBloodRequestService(Number(requestId), payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Created blood request successfully",
        data: result,
    });
});


/**
 * Controller function to handle GET request for all blood donation requests.
 * @param _req - Express request object (unused).
 * @param res - Express response object.
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const getBloodRequestsController = catchAsync(async (_req, res): Promise<void> => {
    // Call the service to get all blood donation requests
    const result = await getBloodRequestsService();

    // If there are no blood donation requests, respond with a 404 Not Found status
    if (result.data.length === 0) {
        sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: 'No blood requests found',
            data: null
        });
        return;
    }

    // Respond with the fetched blood donation requests
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Fetched blood requests successfully',
        data: result
    })
});


/**
 * Controller function to handle GET request for a blood donation request by ID.
 *
 * @param {Request} req -  Express request object.
 * @param {Response} res - Express response object.
 * @return {void}
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const getBloodRequestController = catchAsync(async (req, res) => {
    const { requestId } = req.params;

    // Call the service to get blood donation request data by ID
    const result = await getBloodRequestService(Number(requestId))

    // If the request data is not found, respond with a 404 Not Found status
    if (!result) {
        sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "Request not found",
            data: null
        });
        return;
    }

    // Respond with the fetched blood donation request data
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Successfully fetched the request",
        data: result,
    });
});


export const updateBloodRequestController = catchAsync((req, res) => {
    const { memberId } = req.params;
    const payload = req.body as TBloodRequestSchema;

    const result = updateBloodRequestService(Number(memberId), payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Updated member successfully.',
        data: result
    })
})


/**
 * Delete blood request controller const.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const deleteBloodRequestController = catchAsync(async (req, res): Promise<void> => {
    const { requestId } = req.params;

    const result = await deleteBloodRequestService(Number(requestId))

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Delete blood request successfully",
        data: result,
    });
})
