import { Request, Response } from "express";


/**
 * Get a Root
 * 
 * @param request 
 * @param response 
 */
export const getStatus = (request: Request, response: Response) => {
    try {
        // Define a response object
        const data = {
            status: 200,
            message: "Server is running properly",
            error: ""
        };

        // Send a JSON response with the status and data
        response.status(200).json(data);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal server error" });
    }
};