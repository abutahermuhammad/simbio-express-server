-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('FEMALE', 'MALE', 'TRANS');

-- CreateEnum
CREATE TYPE "FacilityType" AS ENUM ('HOSPITAL', 'CLINIC', 'OTHER');

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "address_line_0" VARCHAR(255) NOT NULL,
    "address_line_1" VARCHAR(255) NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    "city" VARCHAR(32) NOT NULL,
    "zip" VARCHAR(15) NOT NULL,
    "country" VARCHAR(32) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "phone_1" VARCHAR(15) NOT NULL,
    "fax" VARCHAR(15) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "email_1" VARCHAR(100),
    "website" VARCHAR(100),
    "social_media" JSONB,
    "version" TEXT DEFAULT 'v1-alpha',

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
