/*
  Warnings:

  - You are about to drop the column `country` on the `Contact` table. All the data in the column will be lost.
  - Added the required column `countryAlpha_2` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "country",
ADD COLUMN     "countryAlpha_2" VARCHAR(2) NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "alpha_3" VARCHAR(3) NOT NULL,
    "alpha_2" VARCHAR(2) NOT NULL,
    "numeric" VARCHAR(3) NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("alpha_3")
);

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_countryAlpha_2_fkey" FOREIGN KEY ("countryAlpha_2") REFERENCES "Country"("alpha_3") ON DELETE RESTRICT ON UPDATE CASCADE;
