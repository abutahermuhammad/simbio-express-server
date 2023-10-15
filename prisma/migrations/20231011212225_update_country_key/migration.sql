/*
  Warnings:

  - You are about to drop the column `countryAlpha_2` on the `Contact` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[alpha_2]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `country_id` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_countryAlpha_2_fkey";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "countryAlpha_2",
ADD COLUMN     "country_id" VARCHAR(2) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Country_alpha_2_key" ON "Country"("alpha_2");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country"("alpha_2") ON DELETE RESTRICT ON UPDATE CASCADE;
