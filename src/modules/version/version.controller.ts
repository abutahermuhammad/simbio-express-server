import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse.util";
import { createVersionService, deleteVersionService, getVersionService, getVersionsService, updateVersionService } from "./version.service";
import { TVersion } from "./version.validation";


/**
 * Creates a blood request controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const createVersionController = catchAsync(async (req, res): Promise<void> => {
    const payload = req.body as TVersion;

    // Steps:
    // 1. Validate the request body
    // 2. Validate referral data with the database, if there is a mismatch, raise an update request for the `Referral` data in the admin panel.
    // 3. Create `Version` record with patient's versional information.
    // 3. Separate `Hospital` information from the request body and cross check data with the database. If there is a mismatch, raise an update request for the `Hospital` data in the admin panel.
    // 4. Create `Request` record with `Version` and `Hospital` information.

    const result = await createVersionService(payload);

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
export const getVersionsController = catchAsync(async (_req, res): Promise<void> => {
    // Call the service to get all blood donation requests
    const result = await getVersionsService();

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
export const getVersionController = catchAsync(async (req, res) => {
    const { versionId } = req.params;

    // Call the service to get blood donation request data by ID
    const result = await getVersionService(Number(versionId))

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


export const updateVersionController = catchAsync((req, res) => {
    const { versionId } = req.params;
    const payload = req.body as TVersion;


    const result = updateVersionService(Number(versionId), payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Updated version successfully.',
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
export const deleteVersionController = catchAsync(async (req, res): Promise<void> => {
    const { versionId } = req.params;

    const result = await deleteVersionService(Number(versionId))

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Delete blood request successfully",
        data: result,
    });
})