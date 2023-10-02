-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "allergies" TEXT,
ADD COLUMN     "bloodDisorders" TEXT,
ADD COLUMN     "complications" TEXT,
ADD COLUMN     "infectiousDiseases" TEXT,
ADD COLUMN     "lastBloodDonation" TIMESTAMP(3),
ADD COLUMN     "medicalConditions" TEXT,
ADD COLUMN     "medications" TEXT,
ADD COLUMN     "personId" INTEGER;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
