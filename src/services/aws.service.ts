import { S3Client } from '@aws-sdk/client-s3';
import config from 'config';

// Load configuration from environment variables
export const AWS_BUCKET_NAME = config.get("aws.bucket");
export const AWS_REGION = config.get<string>("aws.region");

/**
 * AWS S3 client for file storage with proper security measures.
 * @type {S3Client}
 */
export const s3client = new S3Client({
  region: AWS_REGION
  // Add AWS credentials and other security configurations here
})
