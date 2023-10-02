-- CreateEnum
CREATE TYPE "BloodGroup" AS ENUM ('A_POS', 'A_NEG', 'B_POS', 'B_NEG', 'AB_POS', 'AB_NEG', 'O_POS', 'O_NEG');

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "health_issue" VARCHAR(255) NOT NULL,
    "blood_group" "BloodGroup" NOT NULL DEFAULT 'A_POS',
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "donation_type" VARCHAR(30) NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospital_name" VARCHAR(255) NOT NULL,
    "hospital_address" VARCHAR(255) NOT NULL,
    "hospital_phone" VARCHAR(255) NOT NULL,
    "hospital_email" VARCHAR(255) NOT NULL,
    "version" TEXT DEFAULT 'v1-alpha',
    "memberId" INTEGER,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
