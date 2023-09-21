"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const path_1 = __importDefault(require("path"));
const aws_configs_1 = require("../configs/aws.configs");
// Load configuration from environment variables
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || 'your-default-bucket-name';
/**
 * Configure multer to use AWS S3 storage for file uploads.
 * @type {multer.StorageEngine}
 */
const storage = (0, multer_s3_1.default)({
    s3: aws_configs_1.s3client,
    bucket: AWS_BUCKET_NAME,
    /**
    * Function to generate metadata for the uploaded file.
    * @param {Request} req - Express request object.
    * @param {Express.Multer.File} file - Uploaded file object.
    * @param {function} cb - Callback function to call when metadata is ready.
    */
    metadata: (req, file, cb) => {
        // Implement metadata as needed for your application
        const metadata = {
            fieldName: 'value',
            // Add more metadata fields here
        };
        cb(null, metadata);
    },
    /**
     * Function to generate a unique key for the uploaded file.
     * @param {Request} req - Express request object.
     * @param {Express.Multer.File} file - Uploaded file object.
     * @param {function} cb - Callback function to call when the key is generated.
     */
    key: function (req, file, cb) {
        // Generate a unique key for each uploaded file
        const uniqueKey = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueKey);
    }
});
/**
 * Function to filter uploaded files based on their extensions.
 * @param {Request} req - Express request object.
 * @param {Express.Multer.File} file - Uploaded file object.
 * @param {FileFilterCallback} cb - Callback function to call when filtering is done.
 */
const fileFilter = (req, file, cb) => {
    const allowedExtensions = ['.png', '.jpeg', '.jpg'];
    const ext = path_1.default.extname(file.originalname);
    if (allowedExtensions.includes(ext)) {
        return cb(null, true);
    }
    // Reject files with unsupported extensions
    return cb(new Error('File type not supported'));
};
/**
 * Limits for file uploads.
 * @type {Object}
 */
const limits = {
    fieldNameSize: 100,
    fieldSize: 1024 * 1024,
    fileSize: 2 * 1024 * 1024, // 2 MB file size limit
};
/**
 * Middleware for handling file uploads to AWS S3.
 * @type {multer.Instance}
 */
exports.upload = (0, multer_1.default)({
    // dest: 'uploads/',
    storage,
    fileFilter,
    limits,
    preservePath: true
});
