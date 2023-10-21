/*
  Warnings:

  - You are about to drop the column `bloodDisorders` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `clubId` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `infectiousDiseases` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `lastBloodDonation` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `medicalConditions` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `Member` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_clubId_fkey";

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_personId_fkey";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "bloodDisorders",
DROP COLUMN "clubId",
DROP COLUMN "infectiousDiseases",
DROP COLUMN "lastBloodDonation",
DROP COLUMN "medicalConditions",
DROP COLUMN "personId",
ADD COLUMN     "blood_disorders" TEXT,
ADD COLUMN     "club_id" INTEGER,
ADD COLUMN     "infectious_Diseases" TEXT,
ADD COLUMN     "last_blood_donation" TIMESTAMP(3),
ADD COLUMN     "medical_conditions" TEXT,
ADD COLUMN     "person_id" INTEGER,
ALTER COLUMN "version" SET DEFAULT 'v1';

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_club_id_fkey" FOREIGN KEY ("club_id") REFERENCES "Club"("id") ON DELETE SET NULL ON UPDATE CASCADE;
