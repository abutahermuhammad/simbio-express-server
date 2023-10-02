-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "clubId" INTEGER;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "clubId" INTEGER;

-- CreateTable
CREATE TABLE "Club" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "established_at" TIMESTAMP(6) NOT NULL,
    "founder" VARCHAR(8) NOT NULL,
    "chairman" VARCHAR(8) NOT NULL,
    "vice_chairman" VARCHAR(8) NOT NULL,
    "contact_id" INTEGER NOT NULL,
    "version" TEXT DEFAULT 'v1-alpha',
    "person_id" INTEGER,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Club" ADD CONSTRAINT "Club_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Club" ADD CONSTRAINT "Club_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE SET NULL ON UPDATE CASCADE;
