/*
  Warnings:

  - You are about to drop the column `chairman` on the `Club` table. All the data in the column will be lost.
  - You are about to drop the column `founder` on the `Club` table. All the data in the column will be lost.
  - You are about to drop the column `person_id` on the `Club` table. All the data in the column will be lost.
  - You are about to drop the column `vice_chairman` on the `Club` table. All the data in the column will be lost.
  - Added the required column `chairman_id` to the `Club` table without a default value. This is not possible if the table is not empty.
  - Added the required column `founder_id` to the `Club` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vice_chairman_id` to the `Club` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Club" DROP CONSTRAINT "Club_person_id_fkey";

-- AlterTable
ALTER TABLE "Club" DROP COLUMN "chairman",
DROP COLUMN "founder",
DROP COLUMN "person_id",
DROP COLUMN "vice_chairman",
ADD COLUMN     "chairman_id" INTEGER NOT NULL,
ADD COLUMN     "founder_id" INTEGER NOT NULL,
ADD COLUMN     "vice_chairman_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Club" ADD CONSTRAINT "Club_founder_id_fkey" FOREIGN KEY ("founder_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Club" ADD CONSTRAINT "Club_chairman_id_fkey" FOREIGN KEY ("chairman_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Club" ADD CONSTRAINT "Club_vice_chairman_id_fkey" FOREIGN KEY ("vice_chairman_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
