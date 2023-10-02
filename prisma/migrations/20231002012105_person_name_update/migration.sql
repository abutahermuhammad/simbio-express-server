/*
  Warnings:

  - You are about to drop the `Persons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Persons" DROP CONSTRAINT "Persons_contactId_fkey";

-- DropTable
DROP TABLE "Persons";

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(255),
    "father_name" VARCHAR(100),
    "mother_name" VARCHAR(100),
    "profession" VARCHAR(52),
    "dob" TIMESTAMP(3),
    "gender" "Gender",
    "version" TEXT DEFAULT 'v1-alpha',

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
