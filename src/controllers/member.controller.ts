import config from 'config';
import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import { merge } from 'lodash';
import { createContact } from '../../services/contact.service';
import { createMember, deleteMemberById, getMemberById, getMembers, isExists, updateMemberById } from "../../services/member.service";
import { createPerson } from '../../services/person.service';
import { AppId, ContextOptions, SortType } from "../../type";
import { MemberSchema, MemberSchemaType, NewMemberSchema } from "../models/member.model";
import { RequestQuerySchema, SinglePageRequestParameterSchema } from "../models/request.model";
import { debug } from '../utils/debug.util';

const PROJECT_VERSION = config.get('version');


export type GetMembersParams = {
    context?: ContextOptions;
    search?: string;
    filter?: string;
    q?: string;
    limit?: number;
    offset?: number;
    sortedBy?: string;
    sortOrder?: SortType;
    exclude?: AppId[];
    include?: AppId[];
}

/**
 * Get a list of members with pagination.
 *
 * @param request
 * @param response
 */
export const getMembersController = asyncHandler(async (request: Request, response: Response) => {
    const { context, ...queries } = RequestQuerySchema.parse(request.query);
    const members = await getMembers(queries) as MemberSchemaType[];

    // Respond with the retrieved contacts.
    response.status(200).json({
        data: members,
        offset: queries.offset || 0,
        total: members.length,
        version: PROJECT_VERSION
    });
});


/**
 * Create a new member.
 *
 * @param request
 * @param response
 */
export const postMemberController = asyncHandler(async (request: Request, response: Response) => {
    // Extracting body object.
    const { personal, health, contact } = NewMemberSchema.parse(request.body);

    // Create a new contact in the database.
    const { id: contactId } = await createContact(contact);
    const { id: personId } = await createPerson({ ...personal, contact_id: contactId });
    const member = await createMember({ ...health, person_id: personId, version: PROJECT_VERSION });

    // Respond with a success message.
    response.status(200).json({ timestamp: Date.now(), message: "contact created successfully", data: member });
});


/**
 * Get a member by ID.
 *
 * @param request
 * @param response
 */
export const getMemberController = asyncHandler(async (request: Request, response: Response) => {
    // Extract contact ID from the request parameters.
    const id = parseInt(request.params.id);

    // Retrieve the contact from the database by ID.
    const contact = await getMemberById(id)
    // Example: const contact = await contactModel.findById(contactId);

    // Respond with the retrieved contact.
    if (contact) {
        response.status(200).json({ message: "contact retrieved successfully", id, data: contact });
    }

    response.status(404).json({ message: "No contact found!" })
});


/**
 * patchMember
 * @description Update a member by ID (partial update).
 *
 * @param request
 * @param response
 *
 * @since 1.0.0
 */
export const patchMemberController = asyncHandler(async (request: Request, response: Response) => {
    // Extracting URL->query & body object.
    const params = SinglePageRequestParameterSchema.parse(request.params);
    const body = MemberSchema.parse(request.body);

    // Converting `id` from string to number
    const id = Number(params.id);

    // When the `id` provided with URL query doesn't match with the `id` in the body throws an error.
    if (id !== body.id) response.status(404).json({ message: "Inconsistency in data!" });

    // Checking whether contact exits or not.
    const exists = await isExists(id);

    // Returning 404 error when no contact available.
    if (!exists) response.status(404).json({ message: "Record do not exits!" });

    // Pulling original data object.
    const currentMember = await getMemberById(id);

    // Creating new object by combining `currentData` and `updatedData`. This will prevent from unwanted data wipeout or replacement.
    const updatedData: MemberSchemaType = merge(currentMember, body) as object;

    debug(updatedData);

    // Delete the contact from the database by ID.
    const contact = await updateMemberById(id, updatedData);

    // Respond with a success message.
    response.status(200).json({ timestamp: Date.now(), message: "Successfully updated!", contact });
});


/**
 * Delete a member by ID.
 *
 * @param request
 * @param response
 *
 * @since 1.0.0
 */
export const deleteMemberController = asyncHandler(async (request: Request, response: Response) => {
    // TODO:
    // - Delete method need to replace with soft delete.
    //
    // Author: Abu Taher Muhammad <abutahermuhammad>

    // Extract member ID from the request parameters.
    const id = Number(request.params.id);

    // Checking whether member exits or not.
    const exists = await isExists(id);

    // Returning 404 error when no contact available.
    if (!exists) response.status(404).json({ message: "Record not found!" });

    // Delete the contact from the database by ID.
    const member = await deleteMemberById(id);

    // Respond with a success message.
    response.status(200).json({ id: member.id, message: "Successfully deleted!", timestamp: Date.now() });
});
