/*
  Warnings:

  - You are about to drop the column `avater` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `contactId` on the `Person` table. All the data in the column will be lost.
  - Added the required column `contact_id` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_contactId_fkey";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "avater",
DROP COLUMN "contactId",
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "contact_id" INTEGER NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "version" TEXT DEFAULT 'v1-alpha';

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "founded_at" TIMESTAMP(3) NOT NULL,
    "accreditation" VARCHAR(255),
    "bed_count" INTEGER,
    "emergency_room" BOOLEAN NOT NULL,
    "services" TEXT[],
    "specialties" TEXT[],
    "rating" DOUBLE PRECISION,
    "facility_type" "FacilityType" NOT NULL,
    "ownership" VARCHAR(255),
    "insurance_accepted" VARCHAR(255),
    "operating_hours" TEXT,
    "infrastructure" TEXT,
    "security_controls" TEXT,
    "version" TEXT DEFAULT 'v1-alpha',
    "location_id" INTEGER,
    "contact_id" INTEGER,
    "founder_id" INTEGER,
    "director_id" INTEGER,
    "chairman_id" INTEGER,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hospital" ADD CONSTRAINT "Hospital_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hospital" ADD CONSTRAINT "Hospital_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
