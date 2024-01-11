import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse.util";
import { createDonationService, deleteDonationService, getDonationService, getDonationsService, updateDonationService } from "./donation.service";
import { TDonation } from "./donation.validation";


/**
 * Creates a blood request controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {void}
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
export const createDonationController = catchAsync(async (req, res): Promise<void> => {
    const payload = req.body as TDonation;

    // Steps:
    // 1. Validate the request body
    // 2. Validate referral data with the database, if there is a mismatch, raise an update request for the `Referral` data in the admin panel.
    // 3. Create `Donation` record with patient's donational information.
    // 3. Separate `Hospital` information from the request body and cross check data with the database. If there is a mismatch, raise an update request for the `Hospital` data in the admin panel.
    // 4. Create `Request` record with `Donation` and `Hospital` information.

    const result = await createDonationService(payload);

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
export const getDonationsController = catchAsync(async (_req, res): Promise<void> => {
    // Call the service to get all blood donation requests
    const result = await getDonationsService();

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
export const getDonationController = catchAsync(async (req, res) => {
    const { donationId } = req.params;

    // Call the service to get blood donation request data by ID
    const result = await getDonationService(Number(donationId))

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


export const updateDonationController = catchAsync((req, res) => {
    const { donationId } = req.params;
    const payload = req.body as TDonation;


    const result = updateDonationService(Number(donationId), payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Updated donation successfully.',
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
export const deleteDonationController = catchAsync(async (req, res): Promise<void> => {
    const { donationId } = req.params;

    const result = await deleteDonationService(Number(donationId))

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Delete blood request successfully",
        data: result,
    });
})
