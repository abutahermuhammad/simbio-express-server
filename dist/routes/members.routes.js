"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const member_controllers_1 = require("../controllers/member.controllers");
// Creating an Express Router instance
const router = (0, express_1.Router)();
// Define routes for operations on a collection of members (/members)
router.route('/members')
    .get(member_controllers_1.getMembers) // Fetch a list of members
    .post(member_controllers_1.postMembers); // Create a new member
// Define routes for operations on an individual member (/members/:id)
router.route('/members/:id')
    .get(member_controllers_1.getMember) // Fetch a member by ID
    .patch(member_controllers_1.patchMember) // Update a member partially by ID
    .delete(member_controllers_1.deleteMember); // Delete a member by ID
// Export the router to make it available for use in other parts of the application
exports.default = router;
