import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse.util";
import { createPersonService, deletePersonService, getPersonService, getPersonsService, updatePersonService } from "./person.service";
import { TPerson } from "./person.validation";


/**
 * Creates a blood request controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const createPersonController = catchAsync(async (req, res): Promise<void> => {
    const payload = req.body as TPerson;

    // Steps:
    // 1. Validate the request body
    // 2. Validate referral data with the database, if there is a mismatch, raise an update request for the `Referral` data in the admin panel.
    // 3. Create `Person` record with patient's personal information.
    // 3. Separate `Hospital` information from the request body and cross check data with the database. If there is a mismatch, raise an update request for the `Hospital` data in the admin panel.
    // 4. Create `Request` record with `Person` and `Hospital` information.

    const result = await createPersonService(payload);

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
export const getPersonsController = catchAsync(async (_req, res): Promise<void> => {
    // Call the service to get all blood donation requests
    const result = await getPersonsService();

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
export const getPersonController = catchAsync(async (req, res) => {
    const { personId } = req.params;

    // Call the service to get blood donation request data by ID
    const result = await getPersonService(Number(personId))

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


export const updatePersonController = catchAsync((req, res) => {
    const { personId } = req.params;
    const payload = req.body as TPerson;


    const result = updatePersonService(Number(personId), payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Updated person successfully.',
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
export const deletePersonController = catchAsync(async (req, res): Promise<void> => {
    const { personId } = req.params;

    const result = await deletePersonService(Number(personId))

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Delete blood request successfully",
        data: result,
    });
})
