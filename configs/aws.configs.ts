import { S3Client } from '@aws-sdk/client-s3'
import { config } from 'dotenv'

config()

// Load configuration from environment variables
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || 'your-default-bucket-name'
export const AWS_REGION = process.env.AWS_REGION || 'us-east-1'

/**
 * AWS S3 client for file storage with proper security measures.
 * @type {S3Client}
 */
export const s3client = new S3Client({
  region: AWS_REGION
  // Add AWS credentials and other security configurations here
})
