import config from 'config';
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { merge } from 'lodash';
import { createContact, deleteContactById, getContactById, getContacts, isExists, updateContactById } from "../../services/contact.service";
import { ContactSchemaType, MinimalContactSchema } from "../models/contact.model";
import { RequestQuerySchema, SinglePageRequestParameterSchema } from "../models/request.model";
import { debug } from '../utils/debug.util';

const PROJECT_VERSION = config.get('version');
/**
 * Get a list of contact with pagination.
 *
 * @param request
 * @param response
 *
 * @since 1.0.0
 */
export const getContactsController = asyncHandler(async (request: Request, response: Response): Promise<void> => {
    const { context, ...queries } = RequestQuerySchema.parse(request.query);
    const contacts = await getContacts(queries) as ContactSchemaType[];

    // Respond with the retrieved contacts.
    response.status(200).json({
        data: contacts,
        offset: queries.offset || 0,
        total: contacts.length,
        version: PROJECT_VERSION
    });
});

/**
 * Create a new contact.
 *
 * @param request
 * @param response
 */
export const postContact = asyncHandler(async (request: Request, response: Response) => {
    // Extracting body object.
    const body = MinimalContactSchema.parse(request.body);

    // Create a new contact in the database.
    const contact = await createContact(body);

    // Respond with a success message.
    response.status(200).json({ timestamp: Date.now(), message: "contact created successfully", data: contact });
});

/**
 * Get a contact by ID.
 *
 * @param request
 * @param response
 */
export const getContact = asyncHandler(async (request: Request, response: Response) => {
    // Extract contact ID from the request parameters.
    const id = parseInt(request.params.id);

    // Retrieve the contact from the database by ID.
    const contact = await getContactById(id)
    // Example: const contact = await contactModel.findById(contactId);

    // Respond with the retrieved contact.
    if (contact) {
        response.status(200).json({ message: "contact retrieved successfully", id, data: contact });
    }

    response.status(404).json({ message: "No contact found!" })
});

/**
 * patchContact
 * @description Update a contact by ID (partial update).
 *
 * @param request
 * @param response
 *
 * @since 1.0.0
 */
export const patchContactController = asyncHandler(async (request: Request, response: Response) => {
    // Extracting URL->query & body object.
    const params = SinglePageRequestParameterSchema.parse(request.params);
    const body = MinimalContactSchema.parse(request.body);

    // Converting `id` from string to number
    const id = Number(params.id);

    // Checking whether contact exits or not.
    const exists = await isExists(id);

    // Returning 404 error when no contact available.
    if (!exists) response.status(404).json({ message: "Record do not exits!" });

    // Pulling original data object.
    const currentContact = await getContactById(id);

    // Creating new object by combining `currentData` and `updatedData`. This will prevent from unwanted data wipeout or replacement.
    const updatedData: ContactSchemaType = merge(currentContact, body) as object;

    debug(updatedData);

    // Delete the contact from the database by ID.
    const contact = await updateContactById(id, updatedData);

    // Respond with a success message.
    response.status(200).json({ timestamp: Date.now(), message: "Successfully updated!", contact });
});

/**
 * Delete a contact by ID.
 *
 * @param request
 * @param response
 *
 * @since 1.0.0
 */
export const deleteContactController = asyncHandler(async (request: Request, response: Response) => {
    // TODO:
    // - Delete method need to replace with soft delete.
    //
    // Author: Abu Taher Muhammad <abutahermuhammad>

    // Extract contact ID from the request parameters.
    const id = Number(request.params.id);

    // Checking whether contact exits or not.
    const exists = await isExists(id);

    // Returning 404 error when no contact available.
    if (!exists) response.status(404).json({ message: "Record not found!" });

    // Delete the contact from the database by ID.
    const contact = await deleteContactById(id);

    // Respond with a success message.
    response.status(200).json({ id: contact.id, message: "Successfully deleted!", deleted_at: Date.now() });
});
