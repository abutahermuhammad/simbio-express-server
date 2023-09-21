"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3client = exports.AWS_REGION = exports.AWS_BUCKET_NAME = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// Load configuration from environment variables
exports.AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || 'your-default-bucket-name';
exports.AWS_REGION = process.env.AWS_REGION || 'us-east-1';
/**
 * AWS S3 client for file storage with proper security measures.
 * @type {S3Client}
 */
exports.s3client = new client_s3_1.S3Client({
    region: exports.AWS_REGION
    // Add AWS credentials and other security configurations here
});
