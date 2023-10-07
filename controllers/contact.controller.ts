import { NextFunction, Request, Response } from "express";
import { ListRequestParameterSchema } from "../models/request.model";
import { getContacts } from "../services/contact.service";


/**
 * Get a list of contact with pagination.
 * 
 * @param request
 * @param response
 */
export const getContactsController = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { context, ...params } = ListRequestParameterSchema.parse(request.params);

        // When no request context defined, returns null;
        // This is to make sure the origin of API call. Which is necessary for data log, analytics, security, etc.
        if (!context) {
            return next();
        }

        // Extract query parameters from the request.
        // const query = request.query as GetRequestParams;
        const contacts = await getContacts({ ...params });


        // Perform database query to retrieve contacts with pagination and filtering.
        // Example: const contacts = await contactModel.find({ filter }).limit(limit).skip(offset);

        // Respond with the retrieved contacts.
        response.status(200).json({
            params: params,
            contacts,
            length: 0,
            offset: 0,
            total: 0,
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Create a new contact.
 * 
 * @param request 
 * @param response 
 */
export const postContact = (request: Request, response: Response) => {
    try {
        // Extract contact data from the request body.
        // const contactData = request.body;

        // Create a new contact in the database.
        // Example: const newContact = await contactModel.create(contactData);

        // Respond with the created contact.
        response.json({ message: "contact created successfully" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal server error" });
    }
};

/**
 * Get a contact by ID.
 * 
 * @param request 
 * @param response 
 */
export const getContact = (request: Request, response: Response) => {
    try {
        // Extract contact ID from the request parameters.
        const contactId = request.params.id;

        // Retrieve the contact from the database by ID.
        // Example: const contact = await contactModel.findById(contactId);

        // Respond with the retrieved contact.
        response.json({ message: "contact retrieved successfully", id: contactId, data: /*contact*/ {} });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal server error" });
    }
};

/**
 * Update a contact by ID (partial update).
 * 
 * @param request 
 * @param response 
 */
export const patchContact = (request: Request, response: Response) => {
    try {
        // Extract contact ID from the request parameters.
        // const contactId = request.params.id;

        // Extract partial contact data from the request body.
        // const partialContactData = request.body;

        // Update the contact partially in the database by ID.
        // Example: const updatedContact = await contactModel.findByIdAndUpdate(contactId, partialContactData, { new: true });

        // Respond with the updated contact.
        response.json({ message: "contact updated successfully", data: /*updatedContact*/ {} });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal server error" });
    }
};

/**
 * Delete a contact by ID.
 * 
 * @param request 
 * @param response 
 */
export const deleteContact = (request: Request, response: Response) => {
    try {
        // Extract contact ID from the request parameters.
        // const contactId = request.params.id;

        // Delete the contact from the database by ID.
        // Example: await contactModel.findByIdAndRemove(contactId);

        // Respond with a success message.
        response.json({ message: "contact deleted successfully" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal server error" });
    }
};
